import { FaCheck, FaStar } from "react-icons/fa";
import { products } from "../data/productsData";
import { Link, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";


const ProductCard = () => {
  const [limit, setLimit] = useState(2);
const { cartOpen, setCartOpen } = useOutletContext();
    const [showCartToast, setShowCartToast] = useState(false);

useEffect(() => {
  const updateLimit = () => {
    if (window.innerWidth >= 1536) {
      setLimit(3); // 2xl
    } else if (window.innerWidth >= 768) {
      setLimit(2); // lg
    } else {
      setLimit(1); // mobile
    }
  };

  updateLimit();
  window.addEventListener("resize", updateLimit);
  return () => window.removeEventListener("resize", updateLimit);
}, []);

const isMobile = window.innerWidth < 768;

const handleAddToCart = () => {
  // add item logic here

  if (window.innerWidth < 768) {
    setShowCartToast(true); // mobile → show popup
  } else {
    setCartOpen(true); // desktop → open overlay
  }
};

useEffect(() => {
  if (!showCartToast) return;
  const t = setTimeout(() => setShowCartToast(false), 4000);
  return () => clearTimeout(t);
}, [showCartToast]);

  

    return (
        <div>
            {/* Cards */}
             <section className="relative overflow-hidden py-[16px] 2xl:py-[32px]">
                  <div className="flex justify-between items-center mb-[16px] 2xl:mb-[32px] 2xl:[32px]">
          <p
            className="text-[25px] lg:text-[35px] 2xl:text-[50px] font-semibold text-[#282828]"
            style={{ letterSpacing: "-1px" }}
          >
            You Might Love
          </p>

           <button className=" transition-all duration-300 ease-out
    hover:bg-[#BA9948] bg-white backdrop-blur-md border border-[#A0174A] hover:border-none text-[#1D0B01] hover:text-white font-semibold px-[24px] py-[8px] 2xl:px-[32px] 2xl:py-[12px] rounded-full cursor-pointer w-[125px] h-[30px] lg:w-[170px] lg:h-[55px] text-[14px] lg:text-[16px] 2xl:text-[20px] flex items-center justify-center">
            <Link to="/productList">Show More</Link>
          </button>
        

      </div>
                        <div
                          className="transition-transform duration-500 ease-in-out grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-[16px] 2xl:gap-[32px]"
                        >
                          {products.slice(0, limit).map((item, i) => (
                            <div
                              key={i}
                              className=""
                            >
                                {/* CARD */}
                               <div
                className="group relative rounded-[16px]
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
                     <div className="relative 2xl:w-[105px] 2xl:h-[45px] text-[22px] h-[33px] w-[68px] font-normal"
                      >
                        <div className="absolute -top-[8px] 2xl:-top-[12px] left-1/2 -translate-x-1/2 bg-[#1D0B01] text-[8px] text-white 2xl:text-[14px] font-bold z-10 2xl:h-[22px] h-[14px] w-[40px] 2xl:w-[58px] flex items-center justify-center">
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
                    {/* MOBILE CART POPUP */}

                              </div>
                          ))}
                        </div>
                                      {showCartToast && (
                <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] z-50 md:hidden">
                  <div className="flex items-center justify-between bg-[#A0174A] text-white px-4 py-3 rounded-full shadow-lg">
              
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <span className="bg-white rounded-full w-6 h-6 flex items-center justify-center ">
                       <FaCheck className="text-black" />
                      </span>
                      Item added to your cart
                    </div>
              
                    <button
                      onClick={() => {
                        setShowCartToast(false);
                        setCartOpen(true);
                      }}
                      className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium"
                    >
                      VIEW CART
                    </button>
              
                  </div>
                </div>
              )}
                      </section>
        </div>
    );
};

export default ProductCard;