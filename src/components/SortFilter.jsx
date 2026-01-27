import { useState, useRef, useEffect } from "react";

const scentOptions = [
  { label: "Flowery", icon: "🌸" },
  { label: "Fresh", icon: "🌿" },
  { label: "Gourmand", icon: "🍬" },
  { label: "Herbal", icon: "🌱" },
  { label: "Earthy", icon: "🌾" },
  { label: "Warm", icon: "🔥" },
];

const genderOptions = ["Men", "Women", "Unisex"];
const brandOptions = ["Burberry", "Byredo", "Chanel", "Chloe", "Clinique", "Creed", "Dior"];
const collectionOptions = ["Flowery", "Fresh", "Gourmand", "Herbal", "Earthy", "Warm"];

const SortFilter = ({  sidebarOpen,
  setSidebarOpen,
  filters,
  toggleFilter,
  searchQuery,
  setSearchQuery,
clearAllFilters, }) => {
  const [openScent, setOpenScent] = useState(false);
  const [openGender, setOpenGender] = useState(false);
  const [openBrands, setOpenBrands] = useState(false);

  const scentRef = useRef(null);
  const genderRef = useRef(null);
  const brandRef = useRef(null);
  const collectionRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (scentRef.current && !scentRef.current.contains(e.target)) setOpenScent(false);
      if (genderRef.current && !genderRef.current.contains(e.target)) setOpenGender(false);
      if (brandRef.current && !brandRef.current.contains(e.target)) setOpenBrands(false);
      if (collectionRef.current && !collectionRef.current.contains(e.target)) setOpenCollections(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSelection = (item, selectedArray, setSelectedArray) => {
    if (selectedArray.includes(item)) {
      setSelectedArray(selectedArray.filter((v) => v !== item));
    } else {
      setSelectedArray([...selectedArray, item]);
    }
  };

const renderDropdown = (items, filterKey) => (
  <ul className="space-y-[8px]">
    {items.map((item) => {
      const active = filters?.[filterKey]?.includes(item);

      return (
        <li
          key={item}
          onClick={() => toggleFilter(filterKey, item)}
          className={`flex items-center gap-[10px] py-[6px] px-[8px] rounded-[10px] cursor-pointer ${
            active ? "bg-[#F6F7F2]" : ""
          }`}
        >
          <div
            className={`w-[18px] h-[18px] rounded-[7px] border flex items-center justify-center ${
              active
                ? "bg-[#C8A44B] border-[#C8A44B]"
                : "border-[#3A3F42]"
            }`}
          >
            {active && (
              <svg width="12" height="12" viewBox="0 0 12 12">
                <path
                  d="M2.5 6.5L5 9L9.5 3.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
          <span className="text-[14px]">{item}</span>
        </li>
      );
    })}
  </ul>
);


const getFilterCount = (key) => filters?.[key]?.length || 0;
const showClearAll =
  Object.values(filters || {}).some(arr => arr?.length > 0);


  return (
    <div>
      <section className="w-full pb-[16px] 2xl:pb-[32px] px-[16px] 2xl:px-[32px]">
        <div className="flex flex-wrap items-center gap-[12px]">

          {/* Sort & Filter Button */}
          <button
            onClick={() => setSidebarOpen((prev) => !prev)}
            className="flex items-center gap-[8px] bg-[#F6F7F2] rounded-full px-[18px] py-[12px] text-[#1D0B01] font-medium text-[16px] cursor-pointer"
          >
            SORT & FILTER
          </button>

          {/* Search Bar */}
          <div className="flex-1 min-w-[260px] relative">
            <input
  type="text"
  placeholder="Search scents, brands, ingredients"
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  className="w-full bg-[#F6F7F2] rounded-full py-[12px] pl-[16px] pr-[40px]"
/>

            <span
              className="absolute right-[12px] top-1/2 -translate-y-1/2 cursor-pointer"
            >
              🔍
            </span>
          </div>



          {/* Gender */}
          <div className="relative" ref={genderRef}>
            <button
              onClick={() => setOpenGender(!openGender)}
              className="flex items-center gap-[8px] bg-[#F6F7F2] rounded-full px-[18px] py-[12px] text-[16px] cursor-pointer"
            >
              Gender ▼
            </button>
{openGender && (
  <div className="absolute top-[56px] left-0 w-[180px] bg-white rounded-[16px] shadow-lg p-[12px] z-40">
    {renderDropdown(genderOptions, "gender")}

    {showClearAll && (
   <button
  onClick={clearAllFilters}
  className="w-full text-left text-[13px] underline text-[#1D0B01] mt-[10px]"
>
  Clear all
  {filters.gender.length > 0 && (
    <span className="ml-[4px]">({filters.gender.length})</span>
  )}
</button>


    )}
  </div>
)}


          </div>

          {/* Scent Family */}
          <div className="relative" ref={scentRef}>
            <button
              onClick={() => setOpenScent(!openScent)}
              className="flex items-center gap-[8px] bg-[#F6F7F2] rounded-full px-[18px] py-[12px] text-[16px] cursor-pointer"
            >
              Scent family ▼
            </button>
{openScent && (
  <div className="absolute top-[56px] left-0 w-[180px] bg-white rounded-[16px] shadow-lg p-[12px] z-20">
    {renderDropdown(scentOptions.map(s => s.label), "scentFamily")}

    {showClearAll && (
<button
  onClick={clearAllFilters}
  className="w-full text-left text-[13px] underline text-[#1D0B01] mt-[10px]"
>
  Clear all
  {filters.scentFamily.length > 0 && (
    <span className="ml-[4px]">({filters.scentFamily.length})</span>
  )}
</button>



    )}
  </div>
)}


          </div>

          {/* Inspired-by Brands */}
          <div className="relative" ref={brandRef}>
            <button
              onClick={() => setOpenBrands(!openBrands)}
              className="flex items-center gap-[8px] bg-[#F6F7F2] rounded-full px-[18px] py-[12px] text-[16px] cursor-pointer"
            >
              Inspired-by Brands ▼
            </button>
{openBrands && (
  <div className="absolute top-[56px] left-0 w-[180px] bg-white rounded-[16px] shadow-lg p-[12px] z-20">
    {renderDropdown(brandOptions, "brand")}

    {showClearAll && (
    <button
  onClick={clearAllFilters}
  className="w-full text-left text-[13px] underline text-[#1D0B01] mt-[10px]"
>
  Clear all
  {filters.brand.length > 0 && (
    <span className="ml-[4px]">({filters.brand.length})</span>
  )}
</button>

    )}
  </div>
)}


          </div>
        </div>
      </section>
    </div>
  );
};

export default SortFilter;
