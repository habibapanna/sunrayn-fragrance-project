import { useEffect, useRef, useState } from "react";
import { LiaAngleDownSolid } from "react-icons/lia";
import Logo from "../../assets/Logo.svg";
import BrandName from "../../assets/Brand Name.svg";
import { Link } from "react-router-dom";
import { TbMenu } from "react-icons/tb";
import SearchOverlay from "../../components/SearchOverlay";
import CartOverlay from "../../components/CartOverlay";
import SignInUp from "../../Page/SignInUp";
import { useNavigate, useLocation } from "react-router-dom";
import Solar from '../../assets/Vector (4).svg';
import MenuOverlay from "../../components/MenuOverlay";


const Navbar = ({ showTopBar, cartOpen, setCartOpen }) => {
const [open, setOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);
const [searchOpen, setSearchOpen] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);
const [signInUpOpen, setSignInUpOpen] = useState(false);

const [openMegaMenu, setOpenMegaMenu] = useState(null);

  const menuRef = useRef(null);
// values: "perfume" | "collection" | null


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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setOpenMegaMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
  ? "bg-[#997E3D]/80 backdrop-blur-2xl rounded-full md:mt-[2px]  lg:mt-[12px]"
  : scrolled
  ? "bg-[#997E3D]/80 backdrop-blur-2xl rounded-full mt-[8px] 2xl:mt-[10px] mx-[16px] 2xl:mx-[32px]"
  : "bg-transparent";

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

        <div className="mx-auto px-[16px] 2xl:px-[32px] py-[4px] md:py-[14px] flex items-center justify-between text-white ">

{/* LOGO */}
<a
  href="/"
  onClick={handleLogoClick}
  className="flex items-center gap-[7px] lg:gap-[12px] cursor-pointer transition-all duration-300"
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

            {/* DESKTOP MENU (UNCHANGED) */}
            <div className="hidden md:flex items-center gap-[12px] bg-white/90 text-[#282828] pr-[5px] 2xl:pr-[9px] pl-[24px] py-[10px] lg:py-[12px] rounded-[100px] 2xl:mr-16 lg:w-[488px] h-[30px] lg:h-[40px] 2xl:w-[550px] 2xl:h-[50px]">

            {/* Perfume */}
               <div ref={menuRef} className="relative">
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
            className="absolute top-[60px] right-0 z-50"
          >
         <div className="fixed top-[60px] right-[220px] lg:top-[90px] lg:right-[350px] 2xl:right-[850px] z-50">

      <div className="relative bg-white rounded-[24px] shadow-xl px-[30px] py-[20px] lg:px-[40px] lg:py-[32px] flex gap-[40px] lg:gap-[74px]">

        {/* ARROW TIP */}
        <span className="absolute md:right-[240px] -top-[10px] lg:right-[300px] w-5 h-5 bg-white rotate-45" />

        {/* COLUMN 1 */}
        <div>
          <h4 className="font-bold text-[14px] lg:text-[16px] text-[#A0174A] mb-[12px]">
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
          <h4 className="font-bold text-[14px] lg:text-[16px] text-[#A0174A] mb-[12px]">
            Perfume Family
          </h4>
          <ul className="space-y-[12px] text-[14px] lg:text-[16px] text-[#1D0B01]  cursor-pointer">
            <li className="hover:text-[#A0174A]"><Link to='/productList'>Flowery</Link></li>
            <li className="hover:text-[#A0174A]"><Link to='/productList'>Warm</Link></li>
            <li className="hover:text-[#A0174A]"><Link to='/productList'>Gourmand</Link></li>
            <li className="hover:text-[#A0174A]"><Link to='/productList'>Fresh</Link></li>
            <li className="hover:text-[#A0174A]"><Link to='/productList'>Earthy</Link></li>
            <li className="hover:text-[#A0174A]"><Link to='/productList'>Herbal</Link></li>
            <li className="hover:text-[#A0174A]">Fresh</li>
            <li className="hover:text-[#A0174A]">Earthy</li>
          </ul>
        </div>

        {/* RIGHT PRODUCT CARD */}
        <div className="">
          <div className="bg-[#FBF7F2] rounded-[24px] p-4 w-[160px] lg:w-[220px] text-center">
            <img
              src="https://i.postimg.cc/JnBwP30d/Product-Card.png"
              className="rounded-xl mx-auto mb-4"
            />
          </div> <p className="text-[16px] text-center text-[#1D0B01] font-medium cursor-pointer">
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
<div ref={menuRef} className="relative">
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
            className="absolute top-[60px] right-0 z-50"
          >
        {/* MEGA MENU */}
    <div className="fixed top-[60px] right-[120px] lg:top-[90px] lg:right-[230px] 2xl:right-[700px] z-50">

      <div className="relative bg-white rounded-[24px] shadow-xl px-[30px] py-[20px] lg:px-[40px] lg:py-[32px] flex gap-[40px] lg:gap-[74px]">

        {/* ARROW TIP */}
        <span className="absolute -top-[10px] right-[250px] lg:right-[300px] w-5 h-5 bg-white rotate-45" />

        {/* COLUMN 1 */}
        <div>
          <h4 className="font-bold text-[14px] lg:text-[16px] text-[#A0174A] mb-[12px]">
            Perfume Tyle
          </h4>
          <ul className="space-y-[12px] text-[14px] lg:text-[16px] text-[#1D0B01]">
            <li className="hover:text-[#A0174A]"><Link to='/productList'>All Perumes</Link></li>
            <li className="hover:text-[#A0174A]"><Link to='/productList'>New Arrivals</Link></li>
            <li className="hover:text-[#A0174A]"><Link to='/productList'>LCombo Sales</Link></li>
            <li className="hover:text-[#A0174A]"><Link to='/productList'>Limited Editions</Link></li>
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

