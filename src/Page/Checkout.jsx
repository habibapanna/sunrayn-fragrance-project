
import { Link } from "react-router-dom";
import Logo2 from "../assets/Logo (2).png";
import SANRAYN from '../assets/SANRAYN (1).png';
import shopPay from '../assets/shopPayLogo.png';
import PayPal from '../assets/XMLID_1_.png';
import Gpay  from '../assets/G pay logo.png';
import Visa  from '../assets/Visa logo.png';
import MasterCard  from '../assets/MasterCard logo.png';
import Flag from '../assets/Flag Pack.png';
import { CiSearch } from "react-icons/ci";
import { LuSearch } from "react-icons/lu";

const Checkout = () => {
  return (
    <section className="min-h-screen bg-[#F6F7F2] py-10">
      {/* Logo */}
      <div className="flex flex-col w-[174px] h-[118px] justify-center mb-10 mx-auto items-center">
       <Link to="/" className="cursor-pointer"> <img src={Logo2} alt="Sanrayn" className="h-[89px] w-[89px]" /></Link>
       <Link to="/" className="cursor-pointer"><img src={SANRAYN} alt="" className="w-[174px]h-[28px]"/></Link>
      </div>

      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:px-10 relative">

        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">
          {/* Express Checkout */}
          <div className="bg-white rounded-2xl p-6">
  <p className="text-[16px] text-[#282828] text-center font-medium mb-[24px]">
    Express checkout
  </p>

  <div className="flex gap-3">
    <button className="flex flex-1 items-center justify-center bg-[#592FF4] py-[12px] rounded-full">
      <img src={shopPay} alt="Shop Pay" className="h-[21px] w-[88px]" />
    </button>

    <button className="flex flex-1 items-center justify-center bg-[#FFC439] py-3 rounded-full">
      <img src={PayPal} alt="PayPal" className="h-[24px] w-[95px]" />
    </button>

    <button className="flex flex-1 items-center justify-center bg-black py-3 rounded-full">
      <img src={Gpay} alt="Google Pay" className="h-[24px] w-[60px]" />
    </button>
  </div>

  <p className="text-[14px] text-[#282828] text-center mt-[24px] w-2/3 mx-auto">
    By continuing with your payment, you agree to the future charges listed on this page and the cancellation policy.
  </p>
</div>


          {/* Contact */}
          <div className="bg-white rounded-2xl p-6 space-y-4">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-[20px] text-[#050C29]">Contact Information</span>
              <span className="text-[#282828] text-[16px]">Already have an account? <span className="underline text-[16px] font-semibold">Log in</span></span>
            </div>
            <div>
                <label className="text-[18px]">Email</label>
            <input className="w-full bg-[#F6F7F2] rounded-full px-[16px] py-[12px] text-[16px] focus:outline-none" placeholder="samwalter@gmail.com" />
            </div>
            <label className="flex items-center gap-2 text-[16px] cursor-pointer">
              <input type="checkbox" className="w-[16px] h-[16px] border-[1.5px] border-[#3A3F42] checkbox checkbox-sm rounded-[4px] cursor-pointer"/> Subscribe for new and daily update
            </label>
          </div>

        {/* Delivery Information */}
<div className="bg-white rounded-[24px] p-6 space-y-5">

  <p className="text-[16px] font-medium text-[#1D1D1D]">
    Delivery Information
  </p>

  {/* Country */}
  <div className="space-y-2">
    <label className="text-sm text-[#1D1D1D]">Country</label>
    <select className="w-full bg-[#F6F7F2] rounded-full px-5 py-3 text-sm focus:outline-none">
      <option>United State</option>
    </select>
  </div>

  {/* Name */}
  <div className="grid grid-cols-2 gap-4">
    <div className="space-y-2">
      <label className="text-sm">First Name</label>
      <input
        placeholder="Sam"
        className="w-full bg-[#F6F7F2] rounded-full px-5 py-3 text-sm focus:outline-none"
      />
    </div>

    <div className="space-y-2">
      <label className="text-sm">Last Name</label>
      <input
        placeholder="Walter"
        className="w-full bg-[#F6F7F2] rounded-full px-5 py-3 text-sm focus:outline-none"
      />
    </div>
  </div>

  {/* Address */}
  <div className="space-y-2">
    <label className="text-sm">Address</label>
    <div className="relative">
      <input
        placeholder="Enter delivery address"
        className="w-full bg-[#F6F7F2] rounded-full px-5 py-3 pr-12 text-sm focus:outline-none"
      />
      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
        <LuSearch className="h-[20px] w-[20px] text-[#1D0B01]" />
      </span>
    </div>
  </div>

  {/* City / State / Zip */}
  <div className="grid grid-cols-3 gap-4">
    <div className="space-y-2">
      <label className="text-sm">City</label>
      <select className="w-full bg-[#F6F7F2] rounded-full px-5 py-3 text-sm focus:outline-none">
        <option>Select</option>
      </select>
    </div>

    <div className="space-y-2">
      <label className="text-sm">State</label>
      <select className="w-full bg-[#F6F7F2] rounded-full px-5 py-3 text-sm focus:outline-none">
        <option>Select</option>
      </select>
    </div>

    <div className="space-y-2">
      <label className="text-sm">Zip Code</label>
      <input
        placeholder="13265"
        className="w-full bg-[#F6F7F2] rounded-full px-5 py-3 text-sm focus:outline-none"
      />
    </div>
  </div>

  {/* Phone Number */}
  <div className="space-y-2">
    <label className="text-sm">Phone Number</label>
    <div className="flex items-center gap-3 bg-[#F6F7F2] rounded-full px-5 py-3">
      <span className="flex items-center gap-2 text-sm">
        <img src={Flag} alt="" />
        <span className="text-gray-500"></span>
      </span>
      <input
        placeholder="+1(555) 247-8936"
        className="bg-transparent text-sm focus:outline-none w-full"
      />
    </div>
  </div>

  {/* Save Info */}
  <label className="flex items-center gap-3 text-sm cursor-pointer">
    <input type="checkbox" className="w-[16px] h-[16px] border-[1.5px] border-[#3A3F42] checkbox checkbox-sm rounded-[4px] cursor-pointer" />
    Save my information for a faster checkout
  </label>

</div>


          {/* Payment */}
          <div className="bg-[#FFFFFF] rounded-[24px] p-[24px] space-y-4">
            <p className="font-medium text-[20px] text-[#050C29]">Payment</p>
            <label className="flex items-center justify-between bg-[#F6F7F2] px-4 py-3 rounded-[100px]">
              <span className="flex items-center text-[16px] text-[#282828] gap-2 "><input type="radio" className="h-[20px] w-[20px] rounded-[24px] border-[2px] border-[#282828]" /> PayPal</span>
              <img src={PayPal} alt="" className="h-[16px] w-[60px] cursor-pointer" />
            </label>
            <label className="flex items-center justify-between bg-[#F6F7F2] px-4 py-3 rounded-[100px]">
              <span className="flex items-center gap-2"><input  className="border-4 rounded-full h-[20px] w-[20px] border-[#BA9948]" defaultChecked /> Credit Card</span>
              <div className="flex gap-2"><img src={Visa} alt="" className="h-[20px] w-[35px] cursor-pointer" /><img src={MasterCard} alt="" className="h-[24px] w-[35px] cursor-pointer" /></div>
            </label>
            <div className="bg-[#F6F7F2] rounded-[24px] p-[16px] space-y-[12px]">

  {/* Cardholder Name */}
  <div className="space-y-[6px]">
    <label className="text-[18px] text-[#282828]">
      Cardholder Name
    </label>
    <input
      type="text"
      placeholder="James Walter"
      className="w-full bg-white rounded-full px-[20px] py-[12px] text-[16px] outline-none"
    />
  </div>

  {/* Card Number */}
  <div className="space-y-[6px]">
    <label className="text-[18px] text-[#282828]">
      Card Number
    </label>

    <div className="relative">
      <input
        type="text"
        placeholder="4173 1029 6866 2351"
        className="w-full bg-white rounded-full px-[20px] pr-[56px] py-[12px] text-[16px] outline-none"
      />

      {/* Visa Logo */}
      <img
        src={Visa}
        alt="Visa"
        className="absolute right-[16px] top-1/2 -translate-y-1/2 h-[20px] w-[35px] cursor-pointer"
      />
    </div>
  </div>

  {/* Expiry & CVC */}
  <div className="grid grid-cols-2 gap-4">

    <div className="space-y-[6px]">
      <label className="text-[18px] text-[#282828]">
        Expiry
      </label>
      <input
        type="text"
        placeholder="20 / 28"
        className="w-full bg-white rounded-full px-[20px] py-[12px] text-[16px] outline-none"
      />
    </div>

    <div className="space-y-[6px]">
      <label className="text-[18px] text-[#282828]">
        CVC
      </label>
      <input
        type="password"
        placeholder="654"
        className="w-full bg-white rounded-full px-[20px] py-[12px] text-[16px] outline-none"
      />
    </div>

  </div>

  {/* Save Card */}
  <label className="flex items-center gap-2 text-[16px] text-[#282828] mt-[4px] cursor-pointer">
    <input
      type="checkbox"
      className="w-[16px] h-[16px] border-[1.5px] border-[#3A3F42] checkbox checkbox-sm rounded-[4px] cursor-pointer"
    />
    Save this card for faster checkout
  </label>

</div>

          </div>

         <div className="rounded-[24px] p-[24px] bg-white">
             <button className="w-full bg-[#E0B24B] py-[7px] px-[12px] rounded-full font-semibold text-[16px] cursor-pointer">Continue to Payment</button>
          <div className="flex gap-[32px] justify-center mt-[16px]">
            <span className="text-[14px] text-[#372416] cursor-pointer">Return Policy </span>
            <span className="text-[14px] text-[#372416] cursor-pointer">Cancelation Policy </span>
            <span className="text-[14px] text-[#372416] cursor-pointer">Terms of Service</span>
          </div>
         </div>
        </div>

        {/* RIGHT */}
       <div className="lg:col-span-2"> <div className="bg-white rounded-[20px] p-[24px] w-full
      lg:sticky lg:top-[32px]">
          <p className="font-medium text-[20px] mb-4">Product Details</p>
          <div className="flex justify-between items-center mb-[20px]">
            <div className="flex gap-3 items-center">
  {/* IMAGE + BADGE */}
  <div className="relative">
    {/* BADGE */}
    <span className="absolute -top-[6px] -right-[6px] 
      w-[25px] h-[25px] rounded-full 
      bg-[#571313] text-white 
      text-[12px] font-medium 
      flex items-center justify-center">
      1
    </span>

    {/* IMAGE WRAPPER */}
    <div className="bg-[#EDE8E0] p-[10px] rounded-[7px]">
      <img
        src="https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png"
        className="w-12 h-12 rounded-lg"
        alt=""
      />
    </div>
  </div>

  {/* TEXT */}
  <div>
    <p className="text-[18px] font-medium">Cerisa Aura</p>
    <p className="text-[12px] text-gray-500">15ML / 1oz</p>
  </div>
</div>

           <div>
             <p className="font-normal text-[12px] text-[#282828]">$32.00</p>
            <p className="font-normal text-[#282828]">$28.80</p>
           </div>
          </div>
          <div className="border-1 mb-[20px] border-[#bfc7cd]"></div>
          <div className="flex gap-2 mb-4">
            <input className="flex-1 bg-[#F6F7F2] rounded-full text-[16px] pl-[20px] pr-[16px] py-[12x] focus:outline-none" placeholder="Discount code or gift card" />
            <button className="bg-[#FD4929] text-white py-[7px] px-[32px] rounded-full text-[16px] cursor-pointer">Apply</button>
          </div>
          <div className="border-1 mb-[20px] border-[#bfc7cd]"></div>
          <div className="space-y-[8px]">
            <div className="flex justify-between text-[16px]"><span>Subtotal</span><span>$32</span></div>
            <div className="flex justify-between text-[16px]"><span>Discount</span><span>$2</span></div>
            <div className="flex justify-between text-[16px]"><span>Shipping</span><span>$4</span></div>
            <div className="flex justify-between text-[16px]"><span>VAT (5%)</span><span>$1.75</span></div>
            <div className="border-1 my-[20px] border-[#bfc7cd]"></div>
            <div className="flex justify-between font-semibold"><span className="text-[20px] font-bold">Total</span><span className="text-[20px] font-bold">$32</span></div>
          </div>
        </div></div>
      </div>
    </section>
  );
};

export default Checkout;
