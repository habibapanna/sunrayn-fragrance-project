import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Categories from "../components/Categories";
import SortFilter from "../components/SortFilter";
import { products } from "../data/productsData";

const ProductList = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="px-[16px] 2xl:px-[32px] pb-[16px] 2xl:pb-[32px]">
      <Categories />

      {/* BUTTON */}
      <SortFilter
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* LAYOUT WRAPPER */}
      <div className="relative flex gap-[16px] 2xl:gap-[32px]">
        
        {/* Desktop SIDEBAR */}
       {sidebarOpen && (
  <aside
    className="
      hidden lg:block
      sticky top-[120px]
      w-[550px] h-[calc(100vh-140px)]
      bg-[#EDE8D0] rounded-[16px]
      overflow-y-auto
      shrink-0
    "
  >
  <div className="p-6 space-y-6 text-[#1D0B01]">

  {/* SORT BY */}
   <h3 className="text-[16px] font-bold uppercase text-[#1D0B01]">Sort by:</h3>
  <div className="space-y-3 bg-[#F6F7F2] rounded-[16px] p-2">
    <div className="flex justify-between px-2">
      <h3 className="text-[16px] text-[#282828]">Price - high to low</h3>
      <span><svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
  <path d="M10.625 5.625L5.625 0.625L0.625 5.625" stroke="#282828" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
    </div>

    <div className="bg-white rounded-[12px] p-4 space-y-3">
      {[
        "Relevance (Default)",
        "Price - high to low",
        "Price - low to high",
        "Best - Selling",
        "New Arrivals",
      ].map((item, i) => (
        <label key={i} className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            name="sort"
            defaultChecked={item === "Price - high to low"}
            className="radio radio-neutral checked:bg-[#BA9948]"
          />
          <span className="text-[16px]">{item}</span>
        </label>
      ))}
    </div>
  </div>

  {/* FILTER TAGS */}
  <div className="space-y-3">
    <h3 className="text-[16px] font-bold uppercase text-[#1D0B01]">Filter:</h3>

    <div className="flex flex-wrap gap-2">
      {["Women", "Unisex", "Byredo"].map(tag => (
        <span
          key={tag}
          className="flex items-center gap-2 bg-white px-3 py-1 rounded-full text-[16px]"
        >
          {tag}
          <button className="text-[#000000]">✕</button>
        </span>
      ))}
      <button className="ml-auto text-[16px] underline text-[#282828]">Clear all</button>
    </div>
  </div>

  {/* SECTION */}
  {[
    {
      title: "Gender",
      options: ["Woman", "Men", "Unisex"],
      checked: ["Men"],
    },
    {
      title: "Inspired by Brands",
      options: [
        "Burberry",
        "Byredo",
        "Chanel",
        "Chloe",
        "Clinique",
        "Creed",
        "Dior",
      ],
      checked: ["Byredo"],
    },
    {
      title: "Scent Family",
      options: ["Flowery", "Fresh", "Gourmand", "Herbal", "Earthy", "Warm"],
      checked: ["Fresh"],
    },
  ].map(section => (
    <div key={section.title} className="space-y-3 bg-[#F6F7F2] rounded-[16px] p-2">
      <div className="flex justify-between items-center">
        <h3 className="font-medium">{section.title}</h3>
        <span><svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
  <path d="M10.625 5.625L5.625 0.625L0.625 5.625" stroke="#282828" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
      </div>

      <div className="bg-white rounded-[12px] p-4 space-y-3">
        {section.options.map(opt => (
          <label key={opt} className="flex items-center gap-3">
            <input
              type="checkbox"
              defaultChecked={section.checked.includes(opt)}
              className="checkbox checkbox-neutral checked:bg-[#BA9948]"
            />
            <span className="text-[16px] text-[#282828]">{opt}</span>
          </label>
        ))}
      </div>
    </div>
  ))}

  {/* INTENSITY */}
  <div className="space-y-3 bg-[#F6F7F2] rounded-[16px] p-2">
    <div className="flex justify-between">
      <h3 className="text-[16px] text-[#282828]">Scent - Intensity Scale</h3>
      <span><svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
  <path d="M10.625 5.625L5.625 0.625L0.625 5.625" stroke="#282828" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
    </div>

    <div className="bg-white rounded-[12px] p-4 space-y-3">
      {["Subtle", "Significant", "Statement"].map(level => (
        <label key={level} className="flex items-center gap-3">
          <input
            type="checkbox"
            defaultChecked={level === "Significant"}
            className="checkbox checkbox-neutral checked:bg-[#BA9948]"
          />
          <span className="text-[16px] text-[#282828]">{level}</span>
        </label>
      ))}
    </div>
  </div>

  {/* PRICE */}
  <div className="space-y-3 bg-[#F6F7F2] rounded-[16px] p-2">
    <div className="flex justify-between">
      <h3 className="text-[16px] text-[#282828]">Price</h3>
      <span><svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
  <path d="M10.625 5.625L5.625 0.625L0.625 5.625" stroke="#282828" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
    </div>

    <div className="bg-white rounded-[12px] p-4 space-y-3">
      <input type="range" min="29" max="199" className="range range-warning" />
      <div className="flex justify-between text-[16px] text-[#282828]">
        <span>$29</span>
        <span>$199</span>
      </div>
    </div>
  </div>

  {/* CONNECTION */}
  <div className="space-y-3 bg-[#F6F7F2] rounded-[16px] p-2">
    <div className="flex justify-between">
      <h3 className="text-[16px] text-[#282828]">Connection</h3>
      <span><svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
  <path d="M10.625 5.625L5.625 0.625L0.625 5.625" stroke="#282828" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
    </div>

    <div className="bg-white rounded-[12px] p-4 space-y-3">
      {["Standard and Balanced", "Rich and Extreme"].map(opt => (
        <label key={opt} className="flex items-center gap-3">
          <input
            type="checkbox"
            defaultChecked={opt === "Rich and Extreme"}
            className="checkbox checkbox-neutral checked:bg-[#BA9948]"
          />
          <span className="text-[16px] text-[#282828]">{opt}</span>
        </label>
      ))}
    </div>
  </div>

  {/* PERFUME VOLUME */}
  <div className="space-y-3 bg-[#F6F7F2] rounded-[16px] p-2">
    <div className="flex justify-between">
      <h3 className="text-[16px] text-[#282828]">Perfume Volume</h3>
      <span><svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
  <path d="M10.625 5.625L5.625 0.625L0.625 5.625" stroke="#282828" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
    </div>

    <div className="bg-white rounded-[12px] p-4 space-y-3">
      {["15ML", "30ML", "60ML"].map(v => (
        <label key={v} className="flex items-center gap-3">
          <input
            type="checkbox"
            defaultChecked={v === "30ML"}
            className="checkbox checkbox-neutral checked:bg-[#BA9948]"
          />
          <span className="text-[16px] text-[#282828]">{v}</span>
        </label>
      ))}
    </div>
  </div>

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
            {products.map((item, i) => (
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
