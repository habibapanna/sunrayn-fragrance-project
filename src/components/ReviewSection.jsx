import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { X, Upload } from "lucide-react";
import ReviewList from "./ReviewList";

const ReviewSection = ({ productSlug }) => {
  const [reviews, setReviews] = useState([]);
  const [open, setOpen] = useState(false);
const [activeTab, setActiveTab] = useState("reviews");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !rating || !comment || !email || !title) return;

    const newReview = {
      name,
      rating,
      comment,
      title,
      date: new Date().toLocaleDateString(),
    };

    setReviews([newReview, ...reviews]);

    setName("");
    setEmail("");
    setRating(0);
    setComment("");
    setTitle("");
    setOpen(false);
  };


  return (
    <div className="px-[16px] 2xl:px-[32px] py-[16px] 2xl:py-[32px]"
    >
<div className="border border-[#282828]/25"></div>
{/* Content Wrapper */}
<div className="relative overflow-hidden py-[16px] 2xl:py-[32px]">

  {/* Tabs — ALWAYS LEFT */}
  <div className="flex items-center gap-[24px] mb-[24px]">
    <button
      onClick={() => setActiveTab("reviews")}
      className={`text-[25px] transition ${
        activeTab === "reviews"
          ? "underline font-semibold"
          : "text-[#282828] hover:underline cursor-pointer"
      }`}
    >
      Reviews
    </button>

    <button
      onClick={() => setActiveTab("qa")}
      className={`text-[25px] transition ${
        activeTab === "qa"
          ? "underline font-semibold"
          : "text-[#282828] hover:underline cursor-pointer"
      }`}
    >
      Q&A
    </button>
  </div>

  {/* DYNAMIC CONTENT AREA */}
  <div
    className={`transition-all duration-300
      ${
        activeTab === "reviews"
          ? "flex flex-col md:flex-row items-center justify-between py-4 md:py-1"
          : "flex flex-col items-center text-center py-4 md:py-1"
      }`}
  >

    {/* LEFT SIDE CONTENT */}
    <div className={`${activeTab === "reviews" ? "w-full text-center md:text-left md:w-1/2" : "max-w-xl"}`}>

      {activeTab === "reviews" ? (
        <>
          <h3 className="text-[#282828] text-[25px] lg:text-[40px] font-semibold mb-[12px] md:mb-[24px]">
            Customer Reviews
          </h3>

          <div className="flex items-center justify-center md:justify-start gap-[10px]">
            <span className="text-[25px] 2xl:text-[35px] text-[#FF9100]">
              4.5
            </span>

            <div>
              <div className="flex gap-[4px] text-[18px]">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i === 4 ? "text-[#E9E9E9]" : "text-[#FF9100]"
                    }
                  />
                ))}
              </div>

              <span className="text-[14px] text-[#3A3F42]">
                Based on 6316 reviews
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          <h3 className="text-[26px] lg:text-[40px] font-semibold mb-2">
            Have a question?
          </h3>

          <p className="text-gray-500 mb-6 text-[15px]">
            Be the first to ask something about this product.
          </p>

          <button className="px-8 py-3 rounded-full bg-[#A0174A] text-white hover:bg-white  font-semibold border border-transparent hover:border-[#DBAB35]
        transition-all duration-500 text-[16px] 2xl:text-[20px] cursor-pointer hover:text-black">
            Ask a question
          </button>
        </>
      )}
    </div>

    {/* RIGHT BUTTON (REVIEWS ONLY) */}
    {activeTab === "reviews" && (
      <button
        onClick={() => setOpen(true)}
        className="mt-5 md:mt-0 px-[24px] py-[12px] rounded-full font-semibold
        bg-[#A0174A] text-white hover:bg-white hover:text-[#1D0B01]
        border border-transparent hover:border-[#DBAB35]
        transition-all duration-500 text-[16px] 2xl:text-[20px] cursor-pointer w-1/2"
      >
        Write a Review
      </button>
    )}
  </div>
</div>
<ReviewList />
      {/* ================= MODAL ================= */}
{open && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-3">

    {/* CARD */}
    <div className="relative w-full max-w-xl rounded-[28px] bg-[#F4F4F2] p-5 sm:p-7 shadow-xl
                    max-h-[90vh] overflow-y-auto animate-[fadeIn_.25s_ease] no-scrollbar">

      {/* CLOSE */}
      <button
        onClick={() => setOpen(false)}
        className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow hover:scale-105  cursor-pointer hover:bg-black hover:text-white transition-all duration-500"
      >
        <X size={18}/>
      </button>

      {/* TITLE */}
      <h2 className="text-center text-[20px] sm:text-[22px] font-semibold mb-6">
        Share your experience
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* RATING */}
        <div>
          <label className="block mb-2 font-medium text-sm">
            Rate your experience *
          </label>

          <div className="flex items-center gap-3">
            <div className="flex gap-[5px] text-[22px]">
              {[1,2,3,4,5].map((star)=>(
                <FaStar
                  key={star}
                  onClick={()=>setRating(star)}
                  className={`cursor-pointer transition ${
                    star <= rating
                      ? "text-[#FF9F1C]"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            <span className="text-sm text-gray-500">Average</span>
          </div>
        </div>

        {/* TITLE */}
        <div>
          <label className="block mb-1 text-sm font-medium">
            A short title for your review *
          </label>
          <input
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            placeholder="e.g. Great quality and first delivery"
            className="w-full rounded-full bg-white/70 px-5 py-3 outline-none border border-transparent focus:border-gray-300"
          />
        </div>

        {/* REVIEW */}
        <div>
          <label className="block mb-1 text-sm font-medium">
            Write your review *
          </label>

          <textarea
            rows={4}
            value={comment}
            onChange={(e)=>setComment(e.target.value)}
            placeholder="e.g. i love the fabric, but shipping so first than expected"
            className="w-full rounded-2xl bg-white/70 px-5 py-4 outline-none border border-transparent focus:border-gray-300 resize-none"
          />
        </div>

        {/* UPLOAD */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Add photos or video (Optional)
          </label>

          <button
            type="button"
            className="w-full border-2 border-dashed border-gray-300 rounded-2xl py-6
                       flex flex-col items-center gap-2 text-gray-500 hover:bg-white/60 transition"
          >
            <Upload size={20}/>
            <span className="text-sm">Upload files</span>
          </button>
        </div>

        {/* NAME */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Your name *
          </label>
          <input
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="e.g. Jams Watt"
            className="w-full rounded-full bg-white/70 px-5 py-3 outline-none border border-transparent focus:border-gray-300"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Your email address *
          </label>
          <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="e.g. jamswatt@gmail.com"
            className="w-full rounded-full bg-white/70 px-5 py-3 outline-none border border-transparent focus:border-gray-300"
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-[#D4A437] border hover:border-[#DBAB35] border-transparent transition-all duration-500 hover:bg-white
                     text-black font-medium py-3 rounded-full mt-2 cursor-pointer"
        >
          Send
        </button>

      </form>
    </div>
  </div>
)}

    </div>
  );
};

export default ReviewSection;
