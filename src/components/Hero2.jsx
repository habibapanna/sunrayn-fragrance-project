import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import HeroImage from '../assets/kling_20260208_作品_Image1Crea_5099_0 1.svg';
import HandImage from '../assets/FInal Hand 1 (1).svg';
import WhiteBar from '../assets/Rectangle 8980.svg';

const Hero2 = () => {
  return (
    <section className="w-full min-h- bg-gradient-to-r from-[#d9b06f] via-[#e1bb78] to-[#f3d59a] relative overflow-hidden"
     style={{
    backgroundImage:
     `url(${HeroImage})`,
    backgroundSize: "cover", // shows full image
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left center",
  }}
    >

      {/* vertical light stripes */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[size:80px_100%]" />

      <div className="mx-auto pt-[100px] md:pt-[150px]  grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10 px-[16px] 2xl:px-[200px] ">
                {/* RIGHT IMAGE */}
        <div className="hidden justify-center">
          <img
            src={HandImage}
    alt="Perfume Hand"
            className="object-cover drop-shadow-2xl h-[300px] rounded-[16px]"
          />
        </div>

        {/* LEFT CONTENT */}
        <div>
                      {/* RATING */}
                      <div className="flex  items-center gap-[8px] text-[#FCFF11] mb-[16px]">
                        <div className="flex gap-[6px]">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="h-[18px] w-[18px]" />
                          ))}
                        </div>
                        <span className="text-[14px] md:text-[18px] text-[#1D0B01]">
                          5 star rating
                        </span>
                      </div>

          <h1 className="text-[35px] lg:text-[60px] font-bold text-[#A0174A] leading-tight">
            Luxury Fragrances with <br /> Everyday Affordability
          </h1>

          <p className="mt-6 text-black text-[15px] md:text-[16px] lg:text-[20px] max-w-xl">
           Sanrayn brings perfumes that linger with grace, purity, and devotion. Our luxury designer-inspired aromas are artfully blended to complement your sophistication.
          </p>

          {/* CTA + Customers */}
          <div className="flex items-center gap-4 lg:gap-6 mt-8">
            {/* CTA */}
          <Link to="/productList">
            <button
              className="
                bg-white 
                text-[#A0174A]               
                transition-all duration-500 ease-out
                rounded-full
                px-[24px] py-[10px]
                lg:px-[48px] lg:py-[14px]
                text-[14px] lg:text-[20px]
                flex items-center justify-center
                cursor-pointer w-[120px] lg:w-[200px] 2xl:font-semibold
              "
            >
              Shop Now
            </button>
          </Link>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-10 h-10 rounded-full border-2 border-white"/>
                <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-10 h-10 rounded-full border-2 border-white"/>
                <img src="https://randomuser.me/api/portraits/women/68.jpg" className="w-10 h-10 rounded-full border-2 border-white"/>
              </div>

              <div>
                <p className="font-semibold text-lg text-[#A0174A]">200+</p>
                <p className="text-sm text-[#A0174A]">Happy Customers</p>
              </div>
            </div>
          </div>

          {/* BEST SELLING */}
          
          {/* <div className="mt-14">
            <h3 className="text-xl font-semibold text-[#5b1b1b] mb-4">
              Best Selling Products
            </h3>
            
            <div className="flex gap-5 flex-wrap">

             
              {[1,2].map((i)=>(
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-lg w-[260px] p-4 flex gap-4 hover:scale-[1.02] transition"
                >
                  <img
                    src="https://images.unsplash.com/photo-1594035910387-fea47794261f"
                    className="w-20 h-28 object-cover rounded-lg"
                  />

                  <div className="flex flex-col justify-between">
                    <div>
                      <p className="text-xs bg-gray-100 px-2 py-1 rounded w-fit mb-1">
                        Unisex
                      </p>

                      <h4 className="font-semibold text-sm text-[#5a2a2a]">
                        AMBERY SAFFRON
                      </h4>

                      <div className="flex items-center gap-1 text-amber-400 text-xs mt-1">
                        {[...Array(5)].map((_,i)=>
                          <FaStar key={i}/>
                        )}
                        <span className="text-gray-500 ml-1">1239</span>
                      </div>

                      <p className="text-xs text-gray-500 mt-1">
                        Inspired by Tom Ford's Oud Wood
                      </p>
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-sm line-through text-gray-400">
                        $39
                      </span>
                      <span className="font-semibold text-[#5a2a2a]">$29</span>
                    </div>

                    <button className="mt-2 border border-[#5a2a2a] rounded-full text-sm py-1 hover:bg-[#5a2a2a] hover:text-white transition">
                      Add to cart
                    </button>
                  </div>
                </div>
              ))}

            </div>
          </div> */}
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
    src={HandImage}
    alt="Perfume Hand"
    className="object-cover 2xl:h-[600px]"
  />
        </div>
      </div>
    </section>
  );
};

export default Hero2;
