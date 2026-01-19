import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { LuCrown, LuHeartHandshake } from 'react-icons/lu';
import { PiSealCheck } from 'react-icons/pi';
import Discount from '../assets/Discount Price.png';
import Original from '../assets/Original Price.png';
import { useEffect, useState } from 'react';
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

const BestSelling = () => {
const [current, setCurrent] = useState(0);
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

const maxIndex = items.length - itemsPerView;

const next = () =>
  setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));

const prev = () =>
  setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));


    return (
        <div className='mx-auto px-[16px] md:pr-[32px]'>
               <div className='flex justify-between mb-[16px] md:mb-[32px]'>
                         <div className='flex justify-center items-center text-center gap-[20px] md:gap-[32px]'>
                             <div className='text-left'>
                                 <p className='text-[25px] md:text-[50px] font-semibold text-[#282828] pl-[16px]' style={{ 
                                  
                                  letterSpacing: '-1px' }}>Best Selling Perfumes</p>
                             </div>
                             <div>
                                 <button className="bg-[#BA9948] text-white font-semibold px-[32px] py-[12px] rounded-full text-[14px] md:text-[20px] cursor-pointer w-[117px] h-[40px] md:w-[139px] md:h-[55px]">View All</button>
                             </div>
                         </div>
                         <div className='hidden lg:flex gap-5 '>
                             <button className="w-[55px] h-[55px] rounded-full bg-[#F5F1EA] shadow flex items-center justify-center cursor-pointer"  onClick={prev}>
                                           <GoChevronLeft className='text-[35px] ' />
                                         </button>
                             <button className="w-[55px] h-[55px] rounded-full bg-[#F5F1EA] shadow flex items-center justify-center cursor-pointer"  onClick={next}>
                                           <GoChevronRight className='text-[35px]' />
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

            
        </div>
    );
};

export default BestSelling;