import Marquee from "react-fast-marquee";

const flavour = [
  { title: "Vanilla Perfume" },
  { title: "Oud Perfume" },
  { title: "Lavender Perfume" },
  { title: "Amber Perfume" },
  { title: "Musk Perfume" },
  { title: "Gardenia Perfume" },
  { title: "Rose Perfume" },
  { title: "Jasmine Perfume" },
];

const MarqueeFlavour = () => {
    return (
         <section className="pt-4 md:pt-8">
      <Marquee speed={20} gradient={false} pauseOnHover>
        {flavour.map((item, index) => (
          <button
            key={index}
            className="bg-[#F5F1EA] text-[#571313] px-8 py-3 rounded-full
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