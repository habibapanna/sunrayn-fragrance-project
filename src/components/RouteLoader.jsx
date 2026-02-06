import { motion } from "framer-motion";

const RouteLoader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-white/90 backdrop-blur-md flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative w-[160px] h-[220px] flex flex-col items-center">

       {/* PERFUME SPRAY – RIGHT SIDE */}
{/* PERFUME SPRAY – LEFT SIDE (REALISTIC) */}
<motion.div className="absolute -top-4 left-[45%] pointer-events-none">
  {[...Array(5)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute"
      initial={{
        opacity: 0,
        x: 0,
        y: 4,
        scaleX: 0.6,
        scaleY: 0.4,
        rotate: -8,
      }}
      animate={{
        opacity: [0, 0.65, 0],
        x: [0, -38],
        y: [0, -46],
        scaleX: 1.1,
        scaleY: 0.9,
      }}
      transition={{
        duration: 1.8,
        delay: i * 0.18,
        repeat: Infinity,
        ease: "easeOut",
      }}
    >
      <svg width="120" height="70" viewBox="0 0 120 70">
        <defs>
          <linearGradient id={`spray-left-${i}`} x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%" stopColor="#BA9948" stopOpacity="0.6" />
            <stop offset="60%" stopColor="#BA9948" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#BA9948" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Thin directional mist */}
        <ellipse
          cx="80"
          cy="35"
          rx="42"
          ry="14"
          fill={`url(#spray-left-${i})`}
        />
      </svg>
    </motion.div>
  ))}
</motion.div>



        {/* BOTTLE */}
        <div className="relative flex flex-col items-center">

          {/* Cap */}
          <div className="w-[42px] h-[16px] bg-[#571313] rounded-md shadow-md" />

          {/* Nozzle */}
          <div className="w-[12px] h-[10px] bg-[#BA9948] rounded-sm mt-[2px]" />

          {/* Circular Glass Bottle */}
          <div className="relative mt-2 w-[120px] h-[120px] rounded-full bg-white/30 backdrop-blur-xl border border-[#BA9948]/40 shadow-[0_25px_45px_rgba(0,0,0,0.15)] overflow-hidden">

            {/* Liquid */}
            <div className="absolute bottom-0 w-full h-[45%] bg-[#BA9948]/70 rounded-b-full" />

            {/* Liquid shine */}
            <div className="absolute bottom-0 w-full h-[45%] bg-gradient-to-t from-[#BA9948]/60 to-transparent rounded-b-full" />

            {/* Glass reflection */}
            <div className="absolute left-4 top-4 w-[16px] h-[80px] bg-white/30 rounded-full blur-sm" />

            {/* Brand */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <p className="text-[11px] tracking-[0.3em] text-[#571313]">
                SANRAYN
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RouteLoader;
