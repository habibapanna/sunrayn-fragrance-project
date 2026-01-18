import React from "react";
import Button from "../assets/Button Container.png";

const NewArrivals = () => {
  return (
    <section className="mx-auto max-w-full px-[16px] pb-[16px] md:px-[32px] md:pb-[32px]">
      <div className="bg-[#EDE8E0] rounded-[32px] md:rounded-[48px] md:p-20 relative">

        {/* ================= IMAGE GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
          
          {/* IMAGE 1 */}
          <div className="relative rounded-[32px] md:rounded-[48px] overflow-hidden">
            <img
              src="https://i.postimg.cc/vT4crfPf/Product-Image-(2).png"
              alt="Product 1"
              className="w-full md:h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#EDE8E0]" />
          </div>

          {/* IMAGE 2 */}
          <div className="relative rounded-[48px] overflow-hidden hidden md:block">
            <img
              src="https://i.postimg.cc/9QcGyqYZ/Product-Image-(3).png"
              alt="Product 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#EDE8E0]" />
          </div>

          {/* IMAGE 3 */}
          <div className="relative rounded-[48px] overflow-hidden hidden lg:block">
            <img
              src="https://i.postimg.cc/fbvtDwtd/Product-Image-(4).png"
              alt="Product 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#EDE8E0]" />
          </div>
        </div>

        {/* ================= TEXT SECTION ================= */}

        {/* MOBILE TEXT (fixed safely) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[326px] md:hidden text-[#571313] w-full px-4">
          <div className="flex items-center justify-center gap-3">
            <h2 className="text-[30px] font-bold leading-tight">
              NEW ARRIVALS
            </h2>
            <img src={Button} alt="" className="h-[23px] w-[23px]" />
          </div>

          <p className="text-[24px] font-normal leading-tight mt-2 uppercase left-[122px] absolute">
            Premium Collections
          </p>
        </div>

        {/* DESKTOP TEXT — UNCHANGED */}
        <div className="hidden md:block absolute md:top-[400px] lg:top-[320px] xl2:top-[600px] 2xl:top-[700px] left-[150px] transform -translate-y-1/2 text-[#571313]">
          <div className="inline-flex items-center">
            <h2
              className=" font-bold
        lg:text-[60px]  xl2:text-[80px] 2xl:text-[120px]"
              style={{
                lineHeight: "110%",
                letterSpacing: "-7.2px",
              }}
            >
              NEW ARRIVALS
            </h2>
            <img src={Button} alt="" className="ml-[31px]
        lg:h-[48px] lg:w-[48px]
        xl2:h-[56px] xl2:w-[56px]
        2xl:h-[64px] 2xl:w-[64px]" />
          </div>

          <p
            className=" uppercase font-normal
      lg:text-[40px]
      xl2:text-[60px]     
      2xl:text-[100px]
      lg:left-[120px]
      xl2:left-[260px]
      2xl:left-[400px]
      relative"
            style={{
              lineHeight: "110%",
              letterSpacing: "-7.2px",
            }}
          >
            Premium Collections
          </p>
        </div>

      </div>
    </section>
  );
};

export default NewArrivals;
