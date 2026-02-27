import { useState } from "react";
import { Plus, Minus } from "lucide-react";


const scentFamilies = [
  {
    name: "Flowery",
    bg: "https://cdn.shopify.com/s/files/1/0047/4067/7699/files/FLORAL_BUTTON_RIGHT_BG.png?v=1734583632",
    img: "https://cdn.shopify.com/s/files/1/0047/4067/7699/files/FLORAL_BUTTON_LEFT_BG.png?v=1734572997",
    image: "https://cdn.shopify.com/s/files/1/0047/4067/7699/files/FLORAL_BUTTON_LEFT_BG.png?v=1734572997",
    color: "#E3A7A7",
    title: "The Floral fragrance category lets you select and spray the essence of your favorite bouquet.",
    description:
      "Choose from our largest fragrance family to find the flowery scents that make you stop, smell, and feel the most like you. Love roses, jasmine, clean white flowers, or anything in between? There's something for everyone, whether you're an elegant and timeless or modern and trendsetting fragrance lover.",
  },
  {
    name: "Fresh",
    bg: "https://cdn.shopify.com/s/files/1/0047/4067/7699/files/FRESH_BUTTON_RIGHT.png?v=1734358115",
    img: "https://cdn.shopify.com/s/files/1/0047/4067/7699/files/FRESH_BUTTON_LEFT.png?v=1734104601",
    image: "https://cdn.shopify.com/s/files/1/0047/4067/7699/files/FREH_EXPANDED_TOP_RIGHT.png?v=1734354301",
    color: "#C6E09E",
     title: "The Fresh fragrance category includes scent families that excuse uplifting and bright sensibilities.",
    description:
      "They evoke energies that smell zesty and fresh with aromas that remind you of citrus fruits and the crisp breeze of a marina. Fragrances in this category mainly have prominent citrus (orange, bergamot, and grapefruit) and aquatic notes (marine, waterfruits, etc.) to remind you of a Mediterranean summer getaway.",
  },
  {
    name: "Gourmand",
    bg: "https://cdn.shopify.com/s/files/1/0047/4067/7699/files/EDIBLE_EXPANDED_RIGHT.png?v=1734521715",
    img: "https://cdn.shopify.com/s/files/1/0047/4067/7699/files/EDIBLE_EXPANDED_LEFT.png?v=1734521636",
    image: "https://cdn.shopify.com/s/files/1/0047/4067/7699/files/EDIBLE_TOP_RIGHT.png?v=1734521877",
    color: "#E9A97F",
    title: "The Floral fragrance category lets you select and spray the essence of your favorite bouquet.",
    description:
      "Choose from our largest fragrance family to find the flowery scents that make you stop, smell, and feel the most like you. Love roses, jasmine, clean white flowers, or anything in between? There's something for everyone, whether you're an elegant and timeless or modern and trendsetting fragrance lover.",
  },
  {
    name: "Herbal",
    bg: "https://cdn.shopify.com/s/files/1/0047/4067/7699/files/HERBAL_EXPANDED_RIGHT.png?v=1734522155",
    img: "https://cdn.shopify.com/s/files/1/0047/4067/7699/files/HERBAL_EXPANDED_LEFT.png?v=1734522155",
    image: "https://cdn.shopify.com/s/files/1/0047/4067/7699/files/HERBAL_TOP_RIGHT.png?v=1734522154",
    color: "#B7C95F",
     title: "The Floral fragrance category lets you select and spray the essence of your favorite bouquet.",
    description:
      "Choose from our largest fragrance family to find the flowery scents that make you stop, smell, and feel the most like you. Love roses, jasmine, clean white flowers, or anything in between? There's something for everyone, whether you're an elegant and timeless or modern and trendsetting fragrance lover.",
  },
  {
    name: "Earthy",
    bg: "https://cdn.shopify.com/s/files/1/0047/4067/7699/files/EARTHY_EXPANDED_RIGHT.png?v=1734522344",
    img: "https://cdn.shopify.com/s/files/1/0047/4067/7699/files/EARTHY_EXPANDED_LEFT.png?v=1734522344",
    image: "https://cdn.shopify.com/s/files/1/0047/4067/7699/files/EARTHY_TOP_RIGHT.png?v=1734522343",
    color: "#D5B79A",
    title: "The Floral fragrance category lets you select and spray the essence of your favorite bouquet.",
    description:
      "Choose from our largest fragrance family to find the flowery scents that make you stop, smell, and feel the most like you. Love roses, jasmine, clean white flowers, or anything in between? There's something for everyone, whether you're an elegant and timeless or modern and trendsetting fragrance lover.",
  },
  {
    name: "Warm",
    bg: "https://cdn.shopify.com/s/files/1/0047/4067/7699/files/WARM_EXPANDED_BOTTOM_RIGHT.png?v=1734522567",
    img: "https://cdn.shopify.com/s/files/1/0047/4067/7699/files/WARM_EXPANDED_TOP_LEFT.png?v=1734522567",
    image: "https://cdn.shopify.com/s/files/1/0047/4067/7699/files/WARM_TOP_RIGHT.png?v=1734522566",
    color: "#E6C15F",
     title: "The Floral fragrance category lets you select and spray the essence of your favorite bouquet.",
    description:
      "Choose from our largest fragrance family to find the flowery scents that make you stop, smell, and feel the most like you. Love roses, jasmine, clean white flowers, or anything in between? There's something for everyone, whether you're an elegant and timeless or modern and trendsetting fragrance lover.",
  },
];

