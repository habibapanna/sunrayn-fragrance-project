import React, { useState } from 'react';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

const blogs = [
  {
    title: "The Rise of Halal Luxury Fragrances in the Modern World",
    product: "https://i.postimg.cc/KvmJSjd2/Product-Image-(5).png",
  },
  {
    title: "How to Choose Your Signature Scent Based on Personality",
    product: "https://i.postimg.cc/Rh4QBppP/Perfume-Image.png",
  },
  {
    title: "Crafting Luxury Without Compromise The Sanrayn Philosophy",
    product: "https://i.postimg.cc/vTdvj2f0/Product-Image-(1).png",
  },
];

const Blogs = () => {
  const [current, setCurrent] = useState(0);

  const total = blogs.length;

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev - 1 + total) % total);

  return (
    <div className="mx-auto max-w-full px-[16px] pb-[16px] md:px-[32px] md:pb-[32px]">
      {/* HEADER */}
      <div className="md:flex md:justify-between mb-[16px] md:mb-[32px]">
        <div className="flex justify-between md:justify-center items-center text-center gap-[20px] md:gap-[32px]">
          <div className="text-left">
            <p className="text-[25px] md:text-[50px] font-semibold text-[#282828]">
              The Sanrayn Blogs
            </p>
          </div>
          <div>
            <button className="bg-[#BA9948] text-white font-semibold px-[32px] py-[12px] rounded-full text-[14px] md:text-[20px] cursor-pointer w-[117px] h-[40px] md:w-[139px] md:h-[55px]">
              Read all
            </button>
          </div>
        </div>

        {/* Desktop Arrows */}
        <div className="hidden md:flex gap-5">
          <button className="w-[55px] h-[55px] rounded-full bg-[#F5F1EA] shadow flex items-center justify-center cursor-pointer">
            <GoChevronLeft className="text-[35px]" />
          </button>
          <button className="w-[55px] h-[55px] rounded-full bg-[#F5F1EA] shadow flex items-center justify-center cursor-pointer">
            <GoChevronRight className="text-[35px]" />
          </button>
        </div>
      </div>

      {/* DESKTOP GRID */}
      <div className="hidden md:grid lg:grid-cols-3 gap-[32px]">
        {blogs.map((item, index) => (
          <div
            key={index}
            className="relative rounded-[48px] overflow-hidden md:h-[700px]"
          >
            <img
              src={item.product}
              alt={item.title}
              className="absolute inset-0 object-cover h-full w-full z-10"
            />
            <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#000000] via-black/10 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 z-30">
              <h3 className="text-white text-[32px] font-medium leading-tight cursor-pointer">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* MOBILE CAROUSEL */}
      <div className="md:hidden overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {blogs.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full"
            >
              <div className="relative rounded-[24px] overflow-hidden w-full h-[350px]">
                <img
                  src={item.product}
                  alt={item.title}
                  className="absolute inset-0 object-cover h-full w-full z-10"
                />
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#000000] via-black/10 to-transparent" />
                <div className="absolute bottom-8 left-4 right-4 z-30">
                  <h3 className="text-white text-2xl font-medium leading-tight cursor-pointer">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blogs;
