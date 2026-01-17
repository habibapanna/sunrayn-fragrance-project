import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { LuCrown, LuHeartHandshake } from 'react-icons/lu';
import { PiSealCheck } from 'react-icons/pi';
import Discount from '../assets/Discount Price.png';
import Original from '../assets/Original Price.png';
import { useState } from 'react';


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

  const next = () => setCurrent((prev) => (prev + 1) % items.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + items.length) % items.length);

    return (
        <div className='mx-auto px-[16px] pb-[16px] md:pb-[32px] md:px-[32px]'>
               <div className='flex justify-between mb-[16px] md:mb-[32px]'>
                         <div className='flex justify-center items-center text-center gap-[20px] md:gap-[32px]'>
                             <div className='text-left'>
                                 <p className='text-[25px] md:text-[50px] font-semibold text-[#282828]' style={{ 
                                  
                                  letterSpacing: '-1px' }}>Best Selling Perfumes</p>
                             </div>
                             <div>
                                 <button className="bg-[#BA9948] text-white font-semibold px-[32px] py-[12px] rounded-full text-[14px] md:text-[20px] cursor-pointer w-[117px] h-[40px] md:w-[139px] md:h-[55px]">View All</button>
                             </div>
                         </div>
                         <div className='hidden md:flex gap-5 '>
                             <button className="w-[55px] h-[55px] rounded-full bg-[#F5F1EA] shadow flex items-center justify-center cursor-pointer">
                                           <GoChevronLeft className='text-[35px] ' />
                                         </button>
                             <button className="w-[55px] h-[55px] rounded-full bg-[#F5F1EA] shadow flex items-center justify-center cursor-pointer">
                                           <GoChevronRight className='text-[35px]' />
                                         </button>
                         </div>
             
                         </div>
          {/**** Items ****/}

{/* ================= MOBILE CAROUSEL ================= */}
<section className="md:hidden pb-[16px] md:pb-[32px]">
  <div className="relative overflow-hidden">
    <div
      className="flex transition-transform duration-500 ease-in-out"
      style={{ transform: `translateX(-${current * 100}%)` }}
    >
      {items.map((item, index) => (
        <div key={index} className="min-w-full">
          <div className="relative rounded-[24px] md:rounded-[48px] overflow-hidden bg-[#EDE8E0] h-[344px] md:h-[700px] md:w-[598px]">
            <img
              src={item.product}
              alt={item.title}
              className="absolute inset-0 object-cover mx-auto md:ml-[48px] h-[220px] w-[220px] md:h-[501px] md:w-[501px]"
            />

            <div className="absolute bottom-0 left-0 w-full z-20 p-[16px] md:p-[40px]">
              <div className="flex items-center gap-[2px] text-lg text-[#FF9100]">
                <span>★★★★★</span>
                <span className="text-[#0D0C09] text-[10px] md:text-[14px]">1239</span>
              </div>

              <h3 className="md:text-[35px] text-[20px] font-medium text-[#571313]">
                {item.title}
              </h3>

              <p className="md:text-[18px] text-[12px] text-[#0D0C09] mb-[12px] md:mb-[26px]">
                Sanrayn Original
              </p>

              <div className="flex items-center justify-between gap-3">
                <button className="bg-white text-[#0D0C09] font-semibold px-[16px] py-[5px] md:px-[24px] md:py-[10px] rounded-[100px] text-[14px] md:text-[16px] cursor-pointer h-[35px] w-[115px] md:h-[45px] md:w-[167px]">
                  Add to Cart
                </button>

                <div className="flex gap-[16px] md:gap-[20px]">
                  <img src={Original} alt="" className="h-[35px] w-[55px] md:w-[70px] md:h-[45px] " />
                  <img src={Discount} alt="" className="w-[75px] h-[40px] md:h-[52px] md:w-[105px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* MOBILE ARROWS */}
    <div className="flex gap-5 mt-6  justify-center">
      <button
        onClick={prev}
        className="w-[40px] h-[40px] rounded-full bg-[#F5F1EA] shadow flex items-center justify-center"
      >
        <GoChevronLeft className="text-[35px]" />
      </button>

      <button
        onClick={next}
        className="w-[40px] h-[40px] rounded-full bg-[#F5F1EA] shadow flex items-center justify-center"
      >
        <GoChevronRight className="text-[35px]" />
      </button>
    </div>
  </div>
</section>

{/* ================= DESKTOP GRID (UNCHANGED) ================= */}
<section className="hidden md:block mx-auto">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-[32px]">
    {items.map((item, index) => (
      <div
        key={index}
        className="relative rounded-[48px] overflow-hidden bg-[#EDE8E0] md:h-[700px]"
      >
        <img
          src={item.product}
          alt={item.title}
          className="absolute inset-0 object-cover lg:ml-[48px] h-[501px] mx-auto"
        />

        <div className="absolute bottom-0 left-0 w-full z-20 p-[40px]">
          <div className="flex items-center gap-2 text-lg text-[#FF9100]">
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
            <button className="bg-white text-[#0D0C09] font-semibold px-[24px] py-[10px] rounded-[100px] cursor-pointer h-[45px] w-[167px]">
              Add to Cart
            </button>

            <div className="flex gap-[16px]">
              <img src={Original} alt="" className="h-[45px] w-[70px]" />
              <img src={Discount} alt="" className="h-[52px] w-[105px]" />
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
            
        </div>
    );
};

export default BestSelling;