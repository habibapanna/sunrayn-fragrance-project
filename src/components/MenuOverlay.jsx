import { useState, useEffect } from "react";
import { GoChevronDown } from "react-icons/go";
import { useNavigate, Link } from "react-router-dom";
import User from "../assets/User Icon.svg";
import Solar from "../assets/Vector (4).svg";
import { motion, AnimatePresence } from "framer-motion";

const MenuOverlay = ({ open, onClose, onOpenSignIn }) => {
  const navigate = useNavigate();

  // State for main categories open/close
  const [openPerfume, setOpenPerfume] = useState(true);
  const [openCollection, setOpenCollection] = useState(true);
  const [activeTab, setActiveTab] = useState("shop");

  // State for subcategories open/close
  const [openPerfumeStyle, setOpenPerfumeStyle] = useState(true);
  const [openPerfumeFamily, setOpenPerfumeFamily] = useState(true);
  const [openPerfumeType, setOpenPerfumeType] = useState(true);
  const [openShopByTheme, setOpenShopByTheme] = useState(true);

  // Selected items
  const [selectedPerfume, setSelectedPerfume] = useState(null);
  const [selectedPerfumeFamily, setSelectedPerfumeFamily] = useState(null);
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [selectedShopTheme, setSelectedShopTheme] = useState(null);
  const [selectedAbout, setSelectedAbout] = useState(null);

  const [animateIcon, setAnimateIcon] = useState(false);

  const handleNavigate = (path, type, value) => {
    if (type === "perfume") setSelectedPerfume(value);
    if (type === "perfumeFamily") setSelectedPerfumeFamily(value);
    if (type === "collection") setSelectedCollection(value);
    if (type === "shopTheme") setSelectedShopTheme(value);
    if (type === "about") setSelectedAbout(value);

    onClose(); // close sidebar
    navigate(path);
  };

  useEffect(() => {
    if (open) {
      setTimeout(() => setAnimateIcon(true), 50);
    } else {
      setAnimateIcon(false);
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
        >
          {/* SLIDE PANEL */}
          <motion.div
            initial={{ y: 80, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 80, opacity: 0, scale: 0.96 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute left-1/2 top-1/2
              -translate-x-1/2 -translate-y-1/2
              w-[95%] max-w-[480px]
              max-h-[80vh]
              bg-white rounded-lg
              shadow-2xl
              overflow-y-auto
              px-[20px] pb-[30px]
            "
          >
            {/* HEADER */}
            <div className="flex items-center justify-end py-[16px]">

              <button onClick={onClose} className="text-[16px] underline">
                Close
              </button>
            </div>

            {/* SEARCH BAR */}
<div className="relative mb-[24px]">
  <input
    type="text"
    placeholder="Search scents, brands etc."
    className="w-full h-[40px] rounded-[100px] bg-[#F6F7F2] py-[10px] pr-[5px] pl-[24px] outline-none text-[#3A3F42] lg:text-[16px] text-sm transition-all duration-700"
  />
  <button
    className={`absolute top-1/2 -translate-y-1/2 right-[6px] h-[30px] w-[30px] rounded-full bg-[#FD4929] flex items-center justify-center cursor-pointer transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
      animateIcon
        ? "translate-x-0"
        : "-translate-x-[340px] md:-translate-x-[580px] lg:-translate-x-[900px]"
    }`}
  >
    <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  </button>
</div>
            {/* MENU TABS */}
<div className="bg-white">

  {/* TAB BUTTONS */}
  <div className="flex gap-2">
    <button
      onClick={() => setActiveTab("shop")}
      className={`px-4 py-2 rounded-t-[16px] transition-all duration-500 ${
        activeTab === "shop"
          ? "bg-[#F6F7F2] font-semibold"
          : "bg-white"
      }`}
    >
      SHOP
    </button>

    <button
      onClick={() => setActiveTab("about")}
      className={`px-4 py-2 rounded-t-[16px] transition-all duration-500 ${
        activeTab === "about"
          ? "bg-[#F6F7F2] font-semibold"
          : "bg-white"
      }`}
    >
      ABOUT
    </button>
  </div>

  <AnimatePresence mode="wait">

    {/* SHOP CONTENT */}
    {activeTab === "shop" && (
      <motion.div
        key="shop"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 40 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="bg-[#F6F7F2] p-4 rounded-r-[16px] rounded-bl-[16px]"
      >
        {/* 🔽 KEEP YOUR ENTIRE SHOP CONTENT HERE EXACTLY AS IT IS 🔽 */}

        {/* PERFUMES */}
                <div className="bg-[#F6F7F2] rounded-[16px] mb-[16px]">
                  <div className="flex justify-between items-center cursor-pointer" onClick={() => setOpenPerfume(!openPerfume)}>
                    <h3 className="font-semibold">Perfumes</h3>
                    <GoChevronDown className={`${openPerfume ? "rotate-180" : ""}`} />
                  </div>

                  {openPerfume && (
                    <div className="mt-[12px] space-y-2">

                      {/* Perfume Style */}
                      <div className="bg-[#F6F7F2] p-3 rounded-xl">
                        <div className="flex justify-between cursor-pointer " onClick={() => setOpenPerfumeStyle(!openPerfumeStyle)}>
                          <span className="font-medium">Perfume Style</span>
                          <GoChevronDown className={`${openPerfumeStyle ? "rotate-180" : ""}`} />
                        </div>
                        {openPerfumeStyle && (
                          <div className="mt-2 space-y-2 text-[14px]">
                            {["Men", "Women", "Unisex"].map((item) => (
                              <div
                                key={item}
                                onClick={() => handleNavigate("/productList", "perfume", item)}
                                className={`px-3 py-2 rounded-lg cursor-pointer ${selectedPerfume === item ? "bg-white" : "bg-white"}`}
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Perfume Family */}
                      <div className="bg-[#F6F7F2] p-3 rounded-xl">
                        <div className="flex justify-between cursor-pointer" onClick={() => setOpenPerfumeFamily(!openPerfumeFamily)}>
                          <span className="font-medium">Perfume Family</span>
                          <GoChevronDown className={`${openPerfumeFamily ? "rotate-180" : ""}`} />
                        </div>
                        {openPerfumeFamily && (
                          <div className="mt-2 space-y-2 text-[14px]">
                            {["Flowery", "Warm", "Gourmand", "Fresh", "Earthy", "Herbal"].map((item) => (
                              <div
                                key={item}
                                onClick={() => handleNavigate("/productList", "perfumeFamily", item)}
                                className={`px-3 py-2 rounded-lg cursor-pointer ${selectedPerfumeFamily === item ? "bg-white" : "bg-white"}`}
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                    </div>
                  )}
                </div>

        {/* COLLECTIONS */}
                <div className="bg-[#F6F7F2] rounded-[16px]">
                  <div className="flex justify-between items-center cursor-pointer" onClick={() => setOpenCollection(!openCollection)}>
                    <h3 className="font-semibold">Collections</h3>
                    <GoChevronDown className={`${openCollection ? "rotate-180" : ""}`} />
                  </div>

                  {openCollection && (
                    <div className="mt-[12px] space-y-2">

                      {/* Perfume Type */}
                      <div className="bg-[#F6F7F2] p-3 rounded-xl">
                        <div className="flex justify-between cursor-pointer" onClick={() => setOpenPerfumeType(!openPerfumeType)}>
                          <span className="font-medium">Perfume Type</span>
                          <GoChevronDown className={`${openPerfumeType ? "rotate-180" : ""}`} />
                        </div>
                        {openPerfumeType && (
                          <div className="mt-2 space-y-2 text-[14px]">
                            {["All Perfumes", "New Arrivals", "Combo Sales", "Limited Editions"].map((item) => (
                              <div
                                key={item}
                                onClick={() => handleNavigate("/productList", "collection", item)}
                                className={`px-3 py-2 rounded-lg cursor-pointer ${selectedCollection === item ? "bg-white" : "bg-white"}`}
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Shop by Theme */}
                      <div className="bg-[#F6F7F2] p-3 rounded-xl">
                        <div className="flex justify-between cursor-pointer" onClick={() => setOpenShopByTheme(!openShopByTheme)}>
                          <span className="font-medium">Shop by Theme</span>
                          <GoChevronDown className={`${openShopByTheme ? "rotate-180" : ""}`} />
                        </div>
                        {openShopByTheme && (
                          <div className="mt-2 space-y-2 text-[14px]">
                            {["Best Offers", "Event Perfumes", "Best Sellers"].map((item) => (
                              <div
                                key={item}
                                onClick={() => handleNavigate("/productList", "shopTheme", item)}
                                className={`px-3 py-2 rounded-lg cursor-pointer ${selectedShopTheme === item ? "bg-white" : "bg-white"}`}
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                    </div>
                  )}
                </div>

      </motion.div>
    )}

    {/* ABOUT CONTENT */}
    {activeTab === "about" && (
      <motion.div
        key="about"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="bg-[#F6F7F2] rounded-[16px]"
      >
        <div className="space-y-2 text-[14px] p-[16px]">
          {[
            { label: "About Us", path: "/about" },
            { label: "Contact Us", path: "/contact" },
            { label: "FAQ", path: "/faq" },
          ].map((item) => (
            <div
              key={item.label}
              onClick={() => handleNavigate(item.path, "about", item.label)}
              className="px-3 py-2 rounded-lg cursor-pointer bg-white"
            >
              {item.label}
            </div>
          ))}
        </div>
      </motion.div>
    )}

  </AnimatePresence>
</div>

        
            {/* Spring Offers BUTTON */}
            <Link to="/holidayOffer">
              <button
                onClick={onClose}
                className="mt-[24px] bg-[#FD4929] text-white w-full h-[44px] rounded-full font-semibold flex items-center justify-center gap-[6px]"
              >
                <img src={Solar} alt="" />
                Spring Offers
              </button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuOverlay;
