import React from 'react';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import Instagram from '../assets/Instagram_logo_2016 1.png';
import Marquee from "react-fast-marquee";


const posts = [
  {
    title: "Men",
    product: "https://i.postimg.cc/mkc0WDcW/Container-(1).png",
  },
  {
    title: "Women",
    product: "https://i.postimg.cc/prn1167M/N6Apea-UPkl-Bb-Tmrqi-Me-Hki00U-png-(3).png",
  },
  {
    title: "Unisex",
    product: "https://i.postimg.cc/Rh4QBppP/Perfume-Image.png",
  },
  {
    title: "Unisex",
    product: "https://i.postimg.cc/59Y4VNW2/N6Apea-UPkl-Bb-Tmrqi-Me-Hki00U-png-(4).png",
  },
];
const inspiredBy = [
  {
    title: "Black Opium",
  },
  {
    title: "Love, Don’t be shy",
  },
  {
    title: "Good Girl",
  },
  {
    title: "Libre",
  },
  {
    title: "Light Blue",
  },
  {
    title: "Not a Perfume",
  },
];



const RecentPost = () => {
    return (
        <div className='mb-10 px-6'>
             <div className='flex justify-between mb-10'>
                        <div className='flex justify-center items-center text-center gap-10'>
                            <div>
                                <p className='text-3xl md:text-[50px] font-semibold text-[#282828]'>Recent Post on Instagram</p>
                            </div>
                            
                        </div>
                      
                        <div className='flex gap-5'>
                              <div>
                                
                                <button className="bg-[#F5F1EA] text-[#571313] font-semibold px-[32px] py-[12px] rounded-full flex justify-center items-center text-[24px] mr-3 cursor-pointer w-[180px] h-[55px]">
                                    <img src={Instagram} alt="" className='mr-2 h-[32px] ' />@Sanrayn</button>
                            </div>
                            <button className="w-[55px] h-[55px] rounded-full bg-[#F5F1EA] shadow flex items-center justify-center cursor-pointer">
                                          <GoChevronLeft className='text-[35px]' />
                                        </button>
                            <button className="w-[55px] h-[55px] rounded-full bg-[#F5F1EA] shadow flex items-center justify-center cursor-pointer">
                                          <GoChevronRight className='text-[35px]' />
                                        </button>
                        </div>
            
                        </div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {posts.map((item, index) => (
          <div
            key={index}
            className="relative rounded-[32px] overflow-hidden md:h-[494px] md:w-[440px]"
          >
            {/* PRODUCT IMAGE (BASE LAYER) */}
            <img
              src={item.product}
              alt={item.title}
              className="absolute inset-0 object-cover h-full w-full z-10"
            />
          </div>
        ))}
      </div>

{/* Inspired By MARQUEE */}
<div className="mt-10">
  <Marquee
    speed={40}
    gradient={false}
    pauseOnHover={true}
  >
    {inspiredBy.map((item, index) => (
      <button
        key={index}
        className="bg-[#F5F1EA] text-[#571313] px-[32px] py-[12px] rounded-full flex items-center text-[24px] font-medium mx-4 whitespace-nowrap"
      >
        Inspired by
        <span className="underline font-bold ml-3  cursor-pointer">
          {item.title}
        </span>
      </button>
    ))}
  </Marquee>
</div>


        </div>
    );
};

export default RecentPost;