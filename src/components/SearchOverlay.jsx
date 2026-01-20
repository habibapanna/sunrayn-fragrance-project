import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Gender from '../assets/Heart (1).png'
import IMPRESSIONS from '../assets/Frame (6).png'
import ORIGINALS from '../assets/Group 53.png'
import SCENT from '../assets/Frame (4).png'
import { FaStar } from "react-icons/fa";
import Discount from '../assets/Discount Price.png';
import Original from '../assets/Original Price.png';
import { GoChevronRight } from "react-icons/go";

const SearchOverlay = ({ open, onClose }) => {
  const [animateIcon, setAnimateIcon] = useState(false);
  const [animateSearch, setAnimateSearch] = useState(false);
const [showPlaceholder, setShowPlaceholder] = useState(false);

useEffect(() => {
  if (open) {
    setAnimateSearch(false);
    setShowPlaceholder(false);

    requestAnimationFrame(() => {
      setAnimateSearch(true);
    });

    // placeholder fades in slightly after movement starts
    setTimeout(() => {
      setShowPlaceholder(true);
    }, 300);
  } else {
    setAnimateSearch(false);
    setShowPlaceholder(false);
  }
}, [open]);


  useEffect(() => {
    if (open) {
      setTimeout(() => setAnimateIcon(true), 200);
    } else {
      setAnimateIcon(false);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-60 bg-black/40">
      {/* WHITE PANEL */}
      <div className="absolute lg:top-[106px] top-[60px] right-[50px] lg:right-[164px] lg:w-[1001px] bg-white rounded-[24px] p-[24px]">

        {/* SEARCH BAR */}
        <div className="relative">
          <input
            type="text"
            placeholder='Search scents, brands, ingredients. e.g. “vanilla, coconut”"'
            className="w-full rounded-[100px] bg-[#F6F7F2] py-[12px] pr-[5px] pl-[24px] outline-none h-[50px] text-[#3A3F42] lg:text-[16px] md:text-sm"
          />

          {/* ANIMATED RED SEARCH BUTTON */}
         <button
  className={`absolute top-1/2 -translate-y-1/2 h-[40px] w-[40px] rounded-[100px] bg-[#FD4929]
  flex items-center justify-center cursor-pointer
  transition-[left,right] duration-[900ms] ease-in-out
  ${animateIcon ? "right-[6px]" : "left-[24px]"}`}
>

            <svg
              width="20"
              height="20"
              fill="none"
              stroke="white"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>

        {/* CONTENT GRID */}
       <div className="flex flex-col lg:flex-row justify-between gap-[32px] mt-[24px]">


          <div className="space-y-[24px]">

  <IconFilter
    icon={Gender}
    title="Gender"
    items={["Women", "Men", "Unisex"]}
  />

  <IconFilter
    icon={IMPRESSIONS}
    title="Impressions of Inspired-by Brands"
    items={["Tom Ford", "LeLabo", "YSL", "Chanel", "Jo Malone", "Valentino", "Dio"]}
  />

  <IconFilter
    icon={ORIGINALS}
    title="Originals by Collection"
    items={["Lauren Collection", "Aliyah Collection", "mgk Collection", "Icons Collection"]}
  />

  <IconFilter
    icon={SCENT}
    title="Scent Notes"
    items={["Amber", "Powdery", "Fruity", "Vanilla", "Citrus", "Apple", "Spicy"]}
  />

</div>

 {/* RIGHT CARD */}
          <div className="flex justify-center lg:justify-end">

            <div className="bg-[#F6F7F2] w-full max-w-[280px] h-auto rounded-[24px] p-[24px] flex flex-col justify-between">


<div className="">
      <h3 className="text-[25px] font-semibold text-[#1D0B01]">
    Scents Families
  </h3>

  <p className="text-[18px] text-[#282828] leading-snu">
    Search using our 6 olfactive families
  </p>
</div>

  <div className="grid grid-cols-2 gap-[8px]">
    {[
      { name: "Flowery", bg: "#FFE6F0" },
      {  name: "Warm", bg: "#FFE5C3"  },
      { name: "Gourmand", bg: "#FFD3C8" },
      { name: "Fresh", bg: "#BEFFBA" },
      { name: "Earthy", bg: "#BFDDFF" },
      { name: "Herbal", bg: "#BCBAFF" },
    ].map((item) => (
      <button
        key={item.name}
        style={{ backgroundColor: item.bg }}
        className="h-[35px] rounded-full text-[16px] text-[#282828] py-[8px]px-[16px] cursor-pointer font-medium"
      >
        {item.name}
      </button>
    ))}
  </div>

</div>
          </div>
        </div>

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-[8px] right-[8px] cursor-pointer"
        >
          <X />
        </button>
      </div>
    </div>
  );
};

const IconFilter = ({ icon, title, items, hideArrowOnDesktop = false }) => {
  const scrollRef = useRef(null);
  const [canScroll, setCanScroll] = useState(false);

  // detect overflow
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const check = () => {
      setCanScroll(el.scrollWidth > el.clientWidth);
    };

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="flex gap-[14px]">
      {/* ICON */}
      <img src={icon} className="w-[20px] h-[20px] mt-[4px]" alt="" />

      {/* CONTENT */}
      <div className="flex-1 min-w-0">
        <p className="font-bold mb-[10px] text-[#571313] text-[15px]">
          {title}
        </p>

        {/* CAROUSEL */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="
              flex gap-[8px]
              overflow-x-auto scrollbar-hide
              max-w-[260px]
              sm:max-w-[360px]
              md:max-w-[480px]
              lg:max-w-full
              pr-[44px]
            "
          >
            {items.map((i) => (
              <span
                key={i}
                className="
                  shrink-0 px-[14px] py-[6px]
                  rounded-full text-[16px]
                  font-medium text-[#1D0B01]
                  bg-[#F6F7F2]
                  cursor-pointer whitespace-nowrap
                "
              >
                {i}
              </span>
            ))}
          </div>

          {/* RIGHT ARROW */}
          {canScroll && (
            <button
              onClick={scrollRight}
              className={`
                absolute right-0 top-1/2 -translate-y-1/2
                w-[28px] h-[28px]
                rounded-full bg-[#F6F7F2]
                flex items-center justify-center shadow
                cursor-pointer
                ${hideArrowOnDesktop ? "lg:hidden" : ""}
              `}
            >
              <GoChevronRight className="text-[18px]" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};







export default SearchOverlay;
