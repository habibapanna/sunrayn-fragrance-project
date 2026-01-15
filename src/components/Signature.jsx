import React from "react";

const Signature = () => {
  return (
    <section className="mx-auto px-[32px] py-[32px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] auto-rows-fr">
<img
            src="https://i.postimg.cc/zD20k7cK/Featured-Image.png"
            alt="Signature Perfume"
            className=" object-cover md:h-[700px] md:w-[912px] rounded-[48px]"
          />


        {/* RIGHT CONTENT CARD */}
        <div className="relative rounded-[48px] overflow-hidden md:p-10 flex items-center md:h-[700px] md:w-[912px]">

          {/* RADIAL GRADIENT (CENTER LIGHT) */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, #FFEDCA 0%, #BA9448 100%)",
            }}
          />

          {/* BACKGROUND SHAPE IMAGE */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage:
                "url('https://i.postimg.cc/13QCgtd6/Background-Shape.png')",
            }}
          />

          {/* CONTENT */}
          <div className="relative z-10 p-32">
            <h2 className="text-3xl md:text-[50px] text-[#571313] mb-6 leading-snug font-medium"
            style={{
       fontWeight: 600,
      }}>
              Signature-Inspired <br />
              Scents That Stay-On Skin <br />
              and in Memory
            </h2>

            <p className="text-[24px] text-[#1D0B01] leading-relaxed">
              SANRAYN means “
              <span className="font-bold">
                LIGHT PURIFIED THROUGH THE SOUL.
              </span>”
              The brand was born with a purpose: to make top-quality,
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
