import React from 'react';

const Offer = () => {
    return (
        <div className='mx-auto px-[16px] pb-[16px] md:px-[32px] md:pb-[32px]'>
           <section
  className="bg-cover bg-center flex rounded-[32px] md:rounded-[48px]"
  style={{
    backgroundImage:
      "url('https://i.postimg.cc/W1xsfBt0/Frame-(3).png')",
  }}
>
  {/* LEFT EMPTY SPACE */}
  <div className="w-1/3 md:w-1/2" />

  {/* RIGHT CONTENT */}
  <div className="w-2/3 md:w-1/2 flex items-center justify-center px-10 py-16 md:px-[150px] md:py-[241px]">
    <div className="text-white text-left">

      <h1 className="text-[25px] md:text-[90px] leading-tight mb-6"
       >
        Get 30% Off
      </h1>

      <p className="text-[#FFFFFF] mb-8 text-[14px] md:text-[20px]" 
       
      >
        Be the first to know about new collections and exclusive offers.
      </p>

      <button className="bg-white text-black px-[24px] py-[10px] rounded-[100px] h-[40px] w-[123px] md:w-[210px] md:h-[55px] text-[14px] md:text-[20px] cursor-pointer font-bold">
       Shop Hurry
      </button>
    </div>
  </div>
</section>

        </div>
    );
};

export default Offer;