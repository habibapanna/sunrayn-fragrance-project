import React, { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import Paypal from "../assets/XMLID_1_.svg";
import { Link } from "react-router-dom";



const QuickView = ({ product, onClose }) => {
   
const notesRef = useRef(null);
 const [selectedVolume, setSelectedVolume] = useState(null);
   const [show, setShow] = useState(false);
  useEffect(() => {
    if (product?.volume?.length) {
      setSelectedVolume(product.volume[0]);
    }
  }, [product]);

  if (!product) return null;


useEffect(() => {
  setShow(true);
}, []);

const handleClose = () => {
  setShow(false);
  setTimeout(() => {
    onClose();
  }, 500); // match transition duration
};

const volumeToOz = {
  "15ML": "0.5oz",
  "30ML": "1oz",
  "60ML": "2oz",
};

const genderStyles = {
  WOMEN: "border-[#A0174A] text-[#A0174A]",
  MEN: "border-black text-black",
  UNISEX: "border-[#BA9948] text-[#BA9948]",
};

const scentFamilyGradients = {
  Flowery: "https://cdn.shopify.com/s/files/1/0047/4067/7699/files/FLORAL_BUTTON_RIGHT_BG.png?v=1734583632",
  Warm: "https://cdn.shopify.com/s/files/1/0047/4067/7699/files/WARM_EXPANDED_BOTTOM_RIGHT.png?v=1734522567",
  Gourmand: "https://cdn.shopify.com/s/files/1/0047/4067/7699/files/EDIBLE_EXPANDED_RIGHT.png?v=1734521715",
  Fresh: "https://cdn.shopify.com/s/files/1/0047/4067/7699/files/FRESH_BUTTON_RIGHT.png?v=1734358115",
  Earthy: "https://cdn.shopify.com/s/files/1/0047/4067/7699/files/EARTHY_EXPANDED_RIGHT.png?v=1734522344",
  Herbal: "https://cdn.shopify.com/s/files/1/0047/4067/7699/files/HERBAL_EXPANDED_RIGHT.png?v=1734522155",
};

const handleAddToCart = () => {
  console.log("Added to cart:", product.title, selectedVolume);
};

    const SmallBottleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g clip-path="url(#clip0_24405_22822)">
    <path d="M12.9297 6.46199V2.29348C12.9297 1.99391 13.0463 1.71223 13.2582 1.50035C13.4252 1.33332 13.5166 1.11117 13.5156 0.874844C13.5134 0.392461 13.1113 0 12.6193 0H7.3807C6.88867 0 6.4866 0.392461 6.48438 0.874883C6.48332 1.11117 6.57473 1.33332 6.7418 1.50035C6.95363 1.71219 7.07031 1.99387 7.07031 2.29348V6.46195C5.75383 6.6082 4.72656 7.72719 4.72656 9.08199V18.5351C4.72656 19.3428 5.38367 20 6.19141 20H13.8086C14.6163 20 15.2734 19.3428 15.2734 18.5351V9.08199C15.2734 7.72719 14.2462 6.60824 12.9297 6.46199ZM7.65625 5.85938H12.3438V6.44531H7.65625V5.85938ZM7.3807 0.585938H12.6193C12.7868 0.585938 12.9289 0.719453 12.9296 0.8775C12.93 0.956328 12.8995 1.03039 12.8438 1.08605C12.5214 1.40859 12.3438 1.83742 12.3438 2.29348V5.27344H7.65625V2.29348C7.65625 1.83738 7.47863 1.40859 7.15613 1.08605C7.10043 1.03035 7.06996 0.956289 7.07031 0.877539C7.07105 0.719453 7.21316 0.585938 7.3807 0.585938ZM13.8086 19.4141H6.19141C5.70676 19.4141 5.3125 19.0198 5.3125 18.5352V17.9484C5.5575 18.1328 5.86188 18.2422 6.19141 18.2422H13.8086C14.1381 18.2422 14.4425 18.1328 14.6875 17.9484V18.5352C14.6875 19.0198 14.2932 19.4141 13.8086 19.4141ZM13.8086 17.6562H6.19141C5.70676 17.6562 5.3125 17.262 5.3125 16.7773V9.08203C5.3125 7.95121 6.23246 7.03125 7.36328 7.03125H12.6367C13.7675 7.03125 14.6875 7.95121 14.6875 9.08203V16.7773C14.6875 17.262 14.2932 17.6562 13.8086 17.6562Z" fill="#1D0B01"/>
    <path d="M12.6368 7.61719H7.36332C6.55559 7.61719 5.89848 8.2743 5.89848 9.08203V12.3438C5.89848 12.5055 6.02965 12.6367 6.19145 12.6367C6.35324 12.6367 6.48441 12.5055 6.48441 12.3438V9.08203C6.48441 8.59738 6.87867 8.20312 7.36332 8.20312H9.12113V14.1346C9.12113 14.2964 9.25231 14.4276 9.4141 14.4276H10.586C10.7478 14.4276 10.8789 14.2964 10.8789 14.1346V8.20312H12.6368C13.1214 8.20312 13.5157 8.59738 13.5157 9.08203V16.4627C13.2826 16.4282 13.056 16.3527 12.8486 16.2396L11.2626 15.3745C10.4721 14.9433 9.52801 14.9433 8.73742 15.3745L7.15145 16.2396C6.94398 16.3527 6.71746 16.4282 6.48438 16.4628V13.5156C6.48438 13.3538 6.3532 13.2227 6.19141 13.2227C6.02961 13.2227 5.89844 13.3538 5.89844 13.5156V16.7773C5.89844 16.9391 6.02961 17.0703 6.19141 17.0703C6.62359 17.0703 7.05258 16.9609 7.43203 16.7539L9.01801 15.8889C9.63289 15.5535 10.3671 15.5535 10.982 15.8889L12.568 16.7539C12.9475 16.9609 13.3765 17.0703 13.8086 17.0703C13.9705 17.0703 14.1016 16.9391 14.1016 16.7773V9.08203C14.1016 8.2743 13.4445 7.61719 12.6368 7.61719ZM10.293 13.8417H9.70707V8.20312H10.293V13.8417Z" fill="#1D0B01"/>
  </g>
  <defs>
    <clipPath id="clip0_24405_22822">
      <rect width="20" height="20" fill="white"/>
    </clipPath>
  </defs>
</svg>
);

const BigBottleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M15.625 7.5H11.5625V6.25H11.875C11.9579 6.25 12.0374 6.21708 12.096 6.15847C12.1546 6.09987 12.1875 6.02038 12.1875 5.9375V4.6875C12.1875 4.60462 12.1546 4.52513 12.096 4.46653C12.0374 4.40792 11.9579 4.375 11.875 4.375H11.5625V3.75H12.8125C12.8742 3.7499 12.9345 3.73164 12.9859 3.6975L13.9234 3.0725C13.9662 3.04395 14.0013 3.00529 14.0256 2.95993C14.0498 2.91458 14.0625 2.86393 14.0625 2.8125V1.5625C14.0625 1.51106 14.0498 1.46042 14.0256 1.41507C14.0013 1.36971 13.9662 1.33105 13.9234 1.3025L12.9859 0.6775C12.9345 0.643356 12.8742 0.625098 12.8125 0.625H7.1875C7.12579 0.625098 7.06547 0.643356 7.01406 0.6775L6.07656 1.3025C6.03378 1.33105 5.9987 1.36971 5.97444 1.41507C5.95018 1.46042 5.93749 1.51106 5.9375 1.5625V2.8125C5.93749 2.86393 5.95018 2.91458 5.97444 2.95993C5.9987 3.00529 6.03378 3.04395 6.07656 3.0725L7.01406 3.6975C7.06547 3.73164 7.12579 3.7499 7.1875 3.75H8.4375V4.375H8.125C8.04212 4.375 7.96263 4.40792 7.90403 4.46653C7.84542 4.52513 7.8125 4.60462 7.8125 4.6875V5.9375C7.8125 6.02038 7.84542 6.09987 7.90403 6.15847C7.96263 6.21708 8.04212 6.25 8.125 6.25H8.4375V7.5H4.375C4.12636 7.5 3.8879 7.59877 3.71209 7.77459C3.53627 7.9504 3.4375 8.18886 3.4375 8.4375V18.4375C3.4375 18.6861 3.53627 18.9246 3.71209 19.1004C3.8879 19.2762 4.12636 19.375 4.375 19.375H15.625C15.8736 19.375 16.1121 19.2762 16.2879 19.1004C16.4637 18.9246 16.5625 18.6861 16.5625 18.4375V8.4375C16.5625 8.18886 16.4637 7.9504 16.2879 7.77459C16.1121 7.59877 15.8736 7.5 15.625 7.5ZM6.5625 2.64531V1.72969L7.28125 1.25H12.7188L13.4375 1.72969V2.64531L12.7188 3.125H7.28125L6.5625 2.64531ZM9.0625 3.75H10.9375V4.375H9.0625V3.75ZM8.4375 5H11.5625V5.625H8.4375V5ZM15.9375 18.4375C15.9375 18.5204 15.9046 18.5999 15.846 18.6585C15.7874 18.7171 15.7079 18.75 15.625 18.75H4.375C4.29212 18.75 4.21263 18.7171 4.15403 18.6585C4.09542 18.5999 4.0625 18.5204 4.0625 18.4375V8.4375C4.0625 8.35462 4.09542 8.27513 4.15403 8.21653C4.21263 8.15792 4.29212 8.125 4.375 8.125H8.4375C8.60326 8.125 8.76223 8.05915 8.87944 7.94194C8.99665 7.82473 9.0625 7.66576 9.0625 7.5V6.25H10.9375V7.5C10.9375 7.66576 11.0033 7.82473 11.1206 7.94194C11.2378 8.05915 11.3967 8.125 11.5625 8.125H15.625C15.7079 8.125 15.7874 8.15792 15.846 8.21653C15.9046 8.27513 15.9375 8.35462 15.9375 8.4375V18.4375Z" fill="#282828"/>
  <path d="M14.0625 10H5.9375C5.77174 10 5.61277 10.0658 5.49556 10.1831C5.37835 10.3003 5.3125 10.4592 5.3125 10.625V16.25C5.3125 16.4158 5.37835 16.5747 5.49556 16.6919C5.61277 16.8092 5.77174 16.875 5.9375 16.875H14.0625C14.2283 16.875 14.3872 16.8092 14.5044 16.6919C14.6217 16.5747 14.6875 16.4158 14.6875 16.25V10.625C14.6875 10.4592 14.6217 10.3003 14.5044 10.1831C14.3872 10.0658 14.2283 10 14.0625 10ZM5.9375 16.25V10.625H14.0625V16.25H5.9375Z" fill="#282828"/>
</svg>
);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
           {/* Overlay */}
    <div
      className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      onClick={handleClose}
    />

    <div
  className={`
    relative bg-white w-[95%] md:w-[1100px]
    max-h-[80vh] overflow-y-auto rounded-lg shadow-2xl z-50 p-4
    transform transition-all duration-500 ease-out
    ${show ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"}
  `}
