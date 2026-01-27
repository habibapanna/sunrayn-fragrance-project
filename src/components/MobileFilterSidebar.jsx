import React, { useState } from "react";
import { X } from "lucide-react";

const MobileFilterSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const [sortBy, setSortBy] = useState("relevance");

  const [priceRange, setPriceRange] = useState(199);

  const [filters, setFilters] = useState({
    gender: [],
    brand: [],
    scentFamily: [],
    intensity: [],
    connection: [],
    volume: [],
  });

  const [openSections, setOpenSections] = useState({
    Gender: true,
    Brand: true,
    "Scent Family": true,
    Intensity: true,
    Connection: true,
    Volume: true,
    Price: true,
  });

  const toggleSection = title => {
    setOpenSections(prev => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const toggleFilter = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter(v => v !== value)
        : [...prev[key], value],
    }));
  };

  const clearAll = () => {
    setFilters({
      gender: [],
      brand: [],
      scentFamily: [],
      intensity: [],
      connection: [],
      volume: [],
    });
    setPriceRange(199);
    setSortBy("relevance");
  };

  return (
    <aside
      className={`fixed top-0 left-0 z-50 h-full w-full bg-[#EDE8D0]
      transition-transform duration-500 lg:hidden
      ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="p-6 space-y-6 overflow-y-auto h-full">

        {/* HEADER */}
        <div className="flex justify-end">
          <button className="cursor-pointer" onClick={() => setSidebarOpen(false)}>
            <X />
          </button>
        </div>

        {/* SORT */}
        <div className="space-y-3">
          <h3 className="font-bold uppercase">Sort by:</h3>
          <div className="bg-white rounded-xl p-4 space-y-3">
            {[
              { label: "Relevance (Default)", value: "relevance" },
              { label: "Price - high to low", value: "price-high" },
              { label: "Price - low to high", value: "price-low" },
              { label: "Best - Selling", value: "price-low" },
              { label: "New Arrivals", value: "price-low" },
            ].map(opt => (
              <label key={opt.value} className="flex gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="sort"
                  checked={sortBy === opt.value}
                  onChange={() => setSortBy(opt.value)}
                  className="radio checked:bg-[#BA9948]"
                />
                <span>{opt.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* ACTIVE TAGS */}
        <div className="flex flex-wrap gap-2">
          {Object.entries(filters).flatMap(([key, values]) =>
            values.map(v => (
              <span key={key + v} className="bg-white px-3 py-1 rounded-full flex gap-2">
                {v}
                <button onClick={() => toggleFilter(key, v)}>✕</button>
              </span>
            ))
          )}
          <button onClick={clearAll} className="ml-auto underline">
            Clear all
          </button>
        </div>

        {/* GENDER */}
        <Section
          title="Gender"
          open={openSections.Gender}
          toggle={toggleSection}
          options={["Men", "Women", "Unisex"]}
          selected={filters.gender}
          onChange={v => toggleFilter("gender", v)}
        />

        {/* BRAND */}
        <Section
          title="Inspired by Brands"
          open={openSections.Brand}
          toggle={toggleSection}
          options={["Burberry", "Byredo", "Chanel", "Chloe", "Clinique", "Creed", "Dior"]}
          selected={filters.brand}
          onChange={v => toggleFilter("brand", v)}
        />

        {/* SCENT FAMILY */}
        <Section
          title="Scent Family"
          open={openSections["Scent Family"]}
          toggle={toggleSection}
          options={["Flowery", "Fresh", "Gourmand", "Herbal", "Earthy", "Warm"]}
          selected={filters.scentFamily}
          onChange={v => toggleFilter("scentFamily", v)}
        />

        {/* INTENSITY */}
        <Section
          title="Intensity"
          open={openSections.Intensity}
          toggle={toggleSection}
          options={["Subtle", "Significant", "Statement"]}
          selected={filters.intensity}
          onChange={v => toggleFilter("intensity", v)}
        />

        {/* PRICE */}
        <div className="bg-[#F6F7F2] rounded-xl p-4 space-y-4">
          <Header title="Price" open={openSections.Price} toggle={toggleSection} />
          {openSections.Price && (
            <>
              <input
                type="range"
                min="29"
                max="199"
                value={priceRange}
                onChange={e => setPriceRange(+e.target.value)}
                className="range range-warning"
              />
              <div className="flex justify-between">
                <span>$29</span>
                <span>${priceRange}</span>
              </div>
            </>
          )}
        </div>

      </div>
    </aside>
  );
};

export default MobileFilterSidebar;

/* ---------- REUSABLE UI ---------- */

const Header = ({ title, open, toggle }) => (
  <div
    className="flex justify-between items-center cursor-pointer"
    onClick={() => toggle(title)}
  >
    <h3>{title}</h3>
    <svg
      className={`transition-transform ${open ? "rotate-180" : ""}`}
      width="12"
      height="7"
      viewBox="0 0 12 7"
      fill="none"
    >
      <path
        d="M10.625 5.625L5.625 0.625L0.625 5.625"
        stroke="#282828"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const Section = ({ title, open, toggle, options, selected, onChange }) => (
  <div className="bg-[#F6F7F2] rounded-xl p-4 space-y-3">
    <Header title={title} open={open} toggle={toggle} />
    {open && (
      <div className="bg-white rounded-xl p-4 space-y-3">
        {options.map(opt => (
          <label key={opt} className="flex gap-3">
            <input
              type="checkbox"
              checked={selected.includes(opt)}
              onChange={() => onChange(opt)}
              className="checkbox checked:bg-[#BA9948]"
            />
            <span>{opt}</span>
          </label>
        ))}
      </div>
    )}
  </div>
);
