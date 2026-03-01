import { FaHeart, FaStar } from "react-icons/fa";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { products } from "../data/productsData";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import QuickView from "./QuickView";
import { LuSearch } from "react-icons/lu";
import { Eye } from "lucide-react";

const ProductCard = () => {
  const navigate = useNavigate();
   const [selectedProduct, setSelectedProduct] = useState(null);
const { cartOpen, setCartOpen, wishlist, setWishlist } = useOutletContext();

  const [current, setCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [showCartToast, setShowCartToast] = useState(false);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  /* ---------- responsive items ---------- */
  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth >= 1536) setItemsPerView(3);
      else if (window.innerWidth >= 768) setItemsPerView(2);
      else setItemsPerView(1);
    };

    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  /* ---------- swipe ---------- */
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

    if (distance > minSwipeDistance) next();
    if (distance < -minSwipeDistance) prev();
  };

const toggleWishlist = (id) => {
  setWishlist((prev) =>
    prev.includes(id)
      ? prev.filter((itemId) => itemId !== id)
      : [...prev, id]
  );
};
  /* ---------- navigation ---------- */
  const maxIndex = products.length - itemsPerView;

  const next = () =>
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));

  const prev = () =>
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));

  /* ---------- cart ---------- */
  const handleAddToCart = () => {
    if (window.innerWidth < 768) {
      setShowCartToast(true);
    } else {
      setCartOpen(true);
    }
  };

  useEffect(() => {
    if (!showCartToast) return;
    const t = setTimeout(() => setShowCartToast(false), 4000);
    return () => clearTimeout(t);
  }, [showCartToast]);

  /* ---------- UI ---------- */
  return (
    <section className="relative overflow-hidden py-[16px] 2xl:py-[32px]">

      {/* header */}
      <div className="flex justify-between items-center mb-[16px] 2xl:mb-[32px]">
        <p className="text-[25px] lg:text-[35px] 2xl:text-[50px] font-semibold text-[#282828]">
          You Might Love
        </p>

        <Link
          to="/productList"
          className="hover:bg-[#DBAB35] bg-white border border-[#DBAB35] text-[#1D0B01] font-semibold px-[24px] py-[8px] rounded-full transition-all duration-500"
        >
          Show More
        </Link>
      </div>

      {/* carousel */}
      <div className="relative">

        <div
          className="flex gap-[16px] 2xl:gap-[32px] transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(current * 100) / itemsPerView}%)`,
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {products.map((item, i) => (
<div
  key={i}
  style={{
    width: `calc(${100 / itemsPerView}% - ${
      itemsPerView === 3 ? "21.33px" : "10.66px"
    })`,
  }}
  className="flex-shrink-0"
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
  className="w-[36px] h-[36px] bg-white rounded-full flex items-center justify-center shadow-md opacity-100 translate-y-2 2xl:group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 cursor-pointer"
>
  <Eye className="w-5 h-5 lg:w-[30px] lg:h-[30px] text-black" />
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
      </div>
          {selectedProduct && (
      <QuickView
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    )}

      {/* toast */}
      {showCartToast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 w-[92%] z-50 md:hidden">
          <div className="flex justify-between bg-black text-white px-4 py-3 rounded-[16px]">
            <div className="flex items-center gap-2 text-sm">
              <span className="bg-white rounded-full w-6 h-6 flex items-center justify-center">
                <IoCheckmarkSharp className="text-black" />
              </span>
              Item added to your cart
            </div>

            <button
              onClick={() => {
                setShowCartToast(false);
                setCartOpen(true);
              }}
              className="bg-[#A0174A] px-5 py-[4px] rounded-[10px] text-[12px]"
            >
              View cart
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductCard;
