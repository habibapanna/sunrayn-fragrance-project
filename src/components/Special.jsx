import React from 'react';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';

const Special = () => {
    return (
        <div>
            <section className="mx-auto px-6 pb-10">
                  <div className="items-center gap-12 bg-[#EDE8E0] rounded-4xl p-20 relative">
            
                    {/* IMAGE GRID */}
                    <div className="flex justify-center items-center gap-5">
                      <div className="relative overflow-hidden w-1/2 p-10">
                        <img
                          src="https://i.postimg.cc/8kWKHMLp/Product-Image.png"
                          alt="Product 1"
                          className="w-full h-full object-cover rounded-4xl"
                        />
                      </div>
            
            <div className='w-1/2 px-10 mt-40'>
                <p>An exclusive creation from Sanrayn, this special perfume delivers a luxurious, long-lasting aroma crafted with integrity. Elegant, smooth, and versatile, it’s designed to elevate your presence and leave a lasting impression.</p>
                 <button className="bg-[#DBAB35] text-black font-semibold px-8 py-3 rounded-full mt-10">
            Shop Now
          </button>
            </div>
                      
                    </div>
            
                    {/* TEXT SECTION */}
                    <div
                      className="absolute top-[40%] left-[35%] transform -translate-y-1/2"
                    >
                    
                      <div className="inline-flex items-center justify-center">
                        <h2 className="text-4xl md:text-7xl font-bold text-[#571313]">
                          SUNRAYN
                        </h2>
                      </div>
            
                     <div className='inline-flex items-center justify-center ml-3'>
                         <p className="uppercase text-3xl md:text-6xl text-[#571313] relative font-light">
                        SPECIALS
                      </p>
                      <BsArrowUpRightCircleFill className="text-4xl md:text-5xl ml-3 bg-white rounded-full text-[#571313]" />
                     </div>
                    </div>
            
                  </div>
                </section>
        </div>
    );
};

export default Special;