import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { LuCrown, LuHeartHandshake } from "react-icons/lu";
import { PiSealCheck } from "react-icons/pi";
import { RiDoubleQuotesL } from "react-icons/ri";
import Quote from "../../src/assets/Review text (1).png";
import Reviewer from "../../src/assets/Reviewer photo (1).png";
import material from "../../src/assets/material-symbols-light_verified-rounded.png";


const Testimonials = () => {
    return (
        <div className="mx-auto px-[32px] pb-[32px]">
             <div className='flex justify-between mb-[32px]'>
                        <div className='flex justify-center items-center text-center gap-10'>
                            <div>
                                <p className='text-[30px] md:text-[50px] font-semibold text-[#282828]'>What Fragrance Lovers Are Saying About Sanrayn</p>
                            </div>
                        </div>
                         <div className='flex gap-5'>
                <button className="w-[55px] h-[55px] rounded-full bg-[#F5F1EA] shadow flex items-center justify-center cursor-pointer">
                              <GoChevronLeft className='text-[35px]' />
                            </button>
                <button className="w-[55px] h-[55px] rounded-full bg-[#F5F1EA] shadow flex items-center justify-center cursor-pointer">
                              <GoChevronRight className='text-[35px]' />
                            </button>
            </div>
            
                        </div>

            <section className="mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
            
            <div className="bg-[#F6EAEF] rounded-[31px] p-[50px] h-full  md:h-[700px] md:w-[598px]">
  <div className="flex flex-col h-full">

    <span className="text-white text-8xl">
      <img src={Quote} alt="" />
    </span>

    <div className="flex items-center gap-2 text-2xl text-[#FF9100] mb-[12px] mt-[48px]">
      <span>★★★★★</span>
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

                        <div className="bg-[#E6F3EF] rounded-[31px] p-[50px] h-full md:h-[700px] md:w-[598px]">
  <div className="flex flex-col h-full">

    <span className="text-white text-8xl">
      <img src={Quote} alt="" />
    </span>

    <div className="flex items-center gap-2 text-2xl text-[#FF9100] mb-[12px] mt-[48px]">
      <span>★★★★★</span>
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
            <div className="bg-[#EEEBFF] rounded-[31px] p-[50px] h-full  md:h-[700px] md:w-[598px]">
  <div className="flex flex-col h-full">

    <span className="text-white text-8xl">
      <img src={Quote} alt="" />
    </span>

    <div className="flex items-center gap-2 text-2xl text-[#FF9100] mb-[12px] mt-[48px]">
      <span>★★★★★</span>
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
        </div>
    );
};

export default Testimonials;