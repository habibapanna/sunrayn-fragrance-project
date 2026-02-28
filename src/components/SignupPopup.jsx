import { useEffect, useState } from "react";
import Image from "../assets/image 15.svg";
import Logo from "../assets/Logo (3).svg";
import BrandName from "../assets/Brand Name (1).svg";

const SignupPopup = ({ onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setShow(true);

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(onClose, 300); // wait for animation
  };

  return (
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center p-4
      transition-opacity duration-500
      ${show ? "bg-black/40 opacity-100" : "bg-black/0 opacity-0"}`}
    >
      {/* Modal */}
      <div
        className={`relative w-full max-w-[950px] rounded-[16px] overflow-hidden bg-white shadow-2xl grid md:grid-cols-2
        transform transition-all duration-500
        ${show ? "scale-100 translate-y-0 opacity-100" : "scale-95 translate-y-6 opacity-0"}`}
      >
        
        {/* LEFT IMAGE */}
        <div className="hidden md:block h-full">
          <img
            src={Image}
            alt="Perfume"
            className="h-full w-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative flex flex-col justify-center px-6 py-10 md:px-12 text-center bg-[#F6F7F2]">
          
          {/* Close */}
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500 cursor-pointer"
          >
            ✕
          </button>

          {/* Logo + Brand */}
          <div className="flex flex-col items-center mb-6">
            <img src={Logo} alt="Logo" className="h-[58px] mb-3" />
            <img src={BrandName} alt="Brand Name" className="h-[20px]" />
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
            className="w-full border border-gray-300 rounded-full px-4 py-3 mb-5 outline-none focus:ring-2 focus:ring-[#A0174A]/30"
          />

          {/* Button */}
          <button className="bg-[#DBAB35] py-3 rounded-full text-[15px] cursor-pointer hover:opacity-90 border border-[#DBAB35] hover:bg-white text-black transition-all duration-500 font-normal">
            Continue
          </button>

          {/* No thanks */}
          <button
            onClick={handleClose}
            className="mt-6 text-[16px] text-black cursor-pointer"
          >
            No, Thanks
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPopup;
