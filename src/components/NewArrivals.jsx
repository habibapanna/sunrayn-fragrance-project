import React from "react"; 
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const NewArrivals = () => {
  return (
    <section className="mx-auto px-6 pb-24">
      <div className="items-center gap-12 bg-[#EDE8E0] rounded-4xl p-20 relative">

        {/* IMAGE GRID */}
        <div className="grid grid-cols-3 gap-5">
          {/* Large Left Image */}
          <div className="relative rounded-4xl overflow-hidden">
            <img
              src="https://i.postimg.cc/9QcGyqYZ/Product-Image-(3).png"
              alt="Product 1"
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-full 
                            bg-gradient-to-b from-transparent to-[#EDE8E0]/70">
            </div>
          </div>

          {/* Top Right Image */}
          <div className="relative rounded-4xl overflow-hidden">
            <img
              src="https://i.postimg.cc/vT4crfPf/Product-Image-(2).png"
              alt="Product 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full h-full 
                            bg-gradient-to-b from-transparent to-[#EDE8E0]/70">
            </div>
          </div>

          {/* Bottom Right Image */}
          <div className="relative rounded-4xl overflow-hidden">
            <img
              src="https://i.postimg.cc/fbvtDwtd/Product-Image-(4).png"
              alt="Product 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full h-full 
                            bg-gradient-to-b from-transparent to-[#EDE8E0]/70">
            </div>
          </div>
        </div>

        {/* TEXT SECTION */}
        <div className="text-center lg:text-left space-y-4 absolute top-108 left-50">
          <h2 className="text-3xl md:text-6xl font-bold flex items-center text-[#571313]">
            NEW ARRIVALS
            <span className="text-xl text-[#571313]">
              <BsArrowUpRightCircleFill className="text-4xl ml-3" />
            </span>
          </h2>
          <p className="uppercase text-3xl md:text-6xl text-[#571313] ml-56">
            Premium Collections
          </p>
        </div>

      </div>
    </section>
  );
};

export default NewArrivals;
