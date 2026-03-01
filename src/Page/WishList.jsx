import React from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import { products } from "../data/productsData";
import { FaEye, FaHeart, FaSearch, FaStar } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { useState } from "react";
import QuickView from "../components/QuickView";
import { Eye } from "lucide-react";
import { IoCheckmarkSharp } from "react-icons/io5";


const WishList = () => {
 const { cartOpen, setCartOpen, wishlist, setWishlist } = useOutletContext();
  const [selectedProduct, setSelectedProduct] = useState(null);
   const [showCartToast, setShowCartToast] = useState(false);
  const navigate = useNavigate();

  // Filter products that are in wishlist
  const wishlistedProducts = products.filter((item) =>
    wishlist.includes(item.slug)
  );

  const toggleWishlist = (id) => {
    setWishlist((prev) => prev.filter((itemId) => itemId !== id));
  };

  if (wishlistedProducts.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold">Your Wishlist is Empty 💔</h2>
        <p className="text-gray-500 mt-2">
          Add some beautiful perfumes to your wishlist.
        </p>
      </div>
    );
  }

  const handleAddToCart = () => {
  // add item logic here

  if (window.innerWidth < 768) {
    setShowCartToast(true); // mobile → show popup
  } else {
    setCartOpen(true); // desktop → open overlay
  }
};

  return (
    <>
    <div>
      {/* Header */}
<div className="text-center my-4 lg:my-10 mx-[16px]">
  <h1 className="text-[35px] lg:text-[50px] font-medium text-[#1a1a1a] mb-6 tracking-tight">
    Your Wishlist
  </h1>
  <p className="text-gray-600 text-[18px] lg:text-[20px] max-w-2xl mx-auto leading-relaxed">
    A quiet collection of the fragrances that spoke to your heart. 
    Each piece here is not just a scent, but a feeling you chose to remember.
  </p>
</div>
    </div>
    <div className="px-6 py-12 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
      
      {wishlistedProducts.map((item) => (
        <div
          key={item.slug}
          className="relative bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer group"
          onClick={() => navigate(`/productList/${item.slug}`)}
        >
   {/* card */}
               <div
                className="group relative rounded-[16px]
    h-[384px] lg:h-[700px]
    cursor-pointer overflow-hidden"
                onClick={() => navigate(`/productList/${item.slug}`)}
              >
                {item.off && (
                    <div className="lg:mt-[40px] lg:ml-[40px] ml-[20px] mt-[20px]">
                      <button className="bg-[#FFFF]/60 px-[10px] 2xl:px-[16px] h-[25px] 2xl:h-[35px] rounded-full font-normal text-[12px] lg:text-[14px]">
                        {item.off}
                      </button>
                    </div>
                  )}

                <img
                  src={item.images}
                  alt={item.title}
                  className="absolute inset-0 mx-auto h-full object-cover w-full group-hover:scale-105 duration-1000"
                />
{/* RIGHT SIDE ICONS */}
<div className="absolute top-[20px] right-[20px] z-30 flex flex-col gap-3">

  {/* WISHLIST BUTTON */}
  <button
    onClick={(e) => {
      e.stopPropagation();
      toggleWishlist(item.slug);
    }}
    className="w-[36px] h-[36px] 
               bg-white rounded-full 
               flex items-center justify-center 
               shadow-md transition-all duration-500"
  >
    <FaHeart
      className={`text-[16px] transition-colors duration-500 ${
        wishlist.includes(item.slug)
          ? "text-[#A0174A]"
          : "text-black"
      }`}
    />
  </button>

  {/* QUICK VIEW BUTTON */}
<button
  title="Quick View"
  onClick={(e) => {
    e.stopPropagation();
    setSelectedProduct(item);
  }}
  className="w-[36px] h-[36px] bg-white rounded-full flex items-center justify-center shadow-md opacity-100 2xl:opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 cursor-pointer"
>
   <Eye className="w-4 h-4 lg:w-[25px] lg:h-[25px] text-black" />
</button>

</div>
 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full z-20 p-[20px] lg:p-[40px]">
                  <div className="flex items-center gap-[2px] 2xl:gap-[8px] text-[#DBAB35]">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="h-[12px] lg:h-[15px]" />
                    ))}
                    <span className="text-[#FFF] text-[12px] 2xl:text-[14px] font-normal">
                      1239
                    </span>
                  </div>

                  <h3 className="text-[20px] md:text-[35px] font-normal text-[#FFF]">
                    {item.title}
                  </h3>

                  <p className="text-[12px] 2xl:text-[18px] text-[#FFF] mb-[12px] md:mb-[26px]">
                    Sanrayn Original
                  </p>  
                  <div className="flex items-center justify-between gap-3">
                    <button
                    onClick={(e) => {
    e.stopPropagation(); 
    handleAddToCart(item); 
  }}
  className="
    hover:bg-white backdrop-blur-md
    px-[24px] py-[10px]
    rounded-full font-semibold
    w-[130px] h-[32px]
    lg:h-[45px] lg:w-[167px]
    text-[14px] 2xl:text-[16px]
    flex items-center justify-center
    cursor-pointer bg-[#1D0B01]/50
    hover:text-[#1D0B01]
    transition-all duration-500 ease-out
   text-white border border-white
  "
>
  Add to Cart
</button>

                    <div className="flex gap-[12px] md:gap-[20px]">
                      <div>
                        <button className="text-[#FFF] text-[16px] py-[10px] px-[20px] rounded-[100px] line-through hidden lg:block border border-white">
                          ${item.oldPrice}
                        </button>
                      </div>
                       <div className="relative 2xl:w-[105px] 2xl:h-[45px] text-[22px] h-[33px] w-[68px]"
                      >
                        <div className="absolute -top-[8px] 2xl:-top-[12px] left-1/2 -translate-x-1/2 bg-[#1D0B01] text-[10px] text-white 2xl:text-[14px] z-10 2xl:h-[22px] h-[14px] w-[42px] 2xl:w-[58px] flex items-center justify-center font-medium ">
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
        </div>
      ))}
    </div>
                {/* MOBILE CART POPUP */}
    {showCartToast && (
      <div className="fixed top-20 left-1/2 -translate-x-1/2 w-[92%] z-50 md:hidden">
        <div className="flex items-center justify-between bg-black text-white px-4 py-3 rounded-[16px] shadow-lg mx-[16px]">
    
          <div className="flex items-center gap-2 text-sm font-medium">
            <span className="bg-white rounded-full w-6 h-6 flex items-center justify-center ">
             <IoCheckmarkSharp className="text-black" />
            </span>
            Item added to your cart
          </div>
    
          <button
            onClick={() => {
              setShowCartToast(false);
              setCartOpen(true);
            }}
            className="bg-[#A0174A] text-white px-5 py-[4px] rounded-[10px] text-[12px] font-medium flex items-center justify-center"
          >
            View card
          </button>
    
        </div>
      </div>
    )}
    {selectedProduct && (
      <QuickView
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    )}
  </>
  );
};

export default WishList;