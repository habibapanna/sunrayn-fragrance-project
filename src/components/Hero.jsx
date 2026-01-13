import React from 'react';

const Hero = () => {
    return (
        <div>
            <section
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.postimg.cc/vHNVx6j7/Image.png')",
      }}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto ml-[192px] mt-[250px] mb-[276px] grid grid-cols-1 lg:grid-cols-2 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-white">
          {/* Rating */}
          <div className="flex items-center gap-2 text-[16px] text-[#DBAB35] mb-4">
            <span>★★★★★</span>
            <span className="text-gray-200">
              5 star rating | Based on 200+ happy customers
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-[60px] font-semibold leading-tight mb-6">
            Designer-Inspired Luxury <br />
            Fragrances with Everyday <br />
            Affordability
          </h1>

          {/* Description */}
          <p className="text-gray-200 mb-8 w-4/5 text-[20px]">
            Sanrayn brings perfumes that linger with grace, purity,
            and devotion. Our luxury designer-inspired aromas are
            artfully blended to complement your sophistication.
          </p>

          {/* CTA */}
          <button className="bg-[#DBAB35] text-black  px-[24px] py-[10px] rounded-full text-[20px]">
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