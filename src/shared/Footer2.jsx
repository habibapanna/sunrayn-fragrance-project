import React from "react";
import {
  FaFacebookF,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaInstagramSquare,
  FaArrowRight,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Logo from "../assets/SANRAYN (2).svg";
import Visa from "../assets/Visa logo.svg";
import Paypal from "../assets/XMLID_1_.svg";
import MasterCard from "../assets/MasterCard logo.svg";
import { SlSocialFacebook } from "react-icons/sl";
import { IoLogoInstagram } from "react-icons/io5";
import { PiTiktokLogo } from "react-icons/pi";
import Logo1 from "../assets/Logo (1).svg";
import { HiArrowRight } from "react-icons/hi";
import Logo2 from "../assets/Footer Logo (1).svg";

const Footer2 = () => {
  return (
    <footer>
      {/* Main Footer */}
      <div className="max-w-full bg-gradient-to-t from-[#FDFCFC] to-[#F0ECE5] py-10 md:py-16 px-[16px] lg:px-[32px]">
        <div className="relative md:hidden mb-10">
  {/* SANRAYN Logo */}
  <img
    src={Logo}
    alt="SANRAYN"
    className="h-14 relative z-10"
  />

  {/* Decorative Logos */}
  <div className="relative hidden md:block mt-6 ml-4 w-[180px] h-[180px] md:w-[240px] md:h-[240px]">

    <img
      src={Logo1}
      alt="Background Logo"
      className="absolute inset-0 w-full h-full object-contain"
    />

    <img
      src={Logo2}
      alt="Big S"
      className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        h-[80px]
        md:h-[150px]
        z-10
      "
    />

  </div>
</div>
        <div className="mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-10">
<div className="relative hidden md:block">
  {/* SANRAYN Logo */}
  <img
    src={Logo}
    alt="SANRAYN"
    className="h-10 relative z-10"
  />

  {/* Decorative Logos */}
  <div className="relative hidden md:block mt-6 ml-4 w-[180px] h-[180px] md:w-[240px] md:h-[240px]">

    <img
      src={Logo1}
      alt="Background Logo"
      className="absolute inset-0 w-full h-full object-contain"
    />

    <img
      src={Logo2}
      alt="Big S"
      className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        h-[80px]
        md:h-[150px]
        z-10
      "
    />

  </div>
</div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#A0174A] font-bold text-[20px] md:text-[28px] mb-4 md:mb-6">
              Quick Links
            </h3>

            <ul className="space-y-2 md:space-y-4 text-[14px] md:text-[18px]">
              <li><a href="#">Home</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Track Order</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-[#A0174A] font-bold text-[20px] md:text-[28px] mb-4 md:mb-6">
              Top Categories
            </h3>

            <ul className="space-y-2 md:space-y-4 text-[14px] md:text-[18px]">
              <li><a href="#">Holiday Sale</a></li>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Sanrayn Specials</a></li>
              <li><a href="#">Body Oil</a></li>
              <li><a href="#">Featured Products</a></li>
              <li><a href="#">Best Sellers</a></li>
            </ul>
          </div>

          {/* Policy */}
          <div>
            <h3 className="text-[#A0174A] font-bold text-[20px] md:text-[28px] mb-4 md:mb-6">
             Commitments
            </h3>

            <ul className="space-y-2 md:space-y-4 text-[14px] md:text-[18px]">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Return Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#A0174A] font-bold text-[20px] md:text-[28px] mb-4 md:mb-6">
           Support
            </h3>

{/* Contact Information */}
<div className="space-y-4  md:mb-6 text-[14px] md:text-[18px] text-black">

  {/* Address */}
  <div className="flex items-start gap-3">
    <FaMapMarkerAlt className="text-[#A0174A] mt-1 flex-shrink-0" />
    <p className="leading-relaxed">
      1469 NOSTRAND AVE BROOKLYN NY
      11226
    </p>
  </div>

  {/* Email */}
  <div className="flex items-center gap-3">
    <MdEmail className="text-[#A0174A] flex-shrink-0" />
    <a
      href="mailto:Info@aromafragrance.us"
      className="hover:text-[#A0174A] transition-colors duration-300"
    >
      help@sanrayn.com
    </a>
  </div>

  {/* Phone */}
  <div className="flex items-center gap-3">
    <FaPhoneAlt className="text-[#A0174A] flex-shrink-0" />
    <a
      href="tel:+13473836682"
      className="hover:text-[#A0174A] transition-colors duration-300"
    >
      +1 (347)383-6682
    </a>
  </div>

</div>

{/* Newsletter */}
<div className="mt-4 md:mt-6">

  <p className="text-[14px] md:text-[18px] text-[#A0174A] mb-4 md:mb-5 leading-relaxed font-bold">
    Stay connected with SANRAYN
  </p>

  {/* Email Input */}
  <div className="relative w-full max-w-[320px]">
    <input
      type="email"
      placeholder="Enter your email address"
      className="
        w-full
        h-[45px]
        rounded-full
        bg-white
        text-[#282828]
        pl-5
        pr-14
        text-[14px]
        border border-[#A0174A]/30
        focus:outline-none
        focus:border-[#A0174A]
        focus:ring-2
        focus:ring-[#A0174A]/10
        transition-all duration-300
      "
    />

    <button
      className="
        absolute
        right-1.5
        top-1/2
        -translate-y-1/2
        h-[36px]
        w-[36px]
        rounded-full
        bg-[#A0174A]
        hover:bg-[#86123D]
        flex
        items-center
        justify-center
        transition-all
        duration-300
      "
      aria-label="Subscribe"
    >
      <HiArrowRight className="text-white text-lg" />
    </button>
  </div>

</div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg- py-6 px-6 border-t border-[#C77F6033]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <p className="text-black text-center lg:text-left text-[16px] order-4 md:order-none">
         ©2026 Sanrayn all right reserved
          </p>
<div>
  <ul className="flex flex-col gap-[16px] 2xl:flex-row text-[14px] items-center md:text-[16px] text-[#282828]">
    
    <li className="text-[14px] lg:text-[16px]">Follow SANRAYN</li>

    <li>
      <div className="flex items-center gap-4 md:gap-2 lg:gap-5">

        {/* Facebook */}
        <span className="border border-[#BA9948] group p-2 cursor-pointer hover:border-[#A0174A] rounded-full
                         hover:bg-[#A0174A] hover:text-white 
                         transition-all duration-500">
          <SlSocialFacebook className="text-2xl text-[#BA9948] group-hover:text-white" />
        </span>

        {/* Instagram */}
        <span className="border border-[#BA9948] group p-2 cursor-pointer hover:border-[#A0174A] rounded-full
                         hover:bg-[#A0174A]  
                         transition-all duration-500">
          <IoLogoInstagram className="text-2xl text-[#BA9948] group-hover:text-white" />
        </span>

        {/* TikTok */}
        <span className="border border-[#BA9948] group p-2 cursor-pointer hover:border-[#A0174A] rounded-full
                         hover:bg-[#A0174A]  
                         transition-all duration-500">
          <PiTiktokLogo className="text-2xl text-[#BA9948] group-hover:text-white" />
        </span>

      </div>
    </li>

  </ul>
</div>
          <div className="flex items-center gap-6 flex-wrap justify-center">

             <div className="flex items-center gap-[33px] md:gap-[20px] lg:gap-[33px] justify-center order-3 md:order-none">
               <img src={Visa} className="h-6" />
               <img src={MasterCard} className="h-6" />
               <img src={Paypal} className="h-6" />
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;