import React from "react";
import {
  FaFacebookF,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaInstagramSquare,
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
      <div className="max-w-full bg-gradient-to-t from-[#FDFCFC] to-[#F0ECE5] py-16 px-[16px] lg:px-[32px]">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
<div className="relative">
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
            <h3 className="text-[#A0174A] font-bold text-[28px] mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-[18px]">
              <li><a href="#">Home</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Track Order</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* Store Policy */}
          <div>
            <h3 className="text-[#A0174A] font-bold text-[28px] mb-6">
              Store Policy
            </h3>

            <ul className="space-y-4 text-[18px]">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Return Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-[#A0174A] font-bold text-[28px] mb-6">
              Shop By Top Categories
            </h3>

            <ul className="space-y-4 text-[18px]">
              <li><a href="#">Body Oil</a></li>
              <li><a href="#">Imported Attar</a></li>
              <li><a href="#">Best Selling Products</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#A0174A] font-bold text-[28px] mb-6">
              Contact Info
            </h3>

            <div className="space-y-6 text-[17px]">
              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-[#A0174A] mt-1 flex-shrink-0" />
                <p>
                  1469 NOSTRAND AVE BROOKLYN NY
                  11226
                </p>
              </div>

              <div className="flex gap-4">
                <MdEmail className="text-[#A0174A] mt-1 flex-shrink-0" />
                <p>Info@aromafragrance.us</p>
              </div>

              <div className="flex gap-4">
                <FaPhoneAlt className="text-[#A0174A] mt-1 flex-shrink-0" />
                <p>+1 (347)383-6682</p>
              </div>
            </div>

 {/* EMAIL INPUT */}
              <div className="relative w-full mt-5 max-w-[298px]">
                <input
                  type="email"
                  placeholder="yourname@gmail.com"
                  className="w-full h-[35px] md:h-[40px] 2xl:h-[50px] rounded-full bg-white text-black pl-6 md:pr-16 text-[14px] md:text-[16px] focus:outline-none border border-[#A0174A]"
                />

                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 
                    h-[22px] w-[22px] md:w-[30px] md:h-[30px] 2xl:h-[40px] 2xl:w-[40px]
                    rounded-full bg-[#A0174A] 
                    flex items-center justify-center transition cursor-pointer "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M13 5l7 7-7 7" />
                    </svg>
                  </button>
              </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg- py-6 px-6 border-t border-[#C77F6033]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <p className="text-black text-center lg:text-left text-[16px]">
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