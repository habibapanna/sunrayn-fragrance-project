import React from 'react';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { LuCrown, LuHeartHandshake } from 'react-icons/lu';
import { PiSealCheck } from 'react-icons/pi';
import Discount from '../assets/Discount Price.png';
import Original from '../assets/Original Price.png';
import Frame from '../assets/Frame (2).png';
import Checkmark from '../assets/checkmark-badge-01.png';
import Crown from '../assets/crown-03.png';

const items = [
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
                    <p className='text-3xl md:text-[50px] font-semibold text-[#282828]'>Featured Perfumes</p>
                </div>
                <div>
                    <button className="bg-[#BA9948] text-white font-semibold px-8 py-3 rounded-full">View All</button>
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

{/**** Items ****/}

   <section className="mx-auto pb-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="relative rounded-4xl overflow-hidden bg-[#EDE8E0] aspect-[4/5] md:aspect-[3/4]"
                >
                  {/* PRODUCT IMAGE (BASE LAYER) */}
                  <img
                    src={item.product}
                    alt={item.title}
                    className="absolute inset-0 object-cover h-[501px] w-[501px]"
                  />
               {/* BOTTOM CONTENT */}
      <div className="absolute bottom-0 left-0 w-full z-20 p-[40px]">
        
        {/* Rating */}
        <div className="flex items-center gap-2 text-lg text-[#FF9100] mb-2">
          <span>★★★★★</span>
          <span className="text-[#0D0C09] text-[14px]">1239</span>
        </div>
      
        <h3 className="text-xl md:text-[35px] font-medium text-[#571313]">
          {item.title}
        </h3>
        <p className="text-[18px] text-[#0D0C09] mb-[26px]">
          Sanrayn Original
        </p>
      
        <div className="flex items-center justify-between gap-3">
          <button className="bg-white text-[#0D0C09] font-semibold px-6 py-3 rounded-full">
            Add to Cart
          </button>
      
          <div className="flex gap-[22px]">
            <img src={Original} alt="" className='h-[45px]' />
            <img src={Discount} alt="" className='h-[48px]' />
          </div>
        </div>
      </div>
      
                </div>
              ))}
            </div>
    </section>

    {/******* Premium *******/}

   <section className="mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

<div className='flex bg-[#F6EAEF] rounded-4xl py-[32px] px-[48px] justify-center items-center'> 
<div>
<span className='text-[#DC7C2A] text-6xl'><img src={Crown} alt="" className='h-[80px]' /></span>
<h3 className='text-[#DC7C2A] text-[35px] font-semibold mt-[20px] mb-2'>Premium</h3>
<p className='text-[#0D0C09] text-[16px]'>All our fragrances are inspired by an exclusive collection of popular and iconic aromas</p>
</div>
<div>
  <img src="https://i.postimg.cc/DZv8tGB0/b20aa639-c0f6-43b7-b86f-f5199d28323a-1.png" alt="" />
</div>
</div>
<div className='flex bg-[#E6F3EF] rounded-4xl py-[32px] px-[48px] justify-center items-center'> 
<div>
<span className='text-[#43B583] text-6xl'><img src={Checkmark} alt="" className='h-[80px]' /></span>
<h3 className='text-[#43B583] text-[35px] mt-[20px] mb-2'>Certified</h3>
<p className='text-[#0D0C09] text-[16px]'>Certified, skin-friendly formula, Cruelty-free, crafted with care to ensure the safety of our beloved users.</p>
</div>
<div>
  <img src="https://i.postimg.cc/DZv8tGB0/b20aa639-c0f6-43b7-b86f-f5199d28323a-1.png" alt="" />
</div>
</div>
<div className='flex bg-[#EEEBFF] rounded-4xl py-[32px] px-[48px] justify-center items-center'> 
<div>
<span className='text-[#FF4242] text-6xl'><img src={Frame} alt="" className='h-[80px]' /></span>
<h3 className='text-[#FF4242] text-[35px] mt-[20px] mb-2'>Made with Care</h3>
<p className='text-[#0D0C09] text-[16px]'>Every fragrance is responsibly crafted and carefully inspected to ensure perfection in every bottle.</p>
</div>
<div>
  <img src="https://i.postimg.cc/DZv8tGB0/b20aa639-c0f6-43b7-b86f-f5199d28323a-1.png" alt="" />
</div>
</div>

      </div>
    </section>

        </div>
    );
};

export default Featured;