{/* About */}
<div ref={menuRef} className="relative">
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
        className="absolute top-[60px] right-0 z-50"
      >
      <div className="fixed top-[60px] right-[70px] lg:top-[90px] lg:right-[120px] 2xl:right-[600px] z-50">

      <div className="relative bg-white rounded-[16px] shadow-xl px-[30px] py-[20px] lg:px-[40px] lg:py-[32px] flex gap-[40px] lg:gap-[74px]">

        {/* ARROW TIP */}
        <span className="absolute -top-[10px] right-[250px] lg:right-[300px] w-5 h-5 bg-white rotate-45" />

        {/* COLUMN 1 */}
        <div>
           <h4 className="font-bold text-[14px] lg:text-[16px] text-[#A0174A] mb-[12px]">
            About SANRAYN
          </h4>
          <ul className="space-y-[12px] text-[14px] lg:text-[16px] text-[#1D0B01]">
            <li className="cursor-pointer hover:text-[#A0174A]"><Link to='/about'>About Us</Link></li>
            <li className="cursor-pointer hover:text-[#A0174A]"><Link to='/contact'>Contact Us</Link></li>
            <li className="cursor-pointer hover:text-[#A0174A]"><Link to='/faq'>FAQ</Link></li>
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



             <Link to='holidayOffer'> <span className="bg-[#A0174A] text-white gap-[4px] 2xl:gap-[5px] text-[10px] lg:text-[12px] 2xl:text-[15px] px-[14px] lg:px-[20px] py-[8px] rounded-[100px] font-semibold flex items-center justify-center w-[110px] lg:w-[150px] h-[20px] lg:h-[30px] 2xl:w-[170px] 2xl:h-[35px] uppercase">
                <img className="h-[10px] w-[10px] lg:h-[16px] lg:w-[16px]" src={Solar} alt="" />
                Holiday Sale
              </span></Link>
            </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-[16px] 2xl:gap-[24px]">
            {/* DESKTOP ICONS (UNCHANGED) */}
            <div className="hidden md:flex items-center gap-[8px] 2xl:gap-[16px]">
              <button
               title="Search Perfumes"
  onClick={() => setSearchOpen(true)}
  className={`
  lg:p-[10px] p-[8px] md:h-[30px] md:w-[30px] lg:h-[40px] lg:w-[40px] 2xl:p-[15px] rounded-full 2xl:h-[50px] 2xl:w-[50px]
  transition-colors duration-300 cursor-pointer flex items-center justify-center
  ${scrolled ? "bg-white/90" : "bg-white/90"}
`}

>
<svg  className="h-[24px] w-[24px] lg:h-[40px] lg:w-[40px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
  <g opacity="0.7">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.58464 3.33329C6.13286 3.33329 3.33464 6.13151 3.33464 9.58329C3.33464 13.0351 6.13286 15.8333 9.58464 15.8333C11.2622 15.8333 12.7854 15.1723 13.9081 14.0967C13.934 14.0607 13.9631 14.0264 13.9955 13.994C14.0278 13.9617 14.0621 13.9326 14.0981 13.9067C15.1737 12.784 15.8346 11.2608 15.8346 9.58329C15.8346 6.13151 13.0364 3.33329 9.58464 3.33329ZM15.7409 14.561C16.8418 13.2011 17.5013 11.4692 17.5013 9.58329C17.5013 5.21104 13.9569 1.66663 9.58464 1.66663C5.21238 1.66663 1.66797 5.21104 1.66797 9.58329C1.66797 13.9555 5.21238 17.5 9.58464 17.5C11.4706 17.5 13.2025 16.8405 14.5624 15.7395L16.912 18.0892C17.2375 18.4146 17.7651 18.4147 18.0905 18.0892C18.416 17.7638 18.416 17.2362 18.0906 16.9107L15.7409 14.561Z" fill="#744F18"/>
  </g>
