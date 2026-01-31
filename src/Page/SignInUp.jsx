import { useState } from "react";

const SignInUp = ({ onClose }) => {
  const [mode, setMode] = useState("signup");

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center">
      {/* CONTAINER */}
      <div className="relative w-full h-full lg:h-[640px] lg:max-w-[1200px] overflow-hidden rounded-[24px] lg:rounded-[32px]">

        {/* FULL IMAGE BACKGROUND (DESKTOP ONLY) */}
        <img
          src="https://i.postimg.cc/3w2FjYZ4/imgi-422-Desktop-Login-Popup.png"
          alt="Perfume"
          className="hidden lg:block absolute inset-0 w-full h-full object-cover bg-no-repeat"
        />

        {/* FORM WRAPPER */}
        <div className="relative md:absolute lg:right-0 lg:top-0 lg:h-[600px] w-full lg:w-[480px] bg-white rounded-[24px] lg:rounded-[32px] lg:m-[20px] p-[28px] lg:p-[36px] flex flex-col">

          {/* CLOSE */}
          <button
            onClick={onClose}
            className="absolute top-[18px] right-[18px] cursor-pointer text-[14px] lg:text-[16px] underline text-sm"
          >
            Close
          </button>

          {/* HEADING */}
          <h2 className="text-[18px] lg:text-[25px] font-bold leading-snug mb-6 pr-6">
            {mode === "signup"
              ? "Hi! Enter info below to better track your orders."
              : "Hi! Please enter your email."}
          </h2>

          {/* TOGGLE */}
          <div className="flex bg-[#F6F6F6] rounded-full mb-6 shadow-lg">
            <button
              onClick={() => setMode("signup")}
              className={`flex-1 py-[12px] rounded-full duration-500 ease-out text-[14px] lg:text-[16px] 2xl:text-[18px]  transition
                ${mode === "signup" ? "bg-[#BA9948] font-semibold text-white" : "text-black cursor-pointer"}
              `}
            >
              SIGN UP
            </button>
            <button
              onClick={() => setMode("login")}
              className={`flex-1 py-[10px] rounded-full text-[14px] lg:text-[16px] 2xl:text-[18px] cursor-pointer transition duration-500 ease-out
                ${mode === "login" ? "bg-[#BA9948] font-semibold text-white" : "text-black "}
              `}
            >
              LOG IN
            </button>
          </div>

          {/* FORM */}
          <div className="space-y-4 flex-1">
            {mode === "signup" && (
              <input
                type="text"
                placeholder="Name"
                className="w-full border rounded-full px-5 py-3 outline-none border-[#BA9948]"
              />
            )}

            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-full px-5 py-3 outline-none border-[#BA9948]"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border border-[#BA9948] rounded-full px-5 py-3 outline-none"
            />

            {mode === "signup" && (
              <p className="text-[14px] lg:text-[16px] text-gray-500">
                Minimum 5 characters
              </p>
            )}

            <button className="w-full bg-[#BA9948] text-white hover:bg-white border border-[#BA9948] cursor-pointer hover:text-black transition-all duration-500 ease-out py-3 rounded-full text-[14px] lg:text-[16px] 2xl:text-[18px] font-semibold mt-2">
              {mode === "signup" ? "SIGN UP" : "LOGIN"}
            </button>

            {mode === "login" && (
              <div className="text-center text-[14px] lg:text-[16px] mt-4 space-y-2">
                <p>
                  Having issues managing your subscriptions?{" "}
                  <span className="text-[#BA9948] underline cursor-pointer">
                    Click here
                  </span>
                </p>
                <p>
                  Click{" "}
                  <span className="text-[#BA9948] underline cursor-pointer">
                    here
                  </span>{" "}
                  to reset your password
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInUp;
