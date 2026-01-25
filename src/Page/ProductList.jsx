import { FaStar } from "react-icons/fa";
import MarqueeFlavour from "../components/MarqueeFlavour";
import MarqueeSection from "../components/MarqueeSection";
import NewsLetter from "../components/NewsLetter";
import Premium from "../components/Premium";
import { useState, useRef, useEffect } from "react";

const scentOptions = [
  "Flowery",
  "Fresh",
  "Gourmand",
  "Herbal",
  "Earthy",
  "Warm",
];

const genderOptions = ["Man", "Women", "Unisex"];

const items = [
  {
    title: "Ambery Saffron",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
    off: 'Bestseller',
  },
  {
    title: "Ambery Saffron",
    product: "https://i.postimg.cc/WpSytKqM/c082e350-40e9-4486-acfd-e19a5713042c-1-(1).png",
    off: '',
  },
  {
    title: "Ambery Saffron",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
    off: 'New',
  },
  {
    title: "Ambery Saffron",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
    off: '',
  },
  {
    title: "Ambery Saffron",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
    off: 'New',
  },
  {
    title: "Ambery Saffron",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
    off: '',
  },
  {
    title: "Ambery Saffron",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
    off: 'Discount',
  },
  {
    title: "Ambery Saffron",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
    off: '',
  },
  {
    title: "Ambery Saffron",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
    off: '',
  },
  {
    title: "Ambery Saffron",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
    off: '',
  },
  {
    title: "Ambery Saffron",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
    off: '',
  },
  {
    title: "Ambery Saffron",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
    off: 'Discount',
  },
  
];
const products = [
  {
    title: "All Perfumes",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
  },
  {
    title: "New Arrivals",
    product: "https://i.postimg.cc/WpSytKqM/c082e350-40e9-4486-acfd-e19a5713042c-1-(1).png",
  },
  {
    title: "Best Sellers",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
  },
  {
    title: "Combo Sales",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
  },
  {
    title: "Holiday Sale",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
  },
];

