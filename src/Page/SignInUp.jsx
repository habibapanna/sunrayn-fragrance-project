import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SignInUp = ({ open, onClose }) => {
  const [mode, setMode] = useState("login");

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">

          {/* OVERLAY */}
          <motion.div
            className="absolute inset-0 bg-black/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* MODAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ duration: 0.35 }}
            className="relative bg-white w-[92%] max-w-[420px] rounded-[16px] p-10 md:p-20 shadow-xl"
          >
            {/* CLOSE */}
            <button
              onClick={onClose}
              className="absolute right-5 top-4 text-black transition-all duration-500 border border-gray-300 p-2 rounded-full h-8 w-8 items-center flex justify-center hover:bg-black hover:text-white cursor-pointer"
            >
              ✕
            </button>

            <div>
                <p className="text-[20px] font-semibold mb-6">Hi! Enter info below to better track your orders</p>
            </div>

            {/* TOGGLE */}
            <div className="flex gap-6 border-b pb-3 mb-6 text-[18px] font-semibold">
              <button
                onClick={() => setMode("login")}
                className={`transition-all duration-500 cursor-pointer ${
                  mode === "login"
                    ? "text-[#BA9948]"
                    : "text-gray-800 hover:text-black "
                }`}
              >
                Login
              </button>

              <button
                onClick={() => setMode("signup")}
                className={`transition-all duration-500 cursor-pointer ${
                  mode === "signup"
                    ? "text-[#BA9948]"
                    : "text-gray-800 hover:text-black"
                }`}
              >
                Register
              </button>
            </div>

            {/* FORM */}
            <div className="space-y-4">

              {mode === "signup" && (
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-full border border-gray-300 px-5 py-3 outline-none focus:border-[#BA9948] transition"
                />
              )}

              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-full border border-gray-300 px-5 py-3 outline-none focus:border-[#BA9948] transition"
              />

<input
  type="password"
  placeholder="Password"
  className="w-full rounded-full border border-gray-300 px-5 py-3 outline-none focus:border-[#BA9948] transition"
/>

{mode === "signup" && (
  <label className="flex items-start gap-2 text-gray-600 text-sm leading-snug">
    <input type="checkbox" className="mt-1" />
    <span>
      By clicking here, I agree to the{" "}
      <span className="text-[#BA9948] hover:underline cursor-pointer">
        Terms of Use
      </span>{" "}
      and{" "}
      <span className="text-[#BA9948] hover:underline cursor-pointer">
        Privacy Policy
      </span>
    </span>
  </label>
)}


              {mode === "login" && (
                <label className="flex items-center gap-2 text-gray-600 text-sm">
                  <input type="checkbox" />
                  Remember me
                </label>
              )}

              {/* BUTTON */}
              <button className="w-full bg-[#BA9948] hover:bg-white border hover:text-black hover:border-[#BA9948] text-white font-semibold py-3 rounded-full transition duration-500 cursor-pointer">
                {mode === "login" ? "LOGIN" : "REGISTER"}
              </button>

              {mode === "login" && (
                <p className="text-center text-[#BA9948] text-sm cursor-pointer hover:underline">
                  Lost your password?
                </p>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SignInUp;
