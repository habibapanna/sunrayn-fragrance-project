import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { GoChevronRight } from "react-icons/go";
import Heart from '../assets/Heart.svg';
import Originals from '../assets/Frame (4).svg';
import Family from '../assets/Frame (5).svg';
import User from '../assets/User icon.svg';
import SignInUp from "../Page/SignInUp";


const SearchOverlay = ({ open, onClose, onOpenSignIn }) => {
  const [animateIcon, setAnimateIcon] = useState(false);
  const [animateSearch, setAnimateSearch] = useState(false);
const [showPlaceholder, setShowPlaceholder] = useState(false);
const [signInUpOpen, setSignInUpOpen] = useState(false);


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
     <div
  className="
    absolute
    top-0 lg:top-[106px]
    right-0 md:right-[12px] 2xl:right-[164px]
    w-full md:w-[680px] lg:w-[1001px]
    bg-white lg:rounded-[24px]
    px-[24px]

   
    max-h-screen
    lg:max-h-[calc(100vh-140px)]
    overflow-y-auto
    overscroll-contain
  "
>

          {/* HEADER */}
  <div className="relative flex items-center justify-between py-[16px]">
    <div className="">
    <button
 onClick={onOpenSignIn}
  className="bg-white/10 flex items-center justify-center gap-[12px] cursor-pointe lg:hidden"
>

       <img src={User} alt="" />
       <span className="font-bold text-[#282828] text-[16px]">Login</span>
      </button>
      
    </div>

    <button
      className="underline text-[#282828] text-[16px] cursor-pointer"
      onClick={onClose}
    >
      Close
    </button>
  </div>

        {/* SEARCH BAR */}
        <div className="relative">
          <input
            type="text"
            placeholder='Search scents, brands etc.'
            className="w-full h-[40px] rounded-[100px] bg-[#F6F7F2] py-[10px] pr-[5px] pl-[24px] outline-none text-[#3A3F42] lg:text-[16px] text-sm"
          />

          {/* ANIMATED RED SEARCH BUTTON */}
<button
  className={`
    absolute top-1/2 -translate-y-1/2
    right-[6px]
    h-[30px] w-[30px]
    rounded-full bg-[#FD4929]
    flex items-center justify-center cursor-pointer
    transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
    ${
      animateIcon
        ? "translate-x-0"
        : "-translate-x-[340px] lg:-translate-x-[900px]"
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
     <div className="flex flex-col lg:flex-row justify-between gap-[32px] mt-[24px] pb-[24px]">



          <div className="space-y-[24px]">

  <IconFilter
    icon={Heart}
    title="Gender"
    items={["Women", "Men", "Unisex"]}
  />

  <IconFilter
    icon={Originals}
    title="ORIGINALS BY COLLECTION"
    items={["Lauren Collection", "Allyiah Collection", "mgk Collection", "Icons Collection",]}
  />


  <IconFilter
    icon={Family}
    title="Scent Notes"
    items={["Amber", "Powdery", "Fruity", "Vanilla", "Citrus", "Apple", "Spicy"]}
  />

</div>

 {/* RIGHT CARD */}
          <div className="flex justify-center lg:justify-end">

            <div className="bg-[#F6F7F2] w-full max-w-[280px] h-auto rounded-[24px] p-[12px] 2xl:p-[24px] flex flex-col justify-between gap-[32px]">

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

        {signInUpOpen && (
  <>
    {/* BLUR BACKGROUND */}
    <div
      onClick={() => setSignInUpOpen(false)}
      className="fixed  inset-0 bg-white/50 backdrop-blur-sm z-[60]"
    />

    {/* SIGN IN / UP UI */}
    <SignInUp onClose={() => setSignInUpOpen(false)} />
  </>
)}

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
      <div className="flex items-start justify-start"><img src={icon} alt="" /></div>

      {/* CONTENT */}
      <div className="flex-1 min-w-0">
        <p className="font-bold mb-[10px] text-[#1D0B01] text-[15px] uppercase">
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


