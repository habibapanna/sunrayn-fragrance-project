import { X, Minus, Plus } from "lucide-react";
import { FaAngleLeft, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Truck from '../assets/Frame (8).png';
import { useEffect, useRef, useState } from "react";
import { products } from "../data/productsData";
import { motion, AnimatePresence } from "framer-motion";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdKeyboardArrowLeft } from "react-icons/md";



const tiers = [
  { id: 1, label: "1-2 items", off: "10% OFF" },
  { id: 2, label: "3 items", off: "20% OFF" },
  { id: 3, label: "4 items", off: "25% OFF" },
  { id: 4, label: "5 items", off: "30% OFF" }
];

const CartOverlay = ({ onClose }) => {
  const navigate = useNavigate();
 /* ================= CAROUSEL STATE ================= */
  const [current, setCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [startX, setStartX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
 const [selectedTier, setSelectedTier] = useState(tiers[1].id);


  const isHome = location.pathname === "/";

/* ================= RESPONSIVE ================= */
  useEffect(() => {
    const updateView = () => {
      setItemsPerView(window.innerWidth < 640 ? 1 : 2);
    };
    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const maxIndex = products.length - itemsPerView;
  const minSwipeDistance = 50;

  const clamp = (value) => Math.max(0, Math.min(value, maxIndex));

  /* ================= DRAG HANDLERS ================= */
  const handleStart = (x) => {
    setStartX(x);
    setIsDragging(true);
  };

  const handleEnd = (x) => {
    if (!isDragging || startX === null) return;
    const distance = startX - x;

    if (distance > minSwipeDistance) {
      setCurrent((prev) => clamp(prev + 1));
    } else if (distance < -minSwipeDistance) {
      setCurrent((prev) => clamp(prev - 1));
    }

    setIsDragging(false);
    setStartX(null);
  };

    useEffect(() => {
  // When overlay opens
  document.body.style.overflow = "hidden";

  // Cleanup when overlay closes
  return () => {
    document.body.style.overflow = "";
  };
}, []);

 const navTopClass = isHome ? "top-0" : "top-0";
   
 const cartVariants = {
  hidden: {
    x: "100%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1], // luxury easing
    },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: {
      duration: 0.35,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25 },
  },
};


  return (
    <AnimatePresence>
  <motion.div
    className="fixed inset-0  z-50"
    variants={backdropVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    onClick={onClose}
  />
    <motion.aside
    className={`fixed ${navTopClass} right-0 h-full w-full md:w-[431px] lg:w-[541px] bg-white z-60 flex flex-col`}
    variants={cartVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
{/* TOP FIXED AREA */}
<div className="sticky top-0 z-10 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-[2px] lg:py-[16px] ">
    <button className="flex justify-between items-center rounded-[100px] cursor-pointer hover:underline py-[8px] lg:py-[4px] text-[14px] lg:text-[16px] 2xl:text-[18px]" onClick={onClose}>
         <MdKeyboardArrowLeft className="text-xl" /> Go Back 
        </button>

        <div className="flex gap-[12px] items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M2.55397 12.661L2.85834 10.9349C3.21807 8.89463 3.39794 7.87456 4.11022 7.27059C4.82251 6.66663 5.8457 6.66663 7.89205 6.66663H12.1132C14.1595 6.66663 15.1827 6.66663 15.895 7.27059C16.6073 7.87456 16.7871 8.89463 17.1469 10.9349L17.4513 12.661C17.949 15.4842 18.1979 16.8958 17.4315 17.8229C16.6651 18.75 15.2492 18.75 12.4175 18.75H7.58769C4.75599 18.75 3.34014 18.75 2.57371 17.8229C1.80729 16.8958 2.05619 15.4842 2.55397 12.661Z" stroke="#050C29" stroke-width="1.25"/>
  <path d="M6.25 6.66663L6.38985 4.98844C6.54632 3.11084 8.11589 1.66663 10 1.66663C11.8841 1.66663 13.4537 3.11084 13.6102 4.98844L13.75 6.66663" stroke="#050C29" stroke-width="1.25"/>
  <path d="M12.5 9.16663C12.3917 10.3442 11.3047 11.25 10 11.25C8.69525 11.25 7.60835 10.3442 7.5 9.16663" stroke="#050C29" stroke-width="1.25" stroke-linecap="round"/>
</svg>
        <h2 className="font-medium text-[14px] lg:text-[16px] 2xl:text-[18px]">Your cart (1)</h2></div> 
      </div>
              {/* Discount */}
        <div className="mx-[16px] bg-[#EDE8D0] rounded-[16px] py-[8px] px-[16px] cursor-pointer">
          <p className="text-[14px] lg:text-[16px] 2xl:text-[20px] text-[#282828] font-medium mb-[8px]">Special discount</p>
          <div className="grid grid-cols-4 gap-[4px] lg:gap-[8px] text-center">
  {tiers.map((tier) => (
    <div
      key={tier.id}
      onClick={() => setSelectedTier(tier.id)}
      className={`cursor-pointer transition-all duration-300 group ${
        selectedTier === tier.id
          ? "text-[#A0174A]"
          : "text-[#282828] border-transparent"
      }`}
    >
      <div
        className={`w-[73px] lg:w-[96px] h-[8px] rounded-[100px] mb-[10px] lg:mb-[13px] mx-auto
        ${selectedTier === tier.id ? "bg-[#1D0B01]" : "bg-white group-hover:bg-[#1D0B01] transition-all duration-500"}
        `}
      />

      <div className="text-[12px] lg:text-[16px] border-r border-white group-hover:text-[#A0174A] transition-all duration-500">
        {tier.label}
        <br />
        <span className="font-normal text-[14px] lg:text-[18px] group-hover:text-[#A0174A] transition-all duration-500">
          {tier.off}
        </span>
      </div>
    </div>
  ))}
</div>


          <div className="border border-white mt-[8px] lg:mt-[16px]"></div>

          <div className="flex items-center gap-2 text-[14px] lg:text-[18px] mt-[8px] lg:mt-[16px] text-[#A0174A] transition-all duration-500">

            <img src={Truck} alt="" className="h-[24px] w-[24px]" /> FREE shipping on 3+ items
          </div>
        </div>
        
</div>
      {/* SCROLLABLE CONTENT */}
<div className="overflow-y-auto px-[16px]">
       {/* Cart Item */}
<div className="my-[12px] lg:my-[16px] bg-[#F6F7F2] rounded-[16px] p-[12px] lg:p-[16px] flex gap-[16px]">

  {/* LEFT – IMAGE */}
  <div className="relative flex-shrink-0">
    <img
      src="https://i.postimg.cc/W4V5k4wv/Whats-App-Image-2026-02-03-at-6-06-48-PM.jpg"
      alt="Cerisa Aura"
      className="w-[140px] h-full lg:w-[130px]  object-cover rounded-[16px]"
    />
    <span className="absolute top-[2px] left-[2px] text-[10px] lg:text-[12px] bg-white px-[8px] py-[2px] rounded-full border border-[#DBAB35] text-[#1D0B01]">
      Woman
    </span>
  </div>

  {/* RIGHT – CONTENT */}
  <div className="flex flex-col flex-1 justify-between">

    {/* Top Section */}
    <div>
      <div className="flex justify-between items-start">
        <h3 className="font-medium text-[#A0174A] text-[14px] lg:text-[16px] 2xl:text-[20px]">
          Cerisa Aura
        </h3>

        <div className="text-right flex items-center gap-[6px]">
          <p className="text-[12px] lg:text-[14px] line-through text-[#3A3F42]">
            $40
          </p>
          <p className="font-medium text-[#A0174A] text-[16px] lg:text-[18px] 2xl:text-[20px]">
            $32
          </p>
        </div>
      </div>

      <p className="hidden lg:block text-[14px] text-[#282828] mt-1">
        Alluring cherry and almond fragrance
      </p>

      <p className="text-[12px] lg:text-[14px] text-[#282828] mt-1">
        Size: 15ML / 1oz
      </p>
    </div>

    {/* Bottom Section */}
    <div className="flex items-center justify-between mt-[12px]">

      {/* Quantity */}
      <div className="flex items-center gap-3 bg-white rounded-full px-[12px] py-[6px]">
        <Minus className="w-[18px] h-[18px] cursor-pointer" />
        <span className="text-[14px] lg:text-[16px]">1</span>
        <Plus className="w-[18px] h-[18px] cursor-pointer" />
      </div>

      {/* Delete */}
      <RiDeleteBinLine className="text-[22px] lg:text-[26px] text-[#A0174A] cursor-pointer hover:text-red-600 transition-all duration-500" />

    </div>

  </div>
</div>
        {/* Order Summary */}
        <div className="my-[12px] lg:my-[16px] bg-[#F6F7F2] rounded-[20px] p-[16px]">
          <h3 className="font-medium text-[18px] 2xl:text-[20px] mb-[16px]">Order Summary</h3>
          <div className="border border-[#c7cacd] my-[16px]"></div>
          <div className="space-y-[8px] text-[#282828] text-[16px] lg:text-[18px]">
            <div className="flex justify-between"><span>Initial Price</span><span>$32</span></div>
            <div className="flex justify-between"><span>Discount</span><span>$2</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>$4</span></div>
            <div className="flex justify-between"><span>VAT (5%)</span><span>$1.75</span></div>
          </div>
        </div>
{/* card slider */}
      <div className="p-[16px] rounded-[20px] bg-[#F6F7F2]">
  <h3 className="font-medium text-[20px] mb-[16px]">Recommended Products</h3>

  <div className="relative overflow-x-auto">
    <div
     ref={sliderRef}
      onScroll={() => {
        const el = sliderRef.current;
        const progress =
          el.scrollLeft / (el.scrollWidth - el.clientWidth);
        setScrollProgress(progress);
      }}
    className="flex gap-[12px] overflow-x-auto scroll-smooth snap-x snap-mandatory touch-pan-x scrollbar-hide pb-2">
      {products.map((item, i) => (
        <div
          key={i}
          className="snap-start flex-shrink-0 w-[215px]"
        >
          <div className="group relative h-[272px] rounded-[24px] overflow-hidden"
      
          >
            <img
              src={item.images}
              className="absolute inset-0 mx-auto h-full w-full object-cover group-hover:scale-105 duration-1000"
            />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
            <div className="absolute bottom-0 left-0 w-full p-3">
              <div className="flex gap-[2px] text-[#DBAB35] text-[12px]">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
                <span className="text-white ml-[4px]">1239</span>
              </div>

              <h3 className="text-[18px] font-semibold text-white">{item.title}</h3>
              <p className="text-[12px] mb-2 text-white">Sanrayn Original</p>

              <div className="flex justify-between items-center">
                <button className="bg-[#1D0B01]/60 backdrop-blur-md px-4 py-1 rounded-full text-sm cursor-pointer hover:text-[#1D0B01] border border-white
    transition-all duration-300 ease-out
    hover:bg-white text-white">Add to Cart</button>
                  <div className="relative w-[60px] h-[28px] text-[20px]  font-normal"
                      >
                        <div className="absolute -top-[6px]  left-1/2 -translate-x-1/2 bg-[#1D0B01] text-[10px] text-white z-10 h-[12px] w-[40px] flex items-center justify-center">
                          -{Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100)}% Off
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 105 45" fill="none">
                          <path
                            d="M95 11V0H10V11C4.47715 11 0 15.4772 0 21V24C0 29.5228 4.47715 34 10 34V45H95V34C100.523 34 105 29.5228 105 24V21C105 15.4772 100.523 11 95 11Z"
                            fill="#DBAB35"
                          />
                          <text
                            x="52.5"
                            y="30"
                            textAnchor="middle"
                            fontWeight="500"
                            fill="#FFFFFF"
                            fontFamily="sans-serif"
                          >
                            ${item.price.toFixed(2)}
                          </text>
                        </svg>
                      </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    
  </div>
</div>
      </div>
{/* FOOTER */}
<div className="sticky bottom-0 bg-white p-[16px]">
  <div className="bg-[#F6F7F2] rounded-[20px] p-[16px]">
    <div className="flex justify-between mb-[16px]">
      <span className="text-[16px] font-bold">
        Subtotal <span className="text-[15px]">(1 items)</span>
      </span>
      <span className="text-[16px] font-bold">$37.75</span>
    </div>

    <button
      onClick={() => {
        onClose();
        navigate("/checkout");
      }}
      className="w-full py-[10px] rounded-full font-medium text-[16px]
        bg-[#DBAB35] hover:bg-white
        backdrop-blur-md border border-[#DBAB35] text-[#1D0B01]
        transition-all duration-300 cursor-pointer"
    >
      Process to Checkout
    </button>

    <p className="text-center text-[#A0174A] text-[14px] lg:text-[16px] mt-[12px]">
      Pay with Visa, Mastercard, Apple Pay and more
    </p>
  </div>
</div>

  </motion.aside>
</AnimatePresence>
  );
};

export default CartOverlay;