import { useEffect, useState } from 'react';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import Discount from '../assets/Discount Price.png';
import { FaStar } from 'react-icons/fa';
import Premium from './Premium';

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
const [itemsPerView, setItemsPerView] = useState(3);

useEffect(() => {
  const updateView = () => {
    if (window.innerWidth < 1024) {
      // mobile + md
      setItemsPerView(1);
    } else if (window.innerWidth < 1280) {
      // lg
      setItemsPerView(2);
    } else {
      // xl+
      setItemsPerView(3);
    }
  };

  updateView();
  window.addEventListener("resize", updateView);
  return () => window.removeEventListener("resize", updateView);
}, []);


const minSwipeDistance = 50;



const maxIndex = items.length - itemsPerView;

const next = () =>
  setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));

const prev = () =>
  setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));


    return (
        <div className='mx-auto px-[16px] pb-[16x] md:pb-[32px]'>
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
 {/* CAROUSEL */}
     <section className="relative overflow-hidden pb-[16px] md:pb-[32px]">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(current * 100) / itemsPerView}%)`,
              }}
            >
              {items.map((item, i) => (
                <div
                  key={i}
                  className="flex-shrink-0"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  {/* OUTER SPACING (SAFE) */}
                  <div className=" md:mx-[16px]">
                    {/* CARD */}
                    <div className="relative rounded-[24px] md:rounded-[48px] overflow-hidden bg-[#EDE8E0] h-[344px] md:h-[700px]">
                      <img
                        src={item.product}
                        alt={item.title}
                        className="absolute inset-0 object-cover mx-auto h-[220px] md:h-[501px]"
                      />
    
                      <div className="absolute bottom-0 left-0 w-full z-20 p-[16px] md:p-[40px]">
                        <div className="flex items-center gap-2 text-[#FF9100]">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="h-[12px] md:h-[15px]" />
                          ))}
                          <span className="text-[#0D0C09] text-[12px] md:text-[14px]">
                            1239
                          </span>
                        </div>
    
                        <h3 className="text-[20px] md:text-[35px] font-semibold text-[#571313]">
                          {item.title}
                        </h3>
    
                        <p className="text-[12px] md:text-[18px] text-[#0D0C09] mb-[12px] md:mb-[26px]">
                          Sanrayn Original
                        </p>
    
                        <div className="flex items-center justify-between gap-3">
                          <button className="bg-white px-[16px] md:px-[24px] py-[6px] md:py-[10px] rounded-full font-semibold hover:bg-[#DBAB35] cursor-pointer 2xl:h-[45px] 2xl:w-[167px]">
                            Add to Cart
                          </button>
    
                          <div className="flex gap-[12px] md:gap-[20px]">
                             <div>
                                <button className="text-[#FC2525] text-[16px] bg-[#FFFFFF80]/50 py-[10px] px-[20px] rounded-[100px] line-through">$20</button>
                            </div>
                                                       <div className="relative w-[105px] h-[45px]">
  {/* Discount badge */}
  <div className="absolute -top-[10px] left-1/2 -translate-x-1/2 
  bg-[#1D0B01] text-white text-[8px] font-bold z-10 
  h-[14px] w-[44px] 
  flex items-center justify-center">
  -40% Off
</div>


  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="105"
    height="45"
    viewBox="0 0 105 45"
    fill="none"
  >
    <path
      d="M95 11V0H10V11C4.47715 11 0 15.4772 0 21V24C0 29.5228 4.47715 34 10 34V45H95V34C100.523 34 105 29.5228 105 24V21C105 15.4772 100.523 11 95 11Z"
      fill="#BA9948"
    />

    {/* Price text */}
    <text
      x="52.5"
      y="30"
      textAnchor="middle"
      fontSize="16"
      fontWeight="700"
      fill="#FFFFFF"
      fontFamily="sans-serif"
    >
      $29.40
    </text>
  </svg>
</div>
                          </div>
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

<section className='2xl:px-[16px]'><Premium></Premium></section>

        </div>
    );
};

export default Featured;