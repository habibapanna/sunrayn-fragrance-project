import React from "react";

const Signature = () => {
  return (
    <section className="mx-auto px-[16px] md:px-[32px] py-[16px] md:py-[32px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px] lg:gap-[32px] items-stretch">

        {/* LEFT IMAGE */}
        <div className="w-full">
          <img
            src="https://i.postimg.cc/zD20k7cK/Featured-Image.png"
            alt="Signature Perfume"
            className="w-full h-[300px] sm:h-[450px] lg:h-full object-cover rounded-3xl lg:rounded-[48px]"
          />
        </div>

        {/* RIGHT CONTENT CARD */}
        <div className="relative rounded-3xl lg:rounded-[48px] overflow-hidden flex items-center">

          {/* RADIAL GRADIENT */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, #FFEDCA 0%, #BA9448 100%)",
            }}
          />

          {/* BACKGROUND SHAPE */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-100"
            style={{
              backgroundImage:
                "url('https://i.postimg.cc/13QCgtd6/Background-Shape.png')",
            }}
          />

          {/* CONTENT */}
          <div className="relative z-10 p-[36px] md:p-[153px]">
            <h2 className="text-2xl sm:text-3xl lg:text-[48px] text-[#571313] mb-4 sm:mb-6 leading-tight font-semibold">
              Signature-Inspired <br />
              Scents That Stay-On Skin <br />
              and in Memory
            </h2>

            <p className="text-[14px] lg:text-[20px] text-[#1D0B01] leading-relaxed">
              SANRAYN means “
              <span className="font-bold">
                LIGHT PURIFIED THROUGH THE SOUL.
              </span>
              ” The brand was born with a purpose: to make top-quality,
              designer-inspired perfumes accessible. Too often,
              perfumes fail to create a true connection. They lack
              depth, individuality, and the connection a fragrance
              should carry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signature;
