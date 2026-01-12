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
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-white">
          {/* Rating */}
          <div className="flex items-center gap-2 text-sm text-yellow-400 mb-4">
            <span>★★★★★</span>
            <span className="text-gray-200">
              5 star rating | Based on 200+ happy customers
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold leading-tight mb-6">
            Designer-Inspired Luxury <br />
            Fragrances with Everyday <br />
            Affordability
          </h1>

          {/* Description */}
          <p className="max-w-xl text-gray-200 mb-8">
            Sanrayn brings perfumes that linger with grace, purity,
            and devotion. Our luxury designer-inspired aromas are
            artfully blended to complement your sophistication.
          </p>

          {/* CTA */}
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-full transition">
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