import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import HeroVideo from "../assets/kling_20260612_VIDEO_please_mak_5171_0.mp4";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* VIDEO BACKGROUND */}
     <video
  className="absolute inset-0 w-full h-full object-cover"
  autoPlay
  loop
  muted
  playsInline
>
  <source src={HeroVideo} type="video/mp4" />
</video>

      {/* GRADIENT OVERLAY */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-[#210E07]/70
          via-[#210E07]/50
          to-transparent
          z-0
        "
      />

     {/* CONTENT */}
<div className="absolute inset-0 z-10 flex items-end">
  <div className="w-full px-[16px] md:px-[40px] lg:px-[60px] pb-[40px] md:pb-[70px]">
    
    <div className="max-w-[650px] text-white">

      {/* RATING */}
      <div className="flex flex-wrap items-center gap-[8px] text-[#BA9948] mb-4">
        <div className="flex gap-[6px]">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="h-[15px] w-[15px]" />
          ))}
        </div>

        <span className="text-[14px] md:text-[16px] text-white">
          5 star rating | Based on 200+ happy customers
        </span>
      </div>

      {/* HEADING */}
      <h1 className="text-[36px] md:text-[50px] lg:text-[60px] font-semibold leading-[1.1] mb-4">
        Luxury Fragrances Crafted for Every Day
      </h1>

   

      {/* BUTTONS */}
      <div className="flex flex-col sm:flex-row gap-4">

        <Link to="/productList">
          <button
            className="
              bg-[#BA9948]
              hover:bg-white
              text-[#1D0B01]
              border border-[#BA9948]
              rounded-full
              px-8 py-3
              md:px-12 md:py-4
              text-[14px] md:text-[18px]
              font-semibold
              transition-all duration-500
              cursor-pointer
            "
          >
            SHOP NOW
          </button>
        </Link>

      </div>

    </div>
  </div>
</div>
    </section>
  );
};

export default Hero;
