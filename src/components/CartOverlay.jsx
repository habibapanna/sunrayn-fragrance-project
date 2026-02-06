import { X, Minus, Plus } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import cartFrame from '../assets/Frame (7).png'
import Truck from '../assets/Frame (8).png'
import Discount from '../assets/Discount Price.png';
import { useEffect, useRef, useState } from "react";
import { products } from "../data/productsData";


const CartOverlay = ({ onClose }) => {
  const navigate = useNavigate();
 /* ================= CAROUSEL STATE ================= */
  const [current, setCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [startX, setStartX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

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




    
  return (
    <aside className="fixed top-0 right-0 h-full w-full lg:w-[541px] bg-white z-50 flex flex-col">
{/* TOP FIXED AREA */}
<div className="sticky top-0 z-10 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-[2px] lg:py-[16px] ">
        <div className="flex gap-[12px] items-center"><img src={cartFrame} alt="" className="h-[20px] w-[20px]" />
        <h2 className="font-medium text-[14px] lg:text-[16px] 2xl:text-[20px]">Your cart (1)</h2></div>
        <button className="rounded-[100px] p-2 cursor-pointer" onClick={onClose}>
          <X className="h-[20px] w-[20px]" />
        </button>
      </div>
              {/* Discount */}
        <div className="mx-[16px] bg-[#EDE8D0] rounded-[20px] py-[8px] px-[16px]">
          <p className="text-[14px] lg:text-[16px] 2xl:text-[20px] text-[#282828] font-medium mb-[8px]">Special discount</p>
          <div className="grid grid-cols-4 gap-[4px] lg:gap-[8px] text-center">

            <div className="">
                <div className="w-[73px] lg:w-[96px] h-[8px] bg-[#1D0B01] rounded-[100px] mb-[10px] lg:mb-[13px]"></div>
                <div className="text-[12px] lg:text-[16px] border-r border-white ">
                1-2 items<br /><span className="font-normal text-[14px] lg:text-[18px] text-[#282828]">10% OFF</span></div>
            </div>

           <div className=""> <div className="w-[73px] lg:w-[96px] h-[8px] bg-white rounded-[100px] mb-[10px] lg:mb-[13px]"></div>
            <div className="text-[12px] lg:text-[16px] border-r border-white">3 items<br /><span className="font-normal text-[14px] lg:text-[18px] text-[#282828]">20% OFF</span></div></div>

            <div className="">
                <div className="w-[73px] lg:w-[96px] h-[8px] bg-white rounded-[100px] mb-[10px] lg:mb-[13px]"></div>
         <div className="text-[12px] lg:text-[16px] border-r border-white">4 items<br /><span className="font-normal text-[14px] lg:text-[18px] text-[#282828]">25% OFF</span></div>
            </div>

           <div className="">
            <div className="w-[73px] lg:w-[96px] h-[8px] bg-white rounded-[100px] mb-[10px] lg:mb-[13px]"></div>
            <div className="text-[12px] lg:text-[16px]">5 items<br /><span className="font-normal text-[14px] lg:text-[18px] text-[#282828]">30% OFF</span></div>
           </div>
          </div>

          <div className="border border-white mt-[8px] lg:mt-[16px]"></div>

          <div className="flex items-center gap-2 text-[14px] lg:text-[18px] mt-[8px] lg:mt-[16px]">
            <img src={Truck} alt="" className="h-[24px] w-[24px]" /> FREE shipping on 3+ items
          </div>
        </div>
</div>
      {/* SCROLLABLE CONTENT */}
<div className="flex-1 overflow-y-auto px-[16px]">


        {/* Cart Item */}
        <div className="my-[12px] lg:my-[16px]  rounded-[16px] p-[16px] flex gap-[16px] bg-[#F6F7F2]">
         <div className=" bg-[#EDE8E0] h-[89px] w-[89px] lg:w-[156px] lg:h-[156px] rounded-[16px] py-[24px] px-[25px]">
             <img
            src="https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png"
            className="h-[55px] w-[55px] lg:w-[107px] lg:h-[107px]  object-cover"
          />
         </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <h3 className="font-medium text-[#1D0B01] text-[14px] lg:text-[16px] 2xl:text-[20px]">Cerisa Aura</h3>
              <span className="text-[10px] lg:text-[14px] bg-white p-[5px] lg:p-[10px] rounded-[30px] text-[#1D0B01]">Woman</span>
            </div>
            <p className="hidden lg:block text-[14px] text-[#282828]">Alluring cherry and almond fragrance</p>
            <p className="text-[12px] lg:text-[14px] text-[#282828]">Size: 15ML / 1oz</p>

            <div className="flex items-center justify-between mt-[6px] lg:mt-3">
              <div className="flex items-center gap-3 bg-white rounded-[100px] py-[8px] px-[10px] 2xl:px-[12px] 2xl:py-[10px]">
                <Minus className="h-[24px]" />
                <span className="text-[15px] lg:text-[16px] 2xl:text-[20px]">1</span>
                <Plus className="h-[24px]" />
              </div>
              <div className="text-right flex items-center gap-[8px]">
                <p className="text-[12px] lg:text-[14px] line-through text-[#3A3F42]">$40</p>
                <p className="font-medium text-[#372416] text-[18px] 2xl:text-[20px]">$32</p>
              </div>
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
    className="flex gap-[12px] overflow-x-auto scroll-smooth snap-x snap-mandatory touch-pan-x no-scrollbar pb-2">
      {products.map((item, i) => (
        <div
          key={i}
          className="snap-start flex-shrink-0 w-[215px]"
        >
          <div className="relative h-[272px] rounded-[24px] overflow-hidden"
          style={{
    background:
      "radial-gradient(72.36% 72.36% at 50% 50%, #FBF9F7 0%, #EDE8E0 100%)",
  }}
          >
            <img
              src={item.images[0]}
              className="mx-auto h-[148px] w-[148px] object-cover"
            />

            <div className="absolute bottom-0 left-0 w-full p-3">
              <div className="flex gap-1 text-[#FF9100] text-[12px]">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
                <span className="text-black ml-1">1239</span>
              </div>

              <h3 className="text-[18px] font-semibold text-[#571313]">{item.title}</h3>
              <p className="text-[12px] mb-2">Sanrayn Original</p>

              <div className="flex justify-between items-center">
                <button className="bg-white/60 backdrop-blur-md border border-[#BA9948] px-4 py-1 rounded-full text-sm cursor-pointer  text-[#1D0B01]
    transition-all duration-300 ease-out
    hover:bg-[#BA9948] hover:text-white">Add to Cart</button>
                  <div className="relative w-[60px] h-[28px] text-[16px]  font-normal"
                      >
                        <div className="absolute -top-[2px]  left-1/2 -translate-x-1/2 bg-[#1D0B01] text-[6px] text-white z-10 h-[8px] w-[32px] flex items-center justify-center">
                          -{Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100)}% Off
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 105 45" fill="none">
                          <path
                            d="M95 11V0H10V11C4.47715 11 0 15.4772 0 21V24C0 29.5228 4.47715 34 10 34V45H95V34C100.523 34 105 29.5228 105 24V21C105 15.4772 100.523 11 95 11Z"
                            fill="#BA9948"
                          />
                          <text
                            x="52.5"
                            y="30"
                            textAnchor="middle"
                            fontWeight="700"
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
      {/* FAKE SCROLLBAR */}
    <div className="mt-[8px] h-[3px] bg-[#E5E5E5] rounded-full overflow-hidden">
      <div
        className="h-full bg-black rounded-full transition-all"
        style={{ width: `${scrollProgress * 100}%` }}
      />
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
        bg-[#BA9948] text-white hover:bg-white/60
        backdrop-blur-md border border-[#BA9948] hover:text-[#1D0B01]
        transition-all duration-300 cursor-pointer"
    >
      Process to Checkout
    </button>

    <p className="text-center text-[14px] mt-[12px]">
      Pay with Visa, Mastercard, Apple Pay and more
    </p>
  </div>
</div>

    </aside>
  );
};

export default CartOverlay;