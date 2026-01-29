import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { products } from "../data/productsData";

const BestSelling = () => {
  const [current, setCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const navigate = useNavigate();

  // Adjust number of items per view based on screen width
  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth >= 1280) setItemsPerView(3); // xl
      else if (window.innerWidth >= 1024) setItemsPerView(2); // lg
      else setItemsPerView(1); // mobile
    };

    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const maxIndex = products.length - itemsPerView;

  const next = () => setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));

  return (
    <div className="mx-auto px-[8px] 2xl:px-[16px] pb-[16px] 2xl:pb-[32px]">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-[16px] 2xl:mb-[32px] px-[16px] 2xl:px-[32px]">
        <div className="flex items-center gap-[20px] md:gap-[32px]">
          <p
            className="text-[20px] lg:text-[35px] 2xl:text-[50px] font-semibold text-[#282828]"
            style={{ letterSpacing: "-1px" }}
          >
            Best Selling Perfumes
          </p>
          <button className="bg-[#BA9948] text-white font-semibold px-[24px] py-[8px] 2xl:px-[32px] 2xl:py-[12px] rounded-full text-[14px] 2xl:text-[20px] cursor-pointer w-[117px] h-[40px] md:w-[139px] md:h-[55px]">
            <Link to="/productList">View All</Link>
          </button>
        </div>

        {/* Arrows for large screens */}
        <div className="hidden lg:flex gap-5">
          <button
            onClick={prev}
            className="w-[55px] h-[55px] rounded-full bg-[#F5F1EA] shadow flex items-center justify-center cursor-pointer"
          >
            <GoChevronLeft className="text-[35px]" />
          </button>
          <button
            onClick={next}
            className="w-[55px] h-[55px] rounded-full bg-[#F5F1EA] shadow flex items-center justify-center cursor-pointer"
          >
            <GoChevronRight className="text-[35px]" />
          </button>
        </div>
      </div>

      {/* CAROUSEL */}
      <section className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
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
                className="relative rounded-[24px] md:rounded-[48px] overflow-hidden bg-[#EDE8E0] h-[344px] md:h-[700px] cursor-pointer"
                onClick={() => navigate(`/productList/${item.slug}`)}
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="absolute inset-0 object-cover mx-auto h-[220px] md:h-[501px]"
                />

                <div className="absolute bottom-0 left-0 w-full z-20 p-[16px] md:p-[40px]">
                  <div className="flex items-center gap-2 text-[#FF9100]">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="h-[12px] md:h-[15px]" />
                    ))}
                    <span className="text-[#0D0C09] text-[12px] md:text-[14px]">
                      1239
                    </span>
                  </div>

                  <h3 className="text-[20px] md:text-[35px] font-semibold text-[#571313]">
                    {item.title}
                  </h3>

                  <p className="text-[12px] md:text-[18px] text-[#0D0C09] mb-[12px] md:mb-[26px]">
                    Sanrayn Original
                  </p>

                  <div className="flex items-center justify-between gap-3">
                    <button className="bg-white px-[16px] md:px-[24px] py-[6px] md:py-[10px] rounded-full font-semibold hover:bg-[#DBAB35] cursor-pointer 2xl:h-[45px] 2xl:w-[167px]">
                      Add to Cart
                    </button>

                    <div className="flex gap-[12px] md:gap-[20px]">
                      <div>
                        <button className="text-[#FC2525] text-[16px] bg-[#FFFFFF80]/50 py-[10px] px-[20px] rounded-[100px] line-through">
                          ${item.oldPrice}
                        </button>
                      </div>
                      <div className="relative w-[105px] h-[45px]">
                        <div className="absolute -top-[10px] left-1/2 -translate-x-1/2 bg-[#1D0B01] text-white text-[8px] font-bold z-10 h-[14px] w-[44px] flex items-center justify-center">
                          -{Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100)}% Off
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" width="105" height="45" viewBox="0 0 105 45" fill="none">
                          <path
                            d="M95 11V0H10V11C4.47715 11 0 15.4772 0 21V24C0 29.5228 4.47715 34 10 34V45H95V34C100.523 34 105 29.5228 105 24V21C105 15.4772 100.523 11 95 11Z"
                            fill="#BA9948"
                          />
                          <text
                            x="52.5"
                            y="30"
                            textAnchor="middle"
                            fontSize="16"
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
    </div>
  );
};

export default BestSelling;
