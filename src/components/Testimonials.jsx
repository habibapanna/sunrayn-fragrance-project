import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { LuCrown, LuHeartHandshake } from "react-icons/lu";
import { PiSealCheck } from "react-icons/pi";
import { RiDoubleQuotesL } from "react-icons/ri";
import Quote from "../../src/assets/Review text (1).png";
import Reviewer from "../../src/assets/Reviewer photo (1).png";
import material from "../../src/assets/material-symbols-light_verified-rounded.png";
import { useState } from "react";
import { FaStar } from "react-icons/fa";


const Testimonials = () => {
  const [current, setCurrent] = useState(0);

const total = 3;

const next = () => setCurrent((prev) => (prev + 1) % total);
const prev = () => setCurrent((prev - 1 + total) % total);

    return (
        <div className="mx-auto px-[16px] pb-[16px] md:px-[32px] md:pb-[32px]">
               <div className='flex justify-between mb-[16px] md:mb-[32px]'>
            <div className='flex justify-center items-center text-center gap-[20px] md:gap-[32px]'>
                <div className="text-left">
                    <p className='text-[25px] md:text-[50px] font-semibold text-[#282828]'>What Fragrance Lovers Are Saying About Sanrayn</p>
                </div>

            </div>
            <div className='hidden md:flex gap-5 '>
                <button className="w-[55px] h-[55px] rounded-full bg-[#F5F1EA] shadow flex items-center justify-center cursor-pointer">
                              <GoChevronLeft className='text-[35px] ' />
                            </button>
                <button className="w-[55px] h-[55px] rounded-full bg-[#F5F1EA] shadow flex items-center justify-center cursor-pointer">
                              <GoChevronRight className='text-[35px]' />
                            </button>
            </div>

            </div>
{/* testimonials card */}
            <section className="mx-auto hidden md:block">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
            
            <div className="bg-[#F6EAEF] rounded-[31px] p-[50px] h-[480px] w-[300px] md:h-[700px] md:w-[598px]">
  <div className="flex flex-col h-full">

    <span className="text-white text-8xl">
      <img src={Quote} alt="" className="w-[145px] h-[74px]" />
    </span>

    <div className="flex items-center gap-2 text-2xl text-[#FF9100] mb-[12px] mt-[48px]">
       <div className="flex gap-[6px] mb-[8px] md:mb-0 items-center">
     <FaStar className="h-[24px] w-[24px]" />
     <FaStar className="h-[24px] w-[24px]" />
     <FaStar className="h-[24px] w-[24px]" />
     <FaStar className="h-[24px] w-[24px]" />
     <FaStar className="h-[24px] w-[24px]" />
   </div>
    </div>

    <h3 className="text-[#571313] text-[35px] font-semibold mb-[48px]">
      The Best Perfume
    </h3>

    <p className="text-[#0D0C09] text-[20px]">
     From the moment I tried Sanrayn, I knew it would become part of my daily routine. It’s long-lasting yet gentle, with a depth that truly elevates your presence. What I appreciate most is the brand’s respect for purity and values. This isn’t just a perfume it’s an experience that stays with you.
    </p>

    {/* VERIFIED CUSTOMER — STICKS TO BOTTOM */}
    <div className="flex items-center gap-4 mt-auto pt-[50px]">
      <img
        src={Reviewer}
        alt="Reviewer"
        className="w-[55px] h-[55px] rounded-full object-cover"
      />

      <div>
        <p className="text-[24px] font-semibold text-[#0D0C09]">
          Rebeca Pipard
        </p>

        <div className="flex items-center gap-2">
          <img src={material} alt="Verified" className="w-[24px] h-[24px]" />
          <span className="text-[16px] text-[#282828]">
            Verified Customer
          </span>
        </div>
      </div>
    </div>

  </div>
</div>

                        <div className="bg-[#E6F3EF] rounded-[31px] p-[50px] h-[480px] w-[300px] md:h-[700px] md:w-[598px]">
  <div className="flex flex-col h-full">

    <span className="text-white text-8xl">
      <img src={Quote} alt="" className="w-[145px] h-[74px]" />
    </span>

    <div className="flex items-center gap-2 text-2xl text-[#FF9100] mb-[12px] mt-[48px]">
       <div className="flex gap-[6px] mb-[8px] md:mb-0 items-center">
   <FaStar className="h-[24px] w-[24px]" />
     <FaStar className="h-[24px] w-[24px]" />
     <FaStar className="h-[24px] w-[24px]" />
     <FaStar className="h-[24px] w-[24px]" />
     <FaStar className="h-[24px] w-[24px]" />
   </div>
    </div>

    <h3 className="text-[#571313] text-[35px] font-semibold mb-[48px]">
      Best of the Best
    </h3>

    <p className="text-[#0D0C09] text-[20px]">
     From the moment I tried Sanrayn, I knew it would become part of my daily routine. It’s long-lasting yet gentle, with a depth that truly elevates your presence. What I appreciate most is the brand’s respect for purity and values. 
    </p>

    {/* VERIFIED CUSTOMER — STICKS TO BOTTOM */}
    <div className="flex items-center gap-4 mt-auto pt-[50px]">
      <img
        src={Reviewer}
        alt="Reviewer"
        className="w-[55px] h-[55px] rounded-full object-cover"
      />

      <div>
        <p className="text-[24px] font-semibold text-[#0D0C09]">
          Rebeca Pipard
        </p>

        <div className="flex items-center gap-2">
          <img src={material} alt="Verified" className="w-[24px] h-[24px]" />
          <span className="text-[16px] text-[#282828]">
            Verified Customer
          </span>
        </div>
      </div>
    </div>

  </div>
</div>
            <div className="bg-[#EEEBFF] rounded-[31px] p-[50px] h-[480px] w-[300px]  md:h-[700px] md:w-[598px]">
  <div className="flex flex-col h-full">

    <span className="text-white text-8xl">
      <img src={Quote} alt="" className="w-[145px] h-[74px]" />
    </span>

    <div className="flex items-center gap-2 text-2xl text-[#FF9100] mb-[12px] mt-[48px]">
      <div className="flex gap-[6px] mb-[8px] md:mb-0 items-center">
     <FaStar className="h-[24px] w-[24px]" />
     <FaStar className="h-[24px] w-[24px]" />
     <FaStar className="h-[24px] w-[24px]" />
     <FaStar className="h-[24px] w-[24px]" />
     <FaStar className="h-[24px] w-[24px]" />
   </div>
    </div>

    <h3 className="text-[#571313] text-[35px] font-semibold mb-[48px]">
      New Obsession. Love It
    </h3>

    <p className="text-[#0D0C09] text-[20px]">
    From the moment I tried Sanrayn, I knew it would become part of my daily routine. It’s long-lasting yet gentle, with a depth that truly elevates your presence. What I appreciate most is the brand’s respect for purity and values.
    </p>

    {/* VERIFIED CUSTOMER — STICKS TO BOTTOM */}
    <div className="flex items-center gap-4 mt-auto pt-[50px]">
      <img
        src={Reviewer}
        alt="Reviewer"
        className="w-[55px] h-[55px] rounded-full object-cover"
      />

      <div>
        <p className="text-[24px] font-semibold text-[#0D0C09]">
          Rebeca Pipard
        </p>

        <div className="flex items-center gap-2">
          <img src={material} alt="Verified" className="w-[24px] h-[24px]" />
          <span className="text-[16px] text-[#282828]">
            Verified Customer
          </span>
        </div>
      </div>
    </div>

  </div>
</div>
            
                  </div>
                </section>



{/* MOBILE TESTIMONIALS CAROUSEL */}
<section className="md:hidden overflow-hidden relative">
  <div
    className="flex transition-transform duration-500 ease-in-out"
    style={{ transform: `translateX(-${current * 100}%)` }}
  >
    {/* CARD 1 */}
    <div className="flex-shrink-0 w-full">
      <div className="bg-[#F6EAEF] rounded-[24px] p-[24px] h-[480px] w-full">
        <div className="flex flex-col h-full">
          <span className="text-white">
            <img src={Quote} alt="" className="w-[108px] h-[55px]" />
          </span>

          <div className="flex items-center gap-2 text-2xl text-[#FF9100] mb-[6px] mt-[20px]">
            <div className="flex gap-[6px] items-center">
              <FaStar className="h-[24px] w-[24px]" />
              <FaStar className="h-[24px] w-[24px]" />
              <FaStar className="h-[24px] w-[24px]" />
              <FaStar className="h-[24px] w-[24px]" />
              <FaStar className="h-[24px] w-[24px]" />
            </div>
          </div>

          <h3 className="text-[#571313] text-[25px] font-semibold mb-[20px]">
            The Best Perfume
          </h3>

          <p className="text-[#0D0C09] text-[14px]">
            From the moment I tried Sanrayn, I knew it would become part of my daily routine. It’s long-lasting yet gentle, with a depth that truly elevates your presence. What I appreciate most is the brand’s respect for purity and values. This isn’t just a perfume it’s an experience that stays with you.
          </p>

          {/* VERIFIED CUSTOMER */}
          <div className="flex items-center gap-4 mt-auto pt-[10px]">
            <img
              src={Reviewer}
              alt="Reviewer"
              className="w-[55px] h-[55px] rounded-full object-cover"
            />

            <div>
              <p className="text-[18px] font-semibold text-[#0D0C09]">
                Rebeca Pipard
              </p>

              <div className="flex items-center gap-2">
                <img src={material} alt="Verified" className="w-[24px] h-[24px]" />
                <span className="text-[15px] text-[#282828]">
                  Verified Customer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="flex-shrink-0 w-full">
      <div className="bg-[#E6F3EF] rounded-[24px] p-[24px] h-[480px] w-full">
        <div className="flex flex-col h-full">
          <span className="text-white">
            <img src={Quote} alt="" className="w-[108px] h-[55px]" />
          </span>

          <div className="flex items-center gap-2 text-2xl text-[#FF9100] mb-[6px] mt-[20px]">
            <div className="flex gap-[6px] items-center">
              <FaStar className="h-[24px] w-[24px]" />
              <FaStar className="h-[24px] w-[24px]" />
              <FaStar className="h-[24px] w-[24px]" />
              <FaStar className="h-[24px] w-[24px]" />
              <FaStar className="h-[24px] w-[24px]" />
            </div>
          </div>

          <h3 className="text-[#571313] text-[25px] font-semibold mb-[20px]">
            Best of the Best
          </h3>

          <p className="text-[#0D0C09] text-[14px]">
            From the moment I tried Sanrayn, I knew it would become part of my daily routine. It’s long-lasting yet gentle, with a depth that truly elevates your presence. What I appreciate most is the brand’s respect for purity and values.
          </p>

          {/* VERIFIED CUSTOMER */}
          <div className="flex items-center gap-4 mt-auto pt-[10px]">
            <img
              src={Reviewer}
              alt="Reviewer"
              className="w-[55px] h-[55px] rounded-full object-cover"
            />

            <div>
              <p className="text-[18px] font-semibold text-[#0D0C09]">
                Rebeca Pipard
              </p>

              <div className="flex items-center gap-2">
                <img src={material} alt="Verified" className="w-[24px] h-[24px]" />
                <span className="text-[15px] text-[#282828]">
                  Verified Customer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="flex-shrink-0 w-full">
      <div className="bg-[#EEEBFF] rounded-[24px] p-[24px] h-[480px] w-full">
        <div className="flex flex-col h-full">
          <span className="text-white">
            <img src={Quote} alt="" className="w-[108px] h-[55px]" />
          </span>

          <div className="flex items-center gap-2 text-2xl text-[#FF9100] mb-[6px] mt-[20px]">
            <div className="flex gap-[6px] items-center">
              <FaStar className="h-[24px] w-[24px]" />
              <FaStar className="h-[24px] w-[24px]" />
              <FaStar className="h-[24px] w-[24px]" />
              <FaStar className="h-[24px] w-[24px]" />
              <FaStar className="h-[24px] w-[24px]" />
            </div>
          </div>

          <h3 className="text-[#571313] text-[25px] font-semibold mb-[20px]">
            New Obsession. Love It
          </h3>

          <p className="text-[#0D0C09] text-[14px]">
            From the moment I tried Sanrayn, I knew it would become part of my daily routine. It’s long-lasting yet gentle, with a depth that truly elevates your presence. What I appreciate most is the brand’s respect for purity and values.
          </p>

          {/* VERIFIED CUSTOMER */}
          <div className="flex items-center gap-4 mt-auto pt-[10px]">
            <img
              src={Reviewer}
              alt="Reviewer"
              className="w-[55px] h-[55px] rounded-full object-cover"
            />

            <div>
              <p className="text-[18px] font-semibold text-[#0D0C09]">
                Rebeca Pipard
              </p>

              <div className="flex items-center gap-2">
                <img src={material} alt="Verified" className="w-[24px] h-[24px]" />
                <span className="text-[15px] text-[#282828]">
                  Verified Customer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* MOBILE NAV BUTTONS */}
  <div className="flex gap-4 mt-6">
    <button
      onClick={prev}
      className="w-[40px] h-[40px] rounded-full bg-[#F5F1EA] shadow flex items-center justify-center"
    >
      <GoChevronLeft className="text-[28px]" />
    </button>

    <button
      onClick={next}
      className="w-[40px] h-[40px] rounded-full bg-[#F5F1EA] shadow flex items-center justify-center"
    >
      <GoChevronRight className="text-[28px]" />
    </button>
  </div>
</section>


        </div>
    );
};

export default Testimonials;