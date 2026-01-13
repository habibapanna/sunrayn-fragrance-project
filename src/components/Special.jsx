import React from 'react';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import Button from '../assets/Button Container.png'

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
                          className="w-[651px] h-[700px] object-cover rounded-4xl"
                        />
                      </div>
            
            <div className='w-1/2 px-10 mt-40'>
                <p className='text-[25px]'>An exclusive creation from Sanrayn, this special perfume delivers a luxurious, long-lasting aroma crafted with integrity. Elegant, smooth, and versatile, it’s designed to elevate your presence and leave a lasting impression.</p>
                 <button className="bg-[#DBAB35] text-black font-semibold px-8 py-3 rounded-full mt-[46px]">
            Shop Now
          </button>
            </div>
                      
                    </div>
            
                    {/* TEXT SECTION */}
                    <div
                      className="absolute top-[300px] left-[550px] transform -translate-y-1/2"
                    >
                    
                      <div className="inline-flex items-center justify-center">
                        <h2 className="text-4xl md:text-[120px] font-bold text-[#571313]" style={{
        fontWeight: 700,
    lineHeight: "110%",
    letterSpacing: "-7.2px",
      }}>
                          SUNRAYN
                        </h2>
                      </div>
            
                     <div className='inline-flex items-center justify-center ml-5'>
                         <p style={{
        fontWeight: 500,
    lineHeight: "100%",
    letterSpacing: "-7.2px",
      }}
       className="uppercase text-3xl md:text-[120px] text-[#571313] relative font-light">
                        SPECIALS
                      </p>
                      <img src={Button} alt="" className='h-[64px] ml-[27px]' />
                     </div>
                    </div>
            
                  </div>
                </section>
        </div>
    );
};

export default Special;