const NewsLetter = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10 py-4 lg:py-6">
      <section
        className="
          relative overflow-hidden rounded-2xl
          bg-cover bg-center bg-no-repeat
          min-h-[280px]
          sm:min-h-[350px]
          md:min-h-[450px]
          lg:min-h-[520px]
          xl:min-h-[580px]
          flex items-center
        "
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/x1PD5vMm/imgi-187-Frame-1430102878-2.png')",
        }}
      >
        {/* Overlay */}
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
            flex justify-end
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
              sm:max-w-[90%]
              md:max-w-[75%]
              lg:max-w-[60%]
              xl:max-w-[50%]
              text-white
            "
          >
            <h1
              className="
                font-light
                leading-[1.1
                mb-4
                sm:mb-6

                text-[28px]
                sm:text-[36px]
                md:text-[46px]
                lg:text-[56px]
              "
            >
              Stay connected with SANRAYN
            </h1>

            <p
              className="
                text-white/90
                leading-relaxed
                mb-6
                sm:mb-8

                text-[14px]
                sm:text-[16px]
                md:text-[18px]
                lg:text-[20px]
                xl:text-[22px]

                max-w-[550px] lg:max-w-full
              "
            >
              Be the first to know about new collections and exclusive offers.
            </p>

            {/* Email Input */}
            <div
              className="
                relative
                w-full
                max-w-full
                sm:max-w-[350px]
                md:max-w-[400px]
                lg:max-w-[450px]
              "
            >
              <input
                type="email"
                placeholder="yourname@gmail.com"
                className="
                  w-full

                  h-12
                  sm:h-14
                  lg:h-16

                  rounded-full
                  bg-white
                  text-black

                  pl-5
                  pr-14
                  sm:pr-16
                  lg:pr-20

                  text-[14px]
                  sm:text-[15px]
                  lg:text-[16px]

                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#A0174A]/30
                "
              />

              <button
                className="
                  absolute
                  right-2
                  top-1/2
                  -translate-y-1/2

                  flex items-center justify-center

                  h-8 w-8
                  sm:h-10 sm:w-10
                  lg:h-12 lg:w-12

                  rounded-full
                  bg-[#A0174A]

                  hover:bg-[#86123D]

                  transition-all
                  duration-300

                  cursor-pointer
                "
                aria-label="Subscribe"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="
                    h-4 w-4
                    sm:h-5 sm:w-5
                    lg:h-6 lg:w-6
                  "
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M13 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsLetter;