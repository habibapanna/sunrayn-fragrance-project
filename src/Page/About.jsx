
import { Link } from "react-router-dom";
import NewsLetter from "../components/NewsLetter";
import Offer from "../components/Offer";

const About = () => {
  return (
    <div className="bg-white">
      {/* HERO IMAGE */}
      <section className=" mx-auto px-[16px]  2xl:px-[32px] py-[16px] lg:py-[32px]">
        <div className="flex flex-col gap-[24px] lg:flex-row justify-between text-[#282828] pb-[16px] 2xl:pb-[32px]">
            <h3 className="text-center lg:text-left text-[30px] lg:text-[50px] "> Purpose in Every Scent</h3>
            <p className="hidden lg:block text-[18px] text-center lg:text-left 2xl:text-[20px]">Discover halal, alcohol-free luxury perfumes crafted with <br /> intention, artistry, and unwavering commitment to purity.</p>
            <p className="text-[18px] text-center lg:hidden">Discover halal, alcohol-free luxury perfumes crafted with intention, artistry, and unwavering commitment to purity.</p>
        </div>
        <div><img
          src="https://i.postimg.cc/Rh4QBppP/Perfume-Image.png"
          alt="Purpose in Every Scent"
          className="w-full h-[208px] lg:h-[547px] 2xl:h-[780px] rounded-[24px] lg:rounded-[32px] 2xl:rounded-[48px] object-cover"
        /></div>
      </section>

      {/* IN-HOUSE SECTION */}
      <section className="mx-auto px-[16px]  2xl:px-[32px] pb-[16px] 2xl:pb-[32px]">
        <div className="bg-[#F6F7F2] rounded-[24px] lg:rounded-[32px] 2xl:rounded-[48px] grid grid-cols-1 lg:grid-cols-2 gap-[16px] lg:gap-[48px] 2xl:gap-[189px] p-[16px] lg:p-[32px] items-center">
          <img
            src="https://i.postimg.cc/KvmJSjd2/Product-Image-(5).png"
            alt="Product"
            className="rounded-[24px] lg:rounded-[32px] 2xl:rounded-[48px] w-full h-[268px] lg:h-[520px] 2xl:h-[700px] 2xl:w-[880px] object-cover"
          />
          <div className="2xl:w-[576px]">
            <h2 className="text-[#1D0B01] mb-4 text-[25px] lg:text-[50px]">
              In-house, genderless exclusives for the next generation.
            </h2>
            <p className="text-[#282828] text-[16px] lg:text-[18px] 2xl:text-[24px] mb-6 ">
              Sanrayn Originals is our collection of in-house exclusive
              fragrances, uniquely blended by our perfumers in France to offer
              a variety of fair-priced, niche luxury scents for the next
              generation.
            </p>
            <Link to='/productList'><button className="btn rounded-full bg-[#DBAB35] hover:bg-white text-[20px] text-[#1D0B01] border-none px-[20px] py-[8px] lg:px-[24px] lg:py-[10px] 2xl:h-[55px] 2xl:w-[210px]">
              Shop Now
            </button></Link>
          </div>
        </div>
      </section>

{/* DISCOVERY FLOW */}
<section className="mx-auto px-[16px] 2xl:px-[32px] pb-[16px] 2xl:pb-[32px]">
  <div className="bg-[#F6F7F2] rounded-[24px] lg:rounded-[32px] 2xl:rounded-[48px] p-[24px] lg:p-[56px] text-center relative overflow-hidden">

    {/* Title */}
    <h2 className="text-[25px] lg:text-[35px] 2xl:text-[50px] font-semibold mb-[32px] lg:mb-[56px] 2xl:mb-[96px] text-[#2B1B0E]">
      From Discovery to Devotion
    </h2>

    {/* Flow */}
    <div className="relative grid md:grid-cols-3 gap-[32px] lg:gap-[20px] 2xl:gap-[32px] items-start">

      {/* Dashed Arrows */}
      <svg
        className="hidden md:block absolute left-1/3 top-14 -translate-x-1/2"
        width="220"
        height="80"
        viewBox="0 0 220 80"
        fill="none"
      >
        <path
          d="M5 40 C70 5, 150 5, 215 40"
          stroke="#9CA3AF"
          strokeWidth="2"
          strokeDasharray="6 6"
          fill="none"
        />
        <path
          d="M210 35 L215 40 L210 45"
          stroke="#9CA3AF"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      <svg
        className="hidden md:block absolute right-1/3 top-14 translate-x-1/2"
        width="220"
        height="80"
        viewBox="0 0 220 80"
        fill="none"
      >
        <path
          d="M5 40 C70 5, 150 5, 215 40"
          stroke="#9CA3AF"
          strokeWidth="2"
          strokeDasharray="6 6"
          fill="none"
        />
        <path
          d="M210 35 L215 40 L210 45"
          stroke="#9CA3AF"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* Discover */}
      <div className="flex flex-col items-center">
        <div className="mb-6 text-[#E57C2A]">
          {/* Basket Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
  <path d="M14.4695 56.2603L10.5929 33.1186C9.9623 29.3543 9.64703 27.4722 10.6179 26.2361C11.5887 25 13.3823 25 16.9693 25H63.0307C66.6177 25 68.4113 25 69.382 26.2361C70.353 27.4722 70.0377 29.3543 69.407 33.1186L65.5303 56.2603C64.1633 64.4213 63.48 68.5017 60.773 70.9173C58.0663 73.3333 54.178 73.3333 46.4013 73.3333H33.5987C25.8221 73.3333 21.9338 73.3333 19.227 70.9173C16.5201 68.5017 15.8366 64.4213 14.4695 56.2603Z" stroke="#DC7C2A" stroke-width="3"/>
  <path d="M23.3281 24.9974V23.3307C23.3281 14.126 30.7901 6.66406 39.9948 6.66406C49.1995 6.66406 56.6615 14.126 56.6615 23.3307V24.9974" stroke="#DC7C2A" stroke-width="3"/>
  <path d="M15 58.3359H65" stroke="#DC7C2A" stroke-width="3"/>
</svg>
        </div>
        <h3 className="text-[25px] 2xl:text-[35px] text-[#DC7C2A] mb-[4px]">
          Discover
        </h3>
        <p className="text-[#282828] text-[16px] 2xl:text-[18px] max-w-[260px]">
          Browse curated collections and find fragrances aligned with your style
          and mood.
        </p>
      </div>

      {/* Wear */}
      <div className="flex flex-col items-center">
        <div className="mb-6 text-[#E57C2A]">
          {/* Perfume Icon */}
         <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
  <path d="M6.67188 53.4443C6.67188 59.9897 9.21594 65.9443 13.3745 70.3837C15.6884 72.854 17.7568 73.3333 21.1016 73.3333H42.2422C45.5869 73.3333 47.6552 72.854 49.9692 70.3837C54.1279 65.9443 56.6719 59.9897 56.6719 53.4443C56.6719 43.4217 50.7069 34.7847 42.1145 30.8513C40.6445 30.1786 39.3439 30 37.7305 30H25.6134C23.9998 30 22.6991 30.1786 21.2294 30.8513C12.6369 34.7847 6.67188 43.4217 6.67188 53.4443Z" stroke="#DC7C2A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M23.3281 30V26.6667C23.3281 21.1511 24.4792 20 29.9948 20H33.3281C38.8438 20 39.9948 21.1511 39.9948 26.6667V30" stroke="#DC7C2A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M36.6719 20V15C36.6719 11.502 35.4282 10 31.6719 10C27.9156 10 26.6719 11.502 26.6719 15V20" stroke="#DC7C2A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M63.3281 26.6641C68.851 26.6641 73.3281 22.1869 73.3281 16.6641C73.3281 11.1412 68.851 6.66406 63.3281 6.66406C57.8053 6.66406 53.3281 11.1412 53.3281 16.6641C53.3281 22.1869 57.8053 26.6641 63.3281 26.6641Z" stroke="#DC7C2A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20 13.3359H26.6667M36.6667 13.3359H53.3333" stroke="#DC7C2A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>
        <h3 className="text-[25px] 2xl:text-[35px] text-[#DC7C2A] mb-[4px]">
          Wear
        </h3>
        <p className="text-[#282828] text-[16px] 2xl:text-[18px] max-w-[260px]">
          Experience smooth, long-lasting halal fragrances crafted for comfort
          and elegance.
        </p>
      </div>

      {/* Connect */}
      <div className="flex flex-col items-center">
        <div className="mb-6 text-[#E57C2A]">
          {/* Heart Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
  <path d="M64.7217 52.3777C77.8907 35.6793 74.3331 19.1169 64.8727 13.3138C55.9337 7.83077 48.1321 10.0404 43.4454 13.56L39.9967 16.1386M64.7217 52.3777C61.5607 56.3853 57.4364 60.4013 52.1991 64.278C47.0451 68.0927 44.4681 70 39.9974 70C35.5267 70 32.9498 68.0927 27.7958 64.278C0.73646 44.2497 3.39096 20.5098 15.1222 13.3138C24.061 7.83077 31.8628 10.0404 36.5494 13.56L39.9967 16.1386M64.7217 52.3777L46.3044 31.4826C45.5504 30.6273 44.2884 30.4432 43.3214 31.0475L36.0344 35.602C33.4701 37.2047 30.1419 36.844 27.9804 34.729C25.1253 31.9354 25.4134 27.259 28.5897 24.8369L39.9967 16.1386" stroke="#DC7C2A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>
        <h3 className="text-[25px] 2xl:text-[35px] text-[#DC7C2A] mb-[4px]">
          Connect
        </h3>
        <p className="text-[#282828] text-[16px] 2xl:text-[18px] max-w-[260px]">
          Fall in love with a scent that reflects your identity and leaves a
          lasting impression.
        </p>
      </div>

    </div>
  </div>
</section>


   {/* THOUGHTFUL LUXURY */}
<section className="mx-auto px-[16px] 2xl:px-[32px] pb-[16px] 2xl:pb-[32px]">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px] 2xl:gap-[32px] items-stretch">

    {/* TEXT */}
    <div className="bg-[#FAFAF7] rounded-[24px] lg:rounded-[32px] 2xl:rounded-[48px] p-[32px] 2xl:px-[48px] flex flex-col gap-[24px] justify-center ">
      <h2 className="text-[#571313] mb-4 text-[25px] lg:text-[50px] leading-tight 2xl:w-[500px] mx-auto">
        A New Standard for Thoughtful Luxury.
      </h2>

      <p className="text-[#1D0B01] text-[16px] lg:text-[24px] leading-relaxed 2xl:w-[500px] mx-auto">
        The fragrance industry has long overlooked those who seek purity
        without sacrificing sophistication. Sanrayn was born to bridge
        that gap—bringing halal, alcohol-free fragrances into a modern,
        luxurious space.
      </p>
    </div>

    {/* IMAGE */}
    <div className="rounded-[24px] lg:rounded-[32px] 2xl:rounded-[48px] overflow-hidden">
     <img
  src="https://i.postimg.cc/vT4crfPf/Product-Image-(2).png"
  alt="Luxury Perfume"
  className="h-[328px] lg:h-[568px] 2xl:h-[700px] w-full object-cover object-top"
