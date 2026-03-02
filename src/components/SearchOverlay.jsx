import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { GoChevronRight } from "react-icons/go";
import Heart from '../assets/Heart.svg';
import Originals from '../assets/Frame (4).svg';
import Family from '../assets/Frame (5).svg';
import User from '../assets/User Icon.svg';
import SignInUp from "../Page/SignInUp";
import { Link } from "react-router-dom";
import Solar from '../assets/Vector (4).svg';
import { useLocation } from "react-router-dom";



const SearchOverlay = ({ open, onClose, onOpenSignIn }) => {
  const [animateIcon, setAnimateIcon] = useState(false);
  const [animateSearch, setAnimateSearch] = useState(false);
const [showPlaceholder, setShowPlaceholder] = useState(false);
const [signInUpOpen, setSignInUpOpen] = useState(false);
const location = useLocation();
const prevPathRef = useRef(location.pathname);


useEffect(() => {
  if (!open) {
    prevPathRef.current = location.pathname;
    return;
  }

  if (location.pathname !== prevPathRef.current) {
    onClose();
  }

  prevPathRef.current = location.pathname;
}, [location.pathname, open]);


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
   <div className="fixed inset-0 z-[70]"
   onClick={onClose}>

      {/* WHITE PANEL */}
    <div
  className="
    absolute
    top-1/2 left-1/2
    -translate-x-1/2 -translate-y-1/2
    w-[95%] md:w-[680px] lg:w-[1001px]
    max-h-[90vh]
    bg-white rounded-[16px]
    px-[24px] pb-[32px]
    overflow-y-auto
    overscroll-contain
    shadow-2xl
    transition-all duration-500
  "
  onClick={(e) => e.stopPropagation()}
>


          {/* HEADER */}
  <div className="relative flex items-center justify-end py-[16px]">

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
    transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)]
    ${
      animateIcon
        ? "translate-x-0"
        : "-translate-x-[340px] md:-translate-x-[580px] lg:-translate-x-[900px]"
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
    title="Scent Families"
    items={["Flowery", "Warm", "Fruity", "Gourmand", "Fresh", "Earthy", "Herbal"]}
  />

</div>

 {/* RIGHT CARD */}
          <div className="flex justify-center lg:justify-end">
                   {/* RIGHT PRODUCT CARD */}
        <div className="">
          <div className="bg-[#FBF7F2] rounded-[24px] p-4 w-[160px] lg:w-[220px] text-center">
            <img
              src="https://i.postimg.cc/JnBwP30d/Product-Card.png"
              className="rounded-xl mx-auto mb-4"
            />
          </div> <p className="text-[14px] lg:text-[16px] text-center text-[#1D0B01] font-medium cursor-pointer">
              <Link to='productList'>View All Perfume</Link>
            </p>
        </div>

            {/* <div className="bg-[#F6F7F2] w-full max-w-[280px] h-auto rounded-[24px] p-[12px] 2xl:p-[24px] flex flex-col justify-between gap-[32px]">

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
    {
      name: "Flowery",
      bg: "https://cdn.shopify.com/s/files/1/0047/4067/7699/files/FLORAL_BUTTON_RIGHT_BG.png?v=1734583632",
    },
    {
      name: "Warm",
      bg: "https://cdn.shopify.com/s/files/1/0047/4067/7699/files/WARM_EXPANDED_BOTTOM_RIGHT.png?v=1734522567",
    },
    {
      name: "Gourmand",
      bg: "https://cdn.shopify.com/s/files/1/0047/4067/7699/files/EDIBLE_EXPANDED_RIGHT.png?v=1734521715",
    },
    {
      name: "Fresh",
      bg: "https://cdn.shopify.com/s/files/1/0047/4067/7699/files/FRESH_BUTTON_RIGHT.png?v=1734358115",
    },
    {
      name: "Earthy",
      bg: "https://cdn.shopify.com/s/files/1/0047/4067/7699/files/EARTHY_EXPANDED_RIGHT.png?v=1734522344",
    },
    {
      name: "Herbal",
      bg: "https://cdn.shopify.com/s/files/1/0047/4067/7699/files/HERBAL_EXPANDED_RIGHT.png?v=1734522155",
    },
  ].map((item) => (
    <button
      key={item.name}
      className="relative h-[45px] rounded-full overflow-hidden 
      text-white font-medium 
      flex justify-center items-center 
      transition duration-500 hover:scale-[1.03]"
      style={{
        backgroundImage: `url(${item.bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      
      <div className="absolute inset-0 bg-black/50" />

     
      <span className="relative z-10 text-[14px]">
        {item.name}
      </span>
    </button>
  ))}
</div>

</div> */}

          </div>
        </div>


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

