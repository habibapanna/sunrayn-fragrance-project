import { motion } from "framer-motion";


const Signature = () => {
const fadeUpSoft = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const fadeInSoft = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.4,
      ease: "easeOut",
    },
  },
};


  return (
    <section className="mx-auto max-w-full px-[16px] md:px-[32px] py-[16px] md:py-[32px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px] lg:gap-[32px] items-stretch">

        {/* LEFT IMAGE */}
<div
  variants={fadeUpSoft}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.5 }}
  className="w-full"
>
  <img
    src="https://i.postimg.cc/zD20k7cK/Featured-Image.png"
    alt="Signature Perfume"
    className="w-full h-[300px] md:h-[450px] lg:h-full object-cover rounded-3xl lg:rounded-[48px]"
  />
</div>


        {/* RIGHT CONTENT CARD */}
       <div
  variants={fadeInSoft}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.5 }}
  className="relative rounded-3xl lg:rounded-[48px] overflow-hidden flex items-center"
>


          {/* RADIAL GRADIENT */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, #FFEDCA 0%, #BA9448 100%)",
            }}
          />

          {/* BACKGROUND SHAPE */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-100"
            style={{
              backgroundImage:
                "url('https://i.postimg.cc/13QCgtd6/Background-Shape.png')",
            }}
          />

          {/* CONTENT */}
          <motion.div
  variants={fadeUpSoft}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.5 }}
  className="relative z-10
    p-[24px]
    md:p-[64px]
    lg:p-[60px]
    2xl:p-[153px]"
>

            <h2 className="text-[#571313] font-semibold leading-tight
    text-[24px]
    sm:text-[30px]
    2xl:text-[48px]
    mb-4 sm:mb-6">
              Signature-Inspired <br />
              Scents That Stay-On Skin <br />
              and in Memory
            </h2>

            <p className="text-[#1D0B01] leading-relaxed
    text-[14px]
    lg:text-[16px]
    xl2:text-[18px]
    2xl:text-[20px]">
              SANRAYN means “
              <span className="font-bold">
                LIGHT PURIFIED THROUGH THE SOUL.
              </span>
              ” The brand was born with a purpose: to make top-quality,
              designer-inspired perfumes accessible. Too often,
              perfumes fail to create a true connection. They lack
              depth, individuality, and the connection a fragrance
              should carry.
            </p>
          </motion.div>
      </div>
      </div>
    </section>
  );
};

export default Signature;
