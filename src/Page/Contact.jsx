import React from "react";
import Call from '../assets/Frame (9).png'
import Email from '../assets/Frame (10).png'
import Location from '../assets/Frame (11).png'
import Upload from '../assets/Upload.png'
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { LuStore } from "react-icons/lu";
import { HiOutlineBriefcase } from "react-icons/hi2";

const Contact = () => {
  return (
    <div className="bg-white px-[16px]  py-[64px]">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-[32px] lg:text-[50px] text-[#282828] font-semibold mb-3">We’re Here to Help</h1>
        <p className="text-[#282828] text-[18px] lg:text-[20px] max-w-xl mx-auto">
          Have a question about our fragrances or your order? Our team is happy
          to help and will get back to you shortly.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 2xl:gap-8">
{/* Left Card */}
<div className="bg-[#F6F7F2] rounded-[24px] p-8 lg:p-10">
  <h2 className="text-[40px] lg:text-[48px] font-bold text-[#1D0B01] mb-8">
    Contact us.
  </h2>

<div className="space-y-6">
  {/* Customer Feedback */}
  <div className="flex items-center gap-4">
    <HiOutlineChatBubbleLeftRight
      size={24}
      className="text-[#282828] flex-shrink-0"
    />
    <p className="text-[18px] text-[#282828]">
      <span className="font-semibold">Customer</span> feedback?
    </p>
  </div>

  {/* Retailer */}
  <div className="flex items-center gap-4">
    <LuStore
      size={24}
      className="text-[#282828] flex-shrink-0"
    />
    <p className="text-[18px] text-[#282828]">
      <span className="font-semibold">Retailer</span> seeking opportunities?
    </p>
  </div>

  {/* Employment */}
  <div className="flex items-center gap-4">
    <HiOutlineBriefcase
      size={24}
      className="text-[#282828] flex-shrink-0"
    />
    <p className="text-[18px] text-[#282828]">
      Looking for <span className="font-semibold">employment</span> with our
      fabulous team?
    </p>
  </div>
</div>

  {/* Contact Text */}
  <div className="mt-10">
    <p className="text-[18px] text-[#282828] mb-2">
      We would love to hear from you.
    </p>

    <p className="text-[18px] text-[#282828]">
      Please contact us at{" "}
      <a
        href="mailto:help@sanrayn.com"
        className="font-semibold text-[#C58A5C]"
      >
        help@sanrayn.com
      </a>
    </p>
  </div>

  {/* Divider */}
  <div className="flex items-center justify-center my-8">
    <span className="text-[#777] text-sm">or</span>
  </div>

  {/* WhatsApp Button */}
  <button className="w-full border border-green-500 text-green-600 rounded-full py-3 flex items-center justify-center gap-2 font-medium hover:bg-green-50 transition">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12.04 2C6.56 2 2.1 6.46 2.1 11.94c0 1.76.46 3.48 1.33 5L2 22l5.21-1.37a9.9 9.9 0 0 0 4.83 1.24c5.48 0 9.94-4.46 9.94-9.93S17.52 2 12.04 2zm0 18.08c-1.51 0-2.98-.4-4.27-1.16l-.31-.18-3.09.81.83-3.01-.2-.31a8.08 8.08 0 1 1 7.04 3.85zm4.43-6.02c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.17-.7-.62-1.17-1.39-1.31-1.63-.14-.24-.01-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.5.58.18 1.1.15 1.52.09.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
    </svg>
    WhatsApp
  </button>
</div>

        {/* Right Card */}
        <div className="">
         <img
  className="rounded-[24px] h-[400px] lg:h-[580px] w-full object-cover"
  src="https://i.postimg.cc/RVC2rJT7/5c8db80aa2e8a9fdbfc1f81be265a73b661cc593.png"
  alt=""
/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
