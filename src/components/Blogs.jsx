import React, { useState, useEffect } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { blogs } from "../data/blogs";

const Blogs = () => {
  const [current, setCurrent] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const navigate = useNavigate();

  // Adjust number of cards per slide based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) setCardsPerView(3); // Desktop
      else if (window.innerWidth >= 1024) setCardsPerView(2); // Tablet
      else setCardsPerView(1); // Mobile
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = blogs.length - cardsPerView;

  const next = () => setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));

  return (
    <div className="mx-auto lg:px-[16px] pb-[16px] 2xl:pb-[32px]">
      {/* HEADER */}
      <div className="hidden lg:flex justify-between mb-[16px] 2xl:mb-[32px] px-[16px] 2xl:px-[32px]">
        <div className="flex justify-between lg:justify-center items-center text-center gap-[20px] 2xl:gap-[32px]">
          <p className="text-[20px] lg:text-[35px] 2xl:text-[50px] font-semibold text-[#282828]">
            The Sanrayn Blogs
          </p>
             <button className=" transition-all duration-300 ease-out
    bg-[#BA9948] hover:bg-white/60 backdrop-blur-md border border-[#BA9948] hover:text-[#1D0B01] text-white font-semibold px-[24px] py-[8px] 2xl:px-[32px] 2xl:py-[12px] rounded-full text-[14px] lg:text-[20px] cursor-pointer w-[117px] h-[40px] lg:w-[139px] lg:h-[55px]">
            <Link to="/productList">Read All</Link>
          </button>
        </div>

        <div className="hidden lg:flex gap-5">
          <button
            onClick={prev}
            className="w-[55px] h-[55px] rounded-full bg-[#F5F1EA] shadow flex items-center justify-center cursor-pointer"
          >
            <GoChevronLeft className="text-[35px]" />
          </button>
          <button
            onClick={next}
            className="w-[55px] h-[55px] rounded-full bg-[#F5F1EA] shadow flex items-center justify-center cursor-pointer"
          >
            <GoChevronRight className="text-[35px]" />
          </button>
        </div>
      </div>

       <div className="flex px-[16px] lg:hidden justify-between items-center text-center gap-[20px] 2xl:gap-[32px] mb-[16px]">
          <p className="text-[25px] lg:text-[35px] 2xl:text-[50px] font-semibold text-[#282828]">
            The Sanrayn Blogs
          </p>
           <button className="bg-[#BA9948] text-white font-semibold px-[24px] py-[8px] 2xl:px-[32px] 2xl:py-[12px] rounded-full text-[14px] 2xl:text-[20px] cursor-pointer w-[117px] h-[40px] md:w-[139px] md:h-[55px]">
            <Link to="/productList">Read All</Link>
          </button>
        </div>

      {/* CAROUSEL */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(current * 100) / cardsPerView}%)`,
          }}
        >
          {blogs.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 px-[16px]"
              style={{ width: `${100 / cardsPerView}%` }}
            >
              <div
                className="relative rounded-[24px] lg:rounded-[32px] 2xl:rounded-[48px] overflow-hidden h-[350px] lg:h-[500px] 2xl:h-[700px] cursor-pointer"
                onClick={() => navigate(`/blogs/${item.slug}`)}
              >
                <img
                  src={item.product}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover z-10"
                />
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#000000] via-black/10 to-transparent" />
                <div className="absolute bottom-4 md:bottom-8 left-4 right-4 z-30">
                  <h3 className="text-white text-[25px] md:text-[30px] 2xl:text-[40px] font-medium leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ARROWS */}
          <div className="flex lg:hidden justify-center gap-5 mt-[16px]">
            <button
              onClick={prev}
              className="w-[40px] h-[40px] bg-[#F5F1EA] rounded-full flex items-center justify-center"
            >
              <GoChevronLeft className="text-[28px]" />
            </button>
            <button
              onClick={next}
              className="w-[40px] h-[40px] bg-[#F5F1EA] rounded-full flex items-center justify-center"
            >
              <GoChevronRight className="text-[28px]" />
            </button>
          </div>
      </div>
    </div>
  );
};

export default Blogs;
