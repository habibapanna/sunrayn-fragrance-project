import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";

const Signature = () => {
  return (
    <section className="mx-auto px-[16px] 2xl:px-[32px] pb-[16px] 2xl:pb-[32px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px] 2xl:gap-[32px]">

        {/* LEFT CARD */}
        <div className="group relative rounded-[24px] lg:rounded-[32px] 2xl:rounded-[48px] overflow-hidden h-[392px] 2xl:h-[700px]">

          {/* IMAGE */}
          <img
            src="https://i.postimg.cc/vTdvj2f0/Product-Image-(1).png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* TITLE */}
          <h3 className="absolute top-[16px] left-[16px] lg:top-[24px] lg:left-[24px] z-20 text-white font-semibold text-[25px] lg:text-[50px] uppercase">
            New Arrivals
          </h3>

          {/* EXPANDING BUTTON */}
          <button
            className="
              absolute bottom-6 right-6 z-20
              h-[40px] w-[40px]
              2xl:h-[55px] 2xl:w-[55px]
              group-hover:w-[160px]

              bg-white rounded-full shadow
              flex items-center group-hover:justify-center
              px-3 overflow-hidden cursor-pointer

              transition-[width] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
              will-change-[width]
            "
          >
            {/* ICON */}
            <GoChevronRight className="text-[20px] 2xl:text-[30px] flex-shrink-0 text-[#1D0B01]" />

            {/* TEXT */}
           <Link to='/productList'>
            <span
              className="
                whitespace-nowrap uppercase font-medium
                text-[16px] 2xl:text-[18px]
                text-[#1D0B01]
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300 delay-150
              "
            >
              Shop
            </span></Link>
          </button>
        </div>

        {/* RIGHT CARD */}
        <div className="group relative rounded-[24px] lg:rounded-[32px] 2xl:rounded-[48px] overflow-hidden h-[392px] 2xl:h-[700px]">

          {/* IMAGE */}
          <img
            src="https://i.postimg.cc/KvmJSjd2/Product-Image-(5).png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* TITLE */}
          <h3 className="absolute top-[16px] left-[16px] lg:top-[24px] lg:left-[24px] z-20 text-white font-semibold text-[25px] lg:text-[50px] uppercase">
            Sanrayn Specials
          </h3>

          {/* EXPANDING BUTTON */}
          <button
            className="
              absolute bottom-6 right-6 z-20
              h-[40px] w-[40px]
              2xl:h-[55px] 2xl:w-[55px]
              group-hover:w-[160px]

              bg-white rounded-full shadow
              flex items-center group-hover:justify-center
              px-3 overflow-hidden cursor-pointer

              transition-[width] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
              will-change-[width]
            "
          >
            {/* ICON */}
            <GoChevronRight className="text-[20px] 2xl:text-[30px] flex-shrink-0 text-[#1D0B01]" />

            {/* TEXT */}
            <Link to='/productList'>
            <span
              className="
                whitespace-nowrap uppercase font-medium
                text-[16px] 2xl:text-[18px]
                text-[#1D0B01]
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300 delay-150
              "
            >
              Shop
            </span></Link>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Signature;
