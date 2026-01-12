import React from 'react';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

const categories = [
  {
    title: "Ambery Saffron",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
  },
  {
    title: "Ambery Saffron",
    product: "https://i.postimg.cc/WpSytKqM/c082e350-40e9-4486-acfd-e19a5713042c-1-(1).png",
  },
  {
    title: "Ambery Saffron",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
  },
];


const Featured = () => {
    return (
        <div className='mx-auto px-6 pb-10'>
            <div className='flex justify-between mb-10'>
            <div className='flex justify-center items-center text-center gap-10'>
                <div>
                    <p className='text-3xl md:text-5xl font-semibold text-[#282828]'>Featured Perfumes</p>
                </div>
                <div>
                    <button className="bg-[#BA9948] text-white font-semibold px-8 py-3 rounded-full">View All</button>
                </div>
            </div>
            <div className='flex gap-5'>
                <button className="w-10 h-10 rounded-full bg-[#F5F1EA] shadow flex items-center justify-center">
                              <GoChevronLeft />
                            </button>
                <button className="w-10 h-10 rounded-full bg-[#F5F1EA] shadow flex items-center justify-center">
                              <GoChevronRight />
                            </button>
            </div>

            </div>
   <section className="mx-auto px-6 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {categories.map((item, index) => (
          <div
            key={index}
            className="relative rounded-4xl overflow-hidden aspect-[4/5] md:aspect-[3/4]"
          >
            {/* PRODUCT IMAGE (BASE LAYER) */}
            <img
              src={item.product}
              alt={item.title}
              className="absolute inset-0 object-cover h-full w-full z-10"
            />
          {/* Rating */}
          <div className="flex items-center gap-2 text-sm text-[#DBAB35]">
            <span>★★★★★</span>
            <span className="text-gray-200">
              1239
            </span>
          </div>
            {/* TITLE (TOP LEFT) */}
            <h3 className=" text-xl font-medium text-[#2b1b14]">
              {item.title}
            </h3>
            <h3>Sanrayn Original</h3>

            {/* ARROW BUTTON (BOTTOM RIGHT) */}
            <button className="absolute bottom-6 right-6 z-20 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:scale-105 transition">
              <GoChevronRight />
            </button>
          </div>
        ))}
      </div>
    </section>

        </div>
    );
};

export default Featured;