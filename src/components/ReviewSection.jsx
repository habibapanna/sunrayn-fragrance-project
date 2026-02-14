import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { X, Upload } from "lucide-react";

const ReviewSection = ({ productSlug }) => {
  const [reviews, setReviews] = useState([]);
  const [open, setOpen] = useState(false);

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
    <div className="px-[16px] 2xl:px-[32px] pb-[16px] 2xl:pb-[32px]"
    >

      {/* HEADING */}
      <p className="text-[25px] lg:text-[35px] 2xl:text-[50px] font-semibold text-[#282828] pb-[16px] 2xl:pb-[32px]">
        What Fragrance Lovers Are Saying About Sanrayn
      </p>

<div
  className="relative rounded-[16px] h-[400px] 2xl:h-[550px] overflow-hidden flex items-center justify-end px-[16px] 2xl:px-[32px]"
  style={{
    backgroundImage:
      "url('https://i.postimg.cc/x1PD5vMm/imgi-187-Frame-1430102878-2.png')",
    backgroundSize: "cover", // shows full image
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left center",
  }}
>

  {/* RIGHT SIDE BLACK OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/50 to-transparent" />

  {/* CONTENT */}
  <div className="relative z-10 w-full md:w-1/2  text-white text-center flex flex-col">

    <h3 className="text-[25px] 2xl:text-[35px] font-semibold mb-[12px]">
      Customer Reviews
    </h3>

    <div className="flex items-center justify-center gap-[10px]">
      <span className="text-[25px] 2xl:text-[35px] text-[#FFD66B]">
        4.8
      </span>

      <div>
        <div className="flex gap-[4px] text-[#FFD66B] ">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
        <span className="text-[14px] text-white/90">
          Based on 6316 reviews
        </span>
      </div>
    </div>

    <button
      onClick={() => setOpen(true)}
      className="mx-auto mt-5 px-[24px] py-[12px] rounded-full  cursor-pointer transition-all duration-500 ease-ou font-semibold
    bg-[#BA9948] text-white hover:bg-white backdrop-blur-md w-[327px] hover:text-[#1D0B01] text-[16px] 2xl:text-[20px]"
    >
      Write a Review
    </button>

  </div>
</div>


      {/* ================= MODAL ================= */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

          <div className="bg-white w-[95%] max-w-2xl rounded-2xl p-6 relative animate-[fadeIn_.3s_ease]">

            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-black hover:text-white transition-all duration-500 cursor-pointer hover:bg-black border rounded-full p-[4px]"
            >
              <X size={22} />
            </button>

            <h2 className="text-xl font-semibold mb-6">
              Share your experience
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* RATING */}
              <div>
                <label className="block mb-2 font-medium">
                  Rate your experience *
                </label>
                <div className="flex gap-2 text-2xl">
                  {[1,2,3,4,5].map((star)=>(
                    <FaStar
                      key={star}
                      onClick={()=>setRating(star)}
                      className={`cursor-pointer ${
                        star <= rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* TITLE */}
              <div>
                <label className="block mb-1 font-medium">
                  A short title for your review *
                </label>
                <input
                  value={title}
                  onChange={(e)=>setTitle(e.target.value)}
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring"
                  placeholder="Great quality and fast delivery"
                />
              </div>

              {/* REVIEW */}
              <div>
                <label className="block mb-1 font-medium">
                  Write your review *
                </label>
                <textarea
                  value={comment}
                  onChange={(e)=>setComment(e.target.value)}
                  rows={5}
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring"
                  placeholder="I loved it..."
                />
              </div>

              {/* UPLOAD */}
              <div>
                <label className="block font-medium">
                  Add photos or videos (Optional)
                </label>
                <p className="text-sm text-gray-500 mb-2">
                  You can upload up to 10 images and 3 short videos
                </p>

                <button
                  type="button"
                  className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100"
                >
                  <Upload size={18}/>
                  Upload files
                </button>
              </div>

              {/* NAME */}
              <div>
                <label className="block font-medium">
                  Your name *
                </label>
                <input
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  className="w-full border rounded-lg px-4 py-3 outline-none"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block font-medium">
                  Your email address *
                </label>
                <input
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  className="w-full border rounded-lg px-4 py-3 outline-none"
                />
              </div>

              {/* FOOTER */}
              <div className="flex justify-between items-center pt-4">
                <span className="text-xs text-gray-500">
                  * required fields
                </span>

                <button className="bg-[#A0174A] cursor-pointer text-white px-6 py-2 rounded-lg">
                  Send
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewSection;
