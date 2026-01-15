import React from "react";
import Button from "../assets/Button Container.png";

const Special = () => {
  return (
    <section className="mx-auto px-4 md:px-6 pb-10">
      <div className="bg-[#EDE8E0] rounded-[32px] md:rounded-[48px] p-6 md:p-20 relative">

        {/* ================= CONTENT ================= */}
        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* IMAGE */}
          <div className="w-full flex justify-center">
            <img
              src="https://i.postimg.cc/8kWKHMLp/Product-Image.png"
              alt="Special Perfume"
              className="md:w-[651px] md:h-[700px] object-cover rounded-[32px] md:rounded-[48px]"
            />
          </div>

          {/* DESCRIPTION (DESKTOP) */}
          <div className="hidden md:block mt-40">
            <p className="text-[25px]">
              An exclusive creation from Sanrayn, this special perfume delivers a
              luxurious, long-lasting aroma crafted with integrity. Elegant,
              smooth, and versatile, it’s designed to elevate your presence and
              leave a lasting impression.
            </p>

            <button className="bg-[#DBAB35] text-black px-6 py-3 rounded-full text-[20px] font-bold w-[210px] h-[55px] mt-12">
              Shop Now
            </button>
          </div>
        </div>

        {/* ================= MOBILE TEXT ================= */}
        <div className="md:hidden mt-8 p-10 text-[#571313]">
          

          <div className="flex items-center gap-3 mt-1">
            <h2
            className="text-[42px] font-bold leading-tight"
            style={{ letterSpacing: "-2px" }}
          >
            SUNRAYN <span className="uppercase font-medium">Specials</span>
          </h2>
            <p
              className="text-[40px] font-light uppercase leading-tight"
              style={{ letterSpacing: "-2px" }}
            >
              
            </p>
            <img src={Button} alt="" className="h-10" />
          </div>

          <p className="text-[16px] mt-4 text-black">
            An exclusive creation from Sanrayn, this special perfume delivers a
            luxurious, long-lasting aroma crafted with integrity. Elegant,
            smooth, and versatile, it’s designed to elevate your presence and
            leave a lasting impression.
          </p>

          <button className="bg-[#DBAB35] text-black px-6 py-3 rounded-full text-[16px] font-bold mt-6">
            Shop Now
          </button>
        </div>

        {/* ================= DESKTOP FLOATING TEXT ================= */}
        <div className="hidden md:inline-flex absolute top-[250px] left-[530px] transform -translate-y-1/2 text-[#571313]">
          <h2
            className="text-[120px] font-bold leading-[110%]"
            style={{ letterSpacing: "-7.2px" }}
          >
            SUNRAYN
          </h2>

          <div className="flex items-center ml-5">
            <p
              className="text-[120px] font-light uppercase leading-[100%]"
              style={{ letterSpacing: "-7.2px" }}
            >
              SPECIALS
            </p>
            <img src={Button} alt="" className="h-[64px] ml-[27px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Special;
