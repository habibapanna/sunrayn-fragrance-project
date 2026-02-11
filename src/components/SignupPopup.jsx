import { useEffect } from "react";

const SignupPopup = ({ onClose }) => {
  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 px-4">
     <div className="p-[20px] bg-white rounded-lg">
         <div className="relative bg-white max-w-[900px] w-full rounded-lg p-[32px] md:p-12 text-center border border-gray-300">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl border border-gray-300 rounded-full p-[18px] cursor-pointer hover:bg-black hover:text-white h-[25px] w-[25px] flex items-center justify-center transition-all duration-500"
        >
          ✕
        </button>

        <h4 className="text-[18px] lg:text-[22px] font-semibold tracking-widest mb-4">SIGNUP FOR EMAILS</h4>
        <div className="mx-auto mb-4 border-2 w-[96px]"></div>

        <h2 className="text-[25px] lg:text-[32px] font-semibold mb-6 leading-relaxed">
          GET 20% DISCOUNT <br /> SHIPPED TO YOUR INBOX
        </h2>

        <p className="text-gray-600 mb-8">
          Subscribe to our newsletter and receive your 20% discount code today.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-[">
          <input
            type="email"
            placeholder="Enter your email..."
            className="border border-gray-300 px-[16px] py-[11px] w-full md:w-[60%] rounded-l-lg"
          />
          <button className="bg-black text-white px-[16px] py-[12px] rounded-r-lg uppercase">
            Subscribe
          </button>
        </div>

        <button
          onClick={onClose}
          className="mt-6 underline text-[14px] lg:text-[16px] cursor-pointer"
        >
          No, Thanks.
        </button>
      </div>
     </div>
    </div>
  );
};

export default SignupPopup;
