import { useState } from "react";
import { User, Mail, Lock, Eye } from "lucide-react";
import Logo from "../assets/Logo (3).svg";
import BrandName from "../assets/Brand Name (1).svg";
import LoginImage from '../assets/source_33c67f1744d30a9778b8a7dbd033753e.jpg';
import SignUpImage from '../assets/source_1fd2e936a8bff36362ef9d1b14f4a2e5.jpg';


const SignInUp = ({onClose, openForgot}) => {
  const [mode, setMode] = useState("signup");


return (
  <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/40 backdrop-blur-sm">

    {/* OUTER WRAPPER WITH BG IMAGE */}
    <div
      className={`relative w-full max-w-[1100px]  rounded-[16px] overflow-hidden shadow-2xl hidden md:block 
        ${mode === "login" ? "h-[550px]" : "h-[673px]"}
        `}
      style={{
        backgroundImage: `url(${mode === "signup" ? SignUpImage : LoginImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >

      {/* FORM CARD */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 rounded-[16px] bg-[#F6F7F2] px-6 py-8 pb-7 shadow-xl w-[444px]">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#E9EAE6] flex items-center justify-center text-xl hover:bg-black hover:text-white cursor-pointer transition-all duration-500"
        >
          ✕
        </button>

      {/* LOGO */}
<div
  className={`flex mb-5 items-center justify-center ${
    mode === "login" ? "flex-row gap-3 mb-[20px]" : "flex-col"
  }`}
>
  <img src={Logo} className={mode === "login" ? "h-[50px]" : "h-[60px] mb-2"} />
  <img src={BrandName} className={mode === "login" ? "h-[27xpx]" : "h-[20px] mb-2"} />
</div>


        {/* HEADING */}
        <h2 className="text-center text-[20px] lg:text-[25px] leading-snug mb-6 text-[#2a2a2a]">
          {mode === "signup"
            ? "Hi! Enter info below to better track your orders."
            : "Hi! Please enter your email."}
        </h2>

        {/* TOGGLE */}
        <div className="flex bg-white rounded-full p-2 mb-[24px]">
          <button
            onClick={() => setMode("signup")}
            className={`flex-1 py-2 rounded-full text-[14px] cursor-pointer transition-all duration-500 font-semibold
              ${mode === "signup"
                ? "bg-[#A0174A] text-white"
                : "text-[#282828] cursor-pointer transition-all duration-500"}`}
          >
            SIGN UP
          </button>

          <button
            onClick={() => setMode("login")}
            className={`flex-1 py-2 rounded-full text-[14px] transition-all duration-500 font-semibold
              ${mode === "login"
                ? "bg-[#A0174A] text-white"
                : "text-[#444] cursor-pointer transition-all duration-500"}`}
          >
            LOG IN
          </button>
        </div>

        {/* FORM */}
        <div className="space-y-[12px]">

          {mode === "signup" && (
            <div className="flex items-center bg-white rounded-full px-4 py-3 shadow-sm">
              <User size={18} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Name"
                className="bg-transparent outline-none w-full text-sm"
              />
            </div>
          )}

          {/* EMAIL */}
          <div className="flex items-center bg-white rounded-full px-4 py-3 shadow-sm">
            <Mail size={18} className="text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>

          {/* PASSWORD */}
          <div className="flex items-center bg-white rounded-full px-4 py-3 shadow-sm">
            <Lock size={18} className="text-gray-400 mr-2" />
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent outline-none w-full text-sm"
            />
            <Eye size={20} className="text-gray-400 cursor-pointer" />
          </div>

          {mode === "signup" && (
            <p className="text-sm text-gray-500">Minimum 5 characters</p>
          )}

          {mode === "signup" ? (
            <label className="flex items-start gap-2 text-sm text-gray-600">
              <input type="checkbox" className="mt-1 accent-[#A0174A]" />
              By registering, you agree our{" "}
              <span className="underline cursor-pointer">
                Terms of Use & Privacy Policy
              </span>
            </label>
          ) : (
            <div className="flex justify-between text-sm text-gray-600">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#A0174A]" />
                Remember Me
              </label>
              <span
 onClick={() => {
  onClose();        // close login modal
  openForgot();     // open forgot modal
}}

  className="text-[#A0174A] cursor-pointer"
>
  Forget password?
</span>

            </div>
          )}

          {/* BUTTON */}
          <button className="w-full bg-[#DBAB35] text-black py-[12px] rounded-full font-semibold  transition-all duration-500 cursor-pointer hover:bg-white hover:text-black hover:border border-[#DBAB35]
        ">
            {mode === "signup" ? "SIGN IN" : "LOG IN"}
          </button>

          {/* FOOTER */}
          {mode === "login" && (
            <p className="text-center text-sm text-gray-600 mt-3">
              Need an account?{" "}
              <span
                onClick={() => setMode("signup")}
                className="font-semibold cursor-pointer"
              >
                Create Account
              </span>
            </p>
          )}
        </div>
      </div>
    </div>

    {/* MOBILE VERSION */}
    <div className="md:hidden w-full max-w-[420px]">
      {/* keep your original mobile card here if you want */}
    </div>
   


  </div>
);

};

export default SignInUp;
