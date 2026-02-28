import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* VIDEO BACKGROUND */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://framerusercontent.com/assets/xwyNvkWHh63ubQ8audTdLJ0lprE.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

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
      <div className="relative z-10 w-full px-[16px] flex justify-center 2xl:mt-[130px]">
        <div className="text-white text-center flex flex-col items-center max-w-[900px]">

          {/* RATING */}
          <div className="flex flex-col md:flex-row items-center gap-[8px] text-[#DBAB35] mb-[16px]">
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
          <h1 className="text-[30px] md:text-[50px] lg:text-[60px] font-semibold leading-tight mb-[20px]">
            Designer-Inspired Luxury <br />
            Fragrances with Everyday <br />
            Affordability
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-200 text-[15px] md:text-[20px] mb-[32px] md:max-w-[95%]">
            Sanrayn brings perfumes that linger with grace, purity, and devotion.
            Our luxury designer-inspired aromas are artfully blended to
            complement your sophistication.
          </p>

          {/* CTA */}
          <Link to="/productList">
            <button
              className="
                bg-[#DBAB35] hover:bg-white
                text-[#1D0B01]
                border border-[#DBAB35]
                transition-all duration-300 ease-out
                rounded-full
                px-[24px] py-[10px]
                md:px-[48px] md:py-[14px]
                text-[14px] md:text-[20px]
                flex items-center justify-center
                cursor-pointer
              "
            >
              Shop Now
            </button>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Hero;
