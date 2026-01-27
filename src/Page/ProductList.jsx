import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import Categories from "../components/Categories";
import SortFilter from "../components/SortFilter";
import { products } from "../data/productsData";
import { FaStar } from "react-icons/fa";

const ProductList = () => {
  const navigate = useNavigate();

  /* -------------------- UI STATES -------------------- */
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  /* -------------------- SORT STATE -------------------- */
  const [sortBy, setSortBy] = useState("relevance");

  /* -------------------- PRICE RANGE -------------------- */
  const prices = products.map(p => p.price);
  const MIN_PRICE = Math.min(...prices);
  const MAX_PRICE = Math.max(...prices);
  const [priceRange, setPriceRange] = useState([MIN_PRICE, MAX_PRICE]);

  /* -------------------- FILTER STATES -------------------- */
  const [filters, setFilters] = useState({
    gender: [],
    brand: [],
    scentFamily: [],
    intensity: [],
    connection: [],
    volume: [],
  });

  /* -------------------- FILTER HANDLER -------------------- */
  const toggleFilter = (type, value) => {
    setFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(v => v !== value)
        : [...prev[type], value],
    }));
  };

  /* -------------------- CLEAR ALL -------------------- */
  const clearAllFilters = () => {
    setFilters({
      gender: [],
      brand: [],
      scentFamily: [],
      intensity: [],
      connection: [],
      volume: [],
    });
    setSortBy("relevance");
    setPriceRange([MIN_PRICE, MAX_PRICE]);
  };

  /* -------------------- FILTER + SORT LOGIC -------------------- */
  const filteredProducts = useMemo(() => {
    let result = products.filter(p => {
      if (filters.gender.length && !filters.gender.map(g => g.toUpperCase()).includes(p.gender)) return false;
      if (filters.brand.length && !filters.brand.includes(p.brand)) return false;
      if (filters.scentFamily.length && !filters.scentFamily.some(f => p.scentFamily.includes(f))) return false;
      if (filters.intensity.length && !filters.intensity.includes(p.intensity)) return false;
      if (filters.connection.length && !filters.connection.includes(p.connection)) return false;
      if (filters.volume.length && !filters.volume.some(v => p.volume.includes(v))) return false;
      if (p.price < priceRange[0] || p.price > priceRange[1]) return false;

      return true;
    });

    if (sortBy === "price-high") result.sort((a, b) => b.price - a.price);
    if (sortBy === "price-low") result.sort((a, b) => a.price - b.price);

    return result;
  }, [filters, sortBy, priceRange]);

  /* -------------------- ACCORDION TOGGLE -------------------- */
  const toggleAccordion = title => {
    setOpenSection(prev => (prev === title ? null : title));
  };

  /* -------------------- FILTER BLOCK -------------------- */
  const FilterBlock = ({ title, options, filterKey }) => (
    <div className="bg-[#F6F7F2] rounded-[16px] p-3 space-y-2">

      <div
        className="flex justify-between cursor-pointer"
        onClick={() => toggleAccordion(title)}
      >
        <h3 className="font-medium">{title}</h3>

        <span
          className={`transition-transform ${
            openSection === title ? "rotate-180" : ""
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M15 10.833L10 5.83301L5 10.833"
              stroke="#282828"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      {openSection === title && (
        <div className="bg-white rounded-[12px] p-4 space-y-3">
          {options.map(opt => (
            <label key={opt} className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={filters[filterKey].includes(opt)}
                onChange={() => toggleFilter(filterKey, opt)}
                className="checkbox checkbox-neutral checked:bg-[#BA9948]"
              />
              <span>{opt}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="px-[16px] 2xl:px-[32px] pb-[16px] 2xl:pb-[32px]">

      <Categories />

      <SortFilter
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="relative flex gap-[16px] 2xl:gap-[32px]">

        {/* -------------------- SIDEBAR -------------------- */}
        {sidebarOpen && (
          <aside className="hidden lg:block sticky top-[120px] w-[550px] h-[calc(100vh-140px)] bg-[#EDE8D0] rounded-[16px] overflow-y-auto shrink-0">

            <div className="p-6 space-y-6 text-[#1D0B01]">

              {/* SORT */}
              <div className="space-y-3">
                <h3 className="text-[16px] font-bold uppercase">Sort by</h3>

                {[
                  { label: "Relevance (Default)", value: "relevance" },
                  { label: "Price - high to low", value: "price-high" },
                  { label: "Price - low to high", value: "price-low" },
                ].map(item => (
                  <label key={item.value} className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="sort"
                      checked={sortBy === item.value}
                      onChange={() => setSortBy(item.value)}
                      className="radio radio-neutral checked:bg-[#BA9948]"
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>

              {/* ACTIVE TAGS */}
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  {Object.entries(filters).map(([key, values]) =>
                    values.map(v => (
                      <span
                        key={`${key}-${v}`}
                        className="flex items-center gap-2 bg-white px-3 py-1 rounded-full"
                      >
                        {v}
                        <button onClick={() => toggleFilter(key, v)} className="font-bold">✕</button>
                      </span>
                    ))
                  )}
                </div>

                <button onClick={clearAllFilters} className="text-[14px] underline">
                  Clear all
                </button>
              </div>

              <FilterBlock title="Gender" options={["MEN", "WOMEN", "UNISEX"]} filterKey="gender" />
              <FilterBlock title="Inspired by Brands" options={["Burberry", "Byredo", "Chanel", "Chloe", "Dior", "Creed"]} filterKey="brand" />
              <FilterBlock title="Scent Family" options={["Flowery", "Fresh", "Gourmand", "Herbal", "Warm", "Earthy"]} filterKey="scentFamily" />
              <FilterBlock title="Scent - Intensity Scale" options={["Subtle", "Significant", "Statement"]} filterKey="intensity" />

              {/* PRICE RANGE */}
              <div className="bg-[#F6F7F2] rounded-[16px] p-3 space-y-2">
                <div className="flex justify-between cursor-pointer" onClick={() => toggleAccordion("Price")}>
                  <h3 className="font-medium">Price</h3>
                  <span className={`transition-transform ${openSection === "Price" ? "rotate-180" : ""}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M15 10.833L10 5.83301L5 10.833" stroke="#282828" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>

                {openSection === "Price" && (
                  <div className="bg-white rounded-[12px] p-4 space-y-4">
                    <input
                      type="range"
                      min={MIN_PRICE}
                      max={MAX_PRICE}
                      value={priceRange[1]}
                      onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-full appearance-none h-[3px] rounded-full"
                      style={{ background: "#DBAB35" }}
                    />
                    <div className="flex justify-between text-[14px] font-medium">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                )}
              </div>

              <FilterBlock title="Connection" options={["Standard and Balanced", "Rich and Extreme"]} filterKey="connection" />
              <FilterBlock title="Perfume Volume" options={["15ML", "30ML", "60ML"]} filterKey="volume" />

            </div>
          </aside>
        )}

        {/* CARDS (SCROLLS INDEPENDENTLY) */}
        <section className="flex-1">
          <div
            className={`
              grid gap-[16px] 2xl:gap-[32px]
              grid-cols-1
              lg:${sidebarOpen ? "grid-cols-2" : "grid-cols-3"}
            `}
          >
            {filteredProducts.map((item, i) => (
              <div key={i}>
                <div
                  className="relative rounded-[24px] md:rounded-[48px]
                  bg-[#EDE8E0] h-[344px] lg:h-[700px]
                  cursor-pointer overflow-hidden"
                  onClick={() => navigate(`/productList/${item.slug}`)}
                >
                  {item.off && (
                    <div className="mt-[40px] ml-[40px]">
                      <button className="bg-[#FFFFE3] px-[16px] h-[35px] rounded-full font-semibold">
                        {item.off}
                      </button>
                    </div>
                  )}

                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="absolute inset-0 mx-auto h-[220px] lg:h-[501px] object-cover"
                  />

                  <div className="absolute bottom-0 left-0 w-full z-20 p-[16px] md:p-[40px]">
                  <div className="flex items-center gap-2 text-[#FF9100]">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="h-[12px] md:h-[15px]" />
                    ))}
                    <span className="text-[#0D0C09] text-[12px] md:text-[14px]">
                      1239
                    </span>
                  </div>

                  <h3 className="text-[20px] md:text-[35px] font-semibold text-[#571313]">
                    {item.title}
                  </h3>

                  <p className="text-[12px] md:text-[18px] text-[#0D0C09] mb-[12px] md:mb-[26px]">
                    Sanrayn Original
                  </p>

                  <div className="flex items-center justify-between gap-3">
                    <button className="bg-white px-[16px] md:px-[24px] py-[6px] md:py-[10px] rounded-full font-semibold hover:bg-[#DBAB35] cursor-pointer 2xl:h-[45px] 2xl:w-[167px]">
                      Add to Cart
                    </button>

                    <div className="flex gap-[12px] md:gap-[20px]">
                      <div>
                        <button className="text-[#FC2525] text-[16px] bg-[#FFFFFF80]/50 py-[10px] px-[20px] rounded-[100px] line-through">
                          ${item.oldPrice}
                        </button>
                      </div>
                      <div className="relative w-[105px] h-[45px]">
                        <div className="absolute -top-[10px] left-1/2 -translate-x-1/2 bg-[#1D0B01] text-white text-[8px] font-bold z-10 h-[14px] w-[44px] flex items-center justify-center">
                          -{Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100)}% Off
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" width="105" height="45" viewBox="0 0 105 45" fill="none">
                          <path
                            d="M95 11V0H10V11C4.47715 11 0 15.4772 0 21V24C0 29.5228 4.47715 34 10 34V45H95V34C100.523 34 105 29.5228 105 24V21C105 15.4772 100.523 11 95 11Z"
                            fill="#BA9948"
                          />
                          <text
                            x="52.5"
                            y="30"
                            textAnchor="middle"
                            fontSize="16"
                            fontWeight="700"
                            fill="#FFFFFF"
                            fontFamily="sans-serif"
                          >
                            ${item.price.toFixed(2)}
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default ProductList;
