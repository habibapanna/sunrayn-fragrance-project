import React from "react";
import { Search, ShoppingBag, User } from "lucide-react";
import { LiaAngleDownSolid } from "react-icons/lia";
import { CiShoppingTag } from "react-icons/ci";
import Logo from "../../assets/Logo.png";
import BrandName from "../../assets/Brand Name.png";


const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className=" mx-auto px-6 py-5 flex items-center justify-between text-white">

      {/* LOGO */}
<div className="flex items-center gap-3">
  <img
    src={Logo}
    alt="Brand Logo"
    className="h-10 w-auto"
  />
  <img
    src={BrandName}
    alt="Brand Name"
    className="h-6 w-auto"
  />
</div>


        {/* CENTER MENU */}
       

        {/* RIGHT ICONS */}
      <div className="flex justify-between border-none">
           <div className="hidden md:flex items-center gap-6 bg-white/90 text-[#282828] px-6 py-2 rounded-full shadow mr-16">
          <button className="flex items-center gap-1 text-sm font-medium">
            Perfumes
           <LiaAngleDownSolid />
          </button>

          <button className="flex items-center gap-1 text-sm font-medium">
            Collections
            <LiaAngleDownSolid />
          </button>

          <span className="bg-[#FD4929] text-white text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1">
            <CiShoppingTag className="text-xl" />
             Holiday Sale
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-white/90 text-black p-2 rounded-full hover:bg-white transition">
            <Search className="text-[#744F18]" size={18} />
          </button>

          <button className="bg-white/90 text-black p-2 rounded-full hover:bg-white transition">
            <ShoppingBag className="text-[#744F18]" size={18} />
          </button>

          <button className="bg-white/90 text-black p-2 rounded-full hover:bg-white transition">
            <User className="text-[#744F18]" size={18} />
          </button>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