</svg>

</button>

              <button
  onClick={() => setCartOpen(true)}
  className={`
 lg:p-[10px] p-[8px] md:h-[30px] md:w-[30px] lg:h-[40px] lg:w-[40px] 2xl:p-[15px] rounded-full 2xl:h-[50px] 2xl:w-[50px]
  transition-colors duration-300 cursor-pointer flex items-center justify-center
  ${scrolled ? "bg-white/90" : "bg-white/90"}
`}
 title="View Cart"
>
  <svg xmlns="http://www.w3.org/2000/svg"   className="h-[24px] w-[24px] lg:h-[40px] lg:w-[40px]" viewBox="0 0 20 20" fill="none">
  <g opacity="0.7">
    <path d="M2.55006 12.661L2.85443 10.9349C3.21416 8.89463 3.39403 7.87456 4.10631 7.27059C4.81861 6.66663 5.84179 6.66663 7.88815 6.66663H12.1093C14.1556 6.66663 15.1788 6.66663 15.8911 7.27059C16.6034 7.87456 16.7832 8.89463 17.1429 10.9349L17.4474 12.661C17.9451 15.4842 18.194 16.8958 17.4276 17.8229C16.6612 18.75 15.2453 18.75 12.4136 18.75H7.58378C4.75208 18.75 3.33623 18.75 2.56981 17.8229C1.80338 16.8958 2.05228 15.4842 2.55006 12.661Z" stroke="#744F18" stroke-width="1.5"/>
    <path d="M6.25 6.66663L6.38985 4.98844C6.54632 3.11084 8.11589 1.66663 10 1.66663C11.8841 1.66663 13.4537 3.11084 13.6102 4.98844L13.75 6.66663" stroke="#744F18" stroke-width="1.5"/>
    <path d="M12.5 9.16663C12.3917 10.3442 11.3047 11.25 10 11.25C8.69525 11.25 7.60835 10.3442 7.5 9.16663" stroke="#744F18" stroke-width="1.5" stroke-linecap="round"/>
  </g>
</svg>
</button>

<button
  title="Login"
  onClick={() => setSignInUpOpen(true)}
  className="
   lg:p-[10px] p-[8px] md:h-[30px] md:w-[30px] lg:h-[40px] lg:w-[40px] 2xl:p-[15px] rounded-full 2xl:h-[50px] 2xl:w-[50px]
  transition-colors duration-300 cursor-pointer flex items-center justify-center
    bg-white/90
  "
>
                <svg xmlns="http://www.w3.org/2000/svg"   className="h-[24px] w-[24px] lg:h-[40px] lg:w-[40px]" viewBox="0 0 20 20" fill="none">
  <g opacity="0.7">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0009 3.33329C8.39002 3.33329 7.08419 4.63913 7.08419 6.24996C7.08419 7.86079 8.39002 9.16663 10.0009 9.16663C11.6117 9.16663 12.9175 7.86079 12.9175 6.24996C12.9175 4.63913 11.6117 3.33329 10.0009 3.33329ZM5.41752 6.24996C5.41752 3.71865 7.46955 1.66663 10.0009 1.66663C12.5322 1.66663 14.5842 3.71865 14.5842 6.24996C14.5842 8.78126 12.5322 10.8333 10.0009 10.8333C7.46955 10.8333 5.41752 8.78126 5.41752 6.24996ZM10.0009 13.3333C7.63499 13.3333 5.52626 14.4744 4.17906 16.2573C4.09664 16.3664 4.03357 16.45 3.9811 16.5234C3.94127 16.5792 3.91409 16.6201 3.89516 16.6511C4.01902 16.6653 4.19549 16.6666 4.52355 16.6666H15.4782C15.8062 16.6666 15.9827 16.6653 16.1065 16.6511C16.0876 16.6201 16.0604 16.5792 16.0206 16.5234C15.9681 16.45 15.9051 16.3664 15.8227 16.2573C14.4755 14.4744 12.3667 13.3333 10.0009 13.3333ZM2.84931 15.2526C4.49344 13.0766 7.08325 11.6666 10.0009 11.6666C12.9185 11.6666 15.5083 13.0766 17.1524 15.2526C17.1598 15.2624 17.1673 15.2723 17.1748 15.2822C17.3162 15.4691 17.4677 15.6696 17.5761 15.8629C17.7072 16.097 17.8043 16.3678 17.7983 16.6971C17.7935 16.9618 17.7133 17.2096 17.6159 17.4053C17.5185 17.601 17.3691 17.8143 17.1608 17.9778C16.8831 18.1958 16.5806 18.2729 16.312 18.3051C16.0763 18.3334 15.797 18.3334 15.5161 18.3333C15.5035 18.3333 15.4908 18.3333 15.4782 18.3333H4.52355C4.51089 18.3333 4.49823 18.3333 4.48557 18.3333C4.20474 18.3334 3.92542 18.3334 3.68972 18.3051C3.42107 18.2729 3.11864 18.1958 2.84087 17.9778C2.63258 17.8143 2.48323 17.601 2.38583 17.4053C2.28844 17.2096 2.20823 16.9618 2.20339 16.6971C2.19737 16.3678 2.29454 16.097 2.42565 15.8629C2.53397 15.6696 2.68555 15.4691 2.82691 15.2822C2.83441 15.2723 2.84188 15.2624 2.84931 15.2526Z" fill="#744F18"/>
  </g>
