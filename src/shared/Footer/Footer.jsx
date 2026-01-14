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
    <footer className="relative bg-[#F0ECE5] overflow-hidden">

      {/* LEFT BACKGROUND LOGO */}
      <div className="absolute inset-y-0 left-0 w-1/2 pointer-events-none">
        <img
          src={Logo}
          alt="Sanrayn Background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto px-[319px] py-[250px] flex justify-between">

        {/* LEFT CONTENT */}
        <div>
          <Link to="/">
            <img src={SANRAYN} alt="Sanrayn" />
          </Link>

          <div className="grid grid-cols-3 gap-16 mt-[57px]">

            {/* SHOP */}
            <div>
              <p className="text-[#571313] mb-4 text-[25px]">Shop</p>
              <ul className="space-y-3 text-[18px] text-[#282828]">
                <li>Holiday Sale</li>
                <li>New Arrivals</li>
                <li>Featured Products</li>
                <li>Sanrayn Specials</li>
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <p className="text-[#571313] mb-4 text-[25px]">Company</p>
              <ul className="space-y-3 text-[18px] text-[#282828]">
                <li>Shop by category</li>
                <li>About us</li>
                <li>Blogs</li>
              </ul>
            </div>

            {/* OTHER */}
            <div>
              <p className="text-[#571313] mb-4 text-[25px]">Other</p>
              <ul className="space-y-3 text-[18px] text-[#282828]">
                <li>FAQs</li>
                <li>Contact us</li>
              </ul>
            </div>

          </div>
        </div>

        {/* RIGHT BIG S */}
        <div className="absolute right-[337px] top-1/2 -translate-y-1/2 pointer-events-none opacity-90">
          <img
            src={BigS}
            alt="Decorative S"
            className="h-[642px] w-[348px]"
          />
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-[#C77F6033]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-6">

          <p className="text-[16px] text-[#220B12B2]">
            ©2026 Sanrayn all right reserved
          </p>

          <p className="text-[16px] text-[#220B12B2]">
            Made by <span>Niyo.agency</span>
          </p>

          <div className="flex items-center gap-2">
            <span className="text-[16px] text-[#220B12B2]">Follow us</span>
            <img src={Facebook} className="h-4" />
            <img src={Instagram} className="h-4" />
            <img src={Tiktok} className="h-4" />
          </div>

          <div className="flex items-center gap-5">
            <img src={Visa} className="h-6" />
            <img src={MasterCard} className="h-6" />
            <img src={Paypal} className="h-6" />
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
