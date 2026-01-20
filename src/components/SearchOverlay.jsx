import { X } from "lucide-react";
import { useEffect, useState } from "react";
import Gender from '../assets/Heart (1).png'
import IMPRESSIONS from '../assets/Frame (6).png'
import ORIGINALS from '../assets/Group 53.png'
import SCENT from '../assets/Frame (4).png'
import { FaStar } from "react-icons/fa";
import Discount from '../assets/Discount Price.png';
import Original from '../assets/Original Price.png';

const SearchOverlay = ({ open, onClose }) => {
  const [animateIcon, setAnimateIcon] = useState(false);

  useEffect(() => {
    if (open) {
      setTimeout(() => setAnimateIcon(true), 200);
    } else {
      setAnimateIcon(false);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-black/40">
      {/* WHITE PANEL */}
      <div className="absolute top-[106px] right-[164px] md:h-[458px] md:w-[1001px] bg-white rounded-[24px] p-[24px]">

        {/* SEARCH BAR */}
        <div className="relative">
          <input
            type="text"
            placeholder='Search scents, brands, ingredients. e.g. “vanilla, coconut”"'
            className="w-full rounded-[100px] bg-[#F6F7F2] py-[12px] pr-[5px] pl-[24px] outline-none h-[50px] text-[#3A3F42] text-[16px]"
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
        <div className="flex justify-between gap-[32px] mt-[24px] ">

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
          <div className="flex gap-[20px] col-span-2">
            <div className="bg-[#F6F7F2] w-[280px] h-[328px] rounded-[24px] p-[24px] flex flex-col justify-between">

<div className="">
      <h3 className="text-[25px] font-semibold text-[#1D0B01]">
    Scents Families
  </h3>

  <p className="text-[18px] text-[#282828] leading-snug">
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
          className="absolute top-[10px] right-[10px] cursor-pointer"
        >
          <X />
        </button>
      </div>
    </div>
  );
};

const IconFilter = ({ icon, title, items }) => (
  <div className="flex gap-[14px]">
    {/* ICON */}
    <img src={icon} className="w-[20px] h-[20px] mt-[4px]" />

    {/* CONTENT */}
    <div className="flex flex-col">
      <p className="font-bold mb-[8px] text-[#571313] text-[15px]">
        {title}
      </p>

      <div className="flex flex-wrap gap-[8px]">
        {items.map((i) => (
          <span
            key={i}
            className="px-[14px] py-[6px] rounded-[100px]
            text-[16px] font-medium text-[#1D0B01] cursor-pointer
             bg-[#F6F7F2]"
          >
            {i}
          </span>
        ))}
      </div>
    </div>
  </div>
);




export default SearchOverlay;
