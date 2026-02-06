import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <div className="mx-auto px-[16px] 2xl:px-[32px] pb-[16px] 2xl:pb-[32px]">
      <Link to="/productList">
        <section
          className="relative bg-cover bg-center flex overflow-hidden
          rounded-[24px] lg:rounded-[32px] 2xl:rounded-[48px]"
          style={{
            backgroundImage:
              "url('https://i.postimg.cc/x1PD5vMm/imgi-187-Frame-1430102878-2.png')",
          }}
        >
          {/* LEFT EMPTY SPACE */}
          <div className="w-1/3 xl:w-1/2" />

          {/* RIGHT CONTENT */}
          <div className="relative z-10 w-2/3 xl:w-1/2
            flex items-center justify-center
            px-6 py-16 md:px-[150px] md:py-[241px]"
          >
            <div className="text-white text-left">
              <h1 className="text-[25px] lg:text-[40px] 2xl:text-[90px] leading-tight mb-6">
                Get 30% Off
              </h1>

              <p className="mb-8 text-[14px] md:text-[20px]">
                Be the first to know about new collections and exclusive offers.
              </p>

              <button
                className="bg-white px-[24px] py-[10px]
                rounded-[100px] h-[30px] w-[123px]
                md:w-[210px] md:h-[55px]
                text-[14px] md:text-[20px]
                2xl:font-bold transition-all duration-300 ease-out
                hover:bg-[#BA9948] hover:text-white text-[#1D0B01] flex items-center justify-center cursor-pointer "
              >
                Shop Hurry
              </button>
            </div>
          </div>

          {/* RIGHT SIDE OVERLAY */}
          <div className="
            absolute right-0 top-0 h-full w-2/3 xl:w-1/2
            bg-gradient-to-l from-black/70 via-black/40 to-transparent
          " />
        </section>
      </Link>
    </div>
  );
};

export default Offer;
