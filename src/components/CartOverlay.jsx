import { X, Minus, Plus } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import cartFrame from '../assets/Frame (7).png'
import Truck from '../assets/Frame (8).png'
import Discount from '../assets/Discount Price.png';
import Original from '../assets/Original Price.png';
import { useEffect, useState } from "react";

const CartOverlay = ({ onClose }) => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
const [touchStart, setTouchStart] = useState(null);
const [touchEnd, setTouchEnd] = useState(null);
const [itemsPerView, setItemsPerView] = useState(1);

useEffect(() => {
  const updateView = () => {
    if (window.innerWidth < 640) {
      setItemsPerView(1);
    } else {
      setItemsPerView(2);
    }
  };

  updateView();
  window.addEventListener("resize", updateView);
  return () => window.removeEventListener("resize", updateView);
}, []);

const minSwipeDistance = 50;

const onTouchStart = (e) => {
  setTouchEnd(null);
  setTouchStart(e.targetTouches[0].clientX);
};

const onTouchMove = (e) => {
  setTouchEnd(e.targetTouches[0].clientX);
};

const onTouchEnd = () => {
  if (!touchStart || !touchEnd) return;

  const distance = touchStart - touchEnd;
  const maxIndex = items.length - itemsPerView;

  if (distance > minSwipeDistance) {
    setCurrent((prev) => (prev >= maxIndex ? maxIndex : prev + 1));
  }

  if (distance < -minSwipeDistance) {
    setCurrent((prev) => (prev <= 0 ? 0 : prev - 1));
  }
};


