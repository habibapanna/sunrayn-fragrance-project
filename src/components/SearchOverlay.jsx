import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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
   <div className="fixed inset-0 z-[70]">

      {/* WHITE PANEL */}
      <div className="absolute lg:top-[106px] top-0 right-0 md:right-[12px] 2xl:right-[164px] w-full md:w-[680px]  lg:w-[1001px] bg-white lg:rounded-[24px] p-[24px]">

        {/* SEARCH BAR */}
        <div className="relative">
          <input
            type="text"
            placeholder='Search scents, brands etc.'
            className="w-full rounded-[100px] bg-[#F6F7F2] py-[10px] pr-[5px] pl-[24px] outline-none h-[50px] text-[#3A3F42] lg:text-[16px] text-sm"
          />

          {/* ANIMATED RED SEARCH BUTTON */}
<button
  className={`
    absolute top-1/2 -translate-y-1/2
    right-[6px]
    h-[40px] w-[40px]
    rounded-full bg-[#FD4929]
    flex items-center justify-center cursor-pointer
    transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
    ${
      animateIcon
        ? "translate-x-0"
        : "-translate-x-[300px] lg:-translate-x-[900px]"
    }
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
       <div className="flex flex-col lg:flex-row justify-between gap-[32px] mt-[24px]">


          <div className="space-y-[24px]">

  <IconFilter
    icon={<svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
  <path d="M7.75892 14.4731C5.40785 12.715 0.75 8.69567 0.75 5.0787C0.75 2.68802 2.50438 0.75 4.91667 0.75C6.16667 0.75 7.41667 1.16667 9.08333 2.83333C10.75 1.16667 12 0.75 13.25 0.75C15.6622 0.75 17.4167 2.68802 17.4167 5.0787C17.4167 8.69567 12.7588 12.715 10.4077 14.4731C9.61658 15.0647 8.55008 15.0647 7.75892 14.4731Z" stroke="#282828" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>}
    title="Gender"
    items={["Women", "Men", "Unisex"]}
  />

  <IconFilter
    icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M6 13.4189C6.63342 13.0889 7.31328 12.9189 8 12.9189C8.68672 12.9189 9.36658 13.0889 10 13.4189C10.6334 13.7489 11.3133 13.9189 12 13.9189C12.6867 13.9189 13.3666 13.7489 14 13.4189" stroke="#282828" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6 9C6 7.89543 6.89543 7 8 7H12C13.1046 7 14 7.89543 14 9V17C14 17.5523 13.5523 18 13 18H7C6.44772 18 6 17.5523 6 17V9Z" stroke="#282828" stroke-width="1.25"/>
  <path d="M8.38823 5.3993V7H11.6118V5.39932C11.6118 4.2614 12.7604 2.703 11.8198 2.06256C11.7545 2.01805 11.6799 2 11.6118 2H8.38823C8.29384 2 8.21951 2.02002 8.16227 2.05604C7.19914 2.66203 8.38823 4.26138 8.38823 5.3993Z" stroke="#282828" stroke-width="1.25"/>
  <path d="M12 5H8" stroke="#282828"/>
  <path d="M10 7V13" stroke="#282828"/>
</svg>}
    title="Impressions of Inspired-by Brands"
    items={["Tom Ford", "LeLabo", "YSL", "Chanel", "Jo Malone", "Valentino", "Dio"]}
  />

  <IconFilter
    icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M12 6.00012L8 6.00012" stroke="#282828"/>
  <rect x="4" y="8.00012" width="12" height="11" rx="1" stroke="#282828" stroke-width="1.25"/>
  <rect x="6" y="11.0001" width="8" height="5" rx="0.15" stroke="#282828" stroke-width="1.25"/>
  <rect x="8" y="4.00012" width="4" height="4" rx="0.15" stroke="#282828" stroke-width="1.25"/>
  <rect x="7" y="1.00012" width="6" height="3" rx="0.15" stroke="#282828" stroke-width="1.25"/>
</svg>}
    title="Originals by Collection"
    items={["Lauren Collection", "Aliyah Collection", "mgk Collection", "Icons Collection"]}
  />

  <IconFilter
    icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M1.66406 13.3611C1.66406 14.9974 2.30008 16.4861 3.33971 17.5959C3.9182 18.2135 4.4353 18.3333 5.27149 18.3333H10.5566C11.3928 18.3333 11.9099 18.2135 12.4884 17.5959C13.5281 16.4861 14.1641 14.9974 14.1641 13.3611C14.1641 10.8554 12.6728 8.69617 10.5247 7.71283C10.1572 7.54464 9.83206 7.5 9.42873 7.5H6.39944C5.99604 7.5 5.67086 7.54464 5.30344 7.71283C3.15531 8.69617 1.66406 10.8554 1.66406 13.3611Z" stroke="#282828" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.83594 7.5V6.66667C5.83594 5.28777 6.12371 5 7.5026 5H8.33594C9.71485 5 10.0026 5.28777 10.0026 6.66667V7.5" stroke="#282828" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.16406 5V3.75C9.16406 2.8755 8.85315 2.5 7.91406 2.5C6.975 2.5 6.66406 2.8755 6.66406 3.75V5" stroke="#282828" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.8281 6.66699C17.2088 6.66699 18.3281 5.5477 18.3281 4.16699C18.3281 2.78628 17.2088 1.66699 15.8281 1.66699C14.4474 1.66699 13.3281 2.78628 13.3281 4.16699C13.3281 5.5477 14.4474 6.66699 15.8281 6.66699Z" stroke="#282828" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5 3.33301H6.66667M9.16667 3.33301H13.3333" stroke="#282828" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>}
    title="Scent Notes"
    items={["Amber", "Powdery", "Fruity", "Vanilla", "Citrus", "Apple", "Spicy"]}
  />

</div>

 {/* RIGHT CARD */}
          <div className="flex justify-center lg:justify-end">

            <div className="bg-[#F6F7F2] w-full max-w-[280px] h-auto rounded-[24px] p-[24px] flex flex-col justify-between gap-[32px]">


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
        className="h-[35px] rounded-full text-[16px] text-[#282828] py-[8px] px-[16px] cursor-pointer font-medium flex justify-center items-center"
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
          className="absolute top-[5px] right-[8px]"
        >
          <X className="cursor-pointer"/>
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
      <div className="flex items-start justify-start">{icon}</div>

      {/* CONTENT */}
      <div className="flex-1 min-w-0">
        <p className="font-bold mb-[10px] text-[#1D0B01] text-[15px]">
          {title}
        </p>

        {/* CAROUSEL */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="
              flex gap-[8px]
              overflow-x-auto no-scrollbar
              max-w-[300px]
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
