import React, { useState, useEffect } from 'react';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import Instagram from '../assets/Instagram_logo_2016 1.png';
import Marquee from 'react-fast-marquee';

const posts = [
  { title: 'Men', product: 'https://i.postimg.cc/mkc0WDcW/Container-(1).png' },
  { title: 'Women', product: 'https://i.postimg.cc/prn1167M/N6Apea-UPkl-Bb-Tmrqi-Me-Hki00U-png-(3).png' },
  { title: 'Unisex', product: 'https://i.postimg.cc/Rh4QBppP/Perfume-Image.png' },
  { title: 'Unisex', product: 'https://i.postimg.cc/59Y4VNW2/N6Apea-UPkl-Bb-Tmrqi-Me-Hki00U-png-(4).png' },
];

const inspiredBy = [
  { title: 'Black Opium' },
  { title: "Love, Don’t be shy" },
  { title: 'Good Girl' },
  { title: 'Libre' },
  { title: 'Light Blue' },
  { title: 'Not a Perfume' },
];

const RecentPost = () => {
  const [current, setCurrent] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(2); // default mobile 2 cards

  // Adjust cards per slide based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1536) setCardsPerSlide(4); // 2xl
      else if (window.innerWidth >= 1024) setCardsPerSlide(2); // lg
      else setCardsPerSlide(2); // mobile & md
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(posts.length / cardsPerSlide);

  const next = () => setCurrent((prev) => (prev + 1) % totalSlides);
  const prev = () => setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);

  // Group posts per slide
  const slides = [];
  for (let i = 0; i < posts.length; i += cardsPerSlide) {
    slides.push(posts.slice(i, i + cardsPerSlide));
  }

  return (
    <div className="mx-auto max-w-full px-4 md:px-8 pb-4 md:pb-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 gap-4">
        <h2 className="text-3xl md:text-5xl font-semibold text-[#282828]">
          Recent Post on Instagram
        </h2>
        <div className="flex items-center gap-[24px]">
          <button className="bg-[#F5F1EA] text-[#571313] font-semibold px-6 py-3 rounded-full flex items-center text-xl md:text-2xl">
            <img src={Instagram} alt="" className="mr-2 h-8 md:h-10" />@Sanrayn
          </button>
          {/* Nav buttons */}
          <div className="hidden lg:flex gap-[20px]">
            <button
              onClick={prev}
              className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#F5F1EA] shadow flex items-center justify-center cursor-pointer"
            >
              <GoChevronLeft className="text-2xl md:text-3xl" />
            </button>
            <button
              onClick={next}
              className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#F5F1EA] shadow flex items-center justify-center cursor-pointer"
            >
              <GoChevronRight className="text-2xl md:text-3xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex flex-shrink-0 w-full gap-[32px] md:gap-8"
            >
              {slide.map((item, idx) => (
                <div
                  key={idx}
                  className="relative rounded-[32px] overflow-hidden h-40 md:h-96 flex-1"
                >
                  <img
                    src={item.product}
                    alt={item.title}
                    className="absolute inset-0 object-cover w-full h-full"
                  />
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

      {/* Inspired By Marquee */}
      <div className="pt-4 md:pt-8">
        <Marquee speed={40} gradient={false} pauseOnHover>
          {inspiredBy.map((item, index) => (
            <button
              key={index}
              className="bg-[#F5F1EA] text-[#571313] px-8 py-3 rounded-full flex items-center text-base md:text-xl font-medium mx-2 md:mx-4 whitespace-nowrap"
            >
              Inspired by
              <span className="underline font-bold ml-3 cursor-pointer">
                {item.title}
              </span>
            </button>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default RecentPost;
