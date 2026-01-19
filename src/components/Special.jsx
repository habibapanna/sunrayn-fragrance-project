import React from "react";
import Button from "../assets/Button Container.png";

const Special = () => {
  return (
    <section className="mx-auto pb-[16px] px-[16px] md:px-[32px] md:pb-[32px]">
      <div className="bg-[#EDE8E0] rounded-[32px] md:rounded-[48px] lg:p-20 relative cursor-pointer">

        {/* ================= CONTENT ================= */}
        <div className="flex flex-col lg:flex-row items-center gap-10">

          {/* IMAGE */}
          <div className="relative w-full flex justify-center">
            <img
              src="https://i.postimg.cc/8kWKHMLp/Product-Image.png"
              alt="Special Perfume"
              className="h-full w-full object-cover rounded-[32px] md:rounded-[48px]"
            />
             <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-transparent to-[#EDE8E0]" />
          </div>
          
          {/* DESCRIPTION (DESKTOP) */}
          <div className="hidden md:block lg:mt-40 md:p-20 lg:p-0">
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
        <div className="md:hidden pb-[24px] px-[24px] text-[#571313]">
          

          <div className="flex items-center gap-2">
            <h2
            className="text-[25px] font-bold leading-tight"
          >
            SUNRAYN 
          </h2>
            <p
              className=" font-light uppercase leading-tight"
            >
              <span className="uppercase font-medium text-[25px]">Specials</span>
            </p>
            <img src={Button} alt="" className="h-[30px] w-[30px]" />
          </div>

          <p className="text-[14px] mt-4 text-black">
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
        <div className=" hidden md:inline-flex absolute transform -translate-y-1/2 text-[#571313] md:top-[900px] md:left-[90px]

    lg:top-[200px] lg:left-[350px] xl2:left-[480px]
    2xl:top-[250px] 2xl:left-[450px]">
          <h2
            className=" font-bold leading-[110%]
            md:text-[55px]
    lg:text-[60px]
    xl2:text-[80px]
    2xl:text-[110px]"
            style={{ letterSpacing: "-7.2px" }}
          >
            SUNRAYN
          </h2>

          <div className="flex items-center ml-5">
            <p
              className="font-light uppercase leading-[100%]
              md:text-[50px]
    lg:text-[60px]
    xl2:text-[80px]
    2xl:text-[110px]"
              style={{ letterSpacing: "-7.2px" }}
            >
              SPECIALS
            </p>
            <img src={Button} alt="" className="md:h-[49px] md:w-[49px] ml-[20px]
    lg:h-[65px] lg:w-[65px]
" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Special;
