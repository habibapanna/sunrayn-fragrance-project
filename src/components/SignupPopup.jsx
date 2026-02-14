import { useEffect } from "react";
import Image from "../assets/image 15.svg";
import Logo from "../assets/Logo (3).svg";
import BrandName from "../assets/Brand Name (1).svg";

const SignupPopup = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 p-4">
      
      {/* Modal */}
      <div className="relative w-full max-w-[950px] rounded-[16px] overflow-hidden bg-white shadow-2xl grid md:grid-cols-2">
        
        {/* LEFT IMAGE */}
        <div className="hidden md:block h-full">
          <img
            src={Image}
            alt="Perfume"
            className="h-full w-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative flex flex-col justify-center px-6 py-10 md:px-12 text-center">
          
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition cursor-pointer"
          >
            ✕
          </button>

        {/* Logo + Brand */}
<div className="flex flex-col items-center mb-6">
  <img
    src={Logo}
    alt="Logo"
    className="h-[48px] mb-3"
  />
  <img
    src={BrandName}
    alt="Brand Name"
    className="h-[18px]"
  />
</div>


          {/* Title */}
          <h2 className="text-[28px] md:text-[34px] font-semibold text-[#2a221c] leading-snug mb-6">
            Unlock 20% off your <br /> first order
          </h2>

          {/* Email */}
          <div className="text-left mb-3 text-[16px] text-black">Email</div>

          <input
            type="email"
            placeholder="info@yourmail.com"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-5 outline-none focus:ring-2 focus:ring-[#A0174A]/30"
          />

          {/* YOUR BUTTON (kept style) */}
          <button className="bg-[#A0174A] text-white py-3 rounded-lg font-medium hover:opacity-90 transition">
            Shop Now
          </button>

          {/* No thanks */}
          <button
            onClick={onClose}
            className="mt-6 text-[16px] text-black"
          >
            No, Thanks
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPopup;
