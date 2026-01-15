import React from "react";
import Button from "../assets/Button Container.png";

const NewArrivals = () => {
  return (
    <section className="mx-auto px-[32px] pb-[32px]">
      <div className="bg-[#EDE8E0] rounded-[32px] md:rounded-[48px] p-6 md:p-20 relative">

        {/* ================= IMAGE GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
          
          {/* IMAGE 1 (always visible) */}
          <div className="relative rounded-[32px] md:rounded-[48px] overflow-hidden">
            <img
              src="https://i.postimg.cc/vT4crfPf/Product-Image-(2).png"
              alt="Product 1"
              className="w-full md:h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#EDE8E0]" />
          </div>

          {/* IMAGE 2 (desktop only) */}
          <div className="relative rounded-[48px] overflow-hidden hidden md:block">
            <img
              src="https://i.postimg.cc/9QcGyqYZ/Product-Image-(3).png"
              alt="Product 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#EDE8E0]" />
          </div>

          {/* IMAGE 3 (desktop only) */}
          <div className="relative rounded-[48px] overflow-hidden hidden md:block">
            <img
              src="https://i.postimg.cc/fbvtDwtd/Product-Image-(4).png"
              alt="Product 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#EDE8E0]" />
          </div>
        </div>

        {/* ================= TEXT SECTION ================= */}

        {/* MOBILE TEXT */}
        <div className="absolute left-[100px] top-[600px] mt-6 md:hidden text-[#571313]">
          <div className="flex items-center gap-3">
            <h2 className="text-[36px] font-bold leading-tight">
              NEW ARRIVALS
            </h2>
            <img src={Button} alt="" className="h-10" />
          </div>

          <p className="text-[28px] font-normal leading-tight mt-2 uppercase absolute left-[130px]">
            Premium Collections
          </p>
        </div>

        {/* DESKTOP TEXT (unchanged positioning) */}
        <div className="hidden md:block top-[600px] absolute md:top-[700px] left-[150px] transform -translate-y-1/2 text-[#571313]">
          <div className="inline-flex items-center">
            <h2
              className="text-[120px] font-bold"
              style={{
                lineHeight: "110%",
                letterSpacing: "-7.2px",
              }}
            >
              NEW ARRIVALS
            </h2>
            <img src={Button} alt="" className="ml-[31px] h-[64px]" />
          </div>

          <p
            className="text-[100px] font-normal relative left-[400px] uppercase"
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
