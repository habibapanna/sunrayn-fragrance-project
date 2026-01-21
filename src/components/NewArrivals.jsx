
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../assets/Button Container.png";
import React, { useRef, useEffect, useState } from "react";

const NewArrivals = () => {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  // STRONGER animations (desktop only)
  const newArrivalsX = useTransform(scrollYProgress, [0, 1], [400, 0]);
  const premiumX = useTransform(scrollYProgress, [0, 1], [-400, 0]);

  const middleImageY = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const sideImagesY = useTransform(scrollYProgress, [0, 1], [-100, 0]);

  return (
    <section
      ref={sectionRef}
      className="mx-auto max-w-full px-[16px] pb-[16px] md:px-[32px] md:pb-[32px]"
    >
      <div className="bg-[#EDE8E0] rounded-[32px] md:rounded-[48px] md:p-20 relative overflow-hidden cursor-pointer">

        {/* ================= IMAGE GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">

          {/* LEFT IMAGE */}
          <motion.div
            style={!isMobile ? { y: sideImagesY } : {}}
            className="relative rounded-[32px] md:rounded-[48px] overflow-hidden"
          >
            <img
              src="https://i.postimg.cc/vT4crfPf/Product-Image-(2).png"
              className="w-full md:h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#EDE8E0]" />
          </motion.div>

          {/* CENTER IMAGE */}
          <motion.div
            style={!isMobile ? { y: middleImageY } : {}}
            className="relative rounded-[48px] overflow-hidden hidden md:block"
          >
            <img
              src="https://i.postimg.cc/9QcGyqYZ/Product-Image-(3).png"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#EDE8E0]" />
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            style={!isMobile ? { y: sideImagesY } : {}}
            className="relative rounded-[48px] overflow-hidden hidden lg:block"
          >
            <img
              src="https://i.postimg.cc/fbvtDwtd/Product-Image-(4).png"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#EDE8E0]" />
          </motion.div>
        </div>

        {/* ================= TEXT SECTION ================= */}

        {/* 🔹 MOBILE (NO ANIMATION) */}
        <div className="absolute top-[300px] left-[50px] md:hidden text-[#571313] text-center">
          <div className="flex items-center justify-center gap-3">
            <h2 className="text-[30px] font-bold">NEW ARRIVALS</h2>
            <img src={Button} className="h-[23px] w-[23px]" />
          </div>
          <p className="text-[24px] uppercase mt-2">
            Premium Collections
          </p>
        </div>

        {/* 🔹 DESKTOP (ANIMATED) */}
        {!isMobile && (
          <div className="hidden md:block absolute md:top-[400px] lg:top-[300px] 2xl:top-[600px] left-[150px] -translate-y-1/2 text-[#571313]">

            {/* NEW ARRIVALS */}
            <motion.div style={{ x: newArrivalsX }}>
              <div className="inline-flex items-center">
                <h2
                  className="font-bold md:text-[80px] 2xl:text-[120px]"
                  style={{ lineHeight: "110%", letterSpacing: "-7.2px" }}
                >
                  NEW ARRIVALS
                </h2>
                <img src={Button} className="ml-[31px] md:h-[49px] md:w-[49px]" />
              </div>
            </motion.div>

            {/* PREMIUM COLLECTIONS */}
            <motion.p
              style={{ x: premiumX }}
              className="uppercase font-light md:text-[60px] 2xl:text-[100px] relative left-[100px]"
              style={{ lineHeight: "110%", letterSpacing: "-7.2px",
                fontWeight: 500,
               }}
            >
              Premium Collections
            </motion.p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewArrivals;