const ScentFamily = () => {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };
    return (
        <div>
              <section className="bg-[#FAFAFA] px-6 lg:px-20 py-24">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="mb-16">
            <h1 className="text-[36px] lg:text-[52px] font-medium text-[#111] leading-tight mb-6">
              Find out more about our <br />
              <span className="font-semibold text-[#A0174A]">Scent Families.</span>
            </h1>

            <p className="text-gray-600 text-lg max-w-xl">
              We've categorized our collection into 6 unique olfactive
              families. These serve as the foundation for every composition we develop.
            </p>
          </div>

<div className="space-y-6">
  {scentFamilies.map((item, index) => {
    const isOpen = active === index;

    return (
      <div
        key={index}
        onClick={() => toggle(index)}
        className={`relative cursor-pointer transition-all duration-500 ease-in-out 
        ${isOpen ? "py-10 md:py-14 rounded-3xl" : "h-[90px] rounded-xl flex items-center"}
        max-w-4xl mx-auto`}
        style={{ backgroundColor: item.color }}
      >
        {/* PLUS / MINUS ICON (FIXED POSITION ALWAYS) */}
        <div className={`absolute right-2 md:right-8 top-2 md:top-1/2 md:-translate-y-1/2 bg-white rounded-full p-2 z-40 shadow-sm text-[#A0174A]  ${
    isOpen
      ? "top-2 md:top-6 md:translate-y-0"
      : "top-2 md:top-1/2 md:-translate-y-1/2"
  } `}>
          {isOpen ? <Minus size={18}  /> : <Plus size={18} />}
        </div>

        {/* Decorative BG (Main Container) */}
        <img
          src={item.bg}
          alt=""
          className={`absolute right-0 bottom-0 transition-all duration-500 object-cover pointer-events-none
          ${isOpen ? "w-[70%] opacity-100" : "w-[60%] h-full opacity-100"}
          `}
        />

        {/* LEFT IMAGE (only desktop open) */}
        {isOpen && (
          <img
            src={item.img}
            alt=""
            className="hidden md:block absolute top-0 left-0 h-full w-[45%] object-cover pointer-events-none"
          />
        )}

        {/* WHITE CARD */}
        <div
          className={`relative bg-white z-30 transition-all duration-500 ease-in-out
          ${isOpen
              ? "w-[88%] md:w-[60%] lg:w-[40%] rounded-2xl p-6 md:p-8"
              : "w-[70%] md:w-[60%] lg:w-[40%] rounded-xl px-6 py-4 h-[60px] flex items-center"}
          ml-5 md:ml-12`}
        >
          {/* TOP RIGHT IMAGE (only when open) */}
          {isOpen && (
            <img
              src={item.image}
              alt=""
              className="absolute top-0 right-0 w-[35%] md:w-[30%] pointer-events-none"
            />
          )}

          {/* BOTTOM RIGHT BG (inside white card) */}
          <img
            src={item.bg}
            alt=""
            className={`absolute bottom-0 right-0 transition-all duration-500 object-cover pointer-events-none
            ${isOpen ? "w-[55%]" : "w-[45%] h-full"}
            `}
          />

          {/* CONTENT */}
          <div className="relative z-10">
            <h2 className={`font-semibold ${isOpen ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}`}>
              {item.name}
            </h2>

            {isOpen && (
              <>
                <p className="mt-3 text-gray-900 leading-relaxed text-sm font-semibold">
                  {item.title}
                </p>
                <p className="mt-2 text-gray-600 leading-relaxed text-xs md:text-sm">
                  {item.description}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    );
  })}
</div>
        </div>
      </section>
        </div>
    );
};

export default ScentFamily;