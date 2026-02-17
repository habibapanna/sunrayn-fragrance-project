import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { LuChevronDown } from "react-icons/lu";
import { useRef, useState } from "react";

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
const [currentPage, setCurrentPage] = useState(1);
const reviewsRef = useRef(null);
const [sortOpen, setSortOpen] = useState(false);
const [sortType, setSortType] = useState("recent");

const sortedReviews = [...reviewsData].sort((a, b) => {
  switch (sortType) {
    case "recent":
      return new Date(b.date.split("/").reverse()) - new Date(a.date.split("/").reverse());

    case "highest":
      return b.rating - a.rating;

    case "lowest":
      return a.rating - b.rating;

    default:
      return 0;
  }
});


const reviewsPerPage = 3;

const totalPages = Math.ceil(reviewsData.length / reviewsPerPage);

const smoothScrollTo = (targetY, duration = 800) => {
  const startY = window.scrollY;
  const distance = targetY - startY;
  let startTime = null;

  const animation = (currentTime) => {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;

    const ease = (t) =>
      t < 0.5
        ? 2 * t * t
        : 1 - Math.pow(-2 * t + 2, 2) / 2;

    const progress = Math.min(timeElapsed / duration, 1);
    const easeProgress = ease(progress);

    window.scrollTo(0, startY + distance * easeProgress);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

const handlePageChange = (page) => {
  setCurrentPage(page);

  const elementTop =
    reviewsRef.current.getBoundingClientRect().top +
    window.scrollY -
    100; // adjust offset if needed

  smoothScrollTo(elementTop, 1000); // 1000ms = extra smooth
};


const startIndex = (currentPage - 1) * reviewsPerPage;

const currentReviews = sortedReviews.slice(
  startIndex,
  startIndex + reviewsPerPage
);



  return (
    <div className="mt-10">
<div className="border border-[#282828]/25 mb-[24px]"></div>
      {/* Sort */}
<div className="relative flex gap-[8px] items-center mb-6 text-[18px] text-[#3A3F42]">
  <span>Sort by:</span>

  <button
    onClick={(e) => {
    e.stopPropagation();
    setSortOpen(!sortOpen);
  }}
    className="flex items-center gap-2 cursor-pointer"
  >
    {
      {
        recent: "Most recent",
        highest: "Highest rating",
        lowest: "Lowest rating",
      }[sortType]
    }
    <LuChevronDown
  className={`transition-transform duration-500 ${
    sortOpen ? "rotate-180" : "rotate-0"
  }`}
/>

  </button>

  {sortOpen && (
    <div className="absolute top-full left-[70px] mt-2 w-[210px] bg-white shadow-lg rounded-lg border border-gray-200 z-50 overflow-hidden">

      {[
        { label: "Most recent", value: "recent" },
        { label: "Highest rating", value: "highest" },
        { label: "Lowest rating", value: "lowest" },
      ].map(option => (
        <button
          key={option.value}
          onClick={() => {
            setSortType(option.value);
            setSortOpen(false);
            setCurrentPage(1);
          }}
          className={`w-full text-left px-5 py-3 text-[17px] transition
            ${
              sortType === option.value
                ? "bg-[#2F5AA8] text-white"
                : "hover:bg-gray-100"
            }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  )}
</div>


{/* Reviews */}
<div ref={reviewsRef} className="space-y-8 min-h-[600px]">

{currentReviews.map((r, i) => (

    <div key={i} className="border-t-2 border-[#282828]/25 pt-6">

      <div className="flex flex-col md:flex-row gap-6 items-start">

       
<div className="flex justify-between w-full md:w-[170px] ">
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
        <div className="w-[120px] text-right hidden md:block md:w-[170px] 2xl:w-[500px]">
          <span className="text-[#3A3F42] text-[17px]">{r.date}</span>
        </div>

      </div>
    </div>
  ))}

</div>

{/* Pagination */}
<div className="flex justify-center items-center gap-4 mt-10">

  {/* Prev */}
  <button
    type="button"
    onClick={() =>
      handlePageChange(Math.max(currentPage - 1, 1))
    }
    disabled={currentPage === 1}
    className="text-[#3A3F42] disabled:opacity-30"
  >
    <FaChevronLeft />
  </button>

  {/* Page Numbers (1 to totalPages) */}
  {[...Array(totalPages)].map((_, index) => {
    const pageNumber = index + 1;

    return (
      <button
        type="button"
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
        className={`w-[30px] h-[30px] lg:w-[55px] lg:h-[55px] text-[14px] md:text-[16px] 2xl:text-[20px] rounded-full font-medium transition
          ${
            currentPage === pageNumber
              ? "bg-[#A0174A] text-white"
              : "text-[#3A3F42] hover:bg-gray-100"
          }`}
      >
        {pageNumber}
      </button>
    );
  })}

  {/* Next */}
  <button
    type="button"
    onClick={() =>
      handlePageChange(
        Math.min(currentPage + 1, totalPages)
      )
    }
    disabled={currentPage === totalPages}
    className="text-[#3A3F42] disabled:opacity-30"
  >
    <FaChevronRight />
  </button>

</div>


    </div>
  );
}
