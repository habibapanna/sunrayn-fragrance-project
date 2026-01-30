import { useState } from "react";

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
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % premiumItems.length);
  const prev = () =>
    setIndex((i) => (i - 1 + premiumItems.length) % premiumItems.length);

  return (
    <>
      {/* ================= DESKTOP ================= */}
      <section className=" pb-[16px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[16px] 2xl:gap-[32px]">
          {premiumItems.map((item, i) => (
            <div
              key={i}
              className=" rounded-[24px]  p-[32px] flex justify-center items-center"
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
    </>
  );
};

export default Premium;
