import Marquee from "react-fast-marquee";
import { products } from "../data/productsData";


const MarqueeFlavour = () => {
    return (
         <section className="pt-[16px] 2xl:pt-[32px] pb-[16px] 2xl:pb-[32px]">
      <Marquee speed={20} gradient={false} pauseOnHover>
        {products.map((item, index) => (
          <button
            key={index}
            className="bg-[#F5F1EA] text-[#A0174A] px-8 py-3 rounded-full
                       flex items-center text-base 2xl:text-[20px] font-medium
                       mx-2 md:mx-4 whitespace-nowrap"
          >
              {item.title}
            
          </button>
        ))}
      </Marquee>
    </section>
    );
};

export default MarqueeFlavour;