import React, { useState } from "react";
import { Search, ShoppingBag, User } from "lucide-react";
import { LiaAngleDownSolid } from "react-icons/lia";
import { CiShoppingTag } from "react-icons/ci";
import Logo from "../../assets/Logo.png";
import Solar from "../../assets/solar_tag-bold.png";
import Icon from "../../assets/Icon (Stroke).png";
import Frame from "../../assets/Frame (1).png";
import Users from "../../assets/User Icon.png";
import BrandName from "../../assets/Brand Name.png";
import { Link } from "react-router-dom";


const Navbar = () => {
   const [open, setOpen] = useState(false);
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className=" mx-auto px-[32px] py-[24px] flex items-center justify-between text-white">

 {/* LOGO */}
<Link to="/" className="flex items-center gap-3 cursor-pointer">
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
</Link>



        {/* CENTER MENU */}
       

        {/* RIGHT ICONS */}
      <div className="flex justify-between border-none gap-[24px]">
           <div className="hidden md:flex items-center gap-[24px] bg-white/90 text-[#282828] pr-[9px] pl-[24px] py-[12px] rounded-[100px]  shadow mr-16 w-[426px] h-[50px]">
          <button className="flex items-center gap-[4px] text-[16px] font-normal">
            Perfumes
           <LiaAngleDownSolid className="text-[24px] text-[#282828] cursor-pointer" />
          </button>

          <button className="flex items-center gap-[4px] text-[16px] font-normal">
            Collections
            <LiaAngleDownSolid className="text-[24px] text-[#282828] cursor-pointer" />
          </button>

          <span className="bg-[#FD4929] text-white text-[16px] px-[12px] py-[7px] rounded-[100px] font-semibold flex items-center gap-[6px] cursor-pointer w-[139px] h-[34px]">
            <img src={Solar} alt="" className="h-[17px] w-[17px]" />
             Holiday Sale
          </span>
        </div>
        <div className="flex items-center gap-[16px]">
          <button className="bg-white/90 p-[15px] rounded-[100px] cursor-pointer h-[50px] w-[50px]">
           <img src={Icon} alt="" className="h-[20px] w-[20px]" />
          </button>

          <button className="bg-white/90 p-[15px] rounded-[100px] cursor-pointer h-[50px] w-[50px]">
             <img src={Frame} alt="" className="h-[20px] w-[20px]" />
          </button>

          <button className="bg-white/90 p-[15px] rounded-[100px]  cursor-pointer h-[50px] w-[50px]">
            <img src={Users} alt="" className="h-[20px] w-[20px]" /> 
          </button>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;

