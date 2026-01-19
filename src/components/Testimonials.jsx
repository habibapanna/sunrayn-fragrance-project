import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

import Quote from "../../src/assets/Review text (1).png";
import Reviewer from "../../src/assets/Reviewer photo (1).png";
import material from "../../src/assets/material-symbols-light_verified-rounded.png";

const testimonials = [
  {
    bg: "#F6EAEF",
    title: "The Best Perfume",
    text:
      "From the moment I tried Sanrayn, I knew it would become part of my daily routine. It’s long-lasting yet gentle, with a depth that truly elevates your presence. What I appreciate most is the brand’s respect for purity and values. This isn’t just a perfume it’s an experience that stays with you.",
  },
  {
    bg: "#E6F3EF",
    title: "Best of the Best",
    text:
      "From the moment I tried Sanrayn, I knew it would become part of my daily routine. It’s long-lasting yet gentle, with a depth that truly elevates your presence. What I appreciate most is the brand’s respect for purity and values.",
  },
  {
    bg: "#EEEBFF",
    title: "New Obsession. Love It",
    text:
      "From the moment I tried Sanrayn, I knew it would become part of my daily routine. It’s long-lasting yet gentle, with a depth that truly elevates your presence. What I appreciate most is the brand’s respect for purity and values.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // ✅ Responsive cards per view
  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1280) setCardsPerView(3);
      else if (window.innerWidth >= 768) setCardsPerView(2);
      else setCardsPerView(1);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = testimonials.length - cardsPerView;

  const next = () => setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));

  // ✅ Touch/Swipe support
  const minSwipeDistance = 50;
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) next();
    if (distance < -minSwipeDistance) prev();
  };

  return (
    <div className="mx-auto max-w-full px-[16px] pb-[16px] md:pr-[32px] md:pb-[32px]">
      {/* HEADER */}
      <div className="flex justify-between mb-[16px] md:mb-[32px]">
        <p className="text-[25px] md:text-[50px] font-semibold text-[#282828] pl-[16px]">
          What Fragrance Lovers Are Saying About Sanrayn
        </p>

        <div className="hidden lg:flex gap-5">
          <button
            onClick={prev}
            className="w-[55px] h-[55px] rounded-full bg-[#F5F1EA] shadow flex items-center justify-center cursor-pointer"
          >
            <GoChevronLeft className="text-[35px]" />
          </button>
          <button
            onClick={next}
            className="w-[55px] h-[55px] rounded-full bg-[#F5F1EA] shadow flex items-center justify-center cursor-pointer"
          >
            <GoChevronRight className="text-[35px]" />
          </button>
        </div>
      </div>

      {/* CAROUSEL */}
      <section
        className="overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
       <div
  className="flex transition-transform duration-500 ease-in-out"
  style={{
    transform: `translateX(-${current * (100 / cardsPerView)}%)`,
  }}
>
  {testimonials.map((item, i) => (
    <div
      key={i}
      className="flex-shrink-0 px-[16px]"
      style={{ flex: `0 0 ${100 / cardsPerView}%` }} // flex-basis fixes last card
    >
      {/* CARD */}
      <div
        className="relative rounded-[31px] overflow-hidden h-full md:h-[700px] p-[20px] lg:p-[50px]"
        style={{ backgroundColor: item.bg }}
      >
                <div className="flex flex-col h-full">
                  <img src={Quote} className="w-[145px] h-[74px]" />

                  <div className="flex gap-[6px] mt-[48px] mb-[12px] text-[#FF9100]">
                    {[...Array(5)].map((_, idx) => (
                      <FaStar key={idx} className="h-[24px] w-[24px]" />
                    ))}
                  </div>

                  <h3 className="text-[#571313] text-[35px] font-semibold mb-[48px]">
                    {item.title}
                  </h3>

                  <p className="text-[#0D0C09] text-[20px]">{item.text}</p>

                  {/* FOOTER */}
                  <div className="flex items-center gap-4 mt-auto pt-[50px]">
                    <img
                      src={Reviewer}
                      className="w-[55px] h-[55px] rounded-full"
                    />
                    <div>
                      <p className="text-[24px] font-semibold text-[#0D0C09]">
                        Rebeca Pipard
                      </p>
                      <div className="flex items-center gap-2">
                        <img src={material} className="w-[24px] h-[24px]" />
                        <span className="text-[16px] text-[#282828]">
                          Verified Customer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE ARROWS */}
        <div className="flex lg:hidden gap-4 mt-6 justify-center">
          <button
            onClick={prev}
            className="w-[40px] h-[40px] rounded-full bg-[#F5F1EA] shadow flex items-center justify-center"
          >
            <GoChevronLeft className="text-[28px]" />
          </button>
          <button
            onClick={next}
            className="w-[40px] h-[40px] rounded-full bg-[#F5F1EA] shadow flex items-center justify-center"
          >
            <GoChevronRight className="text-[28px]" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
