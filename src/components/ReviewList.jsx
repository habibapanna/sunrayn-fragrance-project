import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { LuChevronDown } from "react-icons/lu";

const reviewsData = [
  {
    name: "Ayesha Rikes",
    rating: 5,
    title: "Elegant & Emotional",
    text: "Cerisa Aura instantly captivated me. The juicy cherry opening feels vibrant and inviting, while the warm amber base gives it depth and sophistication. It’s become my go-to scent for any occasion.",
    date: "15/02/26",
    img: "https://i.postimg.cc/W4V5k4wv/Whats-App-Image-2026-02-03-at-6-06-48-PM.jpg",
    reply:
      "Thank you! We’re so happy Cerisa Aura has become your go-to scent — that truly means everything to us.",
  },
  {
    name: "Michael Strack",
    rating: 5,
    title: "Luxury & Long-Lasting",
    text: "This fragrance feels incredibly refined. At first spray, I was greeted with luscious cherry and creamy almond, and hours later, the amber and vanilla still linger beautifully. Truly luxurious and long-lasting.",
    date: "13/02/26",
    reply:
      "This fragrance feels incredibly refined. At first spray, I was greeted with luscious cherry and creamy almond, and hours later, the amber and vanilla still linger beautifully.",
  },
  {
    name: "Farid Hasan",
    rating: 5,
    title: "Skin-Friendly & Pure",
    text: "The alcohol-free formula feels gentle and smooth on my skin. I love knowing it’s halal and crafted with care. Cerisa Aura feels like an indulgence without compromise.",
    date: "11/02/26",
    img: "https://i.postimg.cc/6p2k0Tvk/Whats-App-Image-2026-02-03-at-6-06-46-PM.jpg",
    reply:
      "Thank you! We’re so happy Cerisa Aura has been pure joy to wear that truly means everything to us.",
  },
  {
    name: "Noor Ahmed",
    rating: 5,
    title: "Compliment-Getter",
    text: "Every time I wear Cerisa Aura, people ask what I’m wearing. It’s unique without being overpowering soft, warm, and unforgettable. Absolutely obsessed!",
    date: "07/02/26",
    reply:
      "Thank you! We’re so happy you love the gentle, halal formula luxury without compromise is what we’re all about love.",
  },
];

export default function ReviewList() {
  return (
    <div className="mt-10">
<div className="border border-[#282828]/25 mb-[24px]"></div>
      {/* Sort */}
      <div className="flex gap-[8px] items-center mb-6 text-[18px] text-[#3A3F42]">
        <span>Sort by:</span>
        <button className=" transition flex items-center gap-[8px]">
          Most recent <LuChevronDown />
        </button>
      </div>

{/* Reviews */}
<div className="space-y-8">

  {reviewsData.map((r, i) => (
    <div key={i} className="border-t-2 border-[#282828]/25 pt-6">

      <div className="flex flex-col md:flex-row gap-6 items-start">

       
<div className="flex justify-between w-full">
 {/* LEFT — NAME */}
        <div className="w-[170px]">
          <h4 className="font-medium text-[#282828] text-[17px]">
            {r.name}
          </h4>
        </div>
            {/* RIGHT — DATE */}
        <div className="text-right md:hidden">
          <span className="text-[#3A3F42] text-[17px]">{r.date}</span>
        </div>
</div>

        {/* CENTER — REVIEW CONTENT */}
        <div className="flex-1">

          {/* stars */}
          <div className="flex gap-1 text-[#FF9100] mb-2">
            {[...Array(r.rating)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

          {/* title */}
          <h5 className="text-[20px] text-[#A0174A] mb-1">
            {r.title}
          </h5>

          {/* text */}
          <p className="text-[#3A3F42] text-[17px] leading-relaxed mb-4">
            {r.text}
          </p>


          {/* image */}
          {r.img && (
            <img
              src={r.img}
              alt=""
              className="w-[120px] h-[120px] rounded-xl mb-4 object-cover"
            />
          )}


          {/* reply */}
          {r.reply && (
            <div className="text-sm">
              <span className="text-[20px] text-[#A0174A]">
                Sanrayn
              </span>
              <p className="text-[#3A3F42] text-[17px]">{r.reply}</p>
            </div>
          )}

        </div>

        {/* RIGHT — DATE */}
        <div className="w-[120px] text-right hidden md:block">
          <span className="text-[#3A3F42] text-[17px]">{r.date}</span>
        </div>

      </div>

    </div>
  ))}

</div>



      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-10">

        <button className="text-[text-[#3A3F42]] "><FaChevronLeft /></button>

        {[1, 2, 3, 4].map((p) => (
          <button
            key={p}
            className={`w-[55px] h-[55px] text-[20px] rounded-full text-sm font-medium transition
              ${p === 1
                ? "bg-[#A0174A] text-white"
                : "text-text-[#3A3F42] hover:bg-gray-100"}`}
          >
            {p}
          </button>
        ))}

        <button className="text-[#3A3F42] "><FaChevronRight /></button>

      </div>
    </div>
  );
}
