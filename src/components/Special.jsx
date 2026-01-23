import React, { useEffect, useState } from "react";
import Button from "../assets/Button Container.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Special = () => {
const sectionRef = useRef(null);

const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ["start end", "center center"],
});


  const [textStyle, setTextStyle] = useState({
    left: "90px",
    top: "650px",
    fontSize: "55px",
  });

useEffect(() => {
  const update = () => {
    const w = window.innerWidth;

    if (w >= 1535 && w <= 1750) {
      setTextStyle({ left: "320px", top: "180px", fontSize: "90px" });
    } 
    else if (w >= 1756) {
      setTextStyle({ left: "510px", top: "200px", fontSize: "120px" });
    }
    else if (w >= 1024) {
      setTextStyle({ left: "360px", top: "60px", fontSize: "50px" });
    }
    else if (w >= 768) {
      setTextStyle({ left: "90px", top: "650px", fontSize: "55px" });
    }
    else {
      // ✅ MOBILE FIX
      setTextStyle({ left: "14px", top: "430px", fontSize: "30px" });
    }
  };

  update();
  window.addEventListener("resize", update);
  return () => window.removeEventListener("resize", update);
}, []);

const leftTextX = useTransform(scrollYProgress, [0, 0.6], [200, 0]);   // from right
const rightTextX = useTransform(scrollYProgress, [0, 0.6], [-200, 0]); // from left
const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

const buttonVariants = {
  rest: { x: 0 },
  hover: {
    x: 12,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};



  return (
    <section
  ref={sectionRef}
  className="mx-auto pb-[16px] px-[16px] md:px-[32px] md:pb-[32px]"
>

    <Link to='productList'>
      <motion.div
  whileHover="hover"
  initial="rest"
  className="bg-[#EDE8E0] rounded-[32px] md:rounded-[48px] relative cursor-pointer overflow-hidden"
>

        {/* ================= CONTENT ================= */}
        <div className="flex flex-col lg:flex-row items-center gap-[20px]">

          {/* IMAGE */}
          <div className="relative w-full flex justify-center lg:pl-[50px] lg:py-[50px] 2xl:py-[100px]">
            <img
              src="https://i.postimg.cc/8kWKHMLp/Product-Image.png"
              alt="Special Perfume"
              className="2xl:h-[700px] w-full 2xl:w-[651px] object-cover rounded-[32px] md:rounded-[48px]"
            />
            <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-transparent to-[#EDE8E0]" />
          </div>

          {/* DESCRIPTION */}
          <div className="p-5 lg:mt-[100px] 2xl:mt-[200px]">
            <p className="text-[18px] lg:text-[25px] lg:w-xl 2xl:w-3/4">
              An exclusive creation from Sanrayn, this special perfume delivers a
              luxurious, long-lasting aroma crafted with integrity. Elegant,
              smooth, and versatile, it’s designed to elevate your presence and
              leave a lasting impression.
            </p>

            <Link to='productList'><button className="bg-[#DBAB35] text-black px-5 py-2 md:px-6 md:py-3 rounded-full text-[20px] font-bold md:w-[210px] md:h-[55px] hover:bg-white cursor-pointer my-5 2xl:my-12">
              Shop Now
            </button></Link>
          </div>
        </div>

      {/* ================= FLOATING DESKTOP TEXT ================= */}
<motion.div
  className="flex absolute text-[#571313] items-center"
  style={{
    left: textStyle.left,
    top: textStyle.top,
    maxWidth: "90vw",
    whiteSpace: "nowrap",
    opacity: textOpacity,
  }}
>
  {/* SANRAYN → FROM RIGHT */}
  <motion.h2
    style={{
      x: leftTextX,
      fontSize: textStyle.fontSize,
      letterSpacing: "-0.06em",
    }}
    className="font-bold uppercase leading-[110%]"
  >
    Sanrayn
  </motion.h2>

  {/* SPECIALS → FROM LEFT */}
  <motion.div
    style={{ x: rightTextX }}
    className="flex items-center ml-2"
  >
    <p
      className="font-light uppercase leading-[100%]"
      style={{
        fontSize: textStyle.fontSize,
        letterSpacing: "-0.06em",
        fontWeight: 500,
      }}
    >
      Specials
    </p>

   <motion.img
  src={Button}
  alt=""
  className="ml-2"
  variants={buttonVariants}
  style={{
    width: `calc(${textStyle.fontSize} / 2)`,
    height: `calc(${textStyle.fontSize} / 2)`,
  }}
/>

  </motion.div>
</motion.div>

      </motion.div></Link>
    </section>
  );
};

export default Special;