</svg>
              </button>
            </div>

            {/* MOBILE ICONS */}
            <div className="flex md:hidden items-center gap-[12px] py-[10px]">
              <button
               title="Search Perfumes"
  onClick={() => setSearchOpen(true)}
  className="bg-white/90 p-[8px] h-[28px] w-[28px] flex items-center rounded-full cursor-pointer"
>
  <svg  className="h-[24px] w-[24px] " xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 17 17" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.91667 1.66667C4.46489 1.66667 1.66667 4.46489 1.66667 7.91667C1.66667 11.3684 4.46489 14.1667 7.91667 14.1667C9.59425 14.1667 11.1175 13.5057 12.2401 12.43C12.266 12.3941 12.2952 12.3597 12.3275 12.3274C12.3598 12.2951 12.3942 12.2659 12.4301 12.24C13.5058 11.1174 14.1667 9.59421 14.1667 7.91667C14.1667 4.46489 11.3684 1.66667 7.91667 1.66667ZM14.073 12.8944C15.1739 11.5345 15.8333 9.80261 15.8333 7.91667C15.8333 3.54441 12.2889 0 7.91667 0C3.54441 0 0 3.54441 0 7.91667C0 12.2889 3.54441 15.8333 7.91667 15.8333C9.80264 15.8333 11.5346 15.1739 12.8945 14.0729L15.2441 16.4226C15.5695 16.748 16.0971 16.748 16.4226 16.4226C16.748 16.0972 16.748 15.5695 16.4226 15.2441L14.073 12.8944Z" fill="#1D0B01"/>
</svg>
</button>
              <button
               title="View Cart"
  onClick={() => setCartOpen(true)}
  className="bg-white/90 p-[8px] h-[28px] w-[28px] md:h-[30px] md:w-[30px] flex items-center rounded-full cursor-pointer"
>
  <svg className="h-[24px] w-[24px] " xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="none">
  <g opacity="0.7">
    <path d="M2.54616 12.661L2.85052 10.9349C3.21026 8.89463 3.39012 7.87456 4.10241 7.27059C4.8147 6.66663 5.83788 6.66663 7.88424 6.66663H12.1054C14.1517 6.66663 15.1749 6.66663 15.8872 7.27059C16.5995 7.87456 16.7793 8.89463 17.139 10.9349L17.4435 12.661C17.9412 15.4842 18.1901 16.8958 17.4237 17.8229C16.6573 18.75 15.2414 18.75 12.4097 18.75H7.57988C4.74817 18.75 3.33232 18.75 2.5659 17.8229C1.79947 16.8958 2.04837 15.4842 2.54616 12.661Z" stroke="#1D0B01" stroke-width="1.5"/>
    <path d="M6.25 6.66663L6.38985 4.98844C6.54632 3.11084 8.11589 1.66663 10 1.66663C11.8841 1.66663 13.4537 3.11084 13.6102 4.98844L13.75 6.66663" stroke="#1D0B01" stroke-width="1.5"/>
    <path d="M12.5 9.16663C12.3917 10.3442 11.3047 11.25 10 11.25C8.69525 11.25 7.60835 10.3442 7.5 9.16663" stroke="#1D0B01" stroke-width="1.5" stroke-linecap="round"/>
  </g>
</svg>
</button>
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
    {/* BLUR BACKGROUND */}
    <div
      onClick={() => setSignInUpOpen(false)}
      className="fixed  inset-0 bg-white/50 backdrop-blur-sm z-[60]"
    />

    {/* SIGN IN / UP UI */}
    <SignInUp onClose={() => setSignInUpOpen(false)} />
  </>
)}
      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}


    </>
  );
};

export default Navbar;


