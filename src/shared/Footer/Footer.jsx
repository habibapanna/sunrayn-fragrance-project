import React from "react";

import BigS from "../../assets/Footer Logo.png";
import Facebook from "../../assets/Facebook logo.png";
import Instagram from "../../assets/instagram logo.png";
import Tiktok from "../../assets/Social Media Icon.png";
import Visa from "../../assets/Visa logo.png";
import Paypal from "../../assets/XMLID_1_.png";
import { Link } from "react-router-dom";
import SANRAYN from '../../assets/SANRAYN.png';
import MasterCard  from '../../assets/MasterCard logo.png';
import Logo  from '../../assets/Logo (1).png';

const Footer = () => {
  return (
    <footer className="bg-[#F0ECE5] relative overflow-hidden">
      {/* MAIN CONTENT */}
      <div className="mx-auto px-[319px] py-[252px] flex justify-between gap-10">

        {/* LEFT CONTENT */}
        <div className="z-10"
        style={{
        backgroundImage:
          `url(${Logo})`,
      }}
        >
          <Link to='/'>
          <img src={SANRAYN} alt="" />
          </Link>

          <div className="grid grid-cols-3 gap-16 mt-[57px] text-[#6B6B6B]">

            {/* SHOP */}
            <div>
              <p className="text-[#571313] mb-4 text-[25px]">Shop</p>
              <ul className="space-y-3 text-[18px] text-[#282828] cursor-pointer">
                <li>Holiday Sale</li>
                <li>New Arrivals</li>
                <li>Featured Products</li>
                <li>Sanrayn Specials</li>
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <p className="font-medium text-[#571313] mb-4 text-[25px]">Company</p>
              <ul className="space-y-3 text-[18px] text-[#282828] cursor-pointer">
                <li>Shop by category</li>
                <li>About us</li>
                <li>Blogs</li>
              </ul>
            </div>

            {/* OTHER */}
            <div>
              <p className="font-medium text-[#571313] mb-4 text-[25px]">Other</p>
              <ul className="space-y-3 text-[18px] text-[#282828] cursor-pointer">
                <li>FAQs</li>
                <li>Contact us</li>
              </ul>
            </div>

          </div>
        </div>

        {/* RIGHT BIG S */}
        <div className="absolute right-[337px] top-[410px] -translate-y-1/2 opacity-90">
          <img
            src={BigS}
            alt="Sanrayn Decorative"
            className=" h-[642px] w-[348px]"
          />
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-[#C77F6033] border-1">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-6 text-sm text-[#8A8A8A]">

          {/* LEFT */}
          <p className="text-[16px] text-[#220B12B2]">©2026 Sanrayn all right reserved</p>

          {/* CENTER */}
          <p className="text-[16px] text-[#220B12B2]">
            Made by <span className="text-[#220B12B2]">Niyo.agency</span>
          </p>

          {/* SOCIAL */}
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-[16px] text-[#220B12B2]">Follow us</span>
            <img src={Facebook} className="h-4" />
            <img src={Instagram} className="h-4" />
            <img src={Tiktok} className="h-4" />
          </div>

          {/* PAYMENTS */}
          <div className="flex items-center gap-5 cursor-pointer">
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
