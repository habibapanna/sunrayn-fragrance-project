import { useEffect, useState } from 'react';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { FaStar } from 'react-icons/fa';
import Premium from './Premium';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import { products } from '../data/productsData';




const Featured = () => {

  const [current, setCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const navigate = useNavigate();
    const { cartOpen, setCartOpen } = useOutletContext();

  // Adjust number of items per view based on screen width
  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth >= 1280) setItemsPerView(3); // xl
      else if (window.innerWidth >= 768) setItemsPerView(2); // lg
      else setItemsPerView(1); // mobile
    };

    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const maxIndex = products.length - itemsPerView;

  const next = () => setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));

   const handleAddToCart = () => {
    setCartOpen(true); 
  };

    return (
        <div className='mx-auto px-[8px] 2xl:px-[16px] pb-[16x] 2xl:pb-[32px]'>
            <div className='hidden lg:flex justify-between mb-[16px] 2xl:mb-[32px] px-[16px] 2xl:px-[32px]'>
            <div className='flex justify-center items-center text-center gap-[20px] 2xl:gap-[32px]'>
                <div>
                    <p className='text-[20px] lg:text-[35px] 2xl:text-[50px] font-semibold text-[#282828] pl-[16px]'>Featured Perfumes</p>
                </div>
                <div>
                      <button className="transition-all duration-300 ease-out
    hover:bg-[#BA9948] hover:text-white border border-[#BA9948] text-[#1D0B01] font-semibold  2xl:px-[32px] 2xl:py-[12px] rounded-full cursor-pointer lg:w-[139px] lg:h-[50px] text-[14px] lg:text-[16px] 2xl:text-[20px] flex items-center justify-center">
            <Link to="/productList">View All</Link>
          </button>
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
            <div className='flex lg:hidden justify-between items-center px-[16px] pb-[16px]
            '>
                <div>
                    <p className='text-[25px] lg:text-[35px] 2xl:text-[50px] font-semibold text-[#282828]'>Featured Perfumes</p>
                </div>
                <div>
                    <button className="hover:bg-[#BA9948] hover:text-white border border-[#BA9948] text-[#1D0B01] px-[24px] py-[8px] rounded-full text-[14px] cursor-pointer flex items-center w-[100px] h-[30px] "><Link to='/productList'>View All</Link></button>
                </div>
            </div>
{/* CAROUSEL */}
          <section className="relative overflow-hidden mb-[16px] 2xl:mb-[32px]">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(current * 100) / itemsPerView}%)`,
          }}
        >
          {products.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-[8px] 2xl:px-[16px]"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <div
                className="group relative rounded-[16px]  md:rounded-[24px]
    h-[384px] lg:h-[700px]
    cursor-pointer overflow-hidden"
                onClick={() => navigate(`/productList/${item.slug}`)}
              >
                {item.off && (
                    <div className="lg:mt-[40px] lg:ml-[40px] ml-[20px] mt-[20px]">
                      <button className="bg-[#FFFF]/60 px-[10px] 2xl:px-[16px] h-[25px] 2xl:h-[35px] rounded-full font-normal text-[12px] lg:text-[14px]">
                        {item.off}
                      </button>
                    </div>
                  )}

                <img
                  src={item.images}
                  alt={item.title}
                  className="absolute inset-0 mx-auto h-full w-full object-cover group-hover:scale-105 duration-1000"
                />
 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full z-20 p-[20px] lg:p-[40px]">
                  <div className="flex items-center gap-[2px] 2xl:gap-[8px] text-[#BA9948]">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="h-[12px] lg:h-[15px]" />
                    ))}
                    <span className="text-[#FFF] text-[12px] 2xl:text-[14px] font-normal">
                      1239
                    </span>
                  </div>

                  <h3 className="text-[20px] md:text-[35px] font-normal text-[#FFF]">
                    {item.title}
                  </h3>

                  <p className="text-[12px] 2xl:text-[18px] text-[#FFF] mb-[12px] md:mb-[26px]">
                    Sanrayn Original
                  </p>  
                  <div className="flex items-center justify-between gap-3">
                     <button
                     onClick={(e) => {
    e.stopPropagation(); 
    handleAddToCart(item); 
  }}
  className="
    hover:bg-white backdrop-blur-md
    px-[24px] py-[10px]
    rounded-full font-semibold
    w-[130px] h-[32px]
    lg:h-[45px] lg:w-[167px]
    text-[14px] 2xl:text-[16px]
    flex items-center justify-center
    cursor-pointer bg-[#1D0B01]/50
    hover:text-[#1D0B01]
    transition-all duration-500 ease-out
   text-white border border-white
  "
>
  Add to Cart
</button>

                    <div className="flex gap-[12px] md:gap-[20px]">
                      <div>
                        <button className="text-[#FFF] text-[16px] py-[10px] px-[20px] rounded-[100px] line-through hidden lg:block border border-white">
                          ${item.oldPrice}
                        </button>
                      </div>
                      <div className="relative 2xl:w-[105px] 2xl:h-[45px] text-[16px] 2xl:text-[18px] h-[33px] w-[68px] font-normal"
                      >
                        <div className="absolute -top-[2px] 2xl:-top-[10px] left-1/2 -translate-x-1/2 bg-[#1D0B01] text-[8px] text-white 2xl:text-[10px] font-bold z-10 2xl:h-[20px] h-[10px] w-[35px] 2xl:w-[50px] flex items-center justify-center">
                          -{Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100)}% Off
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 105 45" fill="none">
                          <path
                            d="M95 11V0H10V11C4.47715 11 0 15.4772 0 21V24C0 29.5228 4.47715 34 10 34V45H95V34C100.523 34 105 29.5228 105 24V21C105 15.4772 100.523 11 95 11Z"
                            fill="#BA9948"
                          />
                          <text
                            x="52.5"
                            y="30"
                            textAnchor="middle"
                            fontWeight="700"
                            fill="#FFFFFF"
                            fontFamily="sans-serif"
                          >
                            ${item.price.toFixed(2)}
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ARROWS */}
          <div className="flex lg:hidden justify-center gap-5 mt-[16px]">
            <button
              onClick={prev}
              className="w-[40px] h-[40px] bg-[#F5F1EA] rounded-full flex items-center justify-center"
            >
              <GoChevronLeft className="text-[28px]" />
            </button>
            <button
              onClick={next}
              className="w-[40px] h-[40px] bg-[#F5F1EA] rounded-full flex items-center justify-center"
            >
              <GoChevronRight className="text-[28px]" />
            </button>
          </div>
      </section>

<section className=' px-[8px] 2xl:px-[16px]'><Premium></Premium></section>

        </div>
    );
};

export default Featured;