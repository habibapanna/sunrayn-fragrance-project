import Marquee from "react-fast-marquee";
import { products } from "../data/productsData";

const scentBackgrounds = {
  Flowery:
    "https://cdn.shopify.com/s/files/1/0047/4067/7699/files/FLORAL_BUTTON_RIGHT_BG.png?v=1734583632",
  Warm:
    "https://cdn.shopify.com/s/files/1/0047/4067/7699/files/WARM_EXPANDED_BOTTOM_RIGHT.png?v=1734522567",
  Gourmand:
    "https://cdn.shopify.com/s/files/1/0047/4067/7699/files/EDIBLE_EXPANDED_RIGHT.png?v=1734521715",
  Fresh:
    "https://cdn.shopify.com/s/files/1/0047/4067/7699/files/FRESH_BUTTON_RIGHT.png?v=1734358115",
  Earthy:
    "https://cdn.shopify.com/s/files/1/0047/4067/7699/files/EARTHY_EXPANDED_RIGHT.png?v=1734522344",
  Herbal:
    "https://cdn.shopify.com/s/files/1/0047/4067/7699/files/HERBAL_EXPANDED_RIGHT.png?v=1734522155",
};

const MarqueeSection = () => {
  return (
    <section className="">
      <Marquee speed={40} gradient={false} pauseOnHover>
        {products.map((item, index) => {
          const bgImage = scentBackgrounds[item.scentFamily];

          return (
            <button
              key={index}
              className="relative h-[35px] md:h-[55px] rounded-full overflow-hidden 
                         flex items-center justify-center
                         mx-2 px-4 md:mx-4 md:px-8 whitespace-nowrap
                         text-white font-medium
                         transition duration-500 hover:scale-[1.05]"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Text */}
              <span className="relative z-10 text-[14px] lg:text-[18px]">
                Scent Family&nbsp;
                <span className="underline font-semibold ml-1">
                  {item.scentFamily}
                </span>
              </span>
            </button>
          );
        })}
      </Marquee>
    </section>
  );
};

export default MarqueeSection;
