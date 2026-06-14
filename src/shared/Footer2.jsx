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
import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Footer2 = () => {
  return (
    <footer>
      {/* Main Footer */}
      <div className="max-w-full bg-gradient-to-t from-[#FDFCFC] to-[#F0ECE5] py-10 md:py-16 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12 2xl:px-16">
        {/* Wrapper keeps content from stretching too wide on ultra-large monitors */}
        <div className="mx-auto 2xl:max-w-[1800px]">

          {/* Logo + Newsletter block - shown on mobile & tablet (below lg), hidden on desktop */}
          <div className="relative mb-6 lg:hidden lg:mb-10">
            <img src={Logo} alt="SANRAYN" className="h-12 relative z-10" />

            {/* Newsletter (mobile & tablet) */}
            <div className="lg:hidden mx-auto block mt-6">
              <p className="text-[18px] text-[#A0174A] mb-4 md:mb-5 leading-relaxed font-bold">
                Stay connected with SANRAYN
              </p>

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

          {/*
            Main grid:
            - Below lg: 2 columns -> the 4 link sections form a clean 2x2 grid
              (logo column is display:none, so it doesn't take a grid slot)
            - lg and up: 5 columns -> logo/decorative column + 4 sections in one row
          */}
          <div className="mx-auto grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-6 xl:gap-8 2xl:gap-10">

            {/* Logo + Decorative graphic - desktop only (lg and up) */}
            <div className="relative hidden lg:block">
              <img src={Logo} alt="SANRAYN" className="h-10 relative z-10" />

              {/* Decorative Logos - sized per breakpoint so it never overflows its column */}
              <div className="relative mt-6 ml-2 w-[150px] h-[150px] xl:w-[200px] xl:h-[200px] 2xl:w-[240px] 2xl:h-[240px]">
                <img
                  src={Logo1}
                  alt=""
                  className="absolute inset-0 w-full h-full object-contain"
                />
                <img
                  src={Logo2}
                  alt=""
                  className="
                    absolute
                    top-1/2
                    left-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    h-[90px]
                    xl:h-[120px]
                    2xl:h-[150px]
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

            {/* Commitments / Policy */}
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

            {/* Support */}
            <div>
              <h3 className="text-[#A0174A] font-bold text-[20px] md:text-[28px] mb-4 md:mb-6">
                Support
              </h3>

              {/* Contact Information */}
              <div className="space-y-4 md:mb-6 text-[14px] md:text-[18px] text-black">

                {/* Address */}
                <div className="flex items-start gap-3">
                  <FiMapPin className="text-[#A0174A] mt-1 flex-shrink-0" />
                  <p className="leading-relaxed">
                    1469 NOSTRAND AVE BROOKLYN NY 11226
                  </p>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <FiMail className="text-[#A0174A] flex-shrink-0" />
                  <a
                    href="mailto:help@sanrayn.co"
                    className="hover:text-[#A0174A] transition-colors duration-300 break-all"
                  >
                    help@sanrayn.co
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <FiPhone className="text-[#A0174A] flex-shrink-0" />
                  <a
                    href="tel:+13473836682"
                    className="hover:text-[#A0174A] transition-colors duration-300"
                  >
                    +1 (347)383-6682
                  </a>
                </div>

                {/* Support hours */}
                <div className="flex items-start gap-3">
                  <FiClock className="text-[#A0174A] mt-1 flex-shrink-0" />
                  <p className="leading-relaxed">
                    Support available within 24 hours
                  </p>
                </div>

              </div>

              {/* Newsletter - desktop only (lg and up) */}
              <div className="mt-4 hidden lg:block lg:mt-6">
                <p className="text-[14px] md:text-[18px] text-[#A0174A] mb-4 md:mb-5 leading-relaxed font-bold">
                  Stay connected with SANRAYN
                </p>

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
      </div>

      {/* Bottom Bar */}
      <div className="py-6 px-4 sm:px-6 border-t border-[#C77F6033]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">

          <p className="text-black text-center lg:text-left text-[16px] order-4 lg:order-none">
            ©2026 Sanrayn all right reserved
          </p>

          <div>
            <ul className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-4 text-[14px] items-center md:text-[16px] text-[#282828]">

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

          <div className="flex items-center gap-6 flex-wrap justify-center order-3 lg:order-none">
            <div className="flex items-center gap-[33px] md:gap-[20px] lg:gap-[33px] justify-center">
              <img src={Visa} alt="Visa" className="h-6" />
              <img src={MasterCard} alt="MasterCard" className="h-6" />
              <img src={Paypal} alt="PayPal" className="h-6" />
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer2;