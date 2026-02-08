import React from "react";
import { Link } from "react-router-dom";

import BigS from "../../assets/Footer Logo.svg";
import Facebook from "../../assets/Facebook logo.svg";
import Instagram from "../../assets/instagram logo.svg";
import Tiktok from "../../assets/Footer Social.svg";
import Visa from "../../assets/Visa logo.svg";
import Paypal from "../../assets/XMLID_1_.svg";
import SANRAYN from "../../assets/SANRAYN.svg";
import MasterCard from "../../assets/MasterCard logo.svg";
import Logo from "../../assets/Logo (1).svg";

const Footer = () => {
  return (
    <footer className="relative max-w-full bg-gradient-to-t from-[#FDFCFC] to-[#F0ECE5] overflow-hidden">


      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 mx-auto lg:px-6 lg:pl-[50px] 2xl:pl-[80px] p-[16px] py-16 md:py-[150px]">

        {/* MOBILE BIG S */}
        <div className="md:hidden flex justify-center mb-[24px]">
          <img src={BigS} alt="Big S" className="h-[260px]" />
           {/* LOGO BACKGROUND */}
  <img
    src={Logo}
    alt="Brand Background"
    className="
      absolute
      inset-0
      m-auto
      h-full w-full object-cover
    "
  />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-16">

          {/* LEFT CONTENT */}
          <div className="w-full 2xl:max-w-3xl text-left mt-[40px] lg:mt-0">
            <Link to="/" className="2xl:inline-block">
              <img src={SANRAYN} alt="Sanrayn" className="mx-auto" />
            </Link>

            <div className="flex flex-wrap justify-between gap-[32px] mt-[48px] lg:mt-[57px]">
              {/* SHOP */}
              <div className="text-left">
                <p className="text-[#571313] mb-4 text-[25px]">Shop by Category</p>
                <ul className="space-y-3 text-[14px] md:text-[16px] text-[#282828]">
                  <li className="hover:underline cursor-pointer"><Link to='/holidayOffer'>Holiday Sale</Link></li>
                  <li className="hover:underline cursor-pointer"><Link to='/productList'>New Arrivals</Link></li>
                  <li className="hover:underline cursor-pointer"><Link to='/productList'>Featured Products</Link></li>
                  <li className="hover:underline cursor-pointer"><Link to='/productList'>Sanrayn Specials</Link></li>
                </ul>
              </div>

              {/* Quick Links */}
              <div className="text-left">
                <p className="text-[#571313] mb-4 text-[25px]">Quick Links</p>
                <ul className="space-y-3 text-[14px] md:text-[16px] text-[#282828]">
                   <li className="hover:underline cursor-pointer"><Link to='blogs'>Blogs</Link></li>
                  <li className="hover:underline cursor-pointer"><Link to='/faq'>FAQs</Link></li>
                  <li className="hover:underline cursor-pointer"><Link to='about'>About Us</Link></li>
                   <li className="hover:underline cursor-pointer"><Link to='/contact'>Contact Us</Link></li>
                </ul>
              </div>

              {/* Customer Support */}
              <div className="text-left">
                <p className="text-[#571313] mb-4 text-[25px]">Customer Support</p>
                <ul className="space-y-3 text-[14px] md:text-[16px] text-[#282828]">
                  <li className="hidden  hover:underline cursor-pointer"><Link to='terms'>Terms of Services</Link></li>
                  <li className="hover:underline cursor-pointer">Support@sanrayn.com</li>
                  <li className="hover:underline cursor-pointer">Track my Order</li>
                  <li className="hover:underline cursor-pointer">Return/Exchange Portal</li>
                  <li className="hover:underline cursor-pointer">Refund Policy</li>
                  <li className="hover:underline cursor-pointer">Privacy Policy</li>
                  <li className="hover:underline cursor-pointer">Accessibility Statement</li>
                </ul>
              </div>

              {/* Quick Links */}
              <div className="text-left">
                <p className="text-[#571313] mb-4 text-[25px]">Contact Info</p>
                <ul className="space-y-3 text-[14px] md:text-[16px] text-[#282828]">
                   <li className="text-[14px] lg:text-[16px]">Follow us</li>
                  <li className="hover:underline cursor-pointer"><div className="flex items-center gap-4 md:gap-2 lg:gap-4 order-2 md:order-none mb-[16px] md:mb-0">
    <img src={Facebook} className="h-5" />
    <img src={Instagram} className="h-5" />
    <img src={Tiktok} className="h-5" />
  </div></li>
                </ul>
              </div>

            </div>
          </div>

{/* DESKTOP BIG S + LOGO BACKGROUND */}
 <div className=" hidden 2xl:flex absolute lg:right-[50px] top-1/2 -translate-y-1/2 items-center justify-center pointer-events-none w-[420px] h-[420px] 2xl:w-[650px] 2xl:h-[650px] " >
  {/* LOGO BACKGROUND */} 
  <img src={Logo} alt="Brand Background" className=" absolute inset-0 m-auto h-full w-full object-cover opacity-100" />
   {/* BIG S FOREGROUND */} 
   <img src={BigS} alt="Big S" className=" relative z-10 lg:h-[300px] 2xl:h-[400px] w-auto " /> </div>

        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
     <div
  className="
    mx-auto p-[32px]
    lg:px-[80px]
    2xl:px-[260px]
    md:py-[32px]
    flex flex-col md:flex-row
    items-center justify-between
    gap-4
    border-t border-[#C77F6033]
  "
>

  {/* 1. COPYRIGHT */}
  <p className="text-[16px] text-[#220B12B2] order-4 md:order-none md:mb-0">
    ©2026 Sanrayn all right reserved
  </p>
  

  {/* 2. PAYMENTS */}
  <div className="flex items-center gap-[33px] md:gap-[20px] lg:gap-[33px] justify-center order-3 md:order-none">
    <img src={Visa} className="h-6" />
    <img src={MasterCard} className="h-6" />
    <img src={Paypal} className="h-6" />
  </div>

</div>
    </footer>
  );
};

export default Footer;
