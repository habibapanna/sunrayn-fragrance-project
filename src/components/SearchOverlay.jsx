import { X } from "lucide-react";
import { useEffect, useState } from "react";

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
      <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[90%] max-w-[1100px] bg-white rounded-[24px] p-[24px] shadow-xl">

        {/* SEARCH BAR */}
        <div className="relative">
          <input
            type="text"
            placeholder='Search scents, brands, ingredients e.g. "vanilla, coconut"'
            className="w-full h-[56px] rounded-[100px] border border-[#E5E5E5] pl-[24px] pr-[70px] text-[15px] outline-none"
          />

          {/* ANIMATED RED SEARCH BUTTON */}
          <button
            className={`absolute top-1/2 -translate-y-1/2 h-[44px] w-[44px] rounded-full bg-[#FD4929] flex items-center justify-center transition-all duration-700 ease-in-out
              ${animateIcon ? "right-[6px]" : "left-[80px]"}
            `}
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
        <div className="grid grid-cols-4 gap-[24px] mt-[24px] text-[#282828] text-[14px]">

          {/* LEFT FILTERS */}
          <div className="col-span-3 space-y-[15px] font-bold text-[#571313]">
            <Filter title="Gender" items={["Women", "Men", "Unisex"]} />
            <Filter title="Impressions of Inspired-by Brands" items={["Tom Ford", "LeLabo", "YSL", "Chanel", "Jo Malone", "Valentino", "Dio"]} />
            <Filter title="Originals by Collection" items={["Lauren Collection", "Aliyah Collection", "mgk Collection", "Icons Collection"]} />
            <Filter title="Scent Notes" items={["Amber", "Powdery", "Fruity", "Vanilla", "Citrus", "Apple", "Spicy"]} />
          </div>

          {/* RIGHT CARD */}
          <div className="bg-[#FAFAFA] rounded-[16px] p-[16px] text-center">
            <img
              src="https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png"
              className="mx-auto h-[160px]"
              alt=""
            />
            <p className="mt-3 font-semibold">Ambery Saffron</p>
            <p className="text-[#FD4929] font-bold mt-1">$29.40</p>
            <button className="mt-3 w-full bg-[#FD4929] text-white rounded-full py-[10px]">
              Add to cart
            </button>
          </div>
        </div>

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-[16px] right-[16px]"
        >
          <X />
        </button>
      </div>
    </div>
  );
};

const Filter = ({ title, items }) => (
  <div>
    <p className="font-semibold mb-[8px]">{title}</p>
    <div className="flex flex-wrap gap-[8px]">
      {items.map((i) => (
        <span
          key={i}
          className="px-[14px] py-[6px] rounded-full border text-[13px] cursor-pointer hover:bg-[#FD4929] hover:text-white transition"
        >
          {i}
        </span>
      ))}
    </div>
  </div>
);

export default SearchOverlay;
