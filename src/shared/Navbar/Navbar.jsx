import { useEffect, useRef, useState } from "react";
import { LiaAngleDownSolid } from "react-icons/lia";
import Logo from "../../assets/Logo (4).svg";
import BrandName from "../../assets/Brand Name (2).svg";
import { Link } from "react-router-dom";
import { TbMenu } from "react-icons/tb";
import SearchOverlay from "../../components/SearchOverlay";
import CartOverlay from "../../components/CartOverlay";
import SignInUp from "../../Page/SignInUp";
import { useNavigate, useLocation } from "react-router-dom";
import Solar from '../../assets/Vector (4).svg';
import User from '../../assets/User Icon (1).svg';
import Cart from '../../assets/Frame (7).svg';
import Search from '../../assets/Search Icon.svg';
import User2 from '../../assets/First Name.svg';
import User3 from '../../assets/Frame (8).svg';
import User4 from '../../assets/Frame (9).svg';
import User5 from '../../assets/Frame (10).svg';
import MenuOverlay from "../../components/MenuOverlay";
import ForgotPassword from "../../components/ForgotPassword";

const Navbar = ({ showTopBar, cartOpen, setCartOpen }) => {
const [open, setOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);
const [searchOpen, setSearchOpen] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);
const [signInUpOpen, setSignInUpOpen] = useState(false);
 const [showForgot, setShowForgot] = useState(false);
const [openMegaMenu, setOpenMegaMenu] = useState(null);
const [accountOpen, setAccountOpen] = useState(false);
const [selectedItem, setSelectedItem] = useState(null);
const location = useLocation();

// adjust this path to match your ProductList route
const isHome = location.pathname === "/";
const isProductList = location.pathname === "/productList";
const isContact = location.pathname === "/contact";
const isFaq = location.pathname === "/faq";
const isAbout = location.pathname === "/about";
const isTerms = location.pathname === "/terms";
const isBlogPage = location.pathname === "/blogs";
const isHolidayOffer = location.pathname === "/holidayOffer";
const isBlogDetails = location.pathname.startsWith("/blogs/");
const isProductDetails = location.pathname.startsWith("/productList/");
const perfumeRef = useRef(null);
const collectionRef = useRef(null);
const aboutRef = useRef(null);
const accountRef = useRef(null);
const navigate = useNavigate();

