import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import Categories from "../components/Categories";
import SortFilter from "../components/SortFilter";
import { products } from "../data/productsData";
import { FaStar } from "react-icons/fa";
import MarqueeSection from '../components/MarqueeSection';
import MarqueeFlavour from '../components/MarqueeFlavour';
import Premium from '../components/Premium';
import NewsLetter from '../components/NewsLetter';

const ProductList = () => {
  const navigate = useNavigate();

  /* -------------------- UI STATES -------------------- */
  const [sidebarOpen, setSidebarOpen] = useState(false);
 const [openSection, setOpenSection] = useState([
  "Sort",
  "Gender",
  "Inspired by Brands",
  "Scent Family",
  "Scent - Intensity Scale",
  "Price",
  "Connection",
  "Perfume Volume",
]);

  const [searchQuery, setSearchQuery] = useState("");


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
if (
      searchQuery &&
      !p.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
      return true;
    });

   if (sortBy === "price-high") result.sort((a, b) => b.price - a.price);
if (sortBy === "price-low") result.sort((a, b) => a.price - b.price);
if (sortBy === "best-selling")
  result = result.filter(p => p.off?.toLowerCase().includes("best"));
if (sortBy === "new")
  result = result.filter(p => p.off?.toLowerCase().includes("new"));
   else if (sortBy === "combo-sales") result = result.filter(p => p.off?.toLowerCase().includes("combo"));
    else if (sortBy === "holiday-sale") result = result.filter(p => p.off?.toLowerCase().includes("discount"));

    return result;
  }, [filters, sortBy, priceRange, searchQuery]);

  /* -------------------- ACCORDION TOGGLE -------------------- */
 const toggleAccordion = title => {
  setOpenSection(prev =>
    prev.includes(title)
      ? prev.filter(item => item !== title) // close
      : [...prev, title] // open
  );
};


  /* -------------------- FILTER BLOCK -------------------- */
  const FilterBlock = ({ title, options, filterKey }) => (
    <div className="bg-[#F6F7F2] rounded-[16px] p-3 space-y-2">

      <div
        className="flex justify-between cursor-pointer"
        onClick={() => toggleAccordion(title)}
      >
        <h3 className="font-medium">{title}</h3>

        <span className={`transition-transform ${openSection.includes(title) ? "rotate-180" : ""}`}>

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

      {openSection.includes(title) && (
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

      <Categories sortBy={sortBy} setSortBy={setSortBy} />


      <SortFilter
  sidebarOpen={sidebarOpen}
  setSidebarOpen={setSidebarOpen}
  filters={filters}
  toggleFilter={toggleFilter}
  searchQuery={searchQuery}
  setSearchQuery={setSearchQuery}
  clearAllFilters={clearAllFilters}
/>


      <div className="relative flex gap-[16px] 2xl:gap-[32px]">

        {/* -------------------- SIDEBAR -------------------- */}
        {/* -------------------- SIDEBAR -------------------- */}
{sidebarOpen && (
  <aside className="hidden lg:block sticky top-[120px] w-[420px] h-[calc(100vh-140px)] bg-[#F2EFD8] rounded-[16px] overflow-y-auto shrink-0">

    <div className="p-5 space-y-6 text-[#1D0B01]">

      {/* ================= SORT BY ================= */}
      <div className="space-y-2">
        <h3 className="text-[14px] font-bold uppercase">Sort by:</h3>

        <div
          className="bg-[#FBFBF6] rounded-[12px] p-4 cursor-pointer"
          onClick={() => toggleAccordion("Sort")}
        >
          <div className="flex justify-between items-center">
            <span className="font-medium">
              {[
                "Relevance (Default)",
                "Price - high to low",
                "Price - low to high",
                "Best - Selling",
                "New Arrivals",
              ].find(label =>
                label.toLowerCase().includes(sortBy.split("-")[0])
              ) || "Relevance (Default)"}
            </span>

            <span className={`transition-transform ${openSection.includes("Sort") ? "rotate-180" : ""}`}>

              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 10.833L10 5.83301L5 10.833" stroke="#282828" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>

          {openSection.includes("Sort") && (
            <div className="mt-4 space-y-3">
              {[
                { label: "Relevance (Default)", value: "relevance" },
                { label: "Price - high to low", value: "price-high" },
                { label: "Price - low to high", value: "price-low" },
                { label: "Best - Selling", value: "best-selling" },
                { label: "New Arrivals", value: "new" },
              ].map(item => (
                <label key={item.value} className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="sort"
                    checked={sortBy === item.value}
                    onChange={() => setSortBy(item.value)}
                    className="radio checked:bg-[#BA9948]"
                  />
                  <span>{item.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ================= FILTER TITLE ================= */}
      <h3 className="text-[14px] font-bold uppercase">Filter:</h3>

      {/* ACTIVE TAGS */}
      <div className="flex flex-wrap gap-2">
        {Object.entries(filters).map(([key, values]) =>
          values.map(v => (
            <span key={`${key}-${v}`} className="flex items-center gap-2 bg-white px-4 py-1 rounded-full text-sm">
              {v}
              <button onClick={() => toggleFilter(key, v)}>✕</button>
            </span>
          ))
        )}
        <button onClick={clearAllFilters} className="ml-auto underline text-sm">
          Clear all
        </button>
      </div>

      {/* ================= FILTER BLOCKS ================= */}
      <FilterBlock title="Gender" options={["Women", "Men", "Unisex"]} filterKey="gender" />
      <FilterBlock title="Inspired by Brands" options={["Burberry", "Byredo", "Chanel", "Chloe", "Clinique", "Creed", "Dior"]} filterKey="brand" />
      <FilterBlock title="Scent Family" options={["Flowery", "Fresh", "Gourmand", "Herbal", "Earthy", "Warm"]} filterKey="scentFamily" />
      <FilterBlock title="Scent - Intensity Scale" options={["Subtle", "Significant", "Statement"]} filterKey="intensity" />

      {/* ================= PRICE RANGE ================= */}
      <div className="bg-[#FBFBF6] rounded-[16px] p-4 space-y-4">
        <div className="flex justify-between cursor-pointer" onClick={() => toggleAccordion("Price")}>
          <h3 className="font-medium">Price</h3>
          <span className={`transition-transform ${openSection.includes("Price") ? "rotate-180" : ""}`}>

            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 10.833L10 5.83301L5 10.833" stroke="#282828" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>

        {openSection.includes("Price") && (
          <>
            <input
              type="range"
              min={MIN_PRICE}
              max={MAX_PRICE}
              value={priceRange[1]}
              onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])}
              className="w-full h-[3px] rounded-full appearance-none"
              style={{ background: "#DBAB35" }}
            />

            <div className="flex justify-between text-sm font-medium">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </>
        )}
      </div>

      <FilterBlock title="Connection" options={["Standard and Balanced", "Rich and Extreme"]} filterKey="connection" />
      <FilterBlock title="Perfume Volume" options={["15ML", "30ML", "60ML"]} filterKey="volume" />

    </div>
  </aside>
)}



{/* -------------------- MOBILE SIDEBAR -------------------- */}
{sidebarOpen && (
  <>
    {/* Overlay */}
    <div
      className="lg:hidden fixed inset-0 bg-black/40 z-40"
      onClick={() => setSidebarOpen(false)}
    />

    {/* Sliding sidebar */}
    <aside
      className={`lg:hidden fixed top-0 left-0 z-50 h-full w-ful bg-[#EDE8D0] transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="p-6 space-y-6 overflow-y-auto h-full">
        {/* Close button */}
        <div className="flex justify-end">
          <button onClick={() => setSidebarOpen(false)}>✕</button>
        </div>
<div className="space-y-2">
        <h3 className="text-[14px] font-bold uppercase">Sort by:</h3>

        <div
          className="bg-[#FBFBF6] rounded-[12px] p-4 cursor-pointer"
          onClick={() => toggleAccordion("Sort")}
        >
          <div className="flex justify-between items-center">
            <span className="font-medium">
              {[
                "Relevance (Default)",
                "Price - high to low",
                "Price - low to high",
                "Best - Selling",
                "New Arrivals",
              ].find(label =>
                label.toLowerCase().includes(sortBy.split("-")[0])
              ) || "Relevance (Default)"}
            </span>

            <span className={`transition-transform ${openSection.includes("Sort") ? "rotate-180" : ""}`}>

              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 10.833L10 5.83301L5 10.833" stroke="#282828" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
          

          {openSection.includes("Sort") && (
  <div className="mt-4 space-y-3">

              {[
                { label: "Relevance (Default)", value: "relevance" },
                { label: "Price - high to low", value: "price-high" },
                { label: "Price - low to high", value: "price-low" },
                { label: "Best - Selling", value: "best-selling" },
                { label: "New Arrivals", value: "new" },
              ].map(item => (
                <label key={item.value} className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="sort"
                    checked={sortBy === item.value}
                    onChange={() => setSortBy(item.value)}
                    className="radio checked:bg-[#BA9948]"
                  />
                  <span>{item.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* ================= FILTER TITLE ================= */}
      <h3 className="text-[14px] font-bold uppercase">Filter:</h3>

      {/* ACTIVE TAGS */}
      <div className="flex flex-wrap gap-2">
        {Object.entries(filters).map(([key, values]) =>
          values.map(v => (
            <span key={`${key}-${v}`} className="flex items-center gap-2 bg-white px-4 py-1 rounded-full text-sm">
              {v}
              <button onClick={() => toggleFilter(key, v)}>✕</button>
            </span>
          ))
        )}
        <button onClick={clearAllFilters} className="ml-auto underline text-sm">
          Clear all
        </button>
      </div>
        {/* Filter blocks (reuse your FilterBlock component) */}
        <FilterBlock title="Gender" options={["Women", "Men", "Unisex"]} filterKey="gender" />
        <FilterBlock title="Inspired by Brands" options={["Burberry","Byredo","Chanel","Chloe","Clinique","Creed","Dior"]} filterKey="brand" />
        <FilterBlock title="Scent Family" options={["Flowery","Fresh","Gourmand","Herbal","Earthy","Warm"]} filterKey="scentFamily" />
        <FilterBlock title="Scent - Intensity Scale" options={["Subtle","Significant","Statement"]} filterKey="intensity" />

        {/* ================= PRICE RANGE ================= */}
      <div className="bg-[#FBFBF6] rounded-[16px] p-4 space-y-4">
        <div className="flex justify-between cursor-pointer" onClick={() => toggleAccordion("Price")}>
          <h3 className="font-medium">Price</h3>
          <span className={`transition-transform ${openSection.includes("Price") ? "rotate-180" : ""}`}>

            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 10.833L10 5.83301L5 10.833" stroke="#282828" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>

        {openSection.includes("Price") && (

          <>
            <input
              type="range"
              min={MIN_PRICE}
              max={MAX_PRICE}
              value={priceRange[1]}
              onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])}
              className="w-full h-[3px] rounded-full appearance-none"
              style={{ background: "#DBAB35" }}
            />

            <div className="flex justify-between text-sm font-medium">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </>
        )}
      </div>

      <FilterBlock title="Connection" options={["Standard and Balanced", "Rich and Extreme"]} filterKey="connection" />
      <FilterBlock title="Perfume Volume" options={["15ML", "30ML", "60ML"]} filterKey="volume" />
      </div>
    </aside>
  </>
)}

        {/* CARDS (SCROLLS INDEPENDENTLY) */}
        <section className="flex-1">
         <div
  className={`
    grid gap-[16px] 2xl:gap-[32px]
    grid-cols-1
    ${sidebarOpen ? "lg:grid-cols-1 2xl:grid-cols-2" : "lg:grid-cols-2 2xl:grid-cols-3"}
  `}
>

            {filteredProducts.map((item, i) => (
              <div key={i}>
                <div
                 className="relative rounded-[24px] lg:rounded-[32px] 2xl:rounded-[48px]
    h-[384px] lg:h-[700px]
    cursor-pointer overflow-hidden"
  style={{
    background:
      "radial-gradient(72.36% 72.36% at 50% 50%, #FBF9F7 0%, #EDE8E0 100%)",
  }}
                  onClick={() => navigate(`/productList/${item.slug}`)}
                >
                  {item.off && (
                    <div className="lg:mt-[40px] lg:ml-[40px] ml-[20px] mt-[20px]">
                      <button className="bg-[#FFFFE3] px-[10px] 2xl:px-[16px] h-[25px] 2xl:h-[35px] rounded-full font-normal text-[12px] lg:text-[14px]">
                        {item.off}
                      </button>
                    </div>
                  )}

                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="absolute inset-0 mx-auto h-[236px] lg:h-[501px] object-cover"
                  />

                  <div className="absolute bottom-0 left-0 w-full z-20 p-[20px] lg:p-[40px]">
                  <div className="flex items-center gap-[2px] 2xl:gap-[8px] text-[#FF9100]">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="h-[12px] lg:h-[15px]" />
                    ))}
                    <span className="text-[#0D0C09] text-[12px] 2xl:text-[14px] font-normal">
                      1239
                    </span>
                  </div>

                  <h3 className="text-[20px] md:text-[35px] font-normal text-[#571313]">
                    {item.title}
                  </h3>

                  <p className="text-[12px] 2xl:text-[18px] text-[#0D0C09] mb-[12px] md:mb-[26px]">
                    Sanrayn Original
                  </p>

                  <div className="flex items-center justify-between gap-3">
                    <button className="bg-white px-[24px] py-[10px] rounded-full font-semibold hover:bg-[#DBAB35] cursor-pointer w-[120px] h-[32px] lg:h-[45px] lg:w-[167px] text-[14px] 2xl:text-[16px] items-center justify-center flex">
                      Add to Cart
                    </button>

                    <div className="flex gap-[12px] md:gap-[20px]">
                      <div>
                        <button className="text-[#FC2525] text-[16px] bg-[#FFFFFF80]/50 py-[10px] px-[20px] rounded-[100px] line-through hidden lg:block">
                          ${item.oldPrice}
                        </button>
                      </div>
                      <div className="relative 2xl:w-[105px] 2xl:h-[45px] text-[14px] 2xl:text-[16px] h-[33px] w-[68px] ">
                        <div className="absolute -top-[2px] 2xl:-top-[10px] left-1/2 -translate-x-1/2 bg-[#1D0B01] text-[6px] text-white 2xl:text-[8px] font-bold z-10 2xl:h-[14px] h-[8px] w-[32px] 2xl:w-[44px] flex items-center justify-center">
                          -{Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100)}% Off
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 105 45" fill="none">
                          <path
                            d="M95 11V0H10V11C4.47715 11 0 15.4772 0 21V24C0 29.5228 4.47715 34 10 34V45H95V34C100.523 34 105 29.5228 105 24V21C105 15.4772 100.523 11 95 11Z"
                            fill="#BA9948"
                          />
                          <text
                            x="52.5"
                            y="30"
                            textAnchor="middle"
                            
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


      <section className="pt-[16px] 2xl:pt-[32px]"><Premium></Premium></section>
      <NewsLetter></NewsLetter>
      <MarqueeFlavour></MarqueeFlavour>
      <MarqueeSection></MarqueeSection>
    </div>
  );
};

export default ProductList;
