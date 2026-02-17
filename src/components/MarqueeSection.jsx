import Marquee from "react-fast-marquee";
import { products } from "../data/productsData";


const MarqueeSection = () => {
  return (
    <section className="">
      <Marquee speed={40} gradient={false} pauseOnHover>
        {products.map((item, index) => (
          <button
            key={index}
            className="bg-[#F5F1EA] text-[#A0174A] py-2 px-6 2xl:px-8 md:py-3 rounded-full
                       flex items-center text-[14px] lg:text-[20px] font-medium
                       mx-2 md:mx-4 whitespace-nowrap"
          >
            Scent Family
            <span className="underline font-bold ml-3 cursor-pointer">
              {item.scentFamily}
            </span>
          </button>
        ))}
      </Marquee>
    </section>
  );
};

export default MarqueeSection;
