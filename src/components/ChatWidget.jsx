import { useState } from "react";
import { FaCommentDots, FaTimes } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoArrowUp } from "react-icons/io5";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleContinue = () => {
    if (!email) return;
    setEmailSubmitted(true);

    // Add welcome message into chat
    setMessages([
      {
        text: "Welcome to your Sanrayn Assistant chat! How can I help you today?",
        sender: "bot",
      },
    ]);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-40 bg-[#A0174A] text-white p-4 rounded-full shadow-lg transition cursor-pointer"
      >
        {open ? <FaTimes size={25} /> : <FaCommentDots size={25} />}
      </button>

      {/* Chat Popup */}
      {open && (
        <div className="fixed bottom-20 right-4 md:right-6 
        w-[95%] sm:w-[380px] 
        h-[550px] bg-white rounded-2xl shadow-2xl 
        flex flex-col overflow-hidden z-[999]">

          {/* EMAIL SECTION */}
          {!emailSubmitted && (
            <div className="p-6">
              <h2 className="text-xl font-semibold text-center">
                Welcome to Sanrayn Assistant
              </h2>

              <p className="text-gray-500 text-center mt-2">
                Please enter your email to continue
              </p>

              <div className="flex items-center bg-gray-200 rounded-xl px-3 py-3 mt-4">
                <MdEmail className="text-gray-500 mr-2" size={20} />
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-transparent w-full outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button
                onClick={handleContinue}
                className="w-full mt-4 bg-[#BA9948] text-white py-3 rounded-xl font-semibold"
              >
                Continue
              </button>

              {/* Message just below Continue */}
              <p className="text-sm mt-6 text-gray-700">
                Welcome to your Sanrayn Assistant chat! How can I help you today?
              </p>
            </div>
          )}

          {/* CHAT BODY */}
          {emailSubmitted && (
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                    msg.sender === "user"
                      ? "ml-auto bg-[#BA9948] text-white"
                      : "bg-white shadow"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
          )}

          
         {/* INPUT FIELD ALWAYS AT BOTTOM */}
<div className="p-4 bg-white w-full absolute bottom-0">
  <div className="relative w-full ">
    
    <input
      type="text"
      placeholder="How can I help you?"
      className="w-full bg-white border border-gray-200 
      rounded-full py-3 pl-4 pr-12 text-sm 
      outline-none focus:border-[#BA9948] transition"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && handleSend()}
      disabled={!emailSubmitted}
    />

    {/* Arrow inside input */}
    <button
      onClick={handleSend}
      disabled={!input.trim()}
      className={`absolute right-2 top-1/2 -translate-y-1/2 
      p-2 rounded-full transition ${
        input.trim()
          ? "bg-[#BA9948] text-white"
          : "bg-gray-200 text-gray-400 cursor-not-allowed"
      }`}
    >
      <IoArrowUp size={16} />
    </button>

  </div>
</div>

        </div>
      )}
    </>
  );
};

export default ChatWidget;