/>

    </div>

  </div>
</section>

      {/* VALUES */}
      <section className="mx-auto px-[16px] 2xl:px-[32px] pb-[16px] 2xl:pb-[32px]">
        <div className="grid md:grid-cols-3 gap-[16px] 2xl:gap-[32px]">
          <div className="bg-[#FFF4E8] rounded-[24px] lg:rounded-[32px] 2xl:rounded-[48px] p-8 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none" className="mx-auto">
  <path d="M73.3307 22.5007H64.0344C62.0307 22.5007 61.0287 22.5007 60.0841 22.2146C59.1394 21.9286 58.3057 21.3728 56.6384 20.2613C54.1377 18.5941 51.2847 16.6922 49.8674 16.2631C48.4504 15.834 46.9474 15.834 43.9417 15.834C39.8544 15.834 37.2197 15.834 35.3821 16.5952C33.5444 17.3564 32.0993 18.8016 29.209 21.6919L26.6654 24.2355C26.014 24.8868 25.6883 25.2125 25.4872 25.5341C24.7419 26.726 24.8245 28.2575 25.6937 29.3624C25.9282 29.6604 26.287 29.9492 27.0047 30.5267C29.6573 32.6615 33.4814 32.4484 35.8834 30.0321L39.9974 25.8935H43.3307L63.3307 46.0125C65.1717 47.8645 65.1717 50.8669 63.3307 52.7189C61.4897 54.5709 58.5051 54.5709 56.6641 52.7189L54.9974 51.0422M54.9974 51.0422L44.9974 40.9829M54.9974 51.0422C56.8384 52.8942 56.8384 55.8969 54.9974 57.7485C53.1564 59.6005 50.1717 59.6005 48.3307 57.7485L44.9974 54.3956M44.9974 54.3956C46.8384 56.2472 46.8384 59.2499 44.9974 61.1019C43.1564 62.9535 40.1717 62.9535 38.3307 61.1019L33.3307 56.0719M44.9974 54.3956L38.3307 47.7289M33.3307 56.0719L31.6641 54.3956M33.3307 56.0719C35.1717 57.9239 35.1717 60.9266 33.3307 62.7786C31.4898 64.6302 28.505 64.6302 26.6641 62.7786L17.252 53.1702C15.3179 51.1959 14.3509 50.2089 13.1119 49.6879C11.8729 49.1672 10.491 49.1672 7.7272 49.1672H6.66406" stroke="#DC7C2A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M73.3333 49.166H65" stroke="#DC7C2A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M28.3307 22.5H6.66406" stroke="#DC7C2A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            <h3 className="text-[20px] 2xl:text-[35px] mb-2 text-[#DC7C2A]">Integrity</h3>
            <p className="text-[16px] 2xl:text-[18px] text-[#282828]">
              Every ingredient is halal-certified. Every promise is kept.
            </p>
          </div>

          <div className="bg-[#F1FFF6] rounded-[24px] lg:rounded-[32px] 2xl:rounded-[48px] p-8 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none" className="mx-auto">
  <path d="M45.7561 11.4799L51.6221 23.3089C52.4221 24.9556 54.5551 26.535 56.3551 26.8374L66.9871 28.6185C73.7864 29.7611 75.3864 34.7347 70.4867 39.641L62.2211 47.975C60.8211 49.3863 60.0547 52.1083 60.4877 54.0577L62.8544 64.3743C64.7207 72.5403 60.4211 75.6993 53.2554 71.4313L43.2897 65.4833C41.4901 64.408 38.5237 64.408 36.6904 65.4833L26.725 71.4313C19.5924 75.6993 15.2596 72.5067 17.126 64.3743L19.4924 54.0577C19.9257 52.1083 19.1591 49.3863 17.7593 47.975L9.49353 39.641C4.62739 34.7347 6.19389 29.7611 12.9931 28.6185L23.6253 26.8374C25.3918 26.535 27.5249 24.9556 28.3248 23.3089L34.1907 11.4799C37.3904 5.06137 42.5897 5.06137 45.7561 11.4799Z" stroke="#43B583" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            <h3 className="text-[20px] 2xl:text-[35px] mb-2 text-[#43B583]">Excellence</h3>
            <p className="text-[16px] 2xl:text-[18px] text-[#282828]">
              We hold ourselves to the highest standards of quality and artistry.
            </p>
          </div>

          <div className="bg-[#F3F1FF] rounded-[24px] lg:rounded-[32px] 2xl:rounded-[48px] p-8 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none" className="mx-auto">
  <path d="M27.1886 52.8113C23.5998 52.7873 18.6578 51.9093 14.7802 48.032C7.87434 41.126 10.4832 30.8439 10.4832 30.8439C10.4832 30.8439 15.8672 29.4782 21.4604 31.3398C21.4195 31.0335 21.3852 30.7233 21.3583 30.409C21.3105 29.8503 21.2851 29.2794 21.2853 28.6952C21.2851 16.6769 31.9681 10 31.9681 10C31.9681 10 38.6437 14.1725 41.441 21.8573C50.7483 15.3457 62.047 17.953 62.047 17.953C62.047 17.953 64.6543 29.2518 58.1427 38.559C65.8277 41.3563 70 48.032 70 48.032C70 48.032 63.323 58.715 51.3047 58.7147C50.3923 58.7147 49.5103 58.6533 48.6603 58.5397C50.5217 64.1327 49.156 69.5167 49.156 69.5167C49.156 69.5167 38.874 72.1257 31.9681 65.2197" stroke="#FF4242" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 69.9993L43.3333 36.666" stroke="#FF4242" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            <h3 className="text-[20px] 2xl:text-[35px] mb-2 text-[#FF4242]">
              Sustainability
            </h3>
            <p className="text-[16px] 2xl:text-[18px] text-[#282828]">
              Mindful sourcing and eco-conscious practices guide our process.
            </p>
          </div>
        </div>
      </section>

    <section className="px-[16px] pb-[16px] lg:px-[32px] lg:pb-[32px]"><NewsLetter></NewsLetter></section>
    </div>
  );
};

export default About;
