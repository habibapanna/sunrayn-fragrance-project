import React from "react";
import { Link } from "react-router-dom";

import BigS from "../../assets/Footer Logo.png";
import Facebook from "../../assets/Facebook logo.png";
import Instagram from "../../assets/instagram logo.png";
import Tiktok from "../../assets/Social Media Icon.png";
import Visa from "../../assets/Visa logo.png";
import Paypal from "../../assets/XMLID_1_.png";
import SANRAYN from "../../assets/SANRAYN.png";
import MasterCard from "../../assets/MasterCard logo.png";
import Logo from "../../assets/Logo (1).png";

const Footer = () => {
  return (
    <footer className="relative max-w-full bg-gradient-to-t from-[#FDFCFC] to-[#F0ECE5] overflow-hidden">

      {/* BACKGROUND LOGO */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 pointer-events-none z-0 top-40 md:top-0">
        <img
          src={Logo}
          alt="Background Logo"
          className="h-full w-full object-cover opacity-80"
        />
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 mx-auto px-6 md:pl-[180px] lg:pl-[260px] py-16 md:py-[250px]">

        {/* MOBILE BIG S */}
        <div className="md:hidden flex justify-center mb-12">
          <img src={BigS} alt="Big S" className="h-[260px]" />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-16 ">

          {/* LEFT CONTENT */}
          <div className="w-full md:w-auto text-left mt-[43px] md:mt-0">
            <Link to="/" className="inline-block">
              <img src={SANRAYN} alt="Sanrayn" className="mx-auto md:mx-0" />
            </Link>

            <div className="flex justify-between gap-[16px] md:gap-16 mt-[48px] md:mt-[57px]">

              {/* SHOP */}
              <div className="text-left">
                <p className="text-[#571313] mb-4 text-[25px]">Shop</p>
                <ul className="space-y-3 text-[14px] md:text-[16px] text-[#282828]">
                  <li className="hover:underline cursor-pointer">Holiday Sale</li>
                  <li className="hover:underline cursor-pointer">New Arrivals</li>
                  <li className="hover:underline cursor-pointer">Featured Products</li>
                  <li className="hover:underline cursor-pointer">Sanrayn Specials</li>
                </ul>
              </div>

              {/* COMPANY */}
              <div className="text-left">
                <p className="text-[#571313] mb-4 text-[25px]">Company</p>
                <ul className="space-y-3 text-[14px] md:text-[16px] text-[#282828]">
                  <li className="hover:underline cursor-pointer">Shop by category</li>
                  <li className="hover:underline cursor-pointer"><Link to='about'>About us</Link></li>
                  <li className="hover:underline cursor-pointer">Blogs</li>
                </ul>
              </div>

              {/* OTHER */}
              <div className="text-left">
                <p className="text-[#571313] mb-4 text-[25px]">Other</p>
                <ul className="space-y-3 text-[14px] md:text-[16px] text-[#282828]">
                  <li className="hover:underline cursor-pointer"><Link to='faq'>FAQs</Link></li>
                  <li className="hover:underline cursor-pointer"><Link to='contact'>Contact us</Link></li>
                </ul>
              </div>

            </div>
          </div>

          {/* DESKTOP BIG S */}
        <div
  className="
    hidden 2xl:block absolute
    right-[260px]
    xl2:right-[320px]
    2xl:right-[420px]
    top-1/2 -translate-y-1/2
    pointer-events-none opacity-90
  "
>
  <img
    src={BigS}
    className="
      h-[520px]
      lg:h-[642px]
      xl2:h-[720px]
      2xl:h-[620px]
      w-auto
    "
  />
</div>


        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
     <div
  className="
    mx-auto p-[32px]
    lg:px-[120px]
    xl2:px-[180px]
    2xl:px-[260px]
    md:py-[32px]
    flex flex-col md:flex-row
    items-center justify-between
    gap-4
    border-t border-[#C77F6033]
  "
>


  {/* 1. COPYRIGHT */}
  <p className="text-[16px] text-[#220B12B2] order-1 md:order-none mb-[16px] md:mb-0">
    ©2026 Sanrayn all right reserved
  </p>

  {/* 2. FOLLOW US TEXT */}
  <span className="text-[16px] text-[#220B12B2] order-2 md:hidden">
    Follow us
  </span>

  {/* 3. SOCIAL ICONS */}
  <div className="flex items-center gap-4 md:gap-2 lg:gap-4 order-3 md:order-none mb-[16px] md:mb-0">
    <img src={Facebook} className="h-4" />
    <img src={Instagram} className="h-4" />
    <img src={Tiktok} className="h-4" />
  </div>

  {/* 4. MADE BY */}
  <p className="text-[16px] text-[#220B12B2] order-4 md:order-none mb-[32px] md:mb-0">
    Made by <span>Niyot.agency</span>
  </p>

  {/* 5. PAYMENTS */}
  <div className="flex items-center gap-[33px] md:gap-[20px] lg:gap-[33px] justify-center order-5 md:order-none">
    <img src={Visa} className="h-6" />
    <img src={MasterCard} className="h-6" />
    <img src={Paypal} className="h-6" />
  </div>

</div>

    </footer>
  );
};

export default Footer;
