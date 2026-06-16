
import { Link, useLocation } from "react-router-dom";
import Logo2 from "../assets/Logo (6).svg";
import SANRAYN from '../assets/Brand Name (3).svg';
import shopPay from '../assets/ShopPay.svg';
import PayPal from '../assets/Paypal Logo.svg';
import Gpay  from '../assets/G pay logo.svg';
import Visa  from '../assets/credit-card.svg';
import MasterCard  from '../assets/credit-card (1).svg';
import Flag from '../assets/Flag Pack.svg';
import { LuSearch } from "react-icons/lu";
import { IoChevronDown } from "react-icons/io5";
import { useState } from "react";
import CheckoutSecurity from "../components/CheckoutSecurity";

const Checkout = () => {
  const [openSummary, setOpenSummary] = useState(false);
  const location = useLocation();

  
  return (
    <div className="bg-[#F6F7F2]">
      <section className="min-h-screen mx-auto">
      {/* Logo */}
      <div className="sticky top-0 z-50 bg-white flex gap-2 w-full h-[100px] justify-center mb-4 2xl:mb-[24px]  items-center border-b border-gray-300">
       <Link to="/" className="cursor-pointer"> <img src={Logo2} alt="Sanrayn" className="h-[70px] w-[70px]" /></Link>
       <Link to="/" className="cursor-pointer"><img src={SANRAYN} alt="" className="w-[174px] h-[28px]"/></Link>
      </div>
      {/* MOBILE ORDER SUMMARY */}
<div className="md:hidden mb-4 px-[16px]">

  {/* HEADER BAR */}
  <div
    onClick={() => setOpenSummary(!openSummary)}
    className="flex justify-between items-center bg-white px-4 py-3 rounded-t-[14px] shadow border border-gray-300 cursor-pointer"
  >
    <span className="text-[#A0174A] font-medium flex items-center gap-2">
      Order summary
      <IoChevronDown
        className={`transition-transform duration-500 ${
          openSummary ? "rotate-180" : ""
        }`}
      />
    </span>

    <span className="font-bold text-[18px]">$231.70</span>
  </div>

  {/* DROPDOWN CONTENT */}
<div
  className={`overflow-hidden transition-all duration-500 ${
    openSummary ? "max-h-[500px]" : "max-h-0"
  }`}
>
  <div className="bg-white rounded-b-[16px] p-[16px] shadow border border-gray-300 space-y-4">

      {/* PRODUCT */}
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="relative">
            <span className="absolute -top-[6px] -right-[6px] 
              w-[25px] h-[25px] rounded-full 
              bg-[#A0174A] text-white text-[12px]
              flex items-center justify-center">
              1
            </span>

            <img
              src="https://i.postimg.cc/W4V5k4wv/Whats-App-Image-2026-02-03-at-6-06-48-PM.jpg"
              className="w-[70px] h-[70px] rounded-[12px]"
              alt=""
            />
          </div>

          <div>
            <p className="text-[15px] font-medium text-[#A0174A]">
              Cerisa Aura
            </p>
            <p className="text-[12px] text-gray-500">15ML / 1oz</p>
          </div>
        </div>

        <div>
          <p className="text-[12px]">$32.00</p>
          <p className="text-[#A0174A]">$28.80</p>
        </div>
      </div>

      <div className="border border-[#bfc7cd]" />

      {/* TOTALS */}
      <div className="space-y-2 text-[14px]">
        <div className="flex justify-between"><span>Subtotal</span><span>$32</span></div>
        <div className="flex justify-between"><span>Discount</span><span>$2</span></div>
        <div className="flex justify-between"><span>Shipping</span><span>$4</span></div>
        <div className="flex justify-between"><span>VAT (5%)</span><span>$1.75</span></div>

        <div className="border my-3 border-[#bfc7cd]" />

        <div className="flex justify-between font-bold text-[16px]">
          <span>Total</span>
          <span>$231.70</span>
        </div>
      </div>
    </div>
</div>
</div>

      <div className="md:max-w-7xl  px-[16px] mx-auto grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 md:gap-4 2xl:gap-6 2xl:px-10 relative">
        {/* LEFT */}
        <div className="2xl:col-span-2 space-y-4 2xl:space-y-6">
          {/* Express Checkout */}
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

<div className="flex justify-between items-center gap-3">
  <span className="flex-1 h-px bg-gray-300"></span>

  <span className="whitespace-nowrap text-sm text-gray-500">
    Or checkout with credit card below
  </span>

  <span className="flex-1 h-px bg-gray-300"></span>
</div>

          {/* Contact */}
          <div className="bg-white rounded-2xl p-[16px] 2xl:p-6 space-y-4 border border-gray-300 shadow-lg">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-[16px] lg:text-[18px] 2xl:text-[20px] text-[#050C29] font-semibold">Contact Information</span>
              <span className="text-[#282828] text-[14px] 2xl:text-[16px]"><span className="underline text-[14px] 2xl:text-[16px] font-semibold">Log in</span></span>
            </div>
            <div>
            <input className="w-full bg-[#F6F7F2] rounded-lg px-[16px] py-[8px] 2xl:py-[12px] text-[16px] focus:outline-none" placeholder="Email" />
            </div>
            <label className="flex items-center gap-2 text-[14px] 2xl:text-[16px] cursor-pointer">
              <input type="checkbox" className="h-[14px] w-[14px] 2xl:w-[16px] 2xl:h-[16px] border-[1.5px] border-[#3A3F42] checkbox checkbox-sm rounded-[4px] cursor-pointer"/> Subscribe for new and daily update
            </label>
          </div>

        {/* Delivery Information */}
<div className="bg-white rounded-[16px] p-[16px] 2xl:p-6 space-y-5 border border-gray-300 shadow-lg">

  <p className="text-[16px] 2xl:text-[16px] text-[#1D1D1D] font-semibold">
    Delivery Information
  </p>

  {/* Country */}
<div className="space-y-2">
  <label className="text-[14px] 2xl:text-[15px] text-[#1D1D1D]">
    Country
  </label>

  <div className="relative">
    <select className="w-full appearance-none bg-[#F6F7F2] rounded-lg px-[8px] lg:px-5 pr-10 py-2 2xl:py-3 text-[13px] 2xl:text-[15px] focus:outline-none">
      <option>United State</option>
    </select>

    {/* custom arrow */}
    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
     <IoChevronDown />
    </div>
  </div>
</div>


  {/* Name */}
  <div className="grid grid-cols-2 gap-4">
    <div className="space-y-2">
      <input
        placeholder="First Name"
        className="w-full bg-[#F6F7F2] rounded-lg px-5 py-2 2xl:py-3 text-[13px] 2xl:text-[15px] focus:outline-none"
      />
    </div>

    <div className="space-y-2">
      <input
        placeholder="Last Name"
        className="w-full bg-[#F6F7F2] rounded-lg px-5 py-2 2xl:py-3 text-[14px] 2xl:text-[16px] focus:outline-none"
      />
    </div>
  </div>

  {/* Address */}
  <div className="space-y-2">
    <label className="text-[14px] 2xl:text-[16px]">Address</label>
    <div className="relative">
      <input
        placeholder="Enter delivery address"
        className="w-full bg-[#F6F7F2] rounded-lg px-5 py-2 2xl:py-3 pr-12 text-[13px] 2xl:text-[15px] focus:outline-none"
      />
      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
        <LuSearch className="2xl:h-[20px] 2xl:w-[20px] text-[#1D0B01]" />
      </span>
    </div>
  </div>

  {/* City / State / Zip */}
<div className="grid grid-cols-3 gap-4">

  {/* City */}
  <div className="space-y-2">
    <label className="text-[14px] 2xl:text-[16px]">City</label>

    <div className="relative">
      <select className="w-full appearance-none bg-[#F6F7F2] rounded-lg px-5 pr-10 py-2 2xl:py-3 text-[14px] 2xl:text-[16px] focus:outline-none">
        <option>Select</option>
      </select>

      <IoChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-[18px]" />
    </div>
  </div>

  {/* State */}
  <div className="space-y-2">
    <label className="text-[14px] 2xl:text-[16px]">State</label>

    <div className="relative">
      <select className="w-full appearance-none bg-[#F6F7F2] rounded-lg px-5 pr-10 py-2 2xl:py-3 text-[14px] 2xl:text-[16px] focus:outline-none">
        <option>Select</option>
      </select>

      <IoChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-[18px]" />
    </div>
  </div>

  {/* Zip */}
  <div className="space-y-2">
    <label className="text-[14px] 2xl:text-[16px]">Zip Code</label>
    <input
      placeholder="13265"
      className="w-full bg-[#F6F7F2] rounded-lg px-5 py-2 2xl:py-3 text-[14px] 2xl:text-[16px] focus:outline-none"
    />
  </div>

</div>

  {/* Phone Number */}
  <div className="space-y-2">
    <label className="text-[14px] 2xl:text-[16px]">Phone Number</label>
    <div className="flex items-center gap-3 bg-[#F6F7F2] rounded-lg px-5 py-2 2xl:py-3">
      <span className="flex items-center gap-2 text-[14px] 2xl:text-[16px]">
        <img src={Flag} alt="" />
        <span className="text-gray-500"></span>
      </span>
      <input
        placeholder="+1(555) 247-8936"
        className="bg-transparent text-[14px] 2xl:text-[16px] focus:outline-none w-full"
      />
    </div>
  </div>

  {/* Save Info */}
  <label className="flex items-center gap-3 text-[14px] 2xl:text-[16px] cursor-pointer">
    <input type="checkbox" className="h-[14px] w-[14px] 2xl:w-[16px] 2xl:h-[16px] border-[1.5px] border-[#3A3F42] checkbox checkbox-sm rounded-[4px] cursor-pointer" />
    Save my information for a faster checkout
  </label>

</div>

          {/* Payment */}
          <div className="bg-[#FFFFFF] rounded-[16px] p-[16px] 2xl:p-[24px] space-y-4 shadow-lg border border-gray-300">
            <p className="text-[16px] 2xl:text-[18px] font-semibold 2x:text-[20px] text-[#050C29]">Payment</p>
            <label className="flex items-center justify-between bg-[#F6F7F2] px-4 py-2 2xl:py-3 rounded-lg">
              <span className="flex items-center text-[14px] 2xl:text-[16px] text-[#282828] gap-2 "><input type="radio" className="h-[16px] w-[16px] 2xl:h-[20px] 2xl:w-[20px] rounded-[16px border-[2px] border-[#282828]" /> PayPal</span>
              <img src={PayPal} alt="" className="h-[14px] w-[45px] 2xl:h-[16px] 2xl:w-[60px] cursor-pointer" />
            </label>
            <label className="flex items-center justify-between bg-[#F6F7F2] px-4 py-2 2xl:py-3 rounded-lg">
              <span className="flex items-center gap-2 text-[14px] 2xl:text-[16px]"><input type="radio"  className=" rounded-full h-[16px] w-[16px] 2xl:h-[20px] 2xl:w-[20px]  " defaultChecked /> Credit Card</span>
              <div className="flex gap-2"><img src={Visa} alt="" className="h-[18px] w-[25px] 2xl:h-[24px] 2xl:w-[35px] cursor-pointer" /><img src={MasterCard} alt="" className="h-[18px] w-[25px] 2xl:h-[24px] 2xl:w-[35px] cursor-pointer" /></div>
            </label>
            <div className="bg-[#F6F7F2] rounded-[16px] p-[16px] space-y-[12px]">

  {/* Cardholder Name */}
  <div className="space-y-[6px]">
    <label className="text-[15px] 2xl:text-[18px] text-[#282828]">
      Cardholder Name
    </label>
    <input
      type="text"
      placeholder="James Walter"
      className="w-full bg-white rounded-lg px-[20px] py-[8px] 2xl:py-[12px] text-[14px] 2xl:text-[16px] outline-none"
    />
  </div>

  {/* Card Number */}
  <div className="space-y-[6px]">
    <label className="text-[15px] 2xl:text-[18px] text-[#282828]">
      Card Number
    </label>

    <div className="relative">
      <input
        type="text"
        placeholder="4173 1029 6866 2351"
        className="w-full bg-white rounded-lg px-[20px] pr-[40px] 2xl:pr-[56px] py-[8px] 2xl:py-[12px] text-[14px] 2xl:text-[16px] outline-none"
      />

      {/* Visa Logo */}
      <img
        src={Visa}
        alt="Visa"
        className="absolute right-[16px] top-1/2 -translate-y-1/2 h-[20px] w-[28px] 2xl:h-[24px] 2xl:w-[35px] cursor-pointer"
      />
    </div>
  </div>

  {/* Expiry & CVC */}
  <div className="grid grid-cols-2 gap-4">

    <div className="space-y-[6px]">
      <label className="text-[15px] 2xl:text-[18px] text-[#282828]">
        Expiry
      </label>
      <input
        type="text"
        placeholder="20 / 28"
        className="w-full bg-white rounded-lg px-[20px] py-[8px] 2xl:py-[12px] text-[14px] 2xl:text-[16px] outline-none"
      />
    </div>

    <div className="space-y-[6px]">
      <label className="text-[15px] 2xl:text-[18px] text-[#282828]">
        CVC
      </label>
      <input
        type="password"
        placeholder="654"
        className="w-full bg-white rounded-lg px-[20px] py-[8px] 2xl:py-[12px] text-[14px] 2xl:text-[16px] outline-none"
      />
    </div>

  </div>

  {/* Save Card */}
  <label className="flex items-center gap-2 text-[14px] 2xl:text-[16px] text-[#282828] mt-[4px] cursor-pointer">
    <input
      type="checkbox"
      className="h-[14px] w-[14px] 2xl:w-[16px] 2xl:h-[16px] border-[1.5px] border-[#3A3F42] checkbox checkbox-sm rounded-[4px] cursor-pointer"
    />
    Save this card for faster checkout
  </label>

</div>

          </div>

         <div className="hidden md:block rounded-[16px] shadow-lg border border-gray-300 p-[24px] bg-white">
             <button className="w-full  transition-all duration-500 ease-out
    bg-[#BA9948] text-[#1D0B01] hover:bg-white backdrop-blur-md border border-[#BA9948] py-[10px] px-[12px] rounded-full font-semibold text-[14px] 2xl:text-[16px] cursor-pointer">Continue to Payment</button>
         </div>
         <div className="hidden md:block">
          <CheckoutSecurity></CheckoutSecurity>
        </div>
        </div>
        {/* RIGHT */}
       <div className="2xl:col-span-2 md:sticky top-32 h-fit">
         <div className="bg-white rounded-[16px] p-[16px] 2xl:p-[24px] w-full
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
          <div className="border-1 mb-[20px] border-[#bfc7cd]"></div>
          <div className="flex gap-2 mb-4">
            <input className="flex-1 bg-[#F6F7F2] rounded-full text-[14px] 2xl:text-[16px] pl-[20px] pr-[16px] py-[8px] 2xl:py-[12px] focus:outline-none" placeholder="Discount code or gift card" />
            <button className="bg-[#FD4929] text-white py-[5px] 2xl:py-[7px] px-[16px] 2xl:px-[32px] rounded-full text-[14px] 2xl:text-[16px] cursor-pointer">Apply</button>
          </div>
          <div className="border-1 mb-[20px] border-[#bfc7cd]"></div>
          <div className="space-y-[8px]">
            <div className="flex justify-between text-[14px] 2xl:text-[16px]
            
            "><span>Subtotal</span><span>$32</span></div>
            <div className="flex justify-between text-[14px] 2xl:text-[16px]"><span>Discount</span><span>$2</span></div>
            <div className="flex justify-between text-[14px] 2xl:text-[16px]"><span>Shipping</span><span>$4</span></div>
            <div className="flex justify-between text-[14px] 2xl:text-[16px]"><span>VAT (5%)</span><span>$1.75</span></div>
            <div className="border-1 my-[20px] border-[#bfc7cd]"></div>
            <div className="flex justify-between font-semibold"><span className="text-[15px] 2xl:text-[20px] font-bold">Total</span><span className="text-[15px] 2xl:text-[20px] font-bold">$32</span></div>
          </div>
        </div>
        </div>
        <div className="mt-4 2xl:mt-6 md:hidden rounded-[16px] p-[24px] shadow-lg border border-gray-300 bg-white overflow-hidden">
             <button className="w-full  transition-all duration-500
    bg-[#BA9948] hover:text-[#1D0B01] hover:bg-white backdrop-blur-md border border-[#BA9948] text-white py-[7px] 2xl:py-[10px] px-[12px] rounded-full font-semibold text-[14px] 2xl:text-[16px] cursor-pointer">Continue to Payment</button>
         </div>
         <div className="md:hidden block">
          <CheckoutSecurity></CheckoutSecurity>
        </div>
      </div>
      {/* footer */}
                <div className="flex gap-[32px] justify-center mt-4 2xl:mt-[24px] bg-white border-t border-gray-300 p-4 2xl:p-6">
            <span className="text-[10px] 2xl:text-[14px] text-[#372416] cursor-pointer hover:underline">Return Policy </span>
            <span className="text-[10px] 2xl:text-[14px] text-[#372416] cursor-pointer hover:underline">Cancelation Policy </span>
           <span className="text-[10px] 2xl:text-[14px] text-[#372416] cursor-pointer hover:underline"> <Link to='/terms'>Terms of Service</Link></span>
          </div>
    </section>
    </div>
  );
};

export default Checkout;
