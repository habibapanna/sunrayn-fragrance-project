

const blogs = [
  {
    title: "The Rise of Halal Luxury Fragrances in the Modern World",
    product: "https://i.postimg.cc/KvmJSjd2/Product-Image-(5).png",
  },
  {
    title: "How to Choose Your Signature Scent Based on Personality",
    product: "https://i.postimg.cc/Rh4QBppP/Perfume-Image.png",
  },
  {
    title: "Crafting Luxury Without Compromise The Sanrayn Philosophy",
    product: "https://i.postimg.cc/vTdvj2f0/Product-Image-(1).png",
  },
  {
    title: "The Rise of Halal Luxury Fragrances in the Modern World",
    product: "https://i.postimg.cc/KvmJSjd2/Product-Image-(5).png",
  },
  {
    title: "How to Choose Your Signature Scent Based on Personality",
    product: "https://i.postimg.cc/Rh4QBppP/Perfume-Image.png",
  },
  {
    title: "Crafting Luxury Without Compromise The Sanrayn Philosophy",
    product: "https://i.postimg.cc/vTdvj2f0/Product-Image-(1).png",
  },
  {
    title: "The Rise of Halal Luxury Fragrances in the Modern World",
    product: "https://i.postimg.cc/KvmJSjd2/Product-Image-(5).png",
  },
  {
    title: "How to Choose Your Signature Scent Based on Personality",
    product: "https://i.postimg.cc/Rh4QBppP/Perfume-Image.png",
  },
  {
    title: "Crafting Luxury Without Compromise The Sanrayn Philosophy",
    product: "https://i.postimg.cc/vTdvj2f0/Product-Image-(1).png",
  },
];

const BLogPage = () => {
  return (
    <div className="px-[16px] 2xl:px-[32px] py-[16px] 2xl:py-[32px]">
     <div className="flex flex-col lg:flex-row justify-between text-[#282828] pb-[16px] 2xl:pb-[32px]">
            <h3 className="text-[32px] 2xl:text-[50px] ">The Sanrayn Journals</h3>
            {/* Search bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search journals"
              className="w-full bg-[#F6F7F2] rounded-full py-[12px] pl-[16px] pr-[24px] outline-none text-[#1D0B01]  lg:w-[400px]"
            />
           <span className="absolute right-[16px] top-[12px] bottom-[12px]"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.58464 3.33366C6.13286 3.33366 3.33464 6.13188 3.33464 9.58366C3.33464 13.0354 6.13286 15.8337 9.58464 15.8337C11.2622 15.8337 12.7854 15.1727 13.9081 14.097C13.934 14.0611 13.9631 14.0267 13.9955 13.9944C14.0278 13.9621 14.0621 13.9329 14.0981 13.907C15.1737 12.7844 15.8346 11.2612 15.8346 9.58366C15.8346 6.13188 13.0364 3.33366 9.58464 3.33366ZM15.7409 14.5614C16.8418 13.2015 17.5013 11.4696 17.5013 9.58366C17.5013 5.2114 13.9569 1.66699 9.58464 1.66699C5.21238 1.66699 1.66797 5.2114 1.66797 9.58366C1.66797 13.9559 5.21238 17.5003 9.58464 17.5003C11.4706 17.5003 13.2025 16.8408 14.5624 15.7399L16.912 18.0896C17.2375 18.415 17.7651 18.415 18.0905 18.0896C18.416 17.7642 18.416 17.2365 18.0906 16.9111L15.7409 14.5614Z" fill="#1D0B01"/>
</svg></span>
          </div>
 

        </div>
      <section className="mx-auto pb-[16px] 2xl:pb-[32px]">
        <div className="bg-[#F6F7F2] rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-[50px] 2xl:gap-[189px] p-[16px] lg:p-[32px] items-center">
          <img
            src="https://i.postimg.cc/KvmJSjd2/Product-Image-(5).png"
            alt="Product"
            className="rounded-[24px] lg:rounded-[48px] w-full 2xl:h-[700px] 2xl:w-[880px] object-cover"
          />
          <div className="2xl:w-[576px]">
            <h2 className="text-[#1D0B01] mb-4 text-[32px] 2xl:text-[50px]">
              The Rise of Halal Luxury Fragrances in the Modern World
            </h2>
            <p className="text-[#282828] text-[22px] lg:text-[24px] mb-6 ">
              Luxury fragrance has long been associated with artistry, emotion, and identity. In recent years, a new movement has emerged within the perfume world halal luxury fragrances.
            </p>
          </div>
        </div>
      </section>

      <div className="relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] 2xl:gap-[32px]">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="relative rounded-[32px] md:rounded-[48px] h-[350px] md:h-[700px] overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img
                src={blog.product}
                alt={blog.title}
                className="absolute inset-0 w-full h-full object-cover z-10"
              />

              {/* Gradient */}
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-4 md:bottom-8 left-4 right-4 z-30">
                <h3 className="text-white text-[20px] md:text-[25px] 2xl:text-[40px] font-medium leading-tight">
                  {blog.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BLogPage;
