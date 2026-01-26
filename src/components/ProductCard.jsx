import { FaStar } from "react-icons/fa";
import { products } from "../data/productsData";
import { Link } from "react-router-dom";


const ProductCard = () => {
    return (
        <div>
            {/* Cards */}
             <section className="relative overflow-hidden py-[16px] md:py-[32px]">
                  <div className="flex justify-between items-center mb-[16px] 2xl:mb-[32px] px-[16px] 2xl:[32px]">
          <p
            className="text-[25px] lg:text-[35px] 2xl:text-[50px] font-semibold text-[#282828]"
            style={{ letterSpacing: "-1px" }}
          >
            You Might Love
          </p>

          <button className="bg-[#BA9948] text-white font-semibold px-[24px] py-[8px] 2xl:px-[32px] py-2xl:[12px] rounded-full text-[14px] md:text-[20px]">
            <Link to='/productList'>Show More</Link>
          </button>
        

      </div>
                        <div
                          className="transition-transform duration-500 ease-in-out grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-[16px] 2xl:gap-[32px]"
                        >
                          {products.slice(0, 3).map((item, i) => (
                            <div
                              key={i}
                              className=""
                            >
                                {/* CARD */}
                                <div className="relative rounded-[24px] md:rounded-[48px] overflow-hidden bg-[#EDE8E0] h-[344px] lg:h-[700px]" 
                                >
                                   {item.off && (
              <div className="mt-[40px] ml-[40px]">
                <button
                  className="bg-[#FFFFE3] px-[12px] lg:px-[16px]
                             rounded-full font-semibold cursor-pointer
                             hover:bg-[#DBAB35]
                             h-[35px]
                             flex items-center justify-center"
                >
                  {item.off}
                </button>
              </div>
            )}
            
            
                                  <img
                                    src={item.images[0]}
                                    alt={item.title}
                                    className="absolute inset-0 object-cover mx-auto h-[220px] lg:h-[501px]"
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
                        <button className="text-[#FC2525] text-[16px] bg-[#FFFFFF80]/50 py-[10px] px-[20px] rounded-[100px] line-through">
                          ${item.oldPrice}
                        </button>
                      </div>
                      <div className="relative w-[105px] h-[45px]">
                        <div className="absolute -top-[10px] left-1/2 -translate-x-1/2 bg-[#1D0B01] text-white text-[8px] font-bold z-10 h-[14px] w-[44px] flex items-center justify-center">
                          -{Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100)}% Off
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" width="105" height="45" viewBox="0 0 105 45" fill="none">
                          <path
                            d="M95 11V0H10V11C4.47715 11 0 15.4772 0 21V24C0 29.5228 4.47715 34 10 34V45H95V34C100.523 34 105 29.5228 105 24V21C105 15.4772 100.523 11 95 11Z"
                            fill="#BA9948"
                          />
                          <text
                            x="52.5"
                            y="30"
                            textAnchor="middle"
                            fontSize="16"
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
                      </section>
        </div>
    );
};

export default ProductCard;