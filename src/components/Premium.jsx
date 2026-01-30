import { useRef, useState } from "react";

import Crown from "../assets/crown-03.png";
import Checkmark from "../assets/checkmark-badge-01.png";
import Frame from "../assets/Frame (2).png";

const premiumItems = [
  {
    title: "Premium",
    img: "https://i.postimg.cc/DZv8tGB0/b20aa639-c0f6-43b7-b86f-f5199d28323a-1.png",
    desc: "All our fragrances are inspired by an exclusive collection of popular and iconic aromas",
    bg: "radial-gradient(72.36% 72.36% at 50% 50%, #FCF8FA 0%, #F6EAEF 100%)",
    color: "#DC7C2A",
    icon: Crown,
  },
  {
    title: "Certified",
    img: "https://i.postimg.cc/DZv8tGB0/b20aa639-c0f6-43b7-b86f-f5199d28323a-1.png",
    desc: "Certified, skin-friendly formula, cruelty-free, crafted with care to ensure user safety.",
    bg: "radial-gradient(72.36% 72.36% at 50% 50%, #F8FCFB 0%, #E6F3EF 100%)",
    color: "#43B583",
    icon: Checkmark,
  },
  {
    title: "Made with Care",
    img: "https://i.postimg.cc/DZv8tGB0/b20aa639-c0f6-43b7-b86f-f5199d28323a-1.png",
    desc: "Every fragrance is responsibly crafted and carefully inspected to ensure perfection.",
    bg: "radial-gradient(72.36% 72.36% at 50% 50%, #F6F4FF 0%, #EEEBFF 100%)",
    color: "#FF4242",
    icon: Frame,
  },
];

const Premium = () => {
  const sliderRef = useRef(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    const el = sliderRef.current;
    const index = Math.round(el.scrollLeft / el.offsetWidth);
    setActive(index);
  };

  return (
    <section className="pb-[16px]">

      {/* ================= MOBILE SLIDER ================= */}
      <div className="lg:hidden">
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="
            flex gap-[16px]
            overflow-x-auto snap-x snap-mandatory
            scroll-smooth
            no-scrollbar
          "
        >
          {premiumItems.map((item, i) => (
            <div
              key={i}
              className="
                min-w-[100%]
                snap-center
                rounded-[24px]
                p-[24px]
                flex items-center
              "
              style={{ background: item.bg }}
            >
              <div>
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-[50px] w-[50px]"
                />

                <h3
                  className="text-[22px] font-semibold mt-[16px]"
                  style={{ color: item.color }}
                >
                  {item.title}
                </h3>

                <p className="text-[#0D0C09] text-[14px] mt-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-4">
          {premiumItems.map((_, i) => (
            <span
              key={i}
              className={`
                h-[8px] w-[8px] rounded-full
                transition-all duration-300
                ${active === i ? "bg-[#1D0B01] w-[18px]" : "bg-[#CFCFCF]"}
              `}
            />
          ))}
        </div>
      </div>

      {/* ================= DESKTOP GRID ================= */}
      <div className="hidden lg:grid grid-cols-3 gap-[16px] 2xl:gap-[32px]">
        {premiumItems.map((item, i) => (
          <div
            key={i}
            className="rounded-[24px] p-[32px] flex justify-between items-center"
            style={{ background: item.bg }}
          >
            <div>
              <img
                src={item.icon}
                alt={item.title}
                className="h-[60px] w-[60px] 2xl:h-[80px] 2xl:w-[80px]"
              />

              <h3
                className="text-[25px] 2xl:text-[35px] font-semibold mt-[20px]"
                style={{ color: item.color }}
              >
                {item.title}
              </h3>

              <p className="text-[#0D0C09] text-[14px] 2xl:text-[18px] mt-2">
                {item.desc}
              </p>
            </div>

            <div className="hidden 2xl:block">
              <img src={item.img} alt="" />
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Premium;
