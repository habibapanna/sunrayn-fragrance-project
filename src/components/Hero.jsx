import React from 'react';
import { FaStar } from 'react-icons/fa';

const Hero = () => {
    return (
        <div>
            <section
      className="relative min-h-screen flex items-center bg-cover bg-center max-w-full"
      style={{
        backgroundImage:
          "url('https://i.postimg.cc/vHNVx6j7/Image.png')",
      }}
    >
{/* MOBILE CONTENT OVERLAY */}
<div className="
  absolute bottom-0 left-0 w-full
  h-[70%]
  bg-gradient-to-t
  from-[#210E07]/95
  via-[#210E07]/80
  to-transparent
  md:hidden
"></div>

 
      {/* Content */}
      <div className="relative z-10 mx-auto px-[16px] md:ml-[192px] mt-[400px] md:mt-[295px] md:mb-[276px] grid grid-cols-1 lg:grid-cols-2 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-white">
          {/* Rating */}
<div className="flex flex-col md:flex-row md:items-center md:gap-[8px] text-[#DBAB35]">
  {/* Stars */}
  <div className="flex gap-[6px] mb-[8px] md:mb-0 items-center">
    <FaStar className="h-[15px] w-[15px]" />
    <FaStar className="h-[15px] w-[15px]" />
    <FaStar className="h-[15px] w-[15px]" />
    <FaStar className="h-[15px] w-[15px]" />
    <FaStar className="h-[15px] w-[15px]" />
  </div>

  {/* Text */}
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
          <button className="bg-[#DBAB35] text-black px-[24px] py-[10px] rounded-[100px] text-[14px] md:text-[20px] font-bold cursor-pointer w-[116px] h-[40px] md:w-[210px] md:h-[55px]">
            Shop Now
          </button>
        </div>

        {/* RIGHT SIDE (kept empty since bottles are in bg image) */}
        <div className="hidden lg:block"></div>
      </div>
    </section>
        </div>
    );
};

export default Hero;




