import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { blogs } from "../data/blogs";

const Blogs = () => {
  const navigate = useNavigate();

  return (
    <div className="mx-auto px-[16px] 2xl:px-[32px] pb-[16px] 2xl:pb-[32px]">
      {/* HEADER */}
      <div className="hidden lg:flex justify-between mb-[16px] 2xl:mb-[32px]">
        <div className="flex items-center gap-[32px]">
          <p className="text-[35px] 2xl:text-[50px] font-semibold text-[#282828]">
            The Sanrayn Blogs
          </p>

          <Link
            to="/productList"
            className="text-white font-semibold px-[32px] py-[12px] rounded-full cursor-pointer transition-all duration-300 ease-out
    bg-[#BA9948] hover:bg-white backdrop-blur-md border border-[#BA9948] hover:text-[#1D0B01] text-[14px] lg:text-[16px] 2xl:text-[20px]"
          >
            Read All
          </Link>
        </div>

        {/* DESKTOP ARROWS */}
        <div className="flex gap-5">
          <button className="blog-prev w-[55px] h-[55px] rounded-full bg-[#F5F1EA] flex items-center justify-center cursor-pointer">
            <GoChevronLeft className="text-[35px]" />
          </button>
          <button className="blog-next w-[55px] h-[55px] rounded-full bg-[#F5F1EA] flex items-center justify-center cursor-pointer">
            <GoChevronRight className="text-[35px]" />
          </button>
        </div>

      </div>
      <div className="flex lg:hidden items-center justify-between pb-[16px]">
          <p className="text-[25px] 2xl:text-[50px] font-semibold text-[#282828]">
            The Sanrayn Blogs
          </p>

          <Link
            to="/productList"
            className="bg-[#BA9948] text-white font-semibold px-[32px] py-[12px] rounded-full cursor-pointer text-[14px]
            "
          >
            Read All
          </Link>
        </div>

      {/* SWIPER */}
  <Swiper
  modules={[Navigation]}
  navigation={{
    prevEl: ".blog-prev",
    nextEl: ".blog-next",
  }}
  breakpoints={{
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1536: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  }}
>

        {blogs.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div
              onClick={() => navigate(`/blogs/${item.slug}`)}
              className="relative rounded-[24px] lg:rounded-[32px] 2xl:rounded-[48px] overflow-hidden h-[350px] lg:h-[500px] 2xl:h-[700px] cursor-pointer"
            >
              <img
                src={item.product}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute left-[16px] bottom-[16px] right-[16px] 2xl:bottom-[32px] 2xl:left-[32px] 2xl:right-[32px] text-white text-[25px] md:text-[30px] 2xl:text-[40px] font-medium">
                {item.title}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* MOBILE ARROWS */}
      <div className="flex lg:hidden justify-center gap-5 mt-[16px]">
        <button className="blog-prev w-[40px] h-[40px] bg-[#F5F1EA] rounded-full flex items-center justify-center">
          <GoChevronLeft className="text-[28px]" />
        </button>
        <button className="blog-next w-[40px] h-[40px] bg-[#F5F1EA] rounded-full flex items-center justify-center">
          <GoChevronRight className="text-[28px]" />
        </button>
      </div>
    </div>
  );
};

export default Blogs;
