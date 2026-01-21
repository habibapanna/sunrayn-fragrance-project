import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LiaAngleDownSolid } from "react-icons/lia";
import Logo from "../../assets/Logo.png";
import Logo2 from "../../assets/Logo (2).png";
import Solar from "../../assets/solar_tag-bold.png";
import Icon from "../../assets/Icon (Stroke).png";
import Cart from "../../assets/Frame (1).png";
import Users from "../../assets/User Icon.png";
import User1 from "../../assets/User Icon (1).png";
import BrandName from "../../assets/Brand Name.png";
import BrandName2 from "../../assets/Brand Name (1).png";
import { Link } from "react-router-dom";
import { TbMenu } from "react-icons/tb";
import { GoChevronRight } from "react-icons/go";
import SearchOverlay from "../../components/SearchOverlay";
import CartOverlay from "../../components/CartOverlay";


const Navbar = () => {
const [open, setOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);
const [searchOpen, setSearchOpen] = useState(false);
const [cartOpen, setCartOpen] = useState(false);



useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <>
      <nav
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
    ${
      scrolled
        ? "bg-white backdrop-blur-sm"
        : "bg-transparent"
    }
  `}
>

        <div className="mx-auto px-[16px] md:px-[32px] md:py-[24px] flex items-center justify-between text-white">

{/* LOGO */}
<Link
  to="/"
  className="flex items-center gap-[7px] md:gap-[12px] cursor-pointer transition-all duration-300"
>
  <img
    src={scrolled ? Logo2 : Logo}
    alt="Brand Logo"
    className="h-[35px] w-[35px] md:h-[58px] md:w-[58px] transition-all duration-300"
  />

  <img
    src={scrolled ? BrandName2 : BrandName}
    alt="Brand Name"
    className="h-[17px] w-[104px] md:h-[27px] md:w-[170px] transition-all duration-300"
  />
</Link>


          {/* RIGHT SIDE */}
          <div className="flex items-center gap-[24px]">

            {/* DESKTOP MENU (UNCHANGED) */}
            <div className="hidden lg:flex items-center gap-[24px] bg-white/90 text-[#282828] pr-[9px] pl-[24px] py-[12px] rounded-[100px] mr-16 w-[426px] h-[50px]">
              <button className="flex items-center gap-[4px] text-[16px]">
                Perfumes
                <LiaAngleDownSolid className="text-[24px]" />
              </button>

              <button className="flex items-center gap-[4px] text-[16px]">
                Collections
                <LiaAngleDownSolid className="text-[24px]" />
              </button>

              <span className="bg-[#FD4929] text-white text-[16px] px-[12px] py-[7px] rounded-[100px] font-semibold flex items-center gap-[6px] w-[139px] h-[34px]">
                <img src={Solar} className="h-[17px] w-[17px]" />
                Holiday Sale
              </span>
            </div>

            {/* DESKTOP ICONS (UNCHANGED) */}
            <div className="hidden md:flex items-center gap-[16px]">
              <button
  onClick={() => setSearchOpen(true)}
  className="bg-white/90 p-[15px] rounded-full h-[50px] w-[50px] cursor-pointer"
>
  <img src={Icon} className="h-[20px] w-[20px]" title="Search" />
</button>

              <button
  onClick={() => setCartOpen(true)}
  className="bg-white/90 p-[15px] rounded-full h-[50px] w-[50px] cursor-pointer" title="View Cart"
>
  <img src={Cart} className="h-[20px] w-[20px]" />
</button>


              <button className="bg-white/90 p-[15px] rounded-full h-[50px] w-[50px] cursor-pointer">
                <img src={Users} className="h-[20px] w-[20px]" />
              </button>
            </div>

            {/* MOBILE ICONS */}
            <div className="flex md:hidden items-center gap-[16px] py-[24px]">
              <button
  onClick={() => setSearchOpen(true)}
  className="bg-white/90 p-[10px] rounded-full"
>
  <img src={Icon} className="h-[20px] w-[20px] cursor-pointer" />
</button>
              <button
  onClick={() => setCartOpen(true)}
  className="bg-white/90 p-[10px] rounded-full"
>
  <img src={Cart} className="h-[20px] w-[20px] cursor-pointer" />
</button>

              <button
                onClick={() => setOpen(true)}
                className="bg-[#6B0F0F] w-[40px] h-[40px] p-[8px] rounded-full"
              >
                <TbMenu className="text-white h-[24px] w-[24px] cursor-pointer" />
              </button>
            </div>

          </div>
        </div>
          <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      </nav>
{cartOpen && (
  <>
    {/* Blur background */}
    <div
      onClick={() => setCartOpen(false)}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
    />

    {/* Cart UI */}
    <CartOverlay onClose={() => setCartOpen(false)} />
  </>
)}



      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* MOBILE SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 h-full w-[100%] bg-[#F6F7F2] z-50
        transform transition-transform duration-500 md:hidden
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
       <div className="relative flex items-center justify-between px-[20px] py-[16px]">
  <div className="flex justify-center items-center gap-[12px]">
    <button className="bg-white/90 p-[15px] rounded-full h-[50px] w-[50px]">
      <img src={User1} className="h-[20px] w-[20px]" />
    </button>
    <span className="font-bold text-[#282828] text-[16px]">Login</span>
  </div>

  <button onClick={() => setOpen(false)}>
    <X className="h-[40px] w-[40px] text-[#1D0B01] cursor-pointer" />
  </button>

  {/* Figma-style header divider */}
  <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#571313]/20" />
</div>


        <div className="p-5 space-y-6">
          <div className="bg-white rounded-[24px] overflow-hidden">
  {["Man", "Woman", "Unisex"].map((i, idx, arr) => (
    <div
      key={i}
      className="relative flex justify-between items-center py-[16px] px-[24px] text-[14px]"
    >
      {i}
      <GoChevronRight className="text-[35px]" />

      {/* Figma-style divider */}
      {idx !== arr.length - 1 && (
        <span className="absolute bottom-0 left-[24px] right-[24px] h-[1px] bg-[#571313]/20" />
      )}
    </div>
  ))}
</div>


        <div className="bg-white rounded-[24px] overflow-hidden">
  {["New Arrivals", "Best selling perfumes", "Featured perfumes"].map(
    (i, idx, arr) => (
      <div
        key={i}
        className="relative flex justify-between items-center py-[16px] px-[24px] text-[14px]"
      >
        {i}
        <GoChevronRight className="text-[35px]" />

        {idx !== arr.length - 1 && (
          <span className="absolute bottom-0 left-[24px] right-[24px] h-[1px] bg-[#571313]/20" />
        )}
      </div>
    )
  )}
</div>


           <button className="bg-[#FD4929] text-white text-[16px] px-[12px] py-[7px] rounded-[100px] font-semibold flex items-center text-center gap-[6px] h-[45px] mx-auto w-full cursor-pointer justify-center">
                <img src={Solar} className="h-[17px] w-[17px]" />
                Holiday Sale
              </button>
        </div>
      </aside>
    </>
  );
};

export default Navbar;


