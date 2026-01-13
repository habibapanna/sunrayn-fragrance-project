import React from 'react';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

const blogs = [
  {
    title: "The Rise of Halal Luxury Fragrances in the Modern World",
    product: "https://i.postimg.cc/KvmJSjd2/Product-Image-(5).png",
  },
  {
    title: "How to Choose Your Signature Scent Based on Personality",
    product: "https://i.postimg.cc/Rh4QBppP/Perfume-Image.png",
  },
  {
    title: "Crafting Luxury Without Compromise The Sanrayn Philosophy",
    product: "https://i.postimg.cc/vTdvj2f0/Product-Image-(1).png",
  },
];

const Blogs = () => {
    return (
        <div className='mx-auto px-6 pb-10'>
            <div className='flex justify-between mb-10'>
            <div className='flex justify-center items-center text-center gap-10'>
                <div>
                    <p className='text-3xl md:text-[50px] font-semibold text-[#282828]'>The Sanrayn Blogs</p>
                </div>
                <div>
                    <button className="bg-[#BA9948] text-white font-semibold px-8 py-3 rounded-full">Read All</button>
                </div>
            </div>
            <div className='flex gap-5'>
                <button className="w-[55px] h-[55px] rounded-full bg-[#F5F1EA] shadow flex items-center justify-center">
                              <GoChevronLeft className='text-[35px]' />
                            </button>
                <button className="w-[55px] h-[55px] rounded-full bg-[#F5F1EA] shadow flex items-center justify-center">
                              <GoChevronRight className='text-[35px]' />
                            </button>
            </div>

            </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {blogs.map((item, index) => (
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
            {/* OVERLAY */}
<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/50 via-black/30 to-transparent" />

{/* TITLE */}
<div className="absolute bottom-8 left-8 right-8 z-30">
  <h3 className="text-white text-2xl md:text-[32px] font-medium leading-tight">
    {item.title}
  </h3>
</div>


          </div>
        ))}
      </div>
        </div>
    );
};

export default Blogs;