import React from "react";

const Signature = () => {
  return (
    <section className="mx-auto px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 auto-rows-fr">

        {/* LEFT IMAGE CARD */}
        <div className="rounded-4xl flex items-center justify-center p-10 bg-[#a68b60]">
          <img
            src="https://i.postimg.cc/zD20k7cK/Featured-Image.png"
            alt="Signature Perfume"
            className=" object-cover"
          />
        </div>

        {/* RIGHT CONTENT CARD */}
        <div className="relative rounded-4xl overflow-hidden p-10 flex items-center">

          {/* RADIAL GRADIENT (CENTER LIGHT) */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, #FFEDCA 0%, #BA9448 70%)",
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
          <div className="relative z-10 p-12">
            <h2 className="text-3xl md:text-[50px] text-[#5a2c1d] mb-6 leading-snug">
              Signature-Inspired <br />
              Scents That Stay-On Skin <br />
              and in Memory
            </h2>

            <p className="text-[24px] text-[#4a2a1d] leading-relaxed">
              <span className="font-semibold">
                SANRAYN means “LIGHT PURIFIED THROUGH THE SOUL.”
              </span>{" "}
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
