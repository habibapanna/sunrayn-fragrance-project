import { useState, useEffect } from "react";
import { GoChevronDown } from "react-icons/go";
import { useNavigate, Link } from "react-router-dom";
import User from "../assets/User Icon.svg";
import Solar from "../assets/Vector (4).svg";

const MenuOverlay = ({ open, onClose, onOpenSignIn }) => {
  const navigate = useNavigate();

  const [openPerfume, setOpenPerfume] = useState(true);
  const [openCollection, setOpenCollection] = useState(true);
const [animateIcon, setAnimateIcon] = useState(false);
  const [selectedPerfume, setSelectedPerfume] = useState(null);
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [selectedAbout, setSelectedAbout] = useState(null);

  if (!open) return null;

  const handleNavigate = (path, type, value) => {
    if (type === "perfume") setSelectedPerfume(value);
    if (type === "collection") setSelectedCollection(value);
    if (type === "about") setSelectedAbout(value);

    onClose(); // close sidebar
    navigate(path);
  };

  useEffect(() => {
  if (open) {
    // small delay so animation plays after mount
    setTimeout(() => {
      setAnimateIcon(true);
    }, 50);
  } else {
    setAnimateIcon(false);
  }
}, [open]);


  return (
    <div className="fixed inset-0 z-[70] bg-black/40 ">

      {/* PANEL */}
      <div className="absolute left-0 top-0 w-full max-w-full h-full bg-white overflow-y-auto px-[20px] pb-[30px]">

        {/* HEADER */}
        <div className="flex items-center justify-between py-[16px]">
          <button
            onClick={onOpenSignIn}
            className="flex items-center gap-[8px]"
          >
            <img src={User} alt="" />
            <span className="font-semibold text-[16px]">Login</span>
          </button>

          <button
            onClick={onClose}
            className="text-[16px] underline"
          >
            Close
          </button>
        </div>

         {/* SEARCH BAR */}
        <div className="relative mb-[24px]">
          <input
            type="text"
            placeholder='Search scents, brands etc.'
            className="w-full h-[40px] rounded-[100px] bg-[#F6F7F2] py-[10px] pr-[5px] pl-[24px] outline-none text-[#3A3F42] lg:text-[16px] text-sm"
          />

          {/* ANIMATED RED SEARCH BUTTON */}
<button
  className={`
    absolute top-1/2 -translate-y-1/2
    right-[6px]
    h-[30px] w-[30px]
    rounded-full bg-[#FD4929]
    flex items-center justify-center cursor-pointer
    transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)]
    ${
      animateIcon
        ? "translate-x-0"
        : "-translate-x-[340px] md:-translate-x-[580px] lg:-translate-x-[900px]"
    }
  `}
>

  <svg
    width="20"
    height="20"
    fill="none"
    stroke="white"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
</button>

        </div>

        {/* MOBILE TABS */}
        <div className="tabs tabs-lift">

          {/* SHOP TAB */}
          <input
            type="radio"
            name="menu_tabs"
            className="tab"
            aria-label="SHOP"
            defaultChecked
          />

          <div className="tab-content bg-base-100 p-4">

            {/* PERFUMES */}
            <div className="bg-white rounded-[16px] p-[16px] mb-[16px]">

              <div
                onClick={() => setOpenPerfume(!openPerfume)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h3 className="font-semibold">Perfumes</h3>
                <GoChevronDown className={`${openPerfume ? "rotate-180" : ""}`} />
              </div>

              {openPerfume && (
                <div className="mt-[12px] space-y-[8px] bg-[#F6F7F2] p-3 rounded-xl text-[14px]">

                  {["Men", "Women", "Unisex"].map((item) => (
                    <div
                      key={item}
                      onClick={() =>
                        handleNavigate("/productList", "perfume", item)
                      }
                      className={`px-3 py-2 rounded-lg cursor-pointer ${
                        selectedPerfume === item
                          ? "bg-white"
                          : "bg-[#F6F7F2]"
                      }`}
                    >
                      {item}
                    </div>
                  ))}

                </div>
              )}
            </div>

            {/* COLLECTIONS */}
            <div className="bg-white rounded-[16px] p-[16px]">

              <div
                onClick={() => setOpenCollection(!openCollection)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h3 className="font-semibold">Collections</h3>
                <GoChevronDown className={`${openCollection ? "rotate-180" : ""}`} />
              </div>

              {openCollection && (
                <div className="mt-[12px] space-y-[8px] bg-[#F6F7F2] p-3 rounded-xl text-[14px]">

                  {[
                    "All Perfumes",
                    "New Arrivals",
                    "Limited Editions",
                    "Combo Sales",
                  ].map((item) => (
                    <div
                      key={item}
                      onClick={() =>
                        handleNavigate("/productList", "collection", item)
                      }
                      className={`px-3 py-2 rounded-lg cursor-pointer ${
                        selectedCollection === item
                          ? "bg-white"
                          : "bg-[#F6F7F2]"
                      }`}
                    >
                      {item}
                    </div>
                  ))}

                </div>
              )}
            </div>

          </div>

          {/* ABOUT TAB */}
          <input
            type="radio"
            name="menu_tabs"
            className="tab"
            aria-label="ABOUT"
          />

          <div className="tab-content bg-base-100 p-4">

            <div className="bg-[#F6F7F2] p-3 rounded-xl space-y-[8px] text-[14px]">

              {[
                { label: "About Us", path: "/about" },
                { label: "Contact Us", path: "/contact" },
              ].map((item) => (
                <div
                  key={item.label}
                  onClick={() =>
                    handleNavigate(item.path, "about", item.label)
                  }
                  className={`px-3 py-2 rounded-lg cursor-pointer ${
                    selectedAbout === item.label
                      ? "bg-white"
                      : "bg-[#F6F7F2]"
                  }`}
                >
                  {item.label}
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* HOLIDAY SALE BUTTON */}
        <Link to="/holidayOffer">
          <button
            onClick={onClose}
            className="mt-[24px] bg-[#FD4929] text-white w-full h-[44px] rounded-full font-semibold flex items-center justify-center gap-[6px]"
          >
            <img src={Solar} alt="" />
            Holiday Sale
          </button>
        </Link>

      </div>
    </div>
  );
};

export default MenuOverlay;
