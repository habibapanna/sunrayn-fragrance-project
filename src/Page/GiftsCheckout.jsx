import { Link } from "react-router-dom";
import { useState } from "react";
import Logo2 from "../assets/Logo (4).svg";
import SANRAYN from "../assets/SANRAYN (1).svg";
import shopPay from '../assets/ShopPay.svg';
import PayPal from '../assets/Paypal Logo.svg';
import Gpay  from '../assets/G pay logo.svg';
import Visa  from '../assets/credit-card.svg';
import MasterCard  from '../assets/credit-card (1).svg';
import Flag from '../assets/Flag Pack.svg';
import { LuSearch } from "react-icons/lu";
import { IoChevronDown } from "react-icons/io5";


const GiftsCheckout = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen mx-auto bg-gradient-to-br from-[#FAF6F8] via-[#FDFBFC] to-[#F3EBF1] relative">
      {/* Soft Decorative Glow */}
<div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-[#A0174A]/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#FD4929]/10 rounded-full blur-[120px]"></div>
      {/* HEADER */}
      <div className="sticky top-0 z-50 backdrop-blur-md bg-white/80 flex flex-col gap-[4px] w-full h-[80px] 2xl:h-[100px] justify-cente items-center border-b border-[#00000010] shadow-sm">
        <Link to="/">
          <img src={Logo2} alt="Sanrayn" className="h-[50px] w-[50px] 2xl:h-[70px] 2xl:w-[70px]" />
        </Link>
       
        <p className="absolut top-[70px] text-[12px] tracking-[6px] text-[#A0174A] font-medium">
 CHECKOUT FOR GIFTS 
</p>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 px-4 2xl:px-6 md:gap-6 pt-4 2xl:pt-6">

        {/* LEFT SIDE */}
        <div className="space-y-4 2xl:space-y-6">
                      <div className="bg-white rounded-[16px] p-[16px] 2xl:p-6 border border-gray-300 shadow-lg">
              <p className="text-[14px] 2xl:text-[16px] text-[#282828] text-center font-medium mb-[16px] 2xl:mb-[24px]">
                Express checkout
              </p>
            
              <div className="flex gap-3">
                <button className="flex flex-1 items-center justify-center bg-[#592FF4] py-[8px] 2xl:py-[12px] rounded-full">
                  <img src={shopPay} alt="Shop Pay" className="h-[15px] w-[60px] 2xl:h-[21px] 2xl:w-[88px]" />
                </button>
            
                <button className="flex flex-1 items-center justify-center bg-[#FFC439] py-[8px] 2xl:py-[12px] rounded-full">
                  <img src={PayPal} alt="PayPal" className="h-[15px] w-[60px] 2xl:h-[21px] 2xl:w-[88px]" />
                </button>
            
                <button className="flex flex-1 items-center justify-center bg-black py-[8px] 2xl:py-[12px] rounded-full">
                  <img src={Gpay} alt="Google Pay" className="h-[15px] w-[60px] 2xl:h-[21px] 2xl:w-[88px]" />
                </button>
              </div>
            
              <p className="text-[12px] 2xl:text-[14px] text-[#282828] text-center mt-[16px] 2xl:mt-[24px] w-4/5 2xl:w-2/3 mx-auto">
                By continuing with your payment, you agree to the future charges listed on this page and the cancellation policy.
              </p>
            </div>

          {/* Gift From */}
          <div className="bg-white rounded-[20px] p-4 2xl:p-6 shadow-md border border-gray-200">
            <h2 className="text-[22px] 2xl:text-[26px] font-semibold tracking-wide text-[#A0174A] mb-6 relative">
  Gift From
  <span className="absolute -bottom-2 left-0 w-10 h-[2px] bg-gradient-to-r from-[#A0174A] to-transparent rounded-full"></span>
</h2>

            <div className="space-y-4">
              <input
                placeholder="Your Full Name"
                className="w-full bg-[#F9F6F8] border border-[#0000000A] rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#A0174A]/20 transition-all duration-300"
              />
              <input
                placeholder="Email Address"
                className="w-full bg-[#F9F6F8] border border-[#0000000A] rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#A0174A]/20 transition-all duration-300"
              />
              <input
                placeholder="Phone Number"
                className="w-full bg-[#F9F6F8] border border-[#0000000A] rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#A0174A]/20 transition-all duration-300"
              />
            </div>
          </div>

{/* Gift To */}
<div className="relative overflow-hidden bg-white rounded-[20px] p-4 2xl:p-6 shadow-md border border-gray-200">

  {/* Premium Ribbon */}
  <div className="absolute top-0 right-0">
    <div className="bg-gradient-to-r from-[#A0174A] to-[#A0174A] text-white text-[10px] tracking-widest px-6 py-1 rotate-45 translate-x-[30%] translate-y-[60%] shadow-md">
      GIFT ORDER
    </div>
  </div>

  <h2 className="text-[22px] 2xl:text-[26px] font-semibold tracking-wide text-[#A0174A] mb-8 relative">
    Gift To
    <span className="absolute -bottom-3 left-0 w-12 h-[2px] bg-gradient-to-r from-[#A0174A] to-transparent rounded-full"></span>
  </h2>

  <div className="space-y-5">

    <input
      placeholder="Recipient Full Name"
      className="w-full bg-[#F9F6F8] border border-[#0000000A] rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#A0174A]/20 transition-all duration-300"
    />

    <input
      placeholder="Recipient Phone Number"
      className="w-full bg-[#F9F6F8] border border-[#0000000A] rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#A0174A]/20 transition-all duration-300"
    />

    <input
      placeholder="Street Address"
      className="w-full bg-[#F9F6F8] border border-[#0000000A] rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#A0174A]/20 transition-all duration-300"
    />

    <div className="grid grid-cols-3 gap-4">
      <input
        placeholder="City"
        className="bg-[#F9F6F8] border border-[#0000000A] rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#A0174A]/20 transition-all duration-300"
      />
      <input
        placeholder="State"
        className="bg-[#F9F6F8] border border-[#0000000A] rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#A0174A]/20 transition-all duration-300"
      />
      <input
        placeholder="Zip Code"
        className="bg-[#F9F6F8] border border-[#0000000A] rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#A0174A]/20 transition-all duration-300"
      />
    </div>
  </div>
</div>

{/* Gift Details */}
<div className="bg-white rounded-[20px] p-4 2xl:p-6 shadow-md border border-gray-200">

  <h2 className="text-[22px] 2xl:text-[26px] font-semibold tracking-wide text-[#A0174A] mb-2 relative">
    Gift Details
    <span className="absolute -bottom-3 left-0 w-12 h-[2px] bg-gradient-to-r from-[#A0174A] to-transparent rounded-full"></span>
  </h2>

  <div className="space-y-5 mt-8">

    <select className="w-full bg-[#F9F6F8] border border-[#0000000A] rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#A0174A]/20 transition-all duration-300">
      <option>Select Occasion</option>
      <option>Birthday</option>
      <option>Anniversary</option>
      <option>Wedding</option>
      <option>Valentine's Day</option>
      <option>Just Because</option>
    </select>

    <input
      type="date"
      className="w-full bg-[#F9F6F8] border border-[#0000000A] rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#A0174A]/20 transition-all duration-300"
    />

    <div className="relative">
      <textarea
        maxLength={120}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write a personal message (120 characters max)"
        className="w-full bg-[#F9F6F8] border border-[#0000000A] rounded-xl px-5 py-4 h-[130px] resize-none focus:outline-none focus:ring-2 focus:ring-[#A0174A]/20 transition-all duration-300"
      />

      <span className="absolute bottom-3 right-4 text-xs text-gray-400">
        {120 - message.length} left
      </span>
    </div>

  </div>
</div>

{/* Payment Section */}
<div className="bg-white rounded-[20px] p-4 2xl:p-6 shadow-md border border-gray-200 ">

  <h2 className="text-[22px] 2xl:text-[26px] font-semibold tracking-wide text-[#A0174A] relative">
    Payment
    <span className="absolute -bottom-3 left-0 w-12 h-[2px] bg-gradient-to-r from-[#A0174A] to-transparent rounded-full"></span>
  </h2>

  {/* Payment Methods */}
  <div className="space-y-3 mt-8">

    <label className="flex items-center justify-between bg-[#F9F6F8] border border-[#0000000A] px-5 py-3 rounded-xl transition-all duration-300 hover:border-[#A0174A]/30 cursor-pointer">
      <span className="flex items-center gap-3 text-[15px] text-[#282828]">
        <input
          type="radio"
          className="h-[18px] w-[18px] accent-[#A0174A]"
        />
        PayPal
      </span>
      <img src={PayPal} alt="" className="h-[18px] opacity-80" />
    </label>

    <label className="flex items-center justify-between bg-[#F9F6F8] border border-[#0000000A] px-5 py-3 rounded-xl transition-all duration-300 hover:border-[#A0174A]/30 cursor-pointer">
      <span className="flex items-center gap-3 text-[15px] text-[#282828]">
        <input
          type="radio"
          defaultChecked
          className="h-[18px] w-[18px] accent-[#A0174A]"
        />
        Credit Card
      </span>
      <div className="flex gap-2">
        <img src={Visa} alt="" className="h-[22px] opacity-80" />
        <img src={MasterCard} alt="" className="h-[22px] opacity-80" />
      </div>
    </label>

  </div>

  {/* Card Details Box */}
  <div className="bg-white/70 backdrop-blur-sm rounded-[20px] p-6 border border-[#00000008] space-y-5">

    {/* Cardholder Name */}
    <div className="space-y-2">
      <label className="text-[15px] font-medium text-[#282828]">
        Cardholder Name
      </label>
      <input
        type="text"
        placeholder="James Walter"
        className="w-full bg-[#F9F6F8] border border-[#0000000A] rounded-xl px-5 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#A0174A]/20 transition-all duration-300"
      />
    </div>

    {/* Card Number */}
    <div className="space-y-2">
      <label className="text-[15px] font-medium text-[#282828]">
        Card Number
      </label>

      <div className="relative">
        <input
          type="text"
          placeholder="4173 1029 6866 2351"
          className="w-full bg-[#F9F6F8] border border-[#0000000A] rounded-xl px-5 py-3 pr-[60px] text-[15px] focus:outline-none focus:ring-2 focus:ring-[#A0174A]/20 transition-all duration-300"
        />

        <img
          src={Visa}
          alt="Visa"
          className="absolute right-4 top-1/2 -translate-y-1/2 h-[22px] opacity-70"
        />
      </div>
    </div>

    {/* Expiry & CVC */}
    <div className="grid grid-cols-2 gap-4">

      <div className="space-y-2">
        <label className="text-[15px] font-medium text-[#282828]">
          Expiry
        </label>
        <input
          type="text"
          placeholder="MM / YY"
          className="w-full bg-[#F9F6F8] border border-[#0000000A] rounded-xl px-5 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#A0174A]/20 transition-all duration-300"
        />
      </div>

      <div className="space-y-2">
        <label className="text-[15px] font-medium text-[#282828]">
          CVC
        </label>
        <input
          type="password"
          placeholder="•••"
          className="w-full bg-[#F9F6F8] border border-[#0000000A] rounded-xl px-5 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#A0174A]/20 transition-all duration-300"
        />
      </div>

    </div>

    {/* Save Card */}
    <label className="flex items-center gap-3 text-[14px] text-[#282828] cursor-pointer mt-2">
      <input
        type="checkbox"
        className="h-[16px] w-[16px] accent-[#A0174A]"
      />
      Save this card for faster checkout
    </label>

  </div>

</div>
                            <div className="hidden md:block rounded-[16px] shadow-lg border border-gray-300 p-[24px] bg-white">
             <button className="w-full  transition-all duration-500 ease-out
    bg-[#A0174A] text-white hover:text-[#A0174A] hover:bg-white backdrop-blur-md border border-[#A0174A] py-[10px] px-[12px] rounded-full font-semibold text-[14px] 2xl:text-[16px] cursor-pointer">Continue to Payment</button>
         </div>
          
        </div>

        {/* RIGHT SIDE – SUMMARY */}
        <div className="sticky top-8 h-fit">
            {/* RIGHT */}
       <div className="2xl:col-span-2 "> <div className="bg-white rounded-[16px] p-[16px] 2xl:p-[24px] w-full
      2xl:sticky 2xl:top-[32px] shadow-lg border border-gray-300">
          <p className="text-[16px] font-semibold lg:text-[18px] 2xl:text-[20px] mb-4">Product Details</p>
          <div className="flex justify-between items-center mb-[20px]">
            <div className="flex gap-3 items-center">
  {/* IMAGE + BADGE */}
  <div className="relative">
    {/* BADGE */}
    <span className="absolute -top-[6px] -right-[6px] 
      w-[25px] h-[25px] rounded-full 
      bg-[#A0174A] text-white 
      text-[12px] font-medium 
      flex items-center justify-center">
      1
    </span>

    {/* IMAGE WRAPPER */}
    <div className="">
      <img
        src="https://i.postimg.cc/W4V5k4wv/Whats-App-Image-2026-02-03-at-6-06-48-PM.jpg"
        className="w-[70px] h-[70px] rounded-[8px]"
        alt=""
      />
    </div>
  </div>

  {/* TEXT */}
  <div>
    <p className="text-[15px] 2xl:text-[18px] font-medium text-[#A0174A]">Cerisa Aura</p>
    <p className="text-[12px] text-gray-500">15ML / 1oz</p>
  </div>
</div>

           <div>
             <p className="font-normal text-[12px] text-[#282828]">$32.00</p>
            <p className="font-normal text-[#A0174A]">$28.80</p>
           </div>
          </div>
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#A0174A]/20 to-transparent my-[20px]"></div>
          <div className="flex gap-2 mb-4">
            <input  className="w-full bg-[#F9F6F8] border border-[#0000000A] rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#A0174A]/20 transition-all duration-300" placeholder="Discount code or gift card" />
            <button className="bg-[#FD4929] text-white py-[5px] 2xl:py-[7px] px-[32px] rounded-xl text-[14px] 2xl:text-[16px] cursor-pointer">Apply</button>
          </div>
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#A0174A]/20 to-transparent my-[20px]"></div>
          <div className="space-y-[8px]">
            <div className="flex justify-between text-[14px] 2xl:text-[16px]
            
            "><span>Subtotal</span><span>$32</span></div>
            <div className="flex justify-between text-[14px] 2xl:text-[16px]"><span>Discount</span><span>$2</span></div>
            <div className="flex justify-between text-[14px] 2xl:text-[16px]"><span>Shipping</span><span>$4</span></div>
            <div className="flex justify-between text-[14px] 2xl:text-[16px]"><span>VAT (5%)</span><span>$1.75</span></div>
            <div className="h-[1px] bg-gradient-to-r from-transparent via-[#A0174A]/20 to-transparent my-[20px]"></div>
            <div className="flex justify-between font-semibold"><span className="text-[15px] 2xl:text-[20px] font-bold">Total</span><span className="text-[15px] 2xl:text-[20px] font-bold">$32</span></div>
          </div>
        </div>
        </div>
        <div className="mt-4 2xl:mt-6 md:hidden rounded-[16px] p-4 2xl:p-6 shadow-lg border border-gray-300 bg-white">
             <button className="w-full  transition-all duration-500 ease-out
    bg-[#A0174A] hover:text-[#A0174A] hover:bg-white backdrop-blur-md border border-[#A0174A] text-white py-[7px] 2xl:py-[10px] px-[12px] rounded-full font-semibold text-[14px] 2xl:text-[16px] cursor-pointer">Continue to Payment</button>
         </div>
        </div>

      </div>
        {/* footer */}
                <div className="sticky bottom-0 z-50 flex items-center gap-[24px] justify-center mt-4 2xl:mt-6 bg-white border-t border-gray-300 py-4 2xl:py-6">
            <span className="text-[10px] 2xl:text-[14px] text-[#372416] cursor-pointer hover:underline">Return Policy </span>
            <span className="text-[10px] 2xl:text-[14px] text-[#372416] cursor-pointer hover:underline">Cancelation Policy </span>
           <span className="text-[10px] 2xl:text-[14px] text-[#372416] cursor-pointer hover:underline"> <Link to='/terms'>Terms of Service</Link></span>
          </div>
    </div>
  );
};

export default GiftsCheckout;