import Marquee from "react-fast-marquee";

const inspiredBy = [
  { title: "Black Opium" },
  { title: "Love, Don’t be shy" },
  { title: "Good Girl" },
  { title: "Libre" },
  { title: "Light Blue" },
  { title: "Not a Perfume" },
];

const MarqueeSection = () => {
  return (
    <section className="">
      <Marquee speed={40} gradient={false} pauseOnHover>
        {inspiredBy.map((item, index) => (
          <button
            key={index}
            className="bg-[#F5F1EA] text-[#571313] px-8 py-3 rounded-full
                       flex items-center text-base md:text-xl font-medium
                       mx-2 md:mx-4 whitespace-nowrap"
          >
            Inspired by
            <span className="underline font-bold ml-3 cursor-pointer">
              {item.title}
            </span>
          </button>
        ))}
      </Marquee>
    </section>
  );
};

export default MarqueeSection;
