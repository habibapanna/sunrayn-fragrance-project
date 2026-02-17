import { motion } from "framer-motion";

const RouteLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center
      bg-gradient-to-r from-black via-[#2b2b2b] to-black">

      <div className="relative w-[200px] h-[200px]">

        <svg viewBox="0 0 200 200" className="w-full h-full">

          {/* GOLD */}
          <defs>
            <linearGradient id="gold" x1="0" x2="1">
              <stop offset="0%" stopColor="#caa648"/>
              <stop offset="40%" stopColor="#f6e27a"/>
              <stop offset="70%" stopColor="#d4af37"/>
              <stop offset="100%" stopColor="#b8962e"/>
            </linearGradient>

            <linearGradient id="sprayFade" x1="1" x2="0">
              <stop offset="0%" stopColor="#f6e27a" stopOpacity="0.7"/>
              <stop offset="100%" stopColor="#f6e27a" stopOpacity="0"/>
            </linearGradient>
          </defs>

          {/* STATIC RING */}
          <circle
            cx="100"
            cy="110"
            r="70"
            stroke="url(#gold)"
            strokeWidth="5"
            fill="transparent"
          />

          {/* STARS */}
          {[...Array(7)].map((_, i) => {
            const angle = (i - 3) * 15;
            const x = 100 + 55 * Math.sin((angle * Math.PI) / 180);
            const y = 110 - 55 * Math.cos((angle * Math.PI) / 180);

            return (
              <text
                key={i}
                x={x}
                y={y}
                textAnchor="middle"
                fill="url(#gold)"
                fontSize="10"
              >
                ★
              </text>
            );
          })}

          {/* LIQUID */}
          <path
            d="M42 132 C70 95, 120 110, 158 120 L158 150 C120 165, 80 165, 42 150 Z"
            fill="url(#gold)"
          />

          {/* CAP */}
          <rect x="80" y="20" width="40" height="18" rx="6" fill="url(#gold)" />
          <rect x="88" y="10" width="24" height="14" rx="6" fill="url(#gold)" />
        </svg>


        {/* SPRAY PARTICLES */}
        <div className="absolute left-[98px] top-[28px] pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
              animate={{
                opacity: [0, 0.8, 0],
                x: [0, 45],
                y: [0, -20],
                scale: [0.5, 1.2, 1.4]
              }}
              transition={{
                duration: 1.2,
                delay: i * 0.15,
                repeat: Infinity,
                ease: "easeOut"
              }}
            >
              <svg width="80" height="40">
                <ellipse cx="40" cy="20" rx="35" ry="10" fill="url(#sprayFade)" />
              </svg>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default RouteLoader;