const ProductList = () => {
    const [openScent, setOpenScent] = useState(false);
const [openGender, setOpenGender] = useState(false);
const [selectedScents, setSelectedScents] = useState([]);
const [selectedGender, setSelectedGender] = useState([]);

const scentRef = useRef(null);
const genderRef = useRef(null);

useEffect(() => {
  const handleClickOutside = (e) => {
    if (scentRef.current && !scentRef.current.contains(e.target)) {
      setOpenScent(false);
    }
    if (genderRef.current && !genderRef.current.contains(e.target)) {
      setOpenGender(false);
    }
  };
  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);

    return (
        <div className="py-[16px] 2xl:pb-[32px] 2xl:px-[32px] px-[16px]">
           <div className=" flex justify-center gap-[16px] 2xl:gap-[32px] py-[16px] 2xl:pb-[32px]">
  {products.map((item, i) => (
    <div
      key={i}
      className="bg-[#F6F7F2] rounded-[24px] flex flex-col lg:flex-row items-center gap-[16px] p-[16px] 2xl:gap-[32px] 2xl:p-[24px] w-full"
    >
      <h3 className="text-[20px] lg:text-[35px] font-semibold text-[#1D0B01]">
        {item.title}
      </h3>

      <img
        src={item.product}
        alt={item.title}
        className="object-cover h-[108px] w-[108px]"
      />
    </div>
  ))}
</div>
{/* Filter */}
<section className="w-full pb-[16px] 2xl:pb-[32px]">
      <div className="flex flex-wrap items-center gap-[12px]">
        
        {/* Sort & Filter */}
        <button className="flex items-center gap-[8px] bg-[#F6F7F2] rounded-full px-[18px] py-[12px] text-[#1D0B01] font-medium text-[16px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M17.7096 10.0002H7.4138M3.77964 10.0002H2.29297M3.77964 10.0002C3.77964 9.51842 3.97103 9.05635 4.31172 8.71566C4.65242 8.37497 5.11449 8.18357 5.5963 8.18357C6.07811 8.18357 6.54019 8.37497 6.88088 8.71566C7.22157 9.05635 7.41297 9.51842 7.41297 10.0002C7.41297 10.482 7.22157 10.9441 6.88088 11.2848C6.54019 11.6255 6.07811 11.8169 5.5963 11.8169C5.11449 11.8169 4.65242 11.6255 4.31172 11.2848C3.97103 10.9441 3.77964 10.482 3.77964 10.0002ZM17.7096 15.5061H12.9196M12.9196 15.5061C12.9196 15.988 12.7278 16.4506 12.387 16.7914C12.0462 17.1321 11.5841 17.3236 11.1021 17.3236C10.6203 17.3236 10.1582 17.1313 9.81756 16.7906C9.47687 16.45 9.28547 15.9879 9.28547 15.5061M12.9196 15.5061C12.9196 15.0241 12.7278 14.5624 12.387 14.2216C12.0462 13.8808 11.5841 13.6894 11.1021 13.6894C10.6203 13.6894 10.1582 13.8808 9.81756 14.2215C9.47687 14.5622 9.28547 15.0243 9.28547 15.5061M9.28547 15.5061H2.29297M17.7096 4.4944H15.1221M11.488 4.4944H2.29297M11.488 4.4944C11.488 4.01259 11.6794 3.55051 12.0201 3.20982C12.3607 2.86913 12.8228 2.67773 13.3046 2.67773C13.5432 2.67773 13.7794 2.72472 13.9998 2.81602C14.2203 2.90732 14.4205 3.04113 14.5892 3.20982C14.7579 3.37852 14.8917 3.57878 14.983 3.79919C15.0743 4.0196 15.1213 4.25583 15.1213 4.4944C15.1213 4.73297 15.0743 4.9692 14.983 5.18961C14.8917 5.41002 14.7579 5.61029 14.5892 5.77898C14.4205 5.94767 14.2203 6.08149 13.9998 6.17278C13.7794 6.26408 13.5432 6.31107 13.3046 6.31107C12.8228 6.31107 12.3607 6.11967 12.0201 5.77898C11.6794 5.43829 11.488 4.97621 11.488 4.4944Z" stroke="#282828" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round"/>
</svg>
          SORT & FILTER
        </button>

        {/* Search bar */}
        <div className="flex-1 min-w-[260px]">
          <div className="relative">
            <input
              type="text"
              placeholder="Search scents, brands, ingredients"
              className="w-full bg-[#F6F7F2] rounded-full py-[12px] pl-[16px] pr-[24px] outline-none text-[#1D0B01]"
            />
           <span className="absolute right-[16px] top-[12px] bottom-[12px]"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.58464 3.33366C6.13286 3.33366 3.33464 6.13188 3.33464 9.58366C3.33464 13.0354 6.13286 15.8337 9.58464 15.8337C11.2622 15.8337 12.7854 15.1727 13.9081 14.097C13.934 14.0611 13.9631 14.0267 13.9955 13.9944C14.0278 13.9621 14.0621 13.9329 14.0981 13.907C15.1737 12.7844 15.8346 11.2612 15.8346 9.58366C15.8346 6.13188 13.0364 3.33366 9.58464 3.33366ZM15.7409 14.5614C16.8418 13.2015 17.5013 11.4696 17.5013 9.58366C17.5013 5.2114 13.9569 1.66699 9.58464 1.66699C5.21238 1.66699 1.66797 5.2114 1.66797 9.58366C1.66797 13.9559 5.21238 17.5003 9.58464 17.5003C11.4706 17.5003 13.2025 16.8408 14.5624 15.7399L16.912 18.0896C17.2375 18.415 17.7651 18.415 18.0905 18.0896C18.416 17.7642 18.416 17.2365 18.0906 16.9111L15.7409 14.5614Z" fill="#1D0B01"/>
</svg></span>
          </div>
        </div>

        {/* Gender */}
       <div className="relative" ref={genderRef}>
  <button
    onClick={() => setOpenGender(!openGender)}
    className="flex items-center gap-[8px] bg-[#F6F7F2] rounded-full px-[18px] py-[12px] text-[16px] cursor-pointer"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
  <path d="M7.75892 14.4731C5.40785 12.715 0.75 8.69567 0.75 5.0787C0.75 2.68802 2.50438 0.75 4.91667 0.75C6.16667 0.75 7.41667 1.16667 9.08333 2.83333C10.75 1.16667 12 0.75 13.25 0.75C15.6622 0.75 17.4167 2.68802 17.4167 5.0787C17.4167 8.69567 12.7588 12.715 10.4077 14.4731C9.61658 15.0647 8.55008 15.0647 7.75892 14.4731Z" stroke="#1D0B01" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    Gender
     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M5 9.16699L10 14.167L15 9.16699" stroke="#282828" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  </button>

  {openGender && (
    <div className="absolute top-[56px] left-0 w-[180px] bg-white rounded-[16px] shadow-lg p-[12px] z-50">
      <ul className="space-y-[8px]">
        {genderOptions.map((item) => {
          const active = selectedGender.includes(item);
          return (
            <li
              key={item}
              onClick={() =>
                setSelectedGender((prev) =>
                  active ? prev.filter((v) => v !== item) : [...prev, item]
                )
              }
              className={`flex items-center gap-[10px] px-[10px] py-[8px] rounded-[10px] cursor-pointer ${
                active ? "bg-[#F6F7F2]" : ""
              }`}
            >
              <div
                className={`w-[18px] h-[18px] rounded-[7px] border flex items-center justify-center ${
                  active
                    ? "bg-[#C8A44B] border-[#C8A44B]"
                    : "border-[#3A3F42]"
                }`}
              >
                {active && (
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <path
                      d="M2.5 6.5L5 9L9.5 3.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <span className="text-[16px] text-[#282828]">{item}</span>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => setSelectedGender([])}
        className="text-[14px] underline text-left ml-[12px] mt-[10px] cursor-pointer"
      >
        Clear ({selectedGender.length})
      </button>
    </div>
  )}
</div>


        {/* Scent family */}
      <div className="relative" ref={scentRef}>
  <button
    onClick={() => setOpenScent(!openScent)}
    className="flex items-center gap-[8px] bg-[#F6F7F2] rounded-full px-[18px] py-[12px] text-[16px] cursor-pointer"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M1.66797 13.3611C1.66797 14.9974 2.30399 16.4861 3.34362 17.5959C3.92211 18.2135 4.4392 18.3333 5.27539 18.3333H10.5606C11.3967 18.3333 11.9138 18.2135 12.4923 17.5959C13.532 16.4861 14.168 14.9974 14.168 13.3611C14.168 10.8554 12.6767 8.69617 10.5286 7.71283C10.1611 7.54464 9.83597 7.5 9.43264 7.5H6.40334C5.99994 7.5 5.67477 7.54464 5.30734 7.71283C3.15922 8.69617 1.66797 10.8554 1.66797 13.3611Z" stroke="#1D0B01" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.83203 7.5V6.66667C5.83203 5.28777 6.11981 5 7.4987 5H8.33203C9.71095 5 9.9987 5.28777 9.9987 6.66667V7.5" stroke="#1D0B01" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.16797 5V3.75C9.16797 2.8755 8.85705 2.5 7.91797 2.5C6.97891 2.5 6.66797 2.8755 6.66797 3.75V5" stroke="#1D0B01" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.832 6.66699C17.2127 6.66699 18.332 5.5477 18.332 4.16699C18.332 2.78628 17.2127 1.66699 15.832 1.66699C14.4513 1.66699 13.332 2.78628 13.332 4.16699C13.332 5.5477 14.4513 6.66699 15.832 6.66699Z" stroke="#1D0B01" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5 3.33301H6.66667M9.16667 3.33301H13.3333" stroke="#1D0B01" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    Scent family
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M5 9.16699L10 14.167L15 9.16699" stroke="#282828" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  </button>

  {openScent && (
    <div className="absolute top-[56px] left-0 w-[220px] bg-white rounded-[16px] shadow-lg p-[12px] z-50">
      <ul className="space-y-[10px]">
        {scentOptions.map((item) => {
          const active = selectedScents.includes(item);
          return (
            <li
              key={item}
              onClick={() =>
                setSelectedScents((prev) =>
                  active ? prev.filter((v) => v !== item) : [...prev, item]
                )
              }
              className={`flex items-center gap-[10px] px-[10px] py-[8px] rounded-[10px] cursor-pointer ${
                active ? "bg-[#F6F7F2]" : ""
              }`}
            >
              <div
                className={`w-[18px] h-[18px] rounded-[7px] border flex items-center justify-center ${
                  active
                    ? "bg-[#C8A44B] border-[#C8A44B]"
                    : "border-[#3A3F42]"
                }`}
              >
                {active && (
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <path
                      d="M2.5 6.5L5 9L9.5 3.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <span className="text-[16px] text-[#282828]">{item}</span>
            </li>
          );
        })}
      </ul>

      <button
        onClick={() => setSelectedScents([])}
        className="text-[14px] underline text-left ml-[12px] mt-[10px] cursor-pointer"
      >
        Clear ({selectedScents.length})
      </button>
    </div>
  )}
</div>


        {/* Inspired-by Brands */}
        <button className="flex items-center gap-[8px] bg-[#F6F7F2] rounded-full px-[18px] py-[12px] text-[16px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M12 6L8 6" stroke="#1D0B01"/>
  <rect x="4" y="8" width="12" height="11" rx="1" stroke="#1D0B01" stroke-width="1.25"/>
  <rect x="6" y="11" width="8" height="5" rx="0.15" stroke="#1D0B01" stroke-width="1.25"/>
  <rect x="8" y="4" width="4" height="4" rx="0.15" stroke="#1D0B01" stroke-width="1.25"/>
  <rect x="7" y="1" width="6" height="3" rx="0.15" stroke="#1D0B01" stroke-width="1.25"/>
</svg>
Inspired-by Brands
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M5 9.16699L10 14.167L15 9.16699" stroke="#282828" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </button>

        {/* Collections */}
        <button className="flex items-center gap-[8px] bg-[#F6F7F2] rounded-full px-[18px] py-[12px] text-[16px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M6 13.4189C6.63342 13.0889 7.31328 12.9189 8 12.9189C8.68672 12.9189 9.36658 13.0889 10 13.4189C10.6334 13.7489 11.3133 13.9189 12 13.9189C12.6867 13.9189 13.3666 13.7489 14 13.4189" stroke="#1D0B01" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6 9C6 7.89543 6.89543 7 8 7H12C13.1046 7 14 7.89543 14 9V17C14 17.5523 13.5523 18 13 18H7C6.44772 18 6 17.5523 6 17V9Z" stroke="#1D0B01" stroke-width="1.25"/>
  <path d="M8.38823 5.3993V7H11.6118V5.39932C11.6118 4.2614 12.7604 2.703 11.8198 2.06256C11.7545 2.01805 11.6799 2 11.6118 2H8.38823C8.29384 2 8.21951 2.02002 8.16227 2.05604C7.19914 2.66203 8.38823 4.26138 8.38823 5.3993Z" stroke="#1D0B01" stroke-width="1.25"/>
  <path d="M12 5H8" stroke="#1D0B01"/>
  <path d="M10 7V13" stroke="#1D0B01"/>
</svg>
 Collections
 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M5 9.16699L10 14.167L15 9.16699" stroke="#282828" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </button>

      </div>
    </section>
{/* Cards */}
 <section className="relative overflow-hidden pb-[16px] md:pb-[32px]">
            <div
              className="transition-transform duration-500 ease-in-out grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] 2xl:gap-[32px]"
            >
              {items.map((item, i) => (
                <div
                  key={i}
                  className=""
                >
                    {/* CARD */}
                    <div className="relative rounded-[24px] md:rounded-[48px] overflow-hidden bg-[#EDE8E0] h-[344px] md:h-[700px]">
                       {item.off && (
  <div className="mt-[40px] ml-[40px]">
    <button
      className="bg-[#FFFFE3] px-[12px] lg:px-[16px]
                 rounded-full font-semibold cursor-pointer
                 hover:bg-[#DBAB35]
                 h-[35px]
                 flex items-center justify-center"
    >
      {item.off}
    </button>
  </div>
)}


                      <img
                        src={item.product}
                        alt={item.title}
                        className="absolute inset-0 object-cover mx-auto h-[220px] md:h-[501px]"
                      />
    
                      <div className="absolute bottom-0 left-0 w-full z-20 p-[16px] md:p-[40px]">
                        <div className="flex items-center gap-2 text-[#FF9100]">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="h-[12px] md:h-[15px]" />
                          ))}
                          <span className="text-[#0D0C09] text-[12px] md:text-[14px]">
                            1239
                          </span>
                        </div>
    
                        <h3 className="text-[20px] md:text-[35px] font-semibold text-[#571313]">
                          {item.title}
                        </h3>
    
                        <p className="text-[12px] md:text-[18px] text-[#0D0C09] mb-[12px] md:mb-[26px]">
                          Sanrayn Original
                        </p>
    
                        <div className="flex items-center justify-between gap-3">
                          <button className="bg-white px-[16px] md:px-[24px] py-[6px] md:py-[10px] rounded-full font-semibold hover:bg-[#DBAB35] cursor-pointer 2xl:h-[45px] 2xl:w-[167px]">
                            Add to Cart
                          </button>
    
                          <div className="flex gap-[12px] md:gap-[20px]">
                            <div>
                                <button className="text-[#FC2525] text-[16px] bg-[#FFFFFF80]/50 py-[10px] px-[20px] rounded-[100px] line-through">$20</button>
                            </div>
                           <div className="relative w-[105px] h-[45px]">
  {/* Discount badge */}
  <div className="absolute -top-[10px] left-1/2 -translate-x-1/2 
  bg-[#1D0B01] text-white text-[8px] font-bold z-10 
  h-[14px] w-[44px] 
  flex items-center justify-center">
  -40% Off
</div>


  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="105"
    height="45"
    viewBox="0 0 105 45"
    fill="none"
  >
    <path
      d="M95 11V0H10V11C4.47715 11 0 15.4772 0 21V24C0 29.5228 4.47715 34 10 34V45H95V34C100.523 34 105 29.5228 105 24V21C105 15.4772 100.523 11 95 11Z"
      fill="#BA9948"
    />

    {/* Price text */}
    <text
      x="52.5"
      y="30"
      textAnchor="middle"
      fontSize="16"
      fontWeight="700"
      fill="#FFFFFF"
      fontFamily="sans-serif"
    >
      $29.40
    </text>
  </svg>
</div>

                           
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </section>
            <Premium></Premium>
           <NewsLetter></NewsLetter>
           <MarqueeFlavour></MarqueeFlavour>
           <MarqueeSection></MarqueeSection> 
        </div>
    );
};

export default ProductList;