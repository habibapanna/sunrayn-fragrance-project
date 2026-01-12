import React from "react";
import { Search, ShoppingBag, User } from "lucide-react";
import { LiaAngleDownSolid } from "react-icons/lia";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className=" mx-auto px-6 py-5 flex items-center justify-between text-white">

        {/* LOGO */}
        <div className="flex items-center gap-2 font-semibold text-xl">
          <span className="tracking-widest">SANRAYN</span>
        </div>

        {/* CENTER MENU */}
        <div className="hidden md:flex items-center gap-6 bg-white/90 text-black px-6 py-2 rounded-full shadow">
          <button className="flex items-center gap-1 text-sm font-medium">
            Perfumes
           <LiaAngleDownSolid />
          </button>

          <button className="flex items-center gap-1 text-sm font-medium">
            Collections
            <LiaAngleDownSolid />
          </button>

          <span className="bg-orange-600 text-white text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1">
             Holiday Sale
          </span>
        </div>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-4">
          <button className="bg-white/90 text-black p-2 rounded-full hover:bg-white transition">
            <Search size={18} />
          </button>

          <button className="bg-white/90 text-black p-2 rounded-full hover:bg-white transition">
            <ShoppingBag size={18} />
          </button>

          <button className="bg-white/90 text-black p-2 rounded-full hover:bg-white transition">
            <User size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
