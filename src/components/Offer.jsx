import React from 'react';

const Offer = () => {
    return (
        <div className='mx-auto pb-10 px-6 '>
           <section
  className="bg-cover bg-center min-h-screen flex rounded-[48px]"
  style={{
    backgroundImage:
      "url('https://i.postimg.cc/W1xsfBt0/Frame-(3).png')",
  }}
>
  {/* LEFT EMPTY SPACE */}
  <div className="w-1/2" />

  {/* RIGHT CONTENT */}
  <div className="w-1/2 flex items-center justify-center px-[215px] py-[241px]">
    <div className="text-white text-left">

      <h1 className="text-4xl md:text-[90px] leading-tight mb-6"
       style={{
        fontWeight: 400,
    lineHeight: "100%",
    letterSpacing: "-4.5px",
      }}>
        Get 30% Off
      </h1>

      <p className="text-[#FFFFFF] mb-8 text-[20px]" 
       style={{
        fontWeight: 400,
    lineHeight: "140%",
    letterSpacing: "-0.4px",
      }}
      >
        Be the first to know about new collections and exclusive offers.
      </p>

      <button className="bg-[#571313] text-white px-[24px] py-[10px] rounded-full text-[20px] cursor-pointer">
       Shop Hurry
      </button>
    </div>
  </div>
</section>

        </div>
    );
};

export default Offer;