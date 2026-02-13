import React from "react";
import { GoChevronRight } from "react-icons/go";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const categories = [
  {
    title: "Men",
    product: "https://i.postimg.cc/XNPxgLk5/Whats-App-Image-2026-02-03-at-6-06-50-PM.jpg",
  },
  {
    title: "Women",
    product: "https://i.postimg.cc/W4V5k4wv/Whats-App-Image-2026-02-03-at-6-06-48-PM.jpg",
  },
  {
    title: "Unisex",
    product: "https://i.postimg.cc/6p2k0Tvk/Whats-App-Image-2026-02-03-at-6-06-46-PM.jpg",
  },
];

const Category = () => {
  const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: "easeOut",
    },
  },
};

  return (
    <section className="mx-auto px-[16px] 2xl:px-[32px] py-[16px] 2xl:py-[32px]">
      <div
  variants={containerVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
  className="grid grid-cols-1 md:grid-cols-3 gap-[16px] 2xl:gap-[32px]"
>

        {categories.map((item, index) => (
         <div
  key={index}
  variants={cardVariant}
  className="
    group relative rounded-[16px]
    overflow-hidden cursor-pointer h-[392px] md:h-[292px]
    lg:h-[392px]
    2xl:h-[700px] group
  "
>

            {/* IMAGE */}
           <Link to='productList'>
            <img
              src={item.product}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover  group-hover:scale-105 duration-1000"
            /></Link>

            {/* TITLE */}
            <h3 className="absolute top-[16px] 2xl:top-[32px] left-[16px] 2xl:left-[32px] z-20 text-[25px] 2xl:text-[50px] font-semibold text-white uppercase">
              {item.title}
            </h3>

            {/* EXPANDING BUTTON */}
            <Link to='productList'>
            <button
              className="
                absolute bottom-6 right-6 z-20 h-[40px] w-[40px]
                2xl:h-[55px]
                2xl:w-[55px] group-hover:w-[200px]
                bg-white rounded-full shadow
                flex items-center group-hover:justify-center
                px-3
                overflow-hidden cursor-pointer text-center

                transition-[width] duration-800 ease-[cubic-bezier(0.4,0,0.2,1)]
                will-change-[width]
              "
            >
              {/* ICON */}
              <GoChevronRight className="text-[20px] 2xl:text-[35px] flex-shrink-0 font-semibold" />

              {/* TEXT */}
              <span
                className="
                  whitespace-nowrap text-[16px] md:text-[18px]
                  text-[#1D0B01] uppercase font-medium text-center
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300 delay-150
                "
              >
                Shop {item.title}
              </span>
            </button></Link>
         </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
