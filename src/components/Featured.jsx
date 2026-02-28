import { useEffect, useState } from 'react';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { FaCheck, FaHeart, FaStar } from 'react-icons/fa';
import Premium from './Premium';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import { products } from '../data/productsData';
import { IoCheckmarkSharp } from 'react-icons/io5';
import QuickView from './QuickView';
import { LuSearch } from 'react-icons/lu';


const Featured = () => {

  const [current, setCurrent] = useState(0);
   const [selectedProduct, setSelectedProduct] = useState(null);
  const [itemsPerView, setItemsPerView] = useState(3);
  const navigate = useNavigate();
  const { cartOpen, setCartOpen, wishlist, setWishlist } = useOutletContext();
        const [showCartToast, setShowCartToast] = useState(false);
        const [touchStart, setTouchStart] = useState(null);
const [touchEnd, setTouchEnd] = useState(null);

const minSwipeDistance = 50;


  // Adjust number of items per view based on screen width
  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth >= 1280) setItemsPerView(3); // xl
      else if (window.innerWidth >= 768) setItemsPerView(2); // lg
      else setItemsPerView(1); // mobile
    };

    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

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

  const isLeftSwipe = distance > minSwipeDistance;
  const isRightSwipe = distance < -minSwipeDistance;

  if (isLeftSwipe) next();
  if (isRightSwipe) prev();
};

const toggleWishlist = (id) => {
  setWishlist((prev) =>
    prev.includes(id)
      ? prev.filter((itemId) => itemId !== id)
      : [...prev, id]
  );
};

  const maxIndex = products.length - itemsPerView;

  const next = () => setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));

const isMobile = window.innerWidth < 768;

const handleAddToCart = () => {
  // add item logic here

  if (window.innerWidth < 768) {
    setShowCartToast(true); // mobile → show popup
  } else {
    setCartOpen(true); // desktop → open overlay
  }
};

useEffect(() => {
  if (!showCartToast) return;
  const t = setTimeout(() => setShowCartToast(false), 4000);
  return () => clearTimeout(t);
}, [showCartToast]);

    return (
        <div className='mx-auto px-[8px] 2xl:px-[16px] pb-[16x] 2xl:pb-[32px]'>
            <div className='hidden lg:flex justify-between mb-[16px] 2xl:mb-[32px] px-[16px] 2xl:px-[32px]'>
            <div className='flex justify-center items-center text-center gap-[20px] 2xl:gap-[32px]'>
                <div>
                    <p className='text-[20px] lg:text-[35px] 2xl:text-[50px] font-semibold text-[#282828'>Featured Perfumes</p>
                </div>
                <div>
                      <button className="transition-all duration-500 ease-out
    hover:bg-[#DBAB35] border border-[#DBAB35]  text-[#1D0B01] font-semibold  2xl:px-[32px] 2xl:py-[12px] rounded-full cursor-pointer lg:w-[139px] lg:h-[50px] text-[14px] lg:text-[16px] 2xl:text-[20px] flex items-center justify-center">
            <Link to="/productList">View All</Link>
          </button>
                </div>
            </div>
            <div className='hidden lg:flex gap-5 '>
                <button className="w-[55px] h-[55px] rounded-full bg-[#F5F1EA] shadow flex items-center justify-center cursor-pointer">
                              <GoChevronLeft  onClick={prev}  className='text-[35px] ' />
                            </button>
                <button className="w-[55px] h-[55px] rounded-full bg-[#F5F1EA] shadow flex items-center justify-center cursor-pointer">
                              <GoChevronRight onClick={next} className='text-[35px]' />
                            </button>
            </div>

            </div>
            <div className='flex lg:hidden justify-between items-center px-[16px] pb-[16px]
            '>
                <div>
                    <p className='text-[25px] lg:text-[35px] 2xl:text-[50px] font-semibold text-[#282828]'>Featured Perfumes</p>
                </div>
                <div>
                    <button className="hover:bg-[#DBAB35] border border-[#DBAB35] text-[#1D0B01] transition-all duration-500 px-[24px] py-[8px] rounded-full text-[14px] cursor-pointer flex items-center w-[100px] h-[30px] "><Link to='/productList'>View All</Link></button>
                </div>
            </div>
{/* CAROUSEL */}
          <section className="relative overflow-hidden mb-[16px] 2xl:mb-[32px]">
        <div
           className="flex transition-transform duration-500 ease-in-out"
  onTouchStart={onTouchStart}
  onTouchMove={onTouchMove}
  onTouchEnd={onTouchEnd}
          style={{
            transform: `translateX(-${(current * 100) / itemsPerView}%)`,
          }}
        >
          {products.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-[8px] 2xl:px-[16px]"
              style={{ width: `${100 / itemsPerView}%` }}
            >
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
                  className="absolute inset-0 mx-auto h-full w-full object-cover group-hover:scale-105 duration-1000"
                />
{/* RIGHT SIDE ICONS */}
<div className="absolute top-[10px] right-[10px] 2xl:top-[20px] 2xl:right-[20px] z-30 flex flex-col 2xl:gap-3">

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
  className="w-[36px] h-[36px] bg-white rounded-full flex items-center justify-center shadow-md opacity-100 translate-y-2 group-hover:opacity-100 2xl:group-hover:translate-y-0 transition-all duration-500 cursor-pointer"
>
  <LuSearch className="text-[16px] text-black" />
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

        {/* ARROWS */}
          <div className="flex lg:hidden justify-center gap-5 mt-[16px]">
            <button
              onClick={prev}
              className="w-[40px] h-[40px] bg-[#F5F1EA] rounded-full flex items-center justify-center"
            >
              <GoChevronLeft className="text-[28px]" />
            </button>
            <button
              onClick={next}
              className="w-[40px] h-[40px] bg-[#F5F1EA] rounded-full flex items-center justify-center"
            >
              <GoChevronRight className="text-[28px]" />
            </button>
          </div>
      </section>
          {selectedProduct && (
      <QuickView
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    )}
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

<section className=' px-[8px] 2xl:px-[16px]'><Premium></Premium></section>

        </div>
    );
};

export default Featured;