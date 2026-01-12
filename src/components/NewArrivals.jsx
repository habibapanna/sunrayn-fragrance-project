import React from "react"; 
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const NewArrivals = () => {
  return (
    <section className="mx-auto px-6 pb-10">
      <div className="items-center gap-12 bg-[#EDE8E0] rounded-4xl p-20 relative">

        {/* IMAGE GRID */}
        <div className="grid grid-cols-3 gap-5">
          <div className="relative rounded-4xl overflow-hidden">
            <img
              src="https://i.postimg.cc/vT4crfPf/Product-Image-(2).png"
              alt="Product 1"
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-full 
                            bg-gradient-to-b from-transparent to-[#EDE8E0]/90"></div>
          </div>

          <div className="relative rounded-4xl overflow-hidden">
            <img
              src="https://i.postimg.cc/9QcGyqYZ/Product-Image-(3).png"
              alt="Product 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full h-full 
                            bg-gradient-to-b from-transparent to-[#EDE8E0]/70"></div>
          </div>

          <div className="relative rounded-4xl overflow-hidden">
            <img
              src="https://i.postimg.cc/fbvtDwtd/Product-Image-(4).png"
              alt="Product 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full h-full 
                            bg-gradient-to-b from-transparent to-[#EDE8E0]/70"></div>
          </div>
        </div>

        {/* TEXT SECTION */}
        <div
          className="absolute top-[80%] left-[15%] transform -translate-y-1/2"
        >
          {/* NEW ARRIVALS + Icon */}
          <div className="relative inline-flex items-center justify-center">
            <h2 className="text-4xl md:text-7xl font-bold text-[#571313]">
              NEW ARRIVALS
            </h2>
            <BsArrowUpRightCircleFill className="text-4xl ml-3 bg-white rounded-full text-[#571313]" />
          </div>

          {/* Premium Collections aligned under specific letters */}
          <p className="uppercase text-3xl md:text-6xl text-[#571313] relative left-[15rem]">
            Premium Collections
          </p>
        </div>

      </div>
    </section>
  );
};

export default NewArrivals;