const handleLogoClick = (e) => {
  e.preventDefault();

  if (location.pathname === "/") {
    // Already on home → scroll to top + reload
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Small delay so scroll feels natural
    setTimeout(() => {
      window.location.reload();
    }, 300);
  } else {
    // From another page → go home
    navigate("/");
  }
};
// for dropdowns
useEffect(() => {
  const handleClickOutside = (e) => {
    if (
      perfumeRef.current &&
      !perfumeRef.current.contains(e.target)
    ) {
      if (openMegaMenu === "perfume") setOpenMegaMenu(null);
    }

    if (
      collectionRef.current &&
      !collectionRef.current.contains(e.target)
    ) {
      if (openMegaMenu === "collection") setOpenMegaMenu(null);
    }

    if (
      aboutRef.current &&
      !aboutRef.current.contains(e.target)
    ) {
      if (openMegaMenu === "about") setOpenMegaMenu(null);
    }

    if (
      accountRef.current &&
      !accountRef.current.contains(e.target)
    ) {
      setAccountOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () =>
    document.removeEventListener("mousedown", handleClickOutside);
}, [openMegaMenu]);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const logoSrc = isProductList || isContact || isFaq || isAbout || isTerms || isBlogPage || isBlogDetails || isProductDetails || isHolidayOffer
  ? Logo
  : scrolled
  ? Logo
  : Logo;

const brandSrc = isProductList || isContact || isFaq || isAbout || isTerms || isBlogPage || isBlogDetails || isProductDetails || isHolidayOffer
  ? BrandName
  : scrolled
  ? BrandName
  : BrandName;




const MobileGrid = ({ items }) => (
  <div className="grid grid-cols-1 gap-3 bg-[#F6F7F2] p-3 rounded-[8px] mt-3 ">
    {items.map((item) => (
      <button
        key={item}
        onClick={() => setSelectedItem(item)}
        className={`py-[8px] rounded-[4px] text-[14px] font-medium transition
          ${
            selectedItem === item
              ? "bg-white text-left px-2"
              : "bg-transparent text-left px-[12px] hover:bg-white"
          }`}
      >
        {item}
      </button>
    ))}
  </div>
);

// Determine the navbar padding based on page and scroll
const navPaddingClass = (() => {
  if (isHome) {
    // On home page: no padding initially, add px-[32px] when scrolled
    return scrolled ? "px-0" : "px-0";
  } else {
    // On other pages: always have mx-[16px] or mx-[32px] for 2xl screens
    return "mx-[16px] 2xl:mx-[32px]";
  }
})();

// Determine navbar background (unchanged)
const navBgClass = isProductList || isContact || isFaq || isAbout || isTerms || isBlogPage || isBlogDetails || isProductDetails || isHolidayOffer
  ? "bg-[#FFFFFF66] border-[2px] border-[#FFFFFF1A] backdrop-blur-sm rounded-full md:mt-[2px]  lg:mt-[12px]"
  : scrolled
  ? "bg-[#FFFFFF66] border-[2px] border-[#FFFFFF1A] backdrop-blur-sm rounded-full mt-[8px] 2xl:mt-[10px] mx-[32px] 2xl:mx-[350px]"
  : "bg-transparent border-transparent";

// Determine top position
const navTopClass = isHome ? "top-0" : "top-[44px]";

  return (
    <>
<nav
  className={`fixed z-50 transition-all duration-300
    ${navTopClass}
    ${navBgClass}
    ${navPaddingClass} left-0 right-0`}
>
        <div className="mx-auto px-[16px] 2xl:px-[32px] py-[8px] md:py-[14px] flex items-center justify-between text-white ">

{/* left LOGO */}
<a
  href="/"
  onClick={handleLogoClick}
  className="flex items-center md:gap-[7px] lg:gap-[12px] cursor-pointer transition-all duration-300"
>

 <img
  src={logoSrc}
  alt="Brand Logo"
  className="h-[32px] w-[32px] lg:h-[58px] lg:w-[58px] transition-all duration-300"
/>


 <img
  src={brandSrc}
  alt="Brand Name"
  className="h-[16px] w-[110px] lg:h-[27px] lg:w-[170px] transition-all duration-300"
/>

</a>

            {/* DESKTOP middle MENU  */}
            <div className="hidden md:flex items-center gap-[12px] bg-white/90 text-[#282828] pr-[5px] 2xl:pr-[9px] pl-[24px] py-[10px] lg:py-[12px] rounded-[100px] 2xl:mr-16 lg:w-[475px] h-[30px] lg:h-[40px] 2xl:w-[550px] 2xl:h-[50px] 2xl:ml-[64px]">

            {/* Perfume */}
               <div className="relative" ref={perfumeRef}>
 <div
        onMouseEnter={() => setOpenMegaMenu("perfume")}
        className="relative"
      >
<button
          onClick={() =>
            setOpenMegaMenu(
              openMegaMenu === "perfume" ? null : "perfume"
            )
          }
          className="flex items-center gap-[4px] 2xl:gap-[5px] text-[10px] lg:text-[12px] 2xl:text-[15px] cursor-pointer uppercase hover:text-[#A0174A]"
        >
          Perfumes
          <LiaAngleDownSolid
            className={`h-[12px] w-[12px] lg:h-[18px] lg:w-[18px] transition-transform duration-500 ${
              openMegaMenu === "perfume" ? "rotate-180" : ""
            }`}
          />
        </button>

  {/* PERFUME MEGA MENU */}
  {openMegaMenu === "perfume" && (
          <div
            onMouseEnter={() => setOpenMegaMenu("perfume")}
            onMouseLeave={() => setOpenMegaMenu(null)}
          >
         <div className="absolute top-full mt-[20px] -right-60 z-50">

      <div className="bg-white rounded-[16px] shadow-xl px-[30px] py-[20px] lg:px-[40px] lg:py-[32px] flex gap-[40px] lg:gap-[74px]">

        {/* ARROW TIP */}
        <span className="absolute md:right-[240px] -top-[10px] lg:right-[300px] w-5 h-5 bg-white rotate-45" />

        {/* COLUMN 1 */}
        <div>
          <h4 className="font-bold text-[14px] lg:text-[16px] text-[#A0174A] mb-[12px] whitespace-nowrap">
            Perfume Style
          </h4>
          <ul className="space-y-[12px] text-[14px] lg:text-[16px] text-[#1D0B01]">
            <li className="hover:text-[#A0174A]"><Link to='/productList'>Men</Link></li>
            <li className="hover:text-[#A0174A]"><Link to='/productList'>Women</Link></li>
           <li className="hover:text-[#A0174A]"><Link to='/productList'>Unisex</Link></li>
          </ul>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h4 className="font-bold text-[14px] lg:text-[16px] text-[#A0174A] mb-[12px] whitespace-nowrap">
            Perfume Family
          </h4>
          <ul className="space-y-[12px] text-[14px] lg:text-[16px] text-[#1D0B01]  cursor-pointer">
            <li className="hover:text-[#A0174A]"><Link to='/productList'>Flowery</Link></li>
            <li className="hover:text-[#A0174A]"><Link to='/productList'>Warm</Link></li>
            <li className="hover:text-[#A0174A]"><Link to='/productList'>Gourmand</Link></li>
            <li className="hover:text-[#A0174A]"><Link to='/productList'>Fresh</Link></li>
            <li className="hover:text-[#A0174A]"><Link to='/productList'>Earthy</Link></li>
            <li className="hover:text-[#A0174A]"><Link to='/productList'>Herbal</Link></li>
          </ul>
        </div>

        {/* RIGHT PRODUCT CARD */}
        <div className="">
          <div className="bg-[#FBF7F2] rounded-[24px] p-4 w-[160px] lg:w-[220px] text-center">
            <img
              src="https://i.postimg.cc/JnBwP30d/Product-Card.png"
              className="rounded-xl mx-auto mb-4"
            />
          </div> <p className="text-[16px] text-center text-[#A0174A] font-medium cursor-pointer">
              <Link to='productList'>View All Perfume</Link>
            </p>
        </div>

      </div>
    </div>
    </div>
  )}
</div>
</div>

{/* Collection */}
<div className="relative" ref={collectionRef}>
<div
        onMouseEnter={() => setOpenMegaMenu("collection")}
        className="relative"
      >
        <button
          onClick={() =>
            setOpenMegaMenu(
              openMegaMenu === "collection" ? null : "collection"
            )
          }
          className="flex items-center gap-[4px] 2xl:gap-[5px] text-[10px] lg:text-[12px] 2xl:text-[15px] cursor-pointer uppercase hover:text-[#A0174A]"
        >
    Collections
    <LiaAngleDownSolid
            className={`h-[12px] w-[12px] lg:h-[18px] lg:w-[18px] transition-transform duration-500 ${
              openMegaMenu === "collection" ? "rotate-180" : ""
            }`}
          />
        </button>

  {/* COLLECTION MEGA MENU */}
   {openMegaMenu === "collection" && (
          <div
            onMouseEnter={() => setOpenMegaMenu("collection")}
            onMouseLeave={() => setOpenMegaMenu(null)}
          >
        {/* MEGA MENU */}
   <div className="absolute top-full mt-[20px] -right-60 z-50">

      <div className="relative bg-white rounded-[16px] shadow-xl px-[30px] py-[20px] lg:px-[40px] lg:py-[32px] flex gap-[40px] lg:gap-[74px]">

        {/* ARROW TIP */}
        <span className="absolute -top-[10px] right-[250px] lg:right-[300px] w-5 h-5 bg-white rotate-45" />

        {/* COLUMN 1 */}
        <div>
          <h4 className="font-bold text-[14px] lg:text-[16px] text-[#A0174A] mb-[12px] whitespace-nowrap">
            Perfume Type
          </h4>
          <ul className="space-y-[12px] text-[14px] lg:text-[16px] text-[#1D0B01]">
            <li className="hover:text-[#A0174A]"><Link to='/productList'>All Perumes</Link></li>
            <li className="hover:text-[#A0174A]"><Link to='/productList'>New Arrivals</Link></li>
            <li className="hover:text-[#A0174A]"><Link to='/productList'>Combo Sales</Link></li>
            <li className="hover:text-[#A0174A] whitespace-nowrap"><Link to='/productList'>Limited Editions</Link></li>
          </ul>
        </div>
        {/* COLUMN 2 */}
        <div>
          <h4 className="font-bold text-[14px] lg:text-[16px] text-[#A0174A] mb-[12px] whitespace-nowrap">
            Shop by Theme
          </h4>
          <ul className="space-y-[12px] text-[14px] lg:text-[16px] text-[#1D0B01]">
            <li className="hover:text-[#A0174A]"><Link to='/productList'>Best Offers</Link></li>
            <li className="hover:text-[#A0174A] whitespace-nowrap"><Link to='/productList'>Event Perfumes</Link></li>
            <li className="hover:text-[#A0174A]"><Link to='/productList'>Best Sellers</Link></li>
          </ul>
        </div>

        {/* RIGHT PRODUCT CARD */}
        <div className="">
          <div className="bg-[#FBF7F2] rounded-[24px] p-4 w-[160px] lg:w-[220px] text-center">
            <img
              src="https://i.postimg.cc/JnBwP30d/Product-Card.png"
              className="rounded-xl mx-auto mb-4"
            />
          </div> <p className="text-[14px] lg:text-[16px] text-center text-[#A0174A] font-medium cursor-pointer">
              <Link to='productList'>View All Perfume</Link>
            </p>
        </div>
      </div>
    </div>
    </div>
  )}
</div>
</div>

{/* About */}
<div className="relative" ref={aboutRef}>
  <div
    onMouseEnter={() => setOpenMegaMenu("about")}
    className="relative"
  >
    <button
      onClick={() =>
        setOpenMegaMenu(
          openMegaMenu === "about" ? null : "about"
        )
      }
      className="flex items-center gap-[4px] 2xl:gap-[5px] text-[10px] lg:text-[12px] 2xl:text-[15px] cursor-pointer uppercase hover:text-[#A0174A] transition-colors duration-300"
    >
      About
      <LiaAngleDownSolid
        className={`h-[12px] w-[12px] lg:h-[18px] lg:w-[18px] transition-transform duration-500 ${
          openMegaMenu === "about" ? "rotate-180" : ""
        }`}
      />
    </button>

    {/* ABOUT DROPDOWN */}
    {openMegaMenu === "about" && (
      <div
        onMouseEnter={() => setOpenMegaMenu("about")}
        onMouseLeave={() => setOpenMegaMenu(null)}
      >
      <div className="absolute top-full mt-[20px] -right-60 z-50">

      <div className="relative bg-white rounded-[16px] shadow-xl px-[30px] py-[20px] lg:px-[40px] lg:py-[32px] flex gap-[40px] lg:gap-[74px]">

        {/* ARROW TIP */}
        <span className="absolute -top-[10px] right-[250px] lg:right-[300px] w-5 h-5 bg-white rotate-45" />

        {/* COLUMN 1 */}
        <div>
           <h4 className="font-bold text-[14px] lg:text-[16px] text-[#A0174A] mb-[12px] whitespace-nowrap">
            About SANRAYN
          </h4>
          <ul className="space-y-[12px] text-[14px] lg:text-[16px] text-[#1D0B01]">
            <li className="cursor-pointer hover:text-[#A0174A]"><Link to='/about'>About Us</Link></li>
            <li className="cursor-pointer hover:text-[#A0174A]"><Link to='/faq'>FAQ</Link></li>
             <li className="cursor-pointer hover:text-[#A0174A]"><Link to='/contact'>Contact Us</Link></li>
          </ul>
        </div>

        {/* RIGHT PRODUCT CARD */}
        <div className="">
          <div className="bg-[#FBF7F2] rounded-[24px] p-4 w-[160px] lg:w-[220px] text-center">
            <img
              src="https://i.postimg.cc/JnBwP30d/Product-Card.png"
              className="rounded-xl mx-auto mb-4"
            />
          </div> <p className="text-[14px] lg:text-[16px] text-center text-[#1D0B01] font-medium cursor-pointer">
              <Link to='productList'>View All Perfume</Link>
            </p>
        </div>
      </div>
    </div>
      </div>
    )}
  </div>
</div>

             <Link to='holidayOffer'> <span className="bg-[#FD4929] text-white gap-[4px] 2xl:gap-[5px] text-[10px] lg:text-[12px] 2xl:text-[15px] px-[14px] lg:px-[20px] py-[8px] rounded-[100px] font-semibold flex items-center justify-center w-[110px] lg:w-[150px] h-[20px] lg:h-[30px] 2xl:w-[170px] 2xl:h-[35px] uppercase">
                <img className="h-[10px] w-[10px] lg:h-[16px] lg:w-[16px]" src={Solar} alt="" />
                Holiday Sale
              </span></Link>
            </div>
          {/* RIGHT SIDE */}
          <div className="flex items-center gap-[10px]">
            {/* DESKTOP ICONS (UNCHANGED) */}
            <div className="flex items-center gap-[10px] md:gap-[16px] ">
              <button
               title="Search Perfumes"
  onClick={() => setSearchOpen(true)}
  className={`
  lg:p-[10px] md:p-[8px] md:h-[30px] md:w-[30px] lg:h-[40px] lg:w-[40px] 2xl:p-[15px] rounded-full 2xl:h-[50px] 2xl:w-[50px]
  transition-colors duration-300 cursor-pointer flex items-center justify-center  p-[8px] h-[28px] w-[28px]
  ${scrolled ? "bg-white/90" : "bg-white/90"}
`}

>
<img src={Search} alt="" className="w-[20px] h-[20px]" />

</button>

              <button
  onClick={() => setCartOpen(true)}
  className={`
 lg:p-[10px] md:p-[8px] md:h-[30px] md:w-[30px] lg:h-[40px] lg:w-[40px] 2xl:p-[15px] rounded-full 2xl:h-[50px] 2xl:w-[50px]
  transition-colors duration-300 cursor-pointer flex items-center justify-center  p-[8px] h-[28px] w-[28px]
  ${scrolled ? "bg-white/90" : "bg-white/90"}
`}
 title="View Cart"
>
<img src={Cart} alt="" className="w-[20px] h-[20px]" />
</button>
{/* Login */}
<div className="relative" ref={accountRef}>
  <button
    title="Account"
    onClick={() => setAccountOpen(!accountOpen)}
    className="
      lg:p-[10px] md:p-[8px] md:h-[30px] md:w-[30px] 
      lg:h-[40px] lg:w-[40px] 2xl:p-[15px] 
      rounded-full 2xl:h-[50px] 2xl:w-[50px]
      bg-white/90 flex items-center justify-center cursor-pointer  p-[8px] h-[28px] w-[28px]
    "
  >
  <img src={User} alt="" className="w-[20px] h-[20px]" />
  </button>

  {/* ACCOUNT DROPDOWN */}
  {accountOpen && (
  <div className="absolute md:-right-4 mt-3 w-[170px] -right-12  bg-white rounded-[16px] shadow-xl p-2 z-[80]">
      
      {/* Triangle */}
      <div className="absolute -top-2 md:right-8 w-5 h-5 right-13 bg-white rotate-45"></div>

      {/* My Account */}
      <button
        onClick={() => {
          setAccountOpen(false);
          setSignInUpOpen(true);
        }}
        className="w-full flex items-center gap-3 px-4 py-3 text-[14px] text-[#1D0B01] hover:bg-[#F6F7F2] transition-all duration-500 cursor-pointer rounded-[16px] mt-2"
      >
        <img src={User2} alt="" /> My Account
      </button>

      {/* My Orders */}
      <button
        className="w-full flex items-center gap-3 px-4 py-3 text-[14px] text-[#1D0B01] hover:bg-[#F6F7F2] transition-all duration-500 cursor-pointer rounded-[16px]"
      >
       <img src={User3} alt="" /> My Orders
      </button>

      {/* Help Centre */}
      <button
        className="w-full flex items-center gap-3 px-4 py-3 text-[14px] text-[#1D0B01] hover:bg-[#F6F7F2] transition-all duration-500 cursor-pointer rounded-[16px]"
      >
       <img src={User4} alt="" /> Help Centre
      </button>

      {/* Log Out */}
      <button
        className="w-full flex items-center gap-3 px-4 py-3 text-[14px] text-[#1D0B01] hover:bg-[#F6F7F2] transition-all duration-500 cursor-pointer rounded-[16px] mb-2"
      >
       <img src={User5} alt="" /> Log Out
      </button>
    </div>
  )}
</div>
            </div>

            {/* MOBILE ICONS */}
            <div className="flex md:hidden items-center gap-[12px] py-[10px]">
             <button
  title="Open Menu"
  onClick={() => setMenuOpen(true)}
  className="bg-white/90 p-[8px] h-[28px] w-[28px] md:h-[30px] md:w-[30px] rounded-full flex items-center cursor-pointer"
>
  <TbMenu className="text-[#1D0B01] h-[24px] w-[24px]" />
</button>

            </div>
          </div>
        </div>
      </nav>
{menuOpen && (
  <>
    {/* BLUR LAYER (same as cart) */}
    <div
      onClick={() => setMenuOpen(false)}
      className="fixed inset-0 bg-black/30 z-[60]"
    />

    {/* SEARCH UI */}
    <MenuOverlay
      open={menuOpen}
      onClose={() => setMenuOpen(false)}
       onOpenSignIn={() => {
    setSearchOpen(false);     // close search
    setSignInUpOpen(true);    // open login
  }}
    />
  </>
)}
{searchOpen && (
  <>
    {/* BLUR LAYER (same as cart) */}
    <div
      onClick={() => setSearchOpen(false)}
      className="fixed inset-0 bg-black/30 z-[60]"
    />

    {/* SEARCH UI */}
    <SearchOverlay
      open={searchOpen}
      onClose={() => setSearchOpen(false)}
       onOpenSignIn={() => {
    setSearchOpen(false);     // close search
    setSignInUpOpen(true);    // open login
  }}
    />
  </>
)}
{cartOpen && (
  <>
    {/* Blur background */}
    <div
      onClick={() => setCartOpen(false)}
      className="fixed inset-0 bg-black/40 z-50"
    />

    {/* Cart UI */}
    <CartOverlay onClose={() => setCartOpen(false)} />
  </>
)}
{signInUpOpen && (
  <>
    <div
      onClick={() => setSignInUpOpen(false)}
      className="fixed inset-0 bg-black/20 z-[60]"
    />
    <SignInUp
      onClose={() => setSignInUpOpen(false)}
      openForgot={() => {
        setSignInUpOpen(false); // close login modal
        setShowForgot(true);    // open forgot modal
      }}
    />
  </>
)}
{showForgot && (
  <>
    <div
      onClick={() => setShowForgot(false)}
      className="fixed inset-0 bg-black/40 z-[70]"
    />
    <ForgotPassword onClose={() => setShowForgot(false)} />
  </>
)}
    {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
        />
      )}


    </>
  );
};

export default Navbar;


