import { useState } from "react";
import { FaStar } from "react-icons/fa";

const ReviewSection = ({ productSlug }) => {
  const [reviews, setReviews] = useState([]); // store reviews for this product
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !rating || !comment) return;

    const newReview = { name, rating, comment, date: new Date().toLocaleDateString() };
    setReviews([newReview, ...reviews]); // add new review at the top

    // clear form
    setName("");
    setRating(0);
    setComment("");
  };

  return (
<div className="my-[16px] mx-[16px] 2xl:my-[32px] 2xl:mx-[32px] bg-[#F6F7F2] rounded-[16px]">
      <div className="py-[16px] px-[16px] 2xl:py-[32px] 2xl:px-[32px] bg-[#F6F7F2] rounded-[16px]">
      
<div className="flex justify-between items-center">
        {/* Review Form */}
<div className=" w-1/2">
<div className="w-full">
   <p className="text-[25px] lg:text-[35px] 2xl:text-[50px] font-semibold text-[#282828] pb-[16px] 2xl:pb-[32px]">
          What Fragrance Lovers Are Saying About Sanrayn
        </p>
</div>

</div>
         <div className="w-1/2"> 
         <button
          type="submit"
          className="text-[18px] 2xl:text-[20px] w-full px-[20px] py-[8px] 2xl:py-[10px] 2x:px-[24px] rounded-full font-semibold cursor-pointer transition-all duration-300 ease-out
    bg-[#BA9948] text-white hover:bg-white/60 backdrop-blur-md border hover:border-[#A0174A] hover:text-[#1D0B01]"
        >
        Write a  Review
        </button></div>
</div>


      {/* Display Reviews */}
      {reviews.length > 0 && (
        <div className="mt-6 space-y-4">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-4 rounded-lg border">
              <div className="flex items-center justify-between">
                <span className="font-semibold">{r.name}</span>
                <span className="text-gray-500 text-sm">{r.date}</span>
              </div>
              <div className="flex gap-1 mt-1">
                {[...Array(5)].map((_, j) => (
                  <FaStar key={j} className={j < r.rating ? "text-yellow-400" : "text-gray-300"} />
                ))}
              </div>
              <p className="mt-2 text-gray-700">{r.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
</div>
  );
};

export default ReviewSection;
