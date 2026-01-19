import React, { useEffect, useState } from 'react';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { LuCrown, LuHeartHandshake } from 'react-icons/lu';
import { PiSealCheck } from 'react-icons/pi';
import Discount from '../assets/Discount Price.png';
import Original from '../assets/Original Price.png';
import Frame from '../assets/Frame (2).png';
import Checkmark from '../assets/checkmark-badge-01.png';
import Crown from '../assets/crown-03.png';
import { FaStar } from 'react-icons/fa';

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

const [current, setCurrent] = useState(0);
const [index, setIndex] = useState(0);
// ITEMS swipe
const [itemTouchStart, setItemTouchStart] = useState(null);
const [itemTouchEnd, setItemTouchEnd] = useState(null);
const [itemsPerView, setItemsPerView] = useState(3);

useEffect(() => {
  const updateView = () => {
    if (window.innerWidth < 768) {
      setItemsPerView(1);
    } else if (window.innerWidth < 1280) {
      setItemsPerView(2);
    } else {
      setItemsPerView(3);
    }
  };

  updateView();
  window.addEventListener("resize", updateView);
  return () => window.removeEventListener("resize", updateView);
}, []);


// PREMIUM swipe
const [premTouchStart, setPremTouchStart] = useState(null);
const [premTouchEnd, setPremTouchEnd] = useState(null);
const minSwipeDistance = 50;
const onItemTouchStart = (e) => {
  setItemTouchEnd(null);
  setItemTouchStart(e.targetTouches[0].clientX);
};

const onItemTouchMove = (e) =>
  setItemTouchEnd(e.targetTouches[0].clientX);

const onItemTouchEnd = () => {
  if (!itemTouchStart || !itemTouchEnd) return;
  const distance = itemTouchStart - itemTouchEnd;
  if (distance > minSwipeDistance) next();
  if (distance < -minSwipeDistance) prev();
};


const onPremTouchStart = (e) => {
  setPremTouchEnd(null);
  setPremTouchStart(e.targetTouches[0].clientX);
};

const onPremTouchMove = (e) =>
  setPremTouchEnd(e.targetTouches[0].clientX);

const onPremTouchEnd = () => {
  if (!premTouchStart || !premTouchEnd) return;
  const distance = premTouchStart - premTouchEnd;
  if (distance > minSwipeDistance) nextPrem();
  if (distance < -minSwipeDistance) prevPrem();
};


const premiumItems = [
  {
    title: "Premium",
    desc: "All our fragrances are inspired by an exclusive collection of popular and iconic aromas",
    bg: "#F6EAEF",
    color: "#DC7C2A",
    icon: Crown,
  },
  {
    title: "Certified",
    desc: "Certified, skin-friendly formula, Cruelty-free, crafted with care to ensure the safety of our beloved users.",
    bg: "#E6F3EF",
    color: "#43B583",
    icon: Checkmark,
  },
  {
    title: "Made with Care",
    desc: "Every fragrance is responsibly crafted and carefully inspected to ensure perfection in every bottle.",
    bg: "#EEEBFF",
    color: "#FF4242",
    icon: Frame,
  },
];

const maxIndex = items.length - itemsPerView;

const next = () =>
  setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));

