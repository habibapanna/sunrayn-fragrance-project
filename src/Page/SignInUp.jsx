import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SignInUp = ({ onClose }) => {
  const [mode, setMode] = useState("signup");

const FloatingInput = ({ label, type }) => {
  return (
    <div className="relative">
      <input
        type={type}
        required
        className="peer w-full border border-gray-300 rounded-full px-5 pt-5 pb-2 outline-none focus:border-[#BA9948]"
      />
      <label className="
        absolute left-5 top-3 text-gray-400 text-sm
        peer-focus:text-xs peer-focus:-top-2 peer-focus:text-[#BA9948]
        peer-valid:text-xs peer-valid:-top-2
        transition-all bg-white px-1
      ">
        {label}
      </label>
    </div>
  );
};





  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[70] flex items-center justify-center bg-black/40 backdrop-blur-sm"
      >
        {/* CONTAINER */}
        <motion.div
          initial={{ scale: 0.9, y: 40 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 40 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-full h-full md:h-[540px] lg:h-[640px] md:max-w-[700px] lg:max-w-[1200px] overflow-hidden rounded-[28px]"
        >
          {/* BACKGROUND IMAGE */}
          <img
            src="https://i.postimg.cc/3w2FjYZ4/imgi-422-Desktop-Login-Popup.png"
            alt=""
            className="hidden md:block absolute inset-0 w-full h-full object-cover"
          />

          {/* FORM */}
          <div className="relative md:absolute md:right-0 h-full w-full md:w-[380px] lg:w-[480px] bg-white/90 backdrop-blur-xl rounded-[28px] m-[16px] lg:m-[24px] p-[28px] lg:p-[36px] flex flex-col shadow-2xl">

            {/* CLOSE */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-sm underline opacity-60 hover:opacity-100 transition cursor-pointer"
            >
              Close
            </button>

            {/* TITLE */}
            <h2 className="text-[20px] lg:text-[26px] font-bold mb-6">
              {mode === "signup"
                ? "Create your account"
                : "Welcome back"}
            </h2>

            {/* TOGGLE */}
            <div className="relative bg-white rounded-full p-1 flex mb-8">
              <motion.div
                layout
                className="absolute top-1 bottom-1 w-1/2 bg-[#BA9948] rounded-full"
                style={{ left: mode === "signup" ? "4px" : "50%" }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />

              <button
                onClick={() => setMode("signup")}
                className={`flex-1 z-10 py-2 text-sm lg:text-base font-medium ${
                  mode === "signup" ? "text-white" : "text-black cursor-pointer"
                }`}
              >
                SIGN UP
              </button>

              <button
                onClick={() => setMode("login")}
                className={`flex-1 z-10 py-2 text-sm lg:text-base font-medium ${
                  mode === "login" ? "text-white" : "text-black cursor-pointer"
                }`}
              >
                LOG IN
              </button>
            </div>

            {/* FORM */}
            <div className="space-y-5 flex-1">
              <AnimatePresence mode="wait">
                {mode === "signup" && (
                  <motion.div
                    key="name"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <FloatingInput label="Name" type="text" />
                  </motion.div>
                )}
              </AnimatePresence>

              <FloatingInput label="Email" type="email" />
              <FloatingInput label="Password" type="password" />

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-[#BA9948] text-white border border-[#BA9948] hover:bg-white hover:text-black transition py-3 rounded-full font-semibold"
              >
                {mode === "signup" ? "Create Account" : "Login"}
              </motion.button>

              {mode === "login" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-sm text-gray-600 space-y-2"
                >
                  <p className="underline cursor-pointer text-[#BA9948]">
                    Forgot password?
                  </p>
                  <p className="underline cursor-pointer text-[#BA9948]">
                    Need help?
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SignInUp;