>
       {/* Close Button */}
      <button
          onClick={handleClose}
        className="absolute flex items-center justify-center top-3 right-3 text-black text-sm lg:text-xl border rounded-full p-2 h-6 w-6 lg:h-8 lg:w-8 hover:bg-black hover:text-white cursor-pointer transition-all duration-500"
      >
        ✕
      </button>
                  

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] 2xl:gap-[32px] 2xl:px-[16px] py-[16px] md:py-[32px] mt-4 md:mt-1">
                    
                    {/* LEFT – IMAGE */}
                 
            
                      <div className="">
                        <img
              src={product.images[1]}
              className="mx-auto h-[350px] md:h-full w-full object-cover rounded-[16px]"
            />
            
                    </div>
             {/* RIGHT – INFO */}
            <div className="md:sticky md:top-[100px] h-fit">
              <div className="2xl:bg-[#F6F7F2] rounded-[16px]  2xl:p-[32px]">
            
            <span
              className={`text-[12px] 2xl:text-[16px] bg-white border py-[8px] px-[16px] rounded-full ${
                genderStyles[product.gender?.toUpperCase()] || "border-[#BA9948]"
              }`}
            >
              {product.gender}
            </span>
            
                      <div className="flex justify-between items-center">
                        <h1 className="text-[18px] lg:text-[24px] 2xl:text-[35px] text-[#1D0B01] font-bold mt-2">
                        {product.title}
                      </h1>
                      {/* Price */}
                      <div className="flex items-center gap-3 mt-[16px] lg:mt-[20px]">
                        <span className="text-[25px] 2xl:text-[30px] text-[#A0174A] font-bold">${product.price}</span>
                        <span className="line-through text-[#A0174A]/50 text-[18px] 2xl:text-[20px]">
                          ${product.oldPrice}
                        </span>
                      </div>
                      </div>
            
                      {/* Rating */}
                      <div className="flex items-center gap-[5px] mt-3">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="text-[#BA9948]" />
                        ))}
                        <span className="text-[16px] ml-[6px] underline">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>
                        
            <p className="text-[14px] 2xl:text-[16px] mt-2">
              Eau de Parfum
              {selectedVolume && (
                <>
                  :{" "}
                  <span className="text-[#A0174A] font-medium">
                    {selectedVolume} / {volumeToOz[selectedVolume]}
                  </span>
                </>
              )}
            </p>
            
                      <p className="mt-4 text-[14px] lg:text-[16px] 2xl:text-[20px] text-[#282828]">{product.description}</p>
            
             {/* Volume Selector */}
