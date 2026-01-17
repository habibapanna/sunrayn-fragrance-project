import React, { useState } from 'react';
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
  const [current, setCurrent] = useState(0);

const total = 2;

const next = () => setCurrent((prev) => (prev + 1) % total);
const prev = () => setCurrent((prev - 1 + total) % total);

    return (
        <div className='mx-auto max-w-full px-[16px] pb-[16px] md:px-[32px] md:pb-[32px]'>
             <div className='hidden lg:flex justify-between mb-[32px]'>
                        <div className='flex justify-center items-center text-center gap-10'>
                            <div className='text-left'>
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
                        {/* for mobile */}
  <div className='lg:hidden mb-[16px] md:mb-[32px]'>
            <div className='flex justify-between items-center text-center gap-[20px] md:gap-[32px]'>
                <div>
                    <p className='text-[25px] md:text-[50px] font-semibold text-[#282828]'>Instagram</p>
                </div>
                <div>
                                
                                <button className="bg-[#F5F1EA] text-[#571313] font-semibold pl-[12px] pr-[16px] py-[12px] rounded-full flex justify-center items-center text-[20px] cursor-pointer w-[150px] h-[40px]">
                                    <img src={Instagram} alt="" className='mr-2 h-[24px] ' />@Sanrayn</button>
                            </div>
            </div>
            </div>

<div className="hidden lg:grid lg:grid-cols-4 gap-[16px] md:gap-[32px]">
        {posts.map((item, index) => (
          <div
            key={index}
            className="relative rounded-[16px] md:rounded-[32px] overflow-hidden h-[150px] md:h-[494px]"
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

      {/* for mobile */}
{/* MOBILE CAROUSEL */}
<div className="lg:hidden overflow-hidden relative">
  <div
    className="flex transition-transform duration-500 ease-in-out"
    style={{ transform: `translateX(-${current * 100}%)` }}
  >
    {posts.reduce((result, item, index) => {
      // Group 2 images per slide
      if (index % 2 === 0) result.push([item]);
      else result[result.length - 1].push(item);
      return result;
    }, []).map((group, index) => (
      <div key={index} className="flex-shrink-0 w-full flex gap-2">
        {group.map((item, idx) => (
          <div
            key={idx}
            className="relative rounded-[16px] overflow-hidden h-[150px] w-1/2"
          >
            <img
              src={item.product}
              alt={item.title}
              className="absolute inset-0 object-cover h-full w-full"
            />
          </div>
        ))}
      </div>
    ))}
  </div>

  {/* MOBILE NAV BUTTONS */}
  <div className="flex gap-4 mt-6  justify-center">
    <button
      onClick={prev}
      className="w-[40px] h-[40px] rounded-full bg-[#F5F1EA] shadow flex items-center justify-center"
    >
      <GoChevronLeft className="text-[28px]" />
    </button>

    <button
      onClick={next}
      className="w-[40px] h-[40px] rounded-full bg-[#F5F1EA] shadow flex items-center justify-center"
    >
      <GoChevronRight className="text-[28px]" />
    </button>
  </div>
</div>


{/* Inspired By MARQUEE */}
<div className=" pt-[16px] md:pt-[32px]">
  <Marquee
    speed={40}
    gradient={false}
    pauseOnHover={true}
  >
    {inspiredBy.map((item, index) => (
      <button
        key={index}
        className="bg-[#F5F1EA] text-[#571313] px-[32px] py-[12px] rounded-full flex items-center text-[18px] md:text-[24px] font-medium mx-2 md:mx-4 whitespace-nowrap"
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