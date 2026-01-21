import React, { useState, useEffect } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

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
  const [cardsPerSlide, setCardsPerSlide] = useState(1);

  // Adjust number of cards per slide based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) setCardsPerSlide(3); // Desktop
      else if (window.innerWidth >= 1024) setCardsPerSlide(2); // Tablet
      else setCardsPerSlide(1); // Mobile
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate total slides
  const totalSlides = Math.ceil(blogs.length / cardsPerSlide);

  const next = () => setCurrent((prev) => (prev + 1) % totalSlides);
  const prev = () => setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);

  // Group blogs per slide
  const slides = [];
  for (let i = 0; i < blogs.length; i += cardsPerSlide) {
    slides.push(blogs.slice(i, i + cardsPerSlide));
  }

  return (
    <div className="mx-auto max-w-full px-4 md:px-8 pb-4 md:pb-8">
      {/* HEADER */}
            <div className='flex justify-between mb-[16px] md:mb-[32px]'>
            <div className='flex justify-center items-center text-center gap-[20px] md:gap-[32px]'>
                <div>
                    <p className='text-[25px] md:text-[50px] font-semibold text-[#282828]'>The Sanrayn Blogs</p>
                </div>
                <div>
                    <button className="bg-[#BA9948] text-white font-semibold px-[32px] py-[12px] rounded-full text-[14px] md:text-[20px] cursor-pointer w-[117px] h-[40px] md:w-[139px] md:h-[55px]">View All</button>
                </div>
            </div>
            <div className='hidden lg:flex gap-5 '>
                <button className="w-[55px] h-[55px] rounded-full bg-[#F5F1EA] shadow flex items-center justify-center cursor-pointer">
                              <GoChevronLeft  onClick={prev}  className='text-[35px] ' />
                            </button>
                <button className="w-[55px] h-[55px] rounded-full bg-[#F5F1EA] shadow flex items-center justify-center cursor-pointer">
                              <GoChevronRight onClick={next} className='text-[35px]' />
                            </button>
            </div>

            </div>

      {/* CAROUSEL */}
      <div className="relative overflow-hidden">
        {/* Slides container */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 w-full flex gap-[16px] md:gap-[32px]">
              {slide.map((item, idx) => (
                <div
                  key={idx}
                  className="relative rounded-[32px] md:rounded-[48px] flex-1 h-[350px] md:h-[700px] overflow-hidden cursor-pointer"
                >
                  <img
                    src={item.product}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover z-10"
                  />
                  <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#000000] via-black/10 to-transparent" />
                  <div className="absolute bottom-4 md:bottom-8 left-4 right-4 z-30">
                    <h3 className="text-white text-[25px] 2xl:text-[40px] md:text-2xl font-medium leading-tight cursor-pointer">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

  {/* MOBILE ARROWS */}
  <div className="flex lg:hidden justify-center gap-5 mt-6">
    <button onClick={prev} className="w-[40px] h-[40px] rounded-full bg-[#F5F1EA]">
      <GoChevronLeft className="text-[30px]" />
    </button>
    <button onClick={next} className="w-[40px] h-[40px] rounded-full bg-[#F5F1EA]">
      <GoChevronRight className="text-[30px]" />
    </button>
  </div>
      </div>
    </div>
  );
};

export default Blogs;