const items = [
  {
    title: "Ambery Saffron",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
  },
  {
    title: "Ambery Saffron",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
  },
  {
    title: "Ambery Saffron",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
  },
  {
    title: "Ambery Saffron",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
  },
  {
    title: "Ambery Saffron",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
  },
]



    
  return (
    <aside className="fixed top-0 right-0 h-full w-full lg:w-[541px] bg-white z-50">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 ">
        <div className="flex gap-[12px] items-center"><img src={cartFrame} alt="" className="h-[20px] w-[20px]" />
        <h2 className="font-medium text-[20px]">Your cart (1)</h2></div>
        <button className="bg-[#F6F7F2] rounded-[100px] p-2 cursor-pointer" onClick={onClose}>
          <X className="h-[20px] w-[20px]" />
        </button>
      </div>

      <div className="overflow-y-auto h-[calc(100%-64px)]">
        {/* Discount */}
        <div className="m-[16px] bg-[#EDE8D0] rounded-[20px] p-[16px]">
          <p className="text-[20px] text-[#282828] font-medium mb-3">Special discount</p>
          <div className="grid grid-cols-4 gap-2 text-center">

            <div className="">
                <div className="w-[96px] h-[8px] bg-[#1D0B01] rounded-[100px] mb-[13px]"></div>
                <div className="text-[16px] border-r border-white ">
                1-2 items<br /><span className="font-normal text-[18px] text-[#282828]">10% OFF</span></div>
            </div>

           <div className=""> <div className="w-[96px] h-[8px] bg-white rounded-[100px] mb-[13px]"></div>
            <div className="text-[16px] border-r border-white">3 items<br /><span className="font-normal text-[18px] text-[#282828]">20% OFF</span></div></div>

            <div className="">
                <div className="w-[96px] h-[8px] bg-white rounded-[100px] mb-[13px]"></div>
         <div className="text-[16px] border-r border-white">4 items<br /><span className="font-normal text-[18px] text-[#282828]">25% OFF</span></div>
            </div>

           <div className="">
            <div className="w-[96px] h-[8px] bg-white rounded-[100px] mb-[13px]"></div>
            <div className="text-[16px]">5 items<br /><span className="font-normal text-[18px] text-[#282828]">30% OFF</span></div>
           </div>
          </div>

          <div className="border border-white mt-[16px]"></div>

          <div className="flex items-center gap-2 text-[18px] mt-[16px]">
            <img src={Truck} alt="" className="h-[24px] w-[24px]" /> FREE shipping on 3+ items
          </div>
        </div>

        {/* Cart Item */}
        <div className="m-[16px]  rounded-[16px] p-[16px] flex gap-[16px] bg-[#F6F7F2]">
         <div className=" bg-[#EDE8E0] w-[156px] h-[156px] rounded-[16px] py-[24px] px-[25px]">
             <img
            src="https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png"
            className="w-[107px] h-[107px]  object-cover"
          />
         </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <h3 className="font-medium text-[#571313] text-[20px]">Cerisa Aura</h3>
              <span className="text-[14px] bg-white p-[10px] rounded-[30px] text-[#1D0B01]">Woman</span>
            </div>
            <p className="text-[14px] text-[#282828]">Alluring cherry and almond fragrance</p>
            <p className="text-[14px] text-[#282828]">Size: 15ML / 1oz</p>

            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-3 bg-white rounded-[100px] px-[12px] py-[10px] ">
                <Minus className="h-[24px]" />
                <span className="text-[20px]">1</span>
                <Plus className="h-[24px]" />
              </div>
              <div className="text-right flex items-center gap-[8px]">
                <p className="text-[14px] line-through text-[#3A3F42]">$40</p>
                <p className="font-medium text-[#372416] text-[20px]">$32</p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="m-[16px] bg-[#F6F7F2] rounded-[20px] p-[16px]">
          <h3 className="font-medium text-[20px] mb-[16px]">Order Summary</h3>
          <div className="border border-[#c7cacd] my-[16px]"></div>
          <div className="space-y-[8px] text-[#282828] text-[18px]">
            <div className="flex justify-between"><span>Initial Price</span><span>$32</span></div>
            <div className="flex justify-between"><span>Discount</span><span>$2</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>$4</span></div>
            <div className="flex justify-between"><span>VAT (5%)</span><span>$1.75</span></div>
          </div>
        </div>
{/* ================= RECOMMENDED CAROUSEL ================= */}
<div className="p-[16px] m-[16px] rounded-[20px] bg-[#F6F7F2]">
  <h3 className="font-medium text-[20px] text-[#050C29] mb-[16px]">
    Recommended Products
  </h3>

  <div
    className="relative overflow-hidden"
    onTouchStart={onTouchStart}
    onTouchMove={onTouchMove}
    onTouchEnd={onTouchEnd}
  >
    <div
      className="flex transition-transform duration-500 ease-in-out"
      style={{
        transform: `translateX(-${(current * 100) / itemsPerView}%)`,
      }}
    >
      {items.map((item, i) => (
        <div
          key={i}
          className="px-[8px]"
          style={{ minWidth: `${100 / itemsPerView}%` }}
        >
          {/* ===== CARD (SAME DESIGN AS BEST SELLING) ===== */}
          <div className="relative rounded-[24px] overflow-hidden bg-[#EDE8E0] h-[260px]">
            <img
              src={item.product}
              alt={item.title}
              className="absolute inset-0 mx-auto h-[148px] w-[148px] object-contain"
            />

            <div className="absolute bottom-0 left-0 w-full p-[12px]">
              {/* Rating */}
              <div className="flex items-center h-[12px] gap-1 text-[#FF9100] text-[12px]">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
                <span className="text-[#0D0C09] ml-1">1239</span>
              </div>

              <h3 className="text-[18px] font-semibold text-[#571313]">
                {item.title}
              </h3>

              <p className="text-[12px] text-[#0D0C09] mb-[8px]">
                Sanrayn Original
              </p>

             <div className="flex items-center justify-between gap-3">
                           <button className="bg-white px-[16px] py-[4px] rounded-full font-medium text-[14px]">
                             Add to Cart
                           </button>
                          
                             <img src={Discount} className="h-[30px] w-[60px]" />
                         </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    {/* ===== CAROUSEL SCROLL INDICATOR ===== */}
<div className="mt-[12px] flex justify-center">
  <div className="relative w-full h-[4px] rounded-full bg-[#28282826] overflow-hidden">
    <div
      className="absolute top-0 left-0 h-full bg-[#282828] transition-transform duration-500 ease-in-out"
      style={{
        width: `${100 / (items.length - itemsPerView + 1)}%`,
        transform: `translateX(${
          current * (100 / (items.length - itemsPerView + 1))
        }%)`,
      }}
    />
  </div>
</div>

  </div>
</div>

        {/* Footer */}
        <div className="bg-[#F6F7F2] rounded-[20px] m-[16px] p-[16px]">
          <div className="flex justify-between mb-[16px]">
            <span className="text-[16px] text-[#372416] font-bold">Subtotal <span className="text-[15px]"> (1 items)</span></span>
            <span className="text-[16px] text-[#372416] font-bold">$37.75</span>
          </div>
          <button
  onClick={() => {
    onClose();
    navigate("/checkout");
  }}
  className="w-full bg-[#DBAB35] text-[#1D0B01] py-[7px] px-[12px] rounded-full font-medium text-[16px] cursor-pointer"
>
  Process to Checkout
</button>

          <p className="text-center text-[14px] my-[16px] ">Pay with Visa, Mastercard, Apple Pay and more</p>
        </div>
      </div>
    </aside>
  );
};

export default CartOverlay;