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




const Navbar = () => {
const [open, setOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);
const [searchOpen, setSearchOpen] = useState(false);
const [cartOpen, setCartOpen] = useState(false);
const [signInUpOpen, setSignInUpOpen] = useState(false);

  const [openMegaMenu, setOpenMegaMenu] = useState(null);

  const menuRef = useRef(null);
// values: "perfume" | "collection" | null

const [openPerfume, setOpenPerfume] = useState(true);
const [activeSection, setActiveSection] = useState({
  style: true,
  family: true,
  type: true,
  brand: true,
});

const [selectedItem, setSelectedItem] = useState(null);
const [openCollection, setOpenCollection] = useState(false);
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


// const navBgClass = isProductList || isContact || isFaq || isAbout || isTerms || isBlogPage || isBlogDetails || isProductDetails || isHolidayOffer
//   ? "bg-[#BA9948]/45 backdrop-blur-2xl rounded-full mt-[6px] 2xl:mt-[10px] mx-[16px] 2xl:mx-[32px]"
//   : scrolled
//   ? "bg-[#BA9948]/45 backdrop-blur-2xl rounded-full mt-[6px] 2xl:mt-[10px]"
//   : "bg-transparent";

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


  const perfumeStyles = ["Men", "Women", "Unisex"];

const perfumeFamilies = [
  "Flowery",
  "Warm",
  "Gourmand",
  "Fresh",
  "Earthy",
  "Herbal",
];

const perfumeTypes = [
  "All Perfumes",
  "Best Sellers",
  "New Arrivals",
  "Limited Editions",
  "Combo Sales",
];

const inspiredBrands = [
  "Blueberry",
  "Byredo",
  "Chanel",
  "Creed",
  "Dior",
  "Guccu",
];

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
  ? "bg-[#BA9948]/60 backdrop-blur-2xl rounded-full mt-[6px] md:mt-[15px]"
  : scrolled
  ? "bg-[#997E3D]/80 backdrop-blur-2xl rounded-full mt-[6px] 2xl:mt-[10px] mx-[16px] 2xl:mx-[32px]"
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

        <div className="mx-auto px-[16px] 2xl:px-[32px] lg:py-[8px] flex items-center justify-between text-white ">

{/* LOGO */}
<a
  href="/"
  onClick={handleLogoClick}
  className="flex items-center gap-[7px] lg:gap-[12px] cursor-pointer transition-all duration-300"
>

 <img
  src={logoSrc}
  alt="Brand Logo"
  className="h-[30px] w-[30px] lg:h-[58px] lg:w-[58px] transition-all duration-300"
/>


 <img
  src={brandSrc}
  alt="Brand Name"
  className="h-[15px] w-[100px] lg:h-[27px] lg:w-[170px] transition-all duration-300"
/>

</a>


          {/* RIGHT SIDE */}
          <div className="flex items-center gap-[16px] 2xl:gap-[24px]">

            {/* DESKTOP MENU (UNCHANGED) */}
            <div className="hidden lg:flex items-center gap-[12px] bg-white/90 text-[#282828] pr-[5px] 2xl:pr-[9px] pl-[24px] py-[12px] rounded-[100px] 2xl:mr-16 w-[488px] h-[40px] 2xl:w-[563px] 2xl:h-[50px]">

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
          className="flex items-center gap-[4px] 2xl:gap-[5px] text-[12px] 2xl:text-[15px] cursor-pointer uppercase"
        >
          Perfumes
          <LiaAngleDownSolid
            className={`h-[24px] w-[24px] transition-transform duration-500 ${
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
         <div className="fixed top-[90px] right-[350px] 2xl:right-[450px] z-50">

      <div className="relative bg-white rounded-[24px] shadow-xl px-[40px] py-[32px] flex gap-[74px]">

        {/* ARROW TIP */}
        <span className="absolute -top-[10px] right-[300px] w-5 h-5 bg-white rotate-45" />

        {/* COLUMN 1 */}
        <div>
          <h4 className="font-bold text-[15px] text-[#1D0B01] mb-[12px]">
            Perfume Style
          </h4>
          <ul className="space-y-[12px] text-[16px] text-[#1D0B01]">
            <li className="cursor-pointer hover:text-[#FD4929]">Men</li>
            <li className="cursor-pointer hover:text-[#FD4929]">Women</li>
            <li className="cursor-pointer hover:text-[#FD4929]">Unisex</li>
          </ul>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h4 className="font-bold text-[#1D0B01] mb-[12px]">
            Perfume Family
          </h4>
          <ul className="space-y-[12px] text-[16px] text-[#1D0B01]  cursor-pointer">
            <li>Flowery</li>
            <li>Warm</li>
            <li>Gourmand</li>
            <li>Fresh</li>
            <li>Earthy</li>
            <li>Herbal</li>
          </ul>
        </div>

        {/* RIGHT PRODUCT CARD */}
        <div className="">
          <div className="bg-[#FBF7F2] rounded-[24px] p-4 w-[220px] text-center">
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
          className="flex items-center gap-[4px] 2xl:gap-[5px] text-[12px] 2xl:text-[15px] cursor-pointer uppercase"
        >
    Collections
    <LiaAngleDownSolid
            className={`h-[24px] w-[24px] transition-transform duration-500 ${
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
    <div className="fixed top-[90px] right-[230px] 2xl:right-[320px] z-50">

      <div className="relative bg-white rounded-[24px] shadow-xl px-[40px] py-[32px] flex gap-[74px]">

        {/* ARROW TIP */}
        <span className="absolute -top-[10px] right-[300px] w-5 h-5 bg-white rotate-45" />

        {/* COLUMN 1 */}
        <div>
          <h4 className="font-bold text-[15px] text-[#571313] mb-[12px]">
            Perfume Tyle
          </h4>
          <ul className="space-y-[12px] text-[16px] text-[#1D0B01]">
            <li className="cursor-pointer hover:text-[#FD4929]">All Perfumes</li>
            <li className="cursor-pointer hover:text-[#FD4929]">New Arrivals</li>
            <li className="cursor-pointer hover:text-[#FD4929]">Limited Editions</li>
            <li className="cursor-pointer hover:text-[#FD4929]">LCombo Sales</li>
          </ul>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h4 className="font-bold text-[#571313] mb-[12px]">
            Inspired by Brand
          </h4>
          <ul className="space-y-[12px] text-[16px] text-[#1D0B01] cursor-pointer">
            <li>Bluberry</li>
            <li>Byredo</li>
            <li>Chanel</li>
            <li>Creed</li>
            <li>Dior</li>
            <li>Gucci</li>
          </ul>
        </div>

        {/* RIGHT PRODUCT CARD */}
        <div className="">
          <div className="bg-[#FBF7F2] rounded-[24px] p-4 w-[220px] text-center">
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



<Link to='/about'><button className="cursor-pointer text-[12px] 2xl:text-[15px] uppercase">About Us</button></Link>


             <Link to='holidayOffer'> <span className="bg-[#FD4929] text-white gap-[4px] 2xl:gap-[5px] text-[12px] 2xl:text-[15px] px-[20px] py-[8px] rounded-[100px] font-semibold flex items-center w-[150px] h-[30px] 2xl:w-[170px] 2xl:h-[35px] uppercase">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.77067 10.68C2.00984 11.5158 2.65401 12.1591 3.94151 13.4466L5.46651 14.9716C7.70817 17.2141 8.82817 18.3333 10.2198 18.3333C11.6123 18.3333 12.7323 17.2133 14.9732 14.9725C17.2148 12.7308 18.3348 11.6108 18.3348 10.2183C18.3348 8.82664 17.2148 7.7058 14.974 5.46497L13.449 3.93997C12.1607 2.65247 11.5173 2.0083 10.6815 1.76914C9.84567 1.52914 8.95817 1.73414 7.18401 2.14414L6.16067 2.37997C4.66734 2.72414 3.92067 2.89664 3.40901 3.40747C2.89734 3.9183 2.72651 4.66664 2.38151 6.15914L2.14484 7.18247C1.73567 8.95747 1.53151 9.84414 1.77067 10.68ZM8.43651 6.05914C8.59724 6.21414 8.72547 6.39962 8.81372 6.60473C8.90197 6.80985 8.94846 7.03049 8.95048 7.25378C8.95251 7.47707 8.91002 7.69852 8.82551 7.9052C8.74099 8.11188 8.61614 8.29965 8.45825 8.45754C8.30035 8.61544 8.11258 8.74029 7.9059 8.8248C7.69922 8.90932 7.47777 8.9518 7.25448 8.94978C7.0312 8.94776 6.81055 8.90126 6.60544 8.81301C6.40032 8.72477 6.21485 8.59653 6.05984 8.4358C5.75405 8.11872 5.58496 7.69427 5.58896 7.25378C5.59295 6.81329 5.76971 6.39197 6.08119 6.08049C6.39268 5.769 6.81399 5.59225 7.25448 5.58825C7.69497 5.58426 8.11943 5.75335 8.43651 6.05914ZM15.8765 10.0425L10.0607 15.8591C9.94274 15.9729 9.78484 16.0359 9.62096 16.0344C9.45709 16.0329 9.30036 15.967 9.18454 15.8511C9.06871 15.7352 9.00306 15.5784 9.00171 15.4145C9.00036 15.2506 9.06343 15.0928 9.17734 14.975L14.9923 9.1583C15.1096 9.04106 15.2686 8.97519 15.4344 8.97519C15.6002 8.97519 15.7593 9.04106 15.8765 9.1583C15.9938 9.27555 16.0596 9.43457 16.0596 9.60039C16.0596 9.7662 15.9938 9.92522 15.8765 10.0425Z" fill="white"/>
</svg>
                Holiday Sale
              </span></Link>
            </div>

            {/* DESKTOP ICONS (UNCHANGED) */}
            <div className="hidden lg:flex items-center gap-[8px] 2xl:gap-[16px]">
              <button
               title="Search Perfumes"
  onClick={() => setSearchOpen(true)}
  className={`
  p-[10px] h-[40px] w-[40px] 2xl:p-[15px] rounded-full 2xl:h-[50px] 2xl:w-[50px]
  transition-colors duration-300 cursor-pointer
  ${scrolled ? "bg-white/90" : "bg-white/90"}
`}

>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g opacity="0.7">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.58464 3.33329C6.13286 3.33329 3.33464 6.13151 3.33464 9.58329C3.33464 13.0351 6.13286 15.8333 9.58464 15.8333C11.2622 15.8333 12.7854 15.1723 13.9081 14.0967C13.934 14.0607 13.9631 14.0264 13.9955 13.994C14.0278 13.9617 14.0621 13.9326 14.0981 13.9067C15.1737 12.784 15.8346 11.2608 15.8346 9.58329C15.8346 6.13151 13.0364 3.33329 9.58464 3.33329ZM15.7409 14.561C16.8418 13.2011 17.5013 11.4692 17.5013 9.58329C17.5013 5.21104 13.9569 1.66663 9.58464 1.66663C5.21238 1.66663 1.66797 5.21104 1.66797 9.58329C1.66797 13.9555 5.21238 17.5 9.58464 17.5C11.4706 17.5 13.2025 16.8405 14.5624 15.7395L16.912 18.0892C17.2375 18.4146 17.7651 18.4147 18.0905 18.0892C18.416 17.7638 18.416 17.2362 18.0906 16.9107L15.7409 14.561Z" fill="#744F18"/>
  </g>
</svg>

</button>

              <button
  onClick={() => setCartOpen(true)}
  className={`
 p-[10px] h-[40px] w-[40px] 2xl:p-[15px] rounded-full 2xl:h-[50px] 2xl:w-[50px]
  transition-colors duration-300 cursor-pointer
  ${scrolled ? "bg-white/90" : "bg-white/90"}
`}
 title="View Cart"
>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
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
    p-[10px] h-[40px] w-[40px] 2xl:p-[15px] rounded-full 2xl:h-[50px] 2xl:w-[50px]
    transition-colors duration-300 cursor-pointer
    bg-white/90
  "
>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g opacity="0.7">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0009 3.33329C8.39002 3.33329 7.08419 4.63913 7.08419 6.24996C7.08419 7.86079 8.39002 9.16663 10.0009 9.16663C11.6117 9.16663 12.9175 7.86079 12.9175 6.24996C12.9175 4.63913 11.6117 3.33329 10.0009 3.33329ZM5.41752 6.24996C5.41752 3.71865 7.46955 1.66663 10.0009 1.66663C12.5322 1.66663 14.5842 3.71865 14.5842 6.24996C14.5842 8.78126 12.5322 10.8333 10.0009 10.8333C7.46955 10.8333 5.41752 8.78126 5.41752 6.24996ZM10.0009 13.3333C7.63499 13.3333 5.52626 14.4744 4.17906 16.2573C4.09664 16.3664 4.03357 16.45 3.9811 16.5234C3.94127 16.5792 3.91409 16.6201 3.89516 16.6511C4.01902 16.6653 4.19549 16.6666 4.52355 16.6666H15.4782C15.8062 16.6666 15.9827 16.6653 16.1065 16.6511C16.0876 16.6201 16.0604 16.5792 16.0206 16.5234C15.9681 16.45 15.9051 16.3664 15.8227 16.2573C14.4755 14.4744 12.3667 13.3333 10.0009 13.3333ZM2.84931 15.2526C4.49344 13.0766 7.08325 11.6666 10.0009 11.6666C12.9185 11.6666 15.5083 13.0766 17.1524 15.2526C17.1598 15.2624 17.1673 15.2723 17.1748 15.2822C17.3162 15.4691 17.4677 15.6696 17.5761 15.8629C17.7072 16.097 17.8043 16.3678 17.7983 16.6971C17.7935 16.9618 17.7133 17.2096 17.6159 17.4053C17.5185 17.601 17.3691 17.8143 17.1608 17.9778C16.8831 18.1958 16.5806 18.2729 16.312 18.3051C16.0763 18.3334 15.797 18.3334 15.5161 18.3333C15.5035 18.3333 15.4908 18.3333 15.4782 18.3333H4.52355C4.51089 18.3333 4.49823 18.3333 4.48557 18.3333C4.20474 18.3334 3.92542 18.3334 3.68972 18.3051C3.42107 18.2729 3.11864 18.1958 2.84087 17.9778C2.63258 17.8143 2.48323 17.601 2.38583 17.4053C2.28844 17.2096 2.20823 16.9618 2.20339 16.6971C2.19737 16.3678 2.29454 16.097 2.42565 15.8629C2.53397 15.6696 2.68555 15.4691 2.82691 15.2822C2.83441 15.2723 2.84188 15.2624 2.84931 15.2526Z" fill="#744F18"/>
  </g>
</svg>
              </button>
            </div>

            {/* MOBILE ICONS */}
            <div className="flex lg:hidden items-center gap-[16px] py-[10px]">
              <button
               title="Search Perfumes"
  onClick={() => setSearchOpen(true)}
  className="bg-white/90 p-[8px] h-[30px] w-[30px] flex items-center rounded-full"
>
  <svg  className="h-[24px] w-[24px] " xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 17 17" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.91667 1.66667C4.46489 1.66667 1.66667 4.46489 1.66667 7.91667C1.66667 11.3684 4.46489 14.1667 7.91667 14.1667C9.59425 14.1667 11.1175 13.5057 12.2401 12.43C12.266 12.3941 12.2952 12.3597 12.3275 12.3274C12.3598 12.2951 12.3942 12.2659 12.4301 12.24C13.5058 11.1174 14.1667 9.59421 14.1667 7.91667C14.1667 4.46489 11.3684 1.66667 7.91667 1.66667ZM14.073 12.8944C15.1739 11.5345 15.8333 9.80261 15.8333 7.91667C15.8333 3.54441 12.2889 0 7.91667 0C3.54441 0 0 3.54441 0 7.91667C0 12.2889 3.54441 15.8333 7.91667 15.8333C9.80264 15.8333 11.5346 15.1739 12.8945 14.0729L15.2441 16.4226C15.5695 16.748 16.0971 16.748 16.4226 16.4226C16.748 16.0972 16.748 15.5695 16.4226 15.2441L14.073 12.8944Z" fill="#1D0B01"/>
</svg>
</button>
              <button
               title="View Cart"
  onClick={() => setCartOpen(true)}
  className="bg-white/90 p-[8px] h-[30px] w-[30px] flex items-center rounded-full"
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
                onClick={() => setOpen(true)}
                className="bg-white/90 p-[8px] h-[30px] w-[30px] rounded-full flex items-center"
              >
                <TbMenu className="text-[#1D0B01] h-[24px] w-[24px] cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </nav>


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

    {/* MOBILE SIDEBAR */}
<aside
  className={`fixed top-0 left-0 h-full w-[100%] bg-[#F6F7F2] z-60
  transform transition-transform overflow-y-auto duration-500 lg:hidden
  ${open ? "translate-x-0" : "-translate-x-full"}`}
>
  {/* HEADER */}
  <div className="relative flex items-center justify-between px-[20px] py-[16px]">
    <div className="flex items-center gap-[12px]">
      <button
        onClick={() => {
          setOpen(false);
          setSignInUpOpen(true);
        }}
        className="bg-white/90 p-[15px] rounded-full h-[50px] w-[50px]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g opacity="0.7">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0009 3.33335C8.39002 3.33335 7.08419 4.63919 7.08419 6.25002C7.08419 7.86085 8.39002 9.16669 10.0009 9.16669C11.6117 9.16669 12.9175 7.86085 12.9175 6.25002C12.9175 4.63919 11.6117 3.33335 10.0009 3.33335ZM5.41752 6.25002C5.41752 3.71872 7.46955 1.66669 10.0009 1.66669C12.5322 1.66669 14.5842 3.71872 14.5842 6.25002C14.5842 8.78133 12.5322 10.8334 10.0009 10.8334C7.46955 10.8334 5.41752 8.78133 5.41752 6.25002ZM10.0009 13.3334C7.63499 13.3334 5.52626 14.4744 4.17906 16.2574C4.09664 16.3664 4.03357 16.45 3.9811 16.5235C3.94127 16.5792 3.91409 16.6202 3.89516 16.6512C4.01902 16.6653 4.19549 16.6667 4.52355 16.6667H15.4782C15.8062 16.6667 15.9827 16.6653 16.1065 16.6512C16.0876 16.6202 16.0604 16.5792 16.0206 16.5235C15.9681 16.45 15.9051 16.3664 15.8227 16.2574C14.4755 14.4744 12.3667 13.3334 10.0009 13.3334ZM2.84931 15.2526C4.49344 13.0767 7.08325 11.6667 10.0009 11.6667C12.9185 11.6667 15.5083 13.0767 17.1524 15.2526C17.1598 15.2624 17.1673 15.2723 17.1748 15.2822C17.3162 15.4692 17.4677 15.6696 17.5761 15.863C17.7072 16.0971 17.8043 16.3678 17.7983 16.6972C17.7935 16.9619 17.7133 17.2097 17.6159 17.4053C17.5185 17.601 17.3691 17.8144 17.1608 17.9778C16.8831 18.1958 16.5806 18.273 16.312 18.3052C16.0763 18.3335 15.797 18.3334 15.5161 18.3334C15.5035 18.3334 15.4908 18.3334 15.4782 18.3334H4.52355C4.51089 18.3334 4.49823 18.3334 4.48557 18.3334C4.20474 18.3334 3.92542 18.3335 3.68972 18.3052C3.42107 18.273 3.11864 18.1958 2.84087 17.9778C2.63258 17.8144 2.48323 17.601 2.38583 17.4053C2.28844 17.2097 2.20823 16.9619 2.20339 16.6972C2.19737 16.3678 2.29454 16.0971 2.42565 15.863C2.53397 15.6696 2.68555 15.4692 2.82691 15.2822C2.83441 15.2723 2.84188 15.2624 2.84931 15.2526Z" fill="#1D0B01"/>
  </g>
</svg>
      </button>
      <span className="font-bold text-[#282828] text-[16px]">Login</span>
    </div>

    <button
      className="underline text-[#282828] text-[16px]"
      onClick={() => setOpen(false)}
    >
      Close
    </button>

    <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#571313]/10" />
  </div>

  <div className="p-5 space-y-6">

    {/* PERFUMES */}
    <div>
      <h3 className="text-[14px] font-semibold mb-3">Perfumes</h3>

      <div className="bg-white rounded-[24px] p-4 space-y-3">

        {/* Perfume Style */}
        <button
          onClick={() =>
            setActiveSection(prev => ({ ...prev, style: !prev.style }))
          }
          className="w-full flex justify-between items-center text-[14px]"
        >
          Perfume Style
          <LiaAngleDownSolid
            className={`text-xl transition-transform duration-300 ${
              activeSection.style ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            activeSection.style
              ? "max-h-[500px] opacity-100 mt-3"
              : "max-h-0 opacity-0"
          }`}
        >
          <MobileGrid items={perfumeStyles} />
        </div>

        <div className="border border-[#571313]/10" />

        {/* Perfume Family */}
        <button
          onClick={() =>
            setActiveSection(prev => ({ ...prev, family: !prev.family }))
          }
          className="w-full flex justify-between items-center text-[14px]"
        >
          Perfume Family
          <LiaAngleDownSolid
            className={`text-xl transition-transform duration-300 ${
              activeSection.family ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            activeSection.family
              ? "max-h-[500px] opacity-100 mt-3"
              : "max-h-0 opacity-0"
          }`}
        >
          <MobileGrid items={perfumeFamilies} />
        </div>

        <div className="border border-[#571313]/10" />
      </div>
    </div>

    {/* COLLECTIONS */}
    <div>
      <h3 className="text-[14px] font-semibold mb-3">Collections</h3>

      <div className="bg-white rounded-[24px] p-4 space-y-3">

        {/* Perfume Type */}
        <button
          onClick={() =>
            setActiveSection(prev => ({ ...prev, type: !prev.type }))
          }
          className="w-full flex justify-between items-center text-[14px]"
        >
          Perfume Type
          <LiaAngleDownSolid
            className={`text-xl transition-transform duration-300 ${
              activeSection.type ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            activeSection.type
              ? "max-h-[500px] opacity-100 mt-3"
              : "max-h-0 opacity-0"
          }`}
        >
          <MobileGrid items={perfumeTypes} />
        </div>

        <div className="border border-[#571313]/10" />

        {/* Inspired by Brand */}
        <button
          onClick={() =>
            setActiveSection(prev => ({ ...prev, brand: !prev.brand }))
          }
          className="w-full flex justify-between items-center text-[14px]"
        >
          Inspired by Brand
          <LiaAngleDownSolid
            className={`text-xl transition-transform duration-300 ${
              activeSection.brand ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            activeSection.brand
              ? "max-h-[500px] opacity-100 mt-3"
              : "max-h-0 opacity-0"
          }`}
        >
          <MobileGrid items={inspiredBrands} />
        </div>

        <div className="border border-[#571313]/10" />
      </div>
    </div>

    {/* HOLIDAY SALE */}
    <Link to="/holidayOffer">
      <button className="bg-[#FD4929] text-white text-[16px] px-[12px] py-[14px] rounded-[100px] font-semibold flex items-center gap-[6px] w-full justify-center">
       <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.102704 9.01322C0.341871 9.84906 0.986038 10.4924 2.27354 11.7799L3.79854 13.3049C6.04021 15.5474 7.1602 16.6666 8.55187 16.6666C9.94437 16.6666 11.0644 15.5466 13.3052 13.3057C15.5469 11.0641 16.6669 9.94406 16.6669 8.55156C16.6669 7.15989 15.5469 6.03906 13.306 3.79822L11.781 2.27322C10.4927 0.985722 9.84937 0.341555 9.01354 0.102389C8.1777 -0.137611 7.29021 0.0673885 5.51604 0.477389L4.4927 0.713222C2.99937 1.05739 2.2527 1.22989 1.74104 1.74072C1.22937 2.25156 1.05854 2.99989 0.713538 4.49239L0.476871 5.51572C0.0677045 7.29072 -0.136462 8.17739 0.102704 9.01322ZM6.76854 4.39239C6.92927 4.54739 7.0575 4.73287 7.14575 4.93799C7.234 5.1431 7.28049 5.36375 7.28252 5.58703C7.28454 5.81032 7.24205 6.03177 7.15754 6.23845C7.07302 6.44513 6.94817 6.6329 6.79028 6.7908C6.63239 6.94869 6.44462 7.07354 6.23793 7.15806C6.03125 7.24257 5.8098 7.28506 5.58651 7.28303C5.36323 7.28101 5.14259 7.23451 4.93747 7.14627C4.73235 7.05802 4.54688 6.92978 4.39187 6.76906C4.08608 6.45197 3.91699 6.02752 3.92099 5.58703C3.92498 5.14654 4.10174 4.72522 4.41322 4.41374C4.72471 4.10225 5.14603 3.9255 5.58651 3.9215C6.027 3.91751 6.45146 4.0866 6.76854 4.39239ZM14.2085 8.37572L8.3927 14.1924C8.27477 14.3062 8.11687 14.3691 7.953 14.3676C7.78912 14.3661 7.63239 14.3003 7.51657 14.1844C7.40074 14.0684 7.33509 13.9116 7.33374 13.7478C7.33239 13.5839 7.39547 13.426 7.50937 13.3082L13.3244 7.49156C13.4416 7.37431 13.6006 7.30844 13.7665 7.30844C13.9323 7.30844 14.0913 7.37431 14.2085 7.49156C14.3258 7.6088 14.3917 7.76783 14.3917 7.93364C14.3917 8.09945 14.3258 8.25847 14.2085 8.37572Z" fill="white"/>
</svg>
        Holiday Sale
      </button>
    </Link>

  </div>
</aside>

    </>
  );
};

export default Navbar;


