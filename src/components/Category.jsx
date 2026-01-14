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
    <section className="mx-auto px-6 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {categories.map((item, index) => (
          <div
            key={index}
            className="relative rounded-[48px] overflow-hidden aspect-[4/5] md:aspect-[3/4]"
          >
            {/* PRODUCT IMAGE (BASE LAYER) */}
            <img
              src={item.product}
              alt={item.title}
              className="absolute inset-0 object-cover h-full w-full z-10"
            />

            {/* TITLE (TOP LEFT) */}
            <h3 className="absolute top-6 left-6 z-20 text-[50px] font-medium text-[#1D0B01]" style={{
       fontWeight: 400,
          
      }}>
              {item.title}
            </h3>

            {/* ARROW BUTTON (BOTTOM RIGHT) */}
            <button className="absolute bottom-6 right-6 z-20 w-[55px] h-[55px] rounded-full bg-white shadow flex items-center justify-center hover:scale-105 transition cursor-pointer">
              <GoChevronRight className="text-[35px]" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Category;






// <button className="w-[55px] h-[55px] rounded-full bg-[#F5F1EA] shadow flex items-center justify-center">
                            //   <GoChevronRight className='text-[35px]' />
                            // </button>
