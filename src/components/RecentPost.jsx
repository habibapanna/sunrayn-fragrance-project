import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Instagram from "../assets/Instagram_logo_2016 1.png";
import MarqueeSection from "./MarqueeSection";


const posts = [
  { title: 'Men', product: 'https://i.postimg.cc/W4V5k4wv/Whats-App-Image-2026-02-03-at-6-06-48-PM.jpg' },
  { title: 'Women', product: 'https://i.postimg.cc/PNGRVQZ7/Whats-App-Image-2026-02-03-at-6-11-48-PM-(2).jpg' },
  { title: 'Unisex', product: 'https://i.postimg.cc/pdYRfpNM/Whats-App-Image-2026-02-03-at-6-11-48-PM.jpg' },
  { title: 'Unisex', product: 'https://i.postimg.cc/6p2k0Tvk/Whats-App-Image-2026-02-03-at-6-06-46-PM.jpg' },
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
    <div className="mx-auto px-[16px] 2xl:px-[32px] pb-[16px] 2xl:pb-[32px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-[16px] 2xl:mb-[32px] gap-4">
        <h2 className="text-[25px] lg:text-[35px] 2xl:text-[50px] font-semibold text-[#282828] hidden md:block">
          Recent Post on Instagram
        </h2>
        <h2 className="text-[25px] font-semibold text-[#282828] md:hidden">
        Instagram
        </h2>
        <div className="flex items-center gap-[24px]">
          <button className="bg-[#F5F1EA] text-[#571313] font-semibold px-6 py-3 rounded-full flex items-center text-[14px] lg:text-[16px] 2xl:text-[20px] cursor-pointer">
            <img src={Instagram} alt="" className="mr-[4px] h-5 md:h-10" />@Sanrayn
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

      {/* SWIPER */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".recent-prev",
          nextEl: ".recent-next",
        }}
        grabCursor={true}
        spaceBetween={16}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1536: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
        }}
      >
        {posts.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative rounded-[24px] lg:rounded-[32px] 2xl:rounded-[48px] overflow-hidden h-40 md:h-96">
              <img
                src={item.product}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* MOBILE ARROWS */}
      <div className="flex lg:hidden justify-center gap-5 py-[16px] 2xl:py-[32px]">
        <button className="recent-prev w-[40px] h-[40px] rounded-full bg-[#F5F1EA] flex items-center justify-center">
          <GoChevronLeft className="text-[28px]" />
        </button>
        <button className="recent-next w-[40px] h-[40px] rounded-full bg-[#F5F1EA] flex items-center justify-center">
          <GoChevronRight className="text-[28px]" />
        </button>
      </div>

  <MarqueeSection></MarqueeSection>
    </div>
  );
};

export default RecentPost;
