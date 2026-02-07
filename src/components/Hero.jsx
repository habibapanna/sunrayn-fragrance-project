import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div>
      <section className="relative flex items-center max-w-full overflow-hidden">

        {/* VIDEO BACKGROUND */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://cdn.shopify.com/videos/c/o/v/5555cec9a16b4d2aa7b5a8ab717b3f75.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* GRADIENT OVERLAY */}
        <div
          className="
            absolute bottom-0 left-0 w-full h-[70%]
            bg-gradient-to-t
            from-[#210E07]/60
            via-[#210E07]/55
            to-transparent
            z-0
          "
        ></div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto px-[16px] mt-[200px] 2xl:ml-[30px] lg:mt-[295px] 2xl:mb-[100px] grid grid-cols-1 lg:grid-cols-2 items-center mb-[20px]">

          {/* LEFT CONTENT */}
          <div className="text-white col-span-2 2xl:col-span-1">

            {/* Rating */}
            <div className="flex flex-col md:flex-row md:items-center md:gap-[8px] text-[#BA9948]">
              <div className="flex gap-[6px] mb-[8px] md:mb-0 items-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="h-[15px] w-[15px]" />
                ))}
              </div>
              <span className="text-[14px] md:text-[16px] text-[#FFFFFF]">
                5 star rating | Based on 200+ happy customers
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[30px] md:text-[60px] font-semibold leading-tight my-[16px] md:my-[24px]">
              Designer-Inspired Luxury <br />
              Fragrances with Everyday <br />
              Affordability
            </h1>

            {/* Description */}
            <p className="text-gray-200 mb-[32px] md:mb-[40px] md:w-4/5 text-[15px] md:text-[20px]">
              Sanrayn brings perfumes that linger with grace, purity,
              and devotion. Our luxury designer-inspired aromas are
              artfully blended to complement your sophistication.
            </p>

            {/* CTA */}
            <Link to="/productList">
              <button className="
                text-white px-[24px] py-[10px]
                rounded-[100px]
                text-[14px] md:text-[20px]
                w-[118px] h-[30px]
                md:w-[210px] md:h-[55px]
                bg-[#BA9948] hover:bg-white
                border border-[#BA9948]
                hover:text-[#1D0B01]
                transition-all duration-300 ease-out
                flex items-center justify-center
              ">
                Shop Now
              </button>
            </Link>

          </div>

          {/* RIGHT EMPTY COLUMN */}
          <div className="hidden lg:block"></div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
