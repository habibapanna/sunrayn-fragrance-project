import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { LiaAngleDownSolid } from "react-icons/lia";
import Logo from "../../assets/Logo.png";
import Logo2 from "../../assets/Logo (2).png";
import Logo3 from "../../assets/Logo (3).png";
import Solar from "../../assets/solar_tag-bold.png";
import Icon from "../../assets/Icon (Stroke).png";
import Cart from "../../assets/Frame (1).png";
import Users from "../../assets/User Icon.png";
import User1 from "../../assets/User Icon (1).png";
import BrandName from "../../assets/Brand Name.png";
import BrandName2 from "../../assets/SANRAYN (1).png";
import BrandName3 from "../../assets/Brand Name (2).png";
import { Link } from "react-router-dom";
import { TbMenu } from "react-icons/tb";
import SearchOverlay from "../../components/SearchOverlay";
import CartOverlay from "../../components/CartOverlay";
import { useLocation } from "react-router-dom";
import SignInUp from "../../Page/SignInUp";



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
const [activeSection, setActiveSection] = useState(null);
const [selectedItem, setSelectedItem] = useState(null);
const [openCollection, setOpenCollection] = useState(false);
const location = useLocation();

// adjust this path to match your ProductList route
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







useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


const navBgClass = isProductList || isContact || isFaq || isAbout || isTerms || isBlogPage || isBlogDetails || isProductDetails || isHolidayOffer
  ? "bg-black/60 backdrop-blur-md"
  : scrolled
  ? "bg-black/60 backdrop-blur-md"
  : "bg-transparent";

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




  return (
    <>
  <nav
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBgClass}`}
>


        <div className="mx-auto px-[16px] 2xl:px-[32px] md:py-[20px] flex items-center justify-between text-white">

{/* LOGO */}
<Link
  to="/"
  className="flex items-center gap-[7px] md:gap-[12px] cursor-pointer transition-all duration-300"
>
 <img
  src={logoSrc}
  alt="Brand Logo"
  className="h-[35px] w-[35px] md:h-[58px] md:w-[58px] transition-all duration-300"
/>


 <img
  src={brandSrc}
  alt="Brand Name"
  className="h-[17px] w-[104px] md:h-[27px] md:w-[170px] transition-all duration-300"
/>

</Link>


          {/* RIGHT SIDE */}
          <div className="flex items-center gap-[16px] 2xl:gap-[24px]">

            {/* DESKTOP MENU (UNCHANGED) */}
            <div className="hidden lg:flex items-center gap-[24px] bg-white/90 text-[#282828] pr-[9px] pl-[24px] py-[12px] rounded-[100px] 2xl:mr-16 w-[515px] h-[50px]">

            {/* Collection */}
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
          className="flex items-center gap-[5px] text-[16px] cursor-pointer"
        >
          Perfumes
          <LiaAngleDownSolid
            className={`h-[24px] w-[24px] transition-transform duration-300 ${
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
         <div className="fixed top-[90px] right-[10px] 2xl:right-[450px] z-50">

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
          className="flex items-center gap-[5px] text-[16px] cursor-pointer"
        >
    Collections
    <LiaAngleDownSolid
            className={`h-[24px] w-[24px] transition-transform duration-300 ${
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
    <div className="fixed top-[90px] right-[10px] 2xl:right-[320px] z-50">

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



<Link to='/about'><button className="cursor-pointer text-[16px]">About Us</button></Link>


             <Link to='holidayOffer'> <span className="bg-[#FD4929] text-white text-[16px] px-[12px] py-[7px] rounded-[100px] font-semibold flex items-center gap-[6px] w-[139px] h-[34px]">
                <img src={Solar} className="h-[17px] w-[17px]" />
                Holiday Sale
              </span></Link>
            </div>

            {/* DESKTOP ICONS (UNCHANGED) */}
            <div className="hidden lg:flex items-center gap-[16px]">
              <button
               title="Search Perfumes"
  onClick={() => setSearchOpen(true)}
  className={`
  p-[15px] rounded-full h-[50px] w-[50px]
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
  p-[15px] rounded-full h-[50px] w-[50px]
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
    p-[15px] rounded-full h-[50px] w-[50px]
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
            <div className="flex lg:hidden items-center gap-[16px] py-[24px]">
              <button
               title="Search Perfumes"
  onClick={() => setSearchOpen(true)}
  className="bg-white/90 p-[10px] rounded-full"
>
  <img src={Icon} className="h-[20px] w-[20px] cursor-pointer" />
</button>
              <button
               title="View Cart"
  onClick={() => setCartOpen(true)}
  className="bg-white/90 p-[10px] rounded-full"
>
  <img src={Cart} className="h-[20px] w-[20px] cursor-pointer " />
</button>

              <button
               title="Open Menu"
                onClick={() => setOpen(true)}
                className="bg-white/90 w-[40px] h-[40px] p-[8px] rounded-full"
              >
                <TbMenu className="text-[#BA9948] h-[24px] w-[24px] cursor-pointer" />
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
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
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
        className={`fixed top-0 left-0 h-full w-[100%] bg-[#F6F7F2] z-50
        transform transition-transform overflow-y-auto duration-500 lg:hidden
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
       <div className="relative flex items-center justify-between px-[20px] py-[16px]">
  <div className="flex justify-center items-center gap-[12px]">
    <button
  onClick={() => {
    setOpen(false);
    setSignInUpOpen(true);
  }}
  className="bg-white/90 p-[15px] rounded-full h-[50px] w-[50px]"
>
      <img src={User1} className="h-[20px] w-[20px]" />
    </button>
    <span className="font-bold text-[#282828] text-[16px]">Login</span>
  </div>

  <button onClick={() => setOpen(false)}>
    <X className="h-[40px] w-[40px] text-[#1D0B01] cursor-pointer" />
  </button>

  {/* Figma-style header divider */}
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
        setActiveSection(
          activeSection === "style" ? null : "style"
        )
      }
      className="w-full flex justify-between items-center text-[14px]"
    >
      Perfume Style
      <LiaAngleDownSolid
        className={`text-xl transition-transform ${
          activeSection === "style" ? "rotate-180" : ""
        }`}
      />
    </button>

    {activeSection === "style" && (
      <MobileGrid items={perfumeStyles} />
    )}
<div className="border border-[#571313]/10"></div>
    {/* Perfume Family */}
    <button
      onClick={() =>
        setActiveSection(
          activeSection === "family" ? null : "family"
        )
      }
      className="w-full flex justify-between items-center text-[14px]"
    >
      Perfume Family
      <LiaAngleDownSolid
        className={`text-xl transition-transform ${
          activeSection === "family" ? "rotate-180" : ""
        }`}
      />
    </button>

    {activeSection === "family" && (
      <MobileGrid items={perfumeFamilies} />
    )}
  <div className="border border-[#571313]/10"></div>
  <div className="">
          <div className="bg-[#FBF7F2] p-4 text-center  rounded-[8px] ">
            <img
              src="https://i.postimg.cc/JnBwP30d/Product-Card.png"
              className="mx-auto mb-4"
            />
          </div><Link to='/productList'> <p className="text-[16px] text-center text-[#1D0B01] font-medium">
              View All Perfume
            </p></Link>
        </div>
  </div>

</div>


 {/* COLLECTIONS */}
<div>
  <h3 className="text-[14px] font-semibold mb-3">Collections</h3>

  <div className="bg-white rounded-[24px] p-4 space-y-3">

    {/* Perfume Type */}
    <button
      onClick={() =>
        setActiveSection(
          activeSection === "type" ? null : "type"
        )
      }
      className="w-full flex justify-between items-center text-[14px]"
    >
      Perfume Type
      <LiaAngleDownSolid
        className={`text-xl transition-transform ${
          activeSection === "type" ? "rotate-180" : ""
        }`}
      />
    </button>

    {activeSection === "type" && (
      <MobileGrid items={perfumeTypes} />
    )}
<div className="border border-[#571313]/10"></div>
    {/* Inspired by Brand */}
    <button
      onClick={() =>
        setActiveSection(
          activeSection === "brand" ? null : "brand"
        )
      }
      className="w-full flex justify-between items-center text-[14px]"
    >
      Inspired by Brand
      <LiaAngleDownSolid
        className={`text-xl transition-transform ${
          activeSection === "brand" ? "rotate-180" : ""
        }`}
      />
    </button>

    {activeSection === "brand" && (
      <MobileGrid items={inspiredBrands} />
    )}
  <div className="border border-[#571313]/10"></div>
  <div className="">
          <div className="bg-[#FBF7F2] p-4 text-center  rounded-[8px] ">
            <img
              src="https://i.postimg.cc/JnBwP30d/Product-Card.png"
              className="mx-auto mb-4"
            />
          </div><Link to='/productList'> <p className="text-[16px] text-center text-[#1D0B01] font-medium">
              View All Perfume
            </p></Link>
        </div>
  </div>
</div>


  {/* HOLIDAY SALE */}
  <Link to='holidayOffer'>
  <button className="bg-[#FD4929] text-white text-[16px] px-[12px] py-[14px] rounded-[100px] font-semibold flex items-center gap-[6px] w-full justify-center">
    <img src={Solar} className="h-[17px] w-[17px]" />
    Holiday Sale
  </button></Link>

</div>

      </aside>
    </>
  );
};

export default Navbar;


