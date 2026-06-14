import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10 pb-4 sm:pb-6 lg:pb-8">
      <Link to="/productList">
        <section
          className="
            relative overflow-hidden rounded-2xl
            bg-cover bg-center bg-no-repeat
            min-h-[280px]
            sm:min-h-[350px]
            md:min-h-[450px]
            lg:min-h-[520px]
            xl:min-h-[580px]
            flex
          "
          style={{
            backgroundImage:
              "url('https://i.postimg.cc/x1PD5vMm/imgi-187-Frame-1430102878-2.png')",
          }}
        >
          {/* Gradient Overlay */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-r
              from-black/20
              via-black/40
              to-black/75
            "
          />

          {/* Content */}
          <div
            className="
              relative z-10
              w-full
              flex items-center
              justify-end
              px-5
              sm:px-8
              md:px-12
              lg:px-16
              py-8
              sm:py-12
            "
          >
            <div
              className="
                w-full
                sm:max-w-[85%]
                md:max-w-[70%]
                lg:max-w-[55%]
                xl:max-w-[50%]
                text-white
                text-left
              "
            >
              <h1
                className="
                  font-medium leading-[1.1]
                  text-[30px]
                  sm:text-[40px]
                  md:text-[50px]
                  lg:text-[64px]
                  xl:text-[78px]
                  2xl:text-[90px]
                  mb-4
                  sm:mb-6
                "
              >
                Wear Luxury for Less
              </h1>

              <p
                className="
                  text-[14px]
                  sm:text-[16px]
                  md:text-[18px]
                  lg:text-[22px]
                  xl:text-[25px]
                  leading-relaxed
                  mb-6
                  sm:mb-8
                  max-w-[550px] lg:max-w-full
                "
              >
                Be the first to know about new collections and exclusive offers.
              </p>

              <button
                className="
                  inline-flex items-center justify-center
                  rounded-full
                  bg-white text-[#1D0B01]
                  hover:bg-[#BA9948]
                  transition-all duration-500 ease-out

                  h-11
                  px-6

                  sm:h-12
                  sm:px-8

                  md:h-14
                  md:px-10

                  lg:h-16
                  lg:px-12

                  text-sm
                  sm:text-base
                  lg:text-lg
                  xl:text-xl

                  font-medium
                  xl:font-semibold
                  cursor-pointer
                "
              >
                Shop Now
              </button>
            </div>
          </div>
        </section>
      </Link>
    </div>
  );
};

export default Offer;