const prev = () =>
  setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));


  const nextPrem = () => setIndex((prevPrem) => (prevPrem + 1) % premiumItems.length);
  const prevPrem = () =>
    setIndex((prevPrem) => (prevPrem - 1 + premiumItems.length) % premiumItems.length);

    return (
        <div className='mx-auto px-[16px] pb-[16x] md:pr-[32px] md:pb-[32px]'>
            <div className='flex justify-between mb-[16px] md:mb-[32px]'>
            <div className='flex justify-center items-center text-center gap-[20px] md:gap-[32px]'>
                <div>
                    <p className='text-[25px] md:text-[50px] font-semibold text-[#282828] pl-[16px]'>Featured Perfumes</p>
                </div>
                <div>
                    <button className="bg-[#BA9948] text-white font-semibold px-[32px] py-[12px] rounded-full text-[14px] md:text-[20px] cursor-pointer w-[117px] h-[40px] md:w-[139px] md:h-[55px]">View All</button>
                </div>
            </div>
            <div className='hidden lg:flex gap-5 '>
                <button className="w-[55px] h-[55px] rounded-full bg-[#F5F1EA] shadow flex items-center justify-center cursor-pointer">
                              <GoChevronLeft  onClick={prev}  className='text-[35px] ' />
                            </button>
                <button className="w-[55px] h-[55px] rounded-full bg-[#F5F1EA] shadow flex items-center justify-center cursor-pointer">
                              <GoChevronRight onClick={next} className='text-[35px]' />
                            </button>
            </div>

            </div>

{/**** Items ****/}

{/* ================= DESKTOP GRID (UNCHANGED) ================= */}
<section className="relative overflow-hidden pb-[32px]">
  <div
    className="flex transition-transform duration-500 ease-in-out"
    style={{
      transform: `translateX(-${(current * 100) / itemsPerView}%)`,
    }}
  >
    {items.map((item, i) => (
      <div
        key={i}
        className="px-[16px]"
        style={{ minWidth: `${100 / itemsPerView}%` }}
      >
        {/* CARD (UNCHANGED UI) */}
        <div className="relative rounded-[32px] md:rounded-[48px] overflow-hidden bg-[#EDE8E0] h-[344px] md:h-[700px]">
          <img
            src={item.product}
            alt={item.title}
            className="absolute inset-0 object-cover mx-auto h-[220px] md:h-[501px]"
          />

          <div className="absolute bottom-0 left-0 w-full z-20 p-[16px] md:p-[40px]">
            <div className="flex items-center gap-2 text-[#FF9100]">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="h-[12px] w-[12px] md:h-[15px] md:w-[15px]" />
              ))}
              <span className="text-[#0D0C09] text-[12px] md:text-[14px]">1239</span>
            </div>

            <h3 className="text-[20px] md:text-[35px] font-semibold text-[#571313]">
              {item.title}
            </h3>

            <p className="text-[12px] md:text-[18px] text-[#0D0C09] mb-[12px] md:mb-[26px]">
              Sanrayn Original
            </p>

            <div className="flex items-center justify-between gap-3">
              <button className="bg-white px-[16px] md:px-[24px] py-[6px] md:py-[10px] rounded-full font-semibold">
                Add to Cart
              </button>

              <div className="flex gap-[12px] md:gap-[20px]">
                <img src={Original} className="h-[35px] md:h-[45px]" />
                <img src={Discount} className="h-[40px] md:h-[52px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* MOBILE ARROWS */}
  <div className="flex lg:hidden justify-center gap-5 mt-6">
    <button onClick={prev} className="w-[40px] h-[40px] rounded-full bg-[#F5F1EA]">
      <GoChevronLeft className="text-[30px]" />
    </button>
    <button onClick={next} className="w-[40px] h-[40px] rounded-full bg-[#F5F1EA]">
      <GoChevronRight className="text-[30px]" />
    </button>
  </div>
</section>


    {/******* Premium *******/}

   <section className="hidden lg:block mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[16px] md:gap-[32px] pl-[16px]">

<div className='flex bg-[#EEEBFF] rounded-[24px] md:py-[32px] 2xl:px-[48px] p-[24px] justify-center items-center 2xl:h-[325px]'> 
<div>
<span className='text-[#DC7C2A] text-6xl'><img src={Crown} alt="" className='h-[60px] w-[60px] lg:h-[80px] lg:w-[80px]' /></span>
<h3 className='text-[#DC7C2A] text-[25px] md:text-[35px] font-semibold mt-[20px] mb-2'>Premium</h3>
<p className='text-[#0D0C09] text-[16px] lg:text-[18px]'>All our fragrances are inspired by an exclusive collection of popular and iconic aromas</p>
</div>
<div>
  <img src="https://i.postimg.cc/DZv8tGB0/b20aa639-c0f6-43b7-b86f-f5199d28323a-1.png" alt=""  className="hidden 2xl:block" />
</div>
</div>
<div className='flex bg-[#EEEBFF] rounded-[24px] md:py-[32px] 2xl:px-[48px] p-[24px] justify-center items-center 2xl:h-[325px]'> 
<div>
<span className='text-[#43B583] text-6xl'><img src={Checkmark} alt="" className='h-[60px] w-[60px] lg:h-[80px] lg:w-[80px]' /></span>
<h3 className='text-[#43B583] text-[25px] md:text-[35px] mt-[20px] mb-2'>Certified</h3>
<p className='text-[#0D0C09] text-[16px] lg:text-[18px]'>Certified, skin-friendly formula, Cruelty-free, crafted with care to ensure the safety of our beloved users.</p>
</div>
<div>
  <img src="https://i.postimg.cc/DZv8tGB0/b20aa639-c0f6-43b7-b86f-f5199d28323a-1.png" alt=""  className="hidden 2xl:block" />
</div>
</div>
<div className='flex bg-[#EEEBFF] rounded-[24px] md:py-[32px] 2xl:px-[48px] p-[24px] justify-center items-center 2xl:h-[325px]'> 
<div>
<span className='text-[#FF4242] text-6xl'><img src={Frame} alt="" className='h-[60px] w-[60px] lg:h-[80px] lg:w-[80px]' /></span>
<h3 className='text-[#FF4242] text-[25px] md:text-[35px] mt-[20px] mb-2'>Made with Care</h3>
<p className='text-[#0D0C09] text-[16px] lg:text-[18px]'>Every fragrance is responsibly crafted and carefully inspected to ensure perfection in every bottle.</p>
</div>
<div>
  <img src="https://i.postimg.cc/DZv8tGB0/b20aa639-c0f6-43b7-b86f-f5199d28323a-1.png"  className="hidden 2xl:block" alt="" />
</div>
</div>

      </div>
    </section>

    {/* ================= PREMIUM MOBILE CAROUSEL ================= */}
<section className="lg:hidden pb-[16px]">
  <div
    className="relative overflow-hidden"
 onTouchStart={onPremTouchStart}
  onTouchMove={onPremTouchMove}
  onTouchEnd={onPremTouchEnd}
  >
    <div
      className="flex transition-transform duration-500"
      style={{ transform: `translateX(-${index * 100}%)` }}
    >
      {premiumItems.map((item, index) => (
        <div key={index} className="min-w-full">
          <div
            className="rounded-[24px] p-[24px]"
            style={{ backgroundColor: item.bg }}
          >
            <img src={item.icon} className="h-[60px] w-[60px]" />
            <h3
              className="text-[25px] font-semibold mt-[20px] mb-2"
              style={{ color: item.color }}
            >
              {item.title}
            </h3>
            <p className="text-[#0D0C09] text-[16px]">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* ARROWS */}
    <div className="flex justify-center gap-5 mt-6">
      <button onClick={prevPrem} className="w-[40px] h-[40px] bg-[#F5F1EA] rounded-full flex items-center justify-center">
        <GoChevronLeft className="text-[30px]" />
      </button>
      <button onClick={nextPrem} className="w-[40px] h-[40px] bg-[#F5F1EA] rounded-full flex items-center justify-center">
        <GoChevronRight className="text-[30px]" />
      </button>
    </div>
  </div>
</section>


        </div>
    );
};

export default Featured;