<div className="mt-[20px] 2xl:mt-[32px]">
  <p className="text-[16px] 2xl:text-[18px] mb-2">Volume</p>

  <div className="flex gap-[8px]">
    {["15ML", "30ML", "60ML"].map((v) => {
      const isSelected = selectedVolume === v;
      const isBestValue = v === "30ML";
      const isSmall = v === "15ML";

      return (
        <button
          key={v}
          type="button"
          onClick={() => setSelectedVolume(v)}
          className={`relative flex items-center justify-center gap-[4px] 2xl:gap-[8px]
            px-[10px] py-[8px] 2xl:px-[14px] 2xl:py-[10px]
            rounded-full border transition cursor-pointer
            ${isSelected ? "border-[#282828] bg-white" : "border-[#282828]/35 hover:border-[#282828]"}`}
        >
          {/* Best Value Badge */}
          {isBestValue && (
            <span className="absolute -top-[8px] right-[6px] text-[10px] lg:text-[12px] 
              bg-[#A0174A] text-white px-[6px] py-[2px] rounded-full z-10">
              Best Value
            </span>
          )}

          {/* Selection Circle */}
          <span
            className={`h-[16px] w-[16px] 2xl:h-[20px] 2xl:w-[20px] rounded-full border
              ${isSelected ? "border-[4px] border-[#282828]" : "border-[#282828]/35"}`}
          />

          {/* Bottle Icon */}
          {isSmall ? <SmallBottleIcon /> : <BigBottleIcon />}

          {/* Volume Text */}
          <span
            className={`text-[14px] 2xl:text-[20px] font-medium
              ${isSelected ? "text-[#282828]" : "text-[#282828]/35"}`}
          >
            {v}
          </span>
        </button>
      );
    })}
  </div>
</div>
            
            <div className="mt-[16px] lg:mt-[20px] flex  text-center lg:text-left gap-[16px]">
            <div
              className="relative overflow-hidden rounded-full px-[18px] py-[8px] text-white text-[14px] font-semibold"
              style={{
                backgroundImage: `url(${scentFamilyGradients[product.scentFamily]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50" />
            
              {/* Text */}
              <span className="relative z-10">
                Scent Family: <span className="font-medium">{product.scentFamily}</span>
              </span>
            </div>
              <p className="bg-white border border-gray-200 px-[10px] py-[4px] rounded-full">Crafted in <span className="text-[#A0174A] font-semibold">BKLYN</span>
            </p>
            </div>
                      {/* CTA */}
                    <div onClick={handleAddToCart}
                    className="flex justify-center items-center mt-[16px] lg:mt-[20px]"> 
                      <button className="flex justify-center items-center w-full px-[20px] py-[8px] 2xl:py-[10px] 2x:px-[24px] rounded-full font-semibold cursor-pointer transition-all duration-500 ease-out
                bg-[#BA9948] hover:bg-white backdrop-blur-md border border-[#BA9948]">
                       <img src={Paypal} alt="" />
                      </button>
                      </div>
                      <Link to="/checkout">
                      <button className="mt-[16px] underline cursor-pointer text-[16px] text-center flex items-center justify-center mx-auto">More payment options
</button></Link>
                      </div>
                        {/* Notes */}
      <div className="space-y-[20px] mt-[16px]">
        {["top", "middle", "base"].map((key) => (
          <div key={key} className="flex gap-[16px]">
            <span className=""><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 56 56" fill="none">
  <circle cx="28" cy="28" r="28" fill="#F6F7F2"/>
  <path d="M27.9297 14.1338H28.9964V15.2005H27.9297V14.1338Z" fill="#1D0B01"/>
  <path d="M30.6006 12C30.742 12 30.8776 12.0563 30.9775 12.1562C31.0775 12.2562 31.1338 12.3918 31.1338 12.5332V16.2666H33.2666V19.4668H35.4004C35.5418 19.4668 35.6773 19.523 35.7773 19.623C35.8774 19.7231 35.9336 19.8586 35.9336 20V43.4668C35.9336 43.6082 35.8773 43.7438 35.7773 43.8438C35.6773 43.9437 35.5418 44 35.4004 44H21.5342C21.3927 44 21.2563 43.9438 21.1562 43.8438C21.0564 43.7438 21 43.6081 21 43.4668V20C21 19.8587 21.0564 19.723 21.1562 19.623C21.2563 19.523 21.3927 19.4668 21.5342 19.4668H23.667V16.2666H25.8008V12.5332C25.8008 12.3918 25.857 12.2562 25.957 12.1562C26.057 12.0563 26.1926 12 26.334 12H30.6006ZM22.0674 42.7334H34.8672V28.667H22.0674V42.7334ZM22.0674 23.2002H27.9336V22.1338H26.8672V20.5332H22.0674V23.2002ZM30.0674 22.1338H29V23.2002H34.8672V20.5332H30.0674V22.1338ZM26.8672 16.2666H30.0674V13.0664H26.8672V16.2666Z" fill="#1D0B01"/>
  <rect x="27.9297" y="23.7334" width="1.06667" height="19.2667" fill="#1D0B01"/>
</svg></span>
            <div>
              <p className="font-medium text-[12px] lg:text-[16px] 2xl:text-[18px]">
                {product.notes[key].title}: {product.notes[key].values}
              </p>
              <p className=" text-[10px] lg:text-[14px] 2xl:text-[16px] text-[#282828]/80">
                {product.notes[key].description}
              </p>
            </div>
          </div>
        ))}
      </div>

                     
                     
                      </div>
                      
                 {/* Close Button */}      
        </div>
<div className="flex justify-end">
  <button
    onClick={handleClose}
    className=" text-[14px] lg:text-[16px] text-black cursor-pointer underline"
  >
    Go Back
  </button>
</div>
</div>


        </div>
    );
};

export default QuickView;