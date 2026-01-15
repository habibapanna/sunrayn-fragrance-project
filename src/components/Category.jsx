import React from "react";
import { GoChevronRight } from "react-icons/go";

const categories = [
  {
    title: "Men",
    product: "https://i.postimg.cc/8kWKHMLp/Product-Image.png",
  },
  {
    title: "Women",
    product: "https://i.postimg.cc/vTdvj2f0/Product-Image-(1).png",
  },
  {
    title: "Unisex",
    product: "https://i.postimg.cc/SK27KbGP/Background-Image-(1).png",
  },
];

const Category = () => {
  return (
    <section className="mx-auto px-[32px] pb-[32px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
        {categories.map((item, index) => (
          <div
            key={index}
            className="group relative rounded-[48px] overflow-hidden cursor-pointer  md:h-[700px] md:w-[598px]"
          >
            {/* IMAGE */}
            <img
              src={item.product}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* TITLE */}
            <h3 className="absolute top-6 left-6 z-20 text-[50px] font-medium text-[#1D0B01]">
              {item.title}
            </h3>

            {/* EXPANDING BUTTON */}
            <button
              className="
                absolute bottom-6 right-6 z-20
                h-[55px]
                w-[55px] group-hover:w-[200px]
                bg-white rounded-full shadow
                flex items-center group-hover:justify-center
                px-3
                transition-all duration-300 ease-in-out
                overflow-hidden cursor-pointer text-center
              "
            >
              {/* ICON (STAYS FIXED) */}
              <GoChevronRight className="text-[35px] flex-shrink-0 font-semibold" />
              {/* TEXT */}
              <span
                className="
                  whitespace-nowrap
                  text-[20px] text-[#1D0B01]
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-200 uppercase text-center font-semibold
                "
              >
                Shop {item.title}
              </span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
