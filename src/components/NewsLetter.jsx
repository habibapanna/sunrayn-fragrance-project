

const NewsLetter = () => {
  return (
    <div className="mx-auto max-w-full">
      <section
        className="relative bg-cover bg-center rounded-[32px] 2xl:rounded-[48px] overflow-hidden"
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/W1xsfBt0/Frame-(3).png')",
        }}
      >
        <div className="flex">

          {/* LEFT IMAGE SPACE */}
          <div className="w-1/2" />

          {/* RIGHT CONTENT */}
          <div className="w-1/2 flex items-center px-6 py-16 md:px-16 md:py-24 2xl:px-24">
            <div className="text-white">

              <h1 className="text-[28px] md:text-[40px] 2xl:text-[56px] font-light mb-6">
                Get 30% Off
              </h1>

              <p className="text-white/90 mb-10 text-[14px] md:text-[18px] leading-relaxed">
                Be the first to know about new collections and exclusive offers.
              </p>

              {/* EMAIL INPUT */}
              <div className="relative w-full max-w-[298px]">
                <input
                  type="email"
                  placeholder="yourname@gmail.com"
                  className="w-full h-[40px] md:h-[50px] rounded-full bg-white text-black pl-6 pr-16 text-[14px] md:text-[16px] focus:outline-none"
                />

                
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 
                    h-[24px] w-[24px] 2xl:h-[40px] 2xl:w-[40px]
                    rounded-full bg-[#BA9948] 
                    flex items-center justify-center transition cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
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

        </div>
      </section>
    </div>
  );
};

export default NewsLetter;
