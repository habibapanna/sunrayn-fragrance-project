import { useState, useMemo, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Categories from "../components/Categories";
import SortFilter from "../components/SortFilter";
import { products } from "../data/productsData";
import { FaCheck, FaStar } from "react-icons/fa";
import MarqueeSection from '../components/MarqueeSection';
import MarqueeFlavour from '../components/MarqueeFlavour';
import Premium from '../components/Premium';
import NewsLetter from '../components/NewsLetter';
import { motion, AnimatePresence } from "framer-motion";

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
  const { cartOpen, setCartOpen } = useOutletContext();
      const [showCartToast, setShowCartToast] = useState(false);
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
/*---------sidebar animation--------*/ 
const mobileSidebarVariants = {
  hidden: {
    x: "-100%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1], // luxury easing
    },
  },
  exit: {
    x: "-100%",
    opacity: 0,
    transition: {
      duration: 0.35,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25 },
  },
};

const isMobile = window.innerWidth < 768;

const handleAddToCart = () => {
  // add item logic here

  if (window.innerWidth < 768) {
    setShowCartToast(true); // mobile → show popup
  } else {
    setCartOpen(true); // desktop → open overlay
  }
};

useEffect(() => {
  if (!showCartToast) return;
  const t = setTimeout(() => setShowCartToast(false), 4000);
  return () => clearTimeout(t);
}, [showCartToast]);

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
 <AnimatePresence>
{sidebarOpen && (
  <aside className="hidden md:block sticky top-[120px] md:w-[360px] 2xl:w-[420px] h-[calc(100vh-140px)] bg-[#F6F7F2] rounded-[16px] overflow-y-auto shrink-0">

    <div className="p-5 space-y-6 text-[#1D0B01]">

      {/* ================= SORT BY ================= */}
      <div className="space-y-2">
        <h3 className="text-[14px] font-bold uppercase">Sort by:</h3>

        <div
          className="bg-white rounded-[12px] p-4 cursor-pointer"
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
      <FilterBlock title="Scent Family" options={["Flowery", "Fresh", "Gourmand", "Herbal", "Earthy", "Warm"]} filterKey="scentFamily" />
      <FilterBlock title="Perfume Volume" options={["15ML", "30ML", "60ML"]} filterKey="volume" />
       <FilterBlock title="Connection" options={["Standard and Balanced", "Rich and Extreme"]} filterKey="connection" />
      <FilterBlock title="Scent - Intensity Scale" options={["Subtle", "Significant", "Statement"]} filterKey="intensity" />

      {/* ================= PRICE RANGE ================= */}
      <div className="bg-white rounded-[16px] p-4 space-y-4 mx-[16px]">
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

    </div>
  </aside>
)}
</AnimatePresence>
{/* -------------------- MOBILE SIDEBAR -------------------- */}
<AnimatePresence>
{sidebarOpen && (
  <>
    {/* Overlay */}
      <motion.div
        className="md:hidden fixed inset-0 bg-black/40 z-50"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={() => setSidebarOpen(false)}
      />

   {/* Sliding sidebar */}
      <motion.aside
        className="md:hidden fixed top-0 left-0 z-50 h-full w-full bg-[#F6F7F2]"
        variants={mobileSidebarVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
      <div className="p-6 space-y-6 overflow-y-auto h-full">
        {/* Close button */}
        <div className="flex justify-end ">
          <button className="cursor-pointer" onClick={() => setSidebarOpen(false)}>✕</button>
        </div>
<div className="space-y-2">
        <h3 className="text-[14px] font-bold uppercase">Sort by:</h3>

        <div
          className="bg-white rounded-[12px] p-4 cursor-pointer"
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
        <FilterBlock title="Connection" options={["Standard and Balanced", "Rich and Extreme"]} filterKey="connection" />
      <FilterBlock title="Perfume Volume" options={["15ML", "30ML", "60ML"]} filterKey="volume" />
        <FilterBlock title="Scent Family" options={["Flowery","Fresh","Gourmand","Herbal","Earthy","Warm"]} filterKey="scentFamily" />
        <FilterBlock title="Scent - Intensity Scale" options={["Subtle","Significant","Statement"]} filterKey="intensity" />

        {/* ================= PRICE RANGE ================= */}
      <div className="bg-white mx-[16px] rounded-[16px] p-4 space-y-4">
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
      </div>
    </motion.aside>
  </>
)}
</AnimatePresence>
        {/* CARDS */}
        <section className="flex-1">
<motion.div
  layout
  className={`
    grid gap-[16px] 2xl:gap-[32px]
    grid-cols-1
    ${sidebarOpen
      ? "md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3"
      : "md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"}
  `}
>

            <AnimatePresence mode="popLayout">
  {filteredProducts.map((item) => (

<motion.div
  key={item.slug}
  layout
  initial={{ opacity: 0, scale: 0.96 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.9 }}
  transition={{
    duration: 0.99,
    ease: [0.22, 1, 0.36, 1], // luxury easing
  }}
  onClick={() => navigate(`/productList/${item.slug}`)}
  className="group bg-[#F6F7F2] rounded-[16px]
  overflow-hidden cursor-pointer
  flex flex-row md:flex-col"
>


{/* IMAGE SECTION */}
<div className="relative overflow-hidden w-[150px] md:w-full flex-shrink-0">

 {/* Tags */}
  <div className="absolute top-[8px] left-[8px] md:top-[16px] md:left-[16px] z-10">
    <span className="bg-white/90 text-[8px] md:text-[10px] 2xl:text-[12px] px-[8px] py-[2px] rounded-full border text-[#A0174A] border-[#A0174A]">
      {item.gender}
    </span>
  </div>
  <div className="absolute hidden md:block top-[16px] right-[16px] z-10">
    <span className="bg-white/90 text-[8px] md:text-[10px] 2xl:text-[12px] px-[8px] py-[2px] rounded-full uppercase text-[#A0174A]">
      {item.off}
    </span>
  </div>
  <div className="absolute md:hidden bottom-[8px] left-[8px] z-10">
    <span className="bg-white/90 text-[8px] md:text-[10px] 2xl:text-[12px]  px-[8px] py-[2px] rounded-full uppercase text-[#A0174A]">
      {item.off}
    </span>
  </div>

  <img
    src={item.images[0]}
    alt={item.title}
    className="w-full h-full md:h-[360px] object-cover group-hover:scale-105 duration-1000"
  />
  {/* DESKTOP HOVER ADD TO CART */}
  <div className="hidden md:block absolute bottom-0 left-0 w-full
    translate-y-full opacity-0
    group-hover:translate-y-0 group-hover:opacity-100
    transition-all duration-300 ease-out
    p-3 bg-gradient-to-t from-black/60 to-transparent"
  >
    <button
      onClick={(e) => {
    e.stopPropagation(); 
    handleAddToCart(item); 
  }}
      className="w-full bg-white/80 text-black cursor-pointer
      rounded-full py-2 font-medium
      hover:bg-[#A0174A] hover:text-white
      border border-[#A0174A] hover:border-none transition-all ease-in-out duration-500 md:text-[15px] 2xl:text-[18px]"
    >
      Add to cart
    </button>
  </div>
</div>

  {/* CONTENT SECTION */}
 <div className="flex-1 p-[12px] md:p-[16px] flex flex-col justify-between">

    {/* Rating */}
<div className="flex items-center gap-[8px]">   
   <div className="flex items-center gap-[4px] text-[#BA9948]">
      {[...Array(5)].map((_, index) => (
        <FaStar key={index} className="text-[12px] md:text-[14px] 2xl:text-[16px]" />
      ))}
    </div>
     <span className="text-[#1D0B01] text-[12px] md:text-[14px] 2xl:text-[16px]">1239</span>
    </div>

    {/* Title + Price Row */}
    <div className="flex justify-between items-center mt-[12px] md:[4px]">
      <h3 className="group-hover:text-[#A0174A] duration-500 text-[12px] transition-colors md:text-[16px] 2xl:text-[20px] font-semibold uppercase">
        {item.title}
      </h3>
      <div className="flex gap-[16px]">
        <p className="text-[#A0174A]/50 line-through text-[13px] md:text-[16px] 2xl:text-[20px]">
          ${item.oldPrice}
        </p>
        <p className="group-hover:text-[#A0174A] font-semibold text-[13px] md:text-[16px] 2xl:text-[20px] transition-colors duration-500">
          ${item.price}
        </p>
      </div>
    </div>

   <div className="">
     <p className="text-[12px] md:text-[15px] 2xl:text-[18px] mt-[12px] md:[4px] text-[#0D0C09]">
      Alluring cherry and almond fragrance that balances sweetness and depth.
    </p>
   </div>
    <div className="flex justify-between">
      <p className="text-[12px] md:text-[15px] 2xl:text-[18px] mt-[12px] md:[4px] text-[#0D0C09]">Crafted in <span  className="font-semibold group-hover:text-[#A0174A] transition-colors duration-500">USA</span></p>
    <p className="text-[12px] md:text-[15px] 2xl:text-[18px] mt-[12px] md:[4px] text-[#0D0C09]">Scent Family: <span  className="font-semibold group-hover:text-[#A0174A] transition-colors duration-500">{item.scentFamily}</span></p>
    </div>
    {/* MOBILE ADD TO CART */}
<div className="flex justify-end mt-[12px] md:hidden">
  <button
    onClick={(e) => {
    e.stopPropagation(); 
    handleAddToCart(item);
  }}
    className="px-[24px] py-[10px] text-[12px]
    rounded-full border border-[#571313]
    text-[#571313] hover:bg-[#571313]
    hover:text-white transition w-full cursor-pointer duration-500"
  >
    Add to cart
  </button>
</div>

  </div>
</motion.div>

            ))}
            </AnimatePresence>

          </motion.div>
        </section>
          {showCartToast && (
                <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] z-50 md:hidden">
                  <div className="flex items-center justify-between bg-[#A0174A] text-white px-4 py-3 rounded-full shadow-lg">
              
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <span className="bg-white rounded-full w-6 h-6 flex items-center justify-center ">
                       <FaCheck className="text-black" />
                      </span>
                      Item added to your cart
                    </div>
              
                    <button
                      onClick={() => {
                        setShowCartToast(false);
                        setCartOpen(true);
                      }}
                      className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium"
                    >
                      VIEW CART
                    </button>
              
                  </div>
                </div>
              )}

      </div>
      <section className="pt-[16px] 2xl:pt-[32px]"><Premium></Premium></section>
      <section className="mt-[16px]"><NewsLetter></NewsLetter></section>
      <MarqueeFlavour></MarqueeFlavour>
      <MarqueeSection></MarqueeSection>
    </div>
  );
};

export default ProductList;
