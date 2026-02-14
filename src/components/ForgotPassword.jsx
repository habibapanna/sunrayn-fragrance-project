import { useState, useRef, useEffect } from "react";
import { Mail } from "lucide-react";
import Logo from "../assets/Logo (3).svg";
import BrandName from "../assets/Brand Name (1).svg";

const ForgotPassword = ({ onClose }) => {
  const [step, setStep] = useState("email"); // email | otp
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);
  const [timer, setTimer] = useState(179); // 2:59 = 179 seconds

  // Handle OTP input change
  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next box automatically
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  // Countdown timer effect
  useEffect(() => {
    if (step !== "otp") return;

    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [step, timer]);

  // Format seconds to mm:ss
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative w-[420px] bg-[#F6F7F2] rounded-[16px] px-6 py-8 shadow-2xl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#E9EAE6] 
          flex items-center justify-center text-xl hover:bg-black hover:text-white transition-all duration-500 cursor-pointer"
        >
          ✕
        </button>

        {/* Logo */}
        <div className="flex flex-col items-center mb-5">
          <img src={Logo} className="h-[60px] mb-2" />
          <img src={BrandName} className="h-[20px]" />
        </div>

        {/* EMAIL STEP */}
        {step === "email" && (
          <>
            <h2 className="text-center text-[25px] font-semibold mb-2">
              Reset password
            </h2>

            <p className="text-center text-[14px] text-[s] mb-6">
              Resetting passwords requires security verification.
              Verify via registered email.
            </p>

            <div className="flex items-center bg-white rounded-full px-4 py-3 shadow-sm mb-5">
              <Mail size={18} className="text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent outline-none w-full text-sm"
              />
            </div>

            <button
              onClick={() => {
                setStep("otp");
                setTimer(179); // reset timer when moving to OTP step
              }}
              className="w-full bg-[#DBAB35] text-black py-[12px] rounded-full  hover:brightness-95 transition-all duration-500 cursor-pointer hover:bg-white hover:text-black hover:border border-[#DBAB35] text-[15px] font-semibold"
            >
              Reset
            </button>
          </>
        )}

        {/* OTP STEP */}
        {step === "otp" && (
          <>
            <h2 className="text-center text-[25px]  mb-2 font-semibold">
              Enter Code
            </h2>

            <p className="text-center text-[14px] text-[#282828] mb-6">
              Enter the security code we sent on <br />
              <span className="font-medium">{email}</span>
            </p>

            {/* OTP Boxes */}
            <div className="flex justify-center gap-3 mb-5">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={digit}
                  ref={(el) => (inputsRef.current[index] = el)}
                  onChange={(e) => handleChange(e.target.value, index)}
                  className="w-12 h-12 text-center text-lg rounded-full bg-white shadow-sm outline-none"
                />
              ))}
            </div>

            {/* Countdown */}
            <p className="text-center text-[14px] text-[#282828] mb-5 font-medium">
              {formatTime(timer)}
            </p>

            <button
              className="w-full bg-[#DBAB35] text-black py-[12px] rounded-full hover:brightness-95 transition-all duration-500 cursor-pointer hover:bg-white hover:text-black hover:border border-[#DBAB35] text-[15px] font-semibold"
            >
              Reset
            </button>

            <p className="text-center text-[14px] text-[#3A3F42] mt-4 underline cursor-pointer">
              Didn’t receive a code?
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
