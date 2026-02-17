import { motion } from "framer-motion";

const RouteLoader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center
      bg-gradient-to-r from-black via-[#2b2b2b] to-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-[200px] h-[200px]"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">

          {/* GOLD GRADIENT */}
          <defs>
            <linearGradient id="gold" x1="0" x2="1">
              <stop offset="0%" stopColor="#caa648" />
              <stop offset="40%" stopColor="#f6e27a" />
              <stop offset="70%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#b8962e" />
            </linearGradient>
          </defs>

          {/* OUTER RING */}
          <motion.circle
            cx="100"
            cy="110"
            r="70"
            stroke="url(#gold)"
            strokeWidth="5"
            fill="transparent"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          {/* STARS ARC */}
          {[...Array(7)].map((_, i) => {
            const angle = (i - 3) * 15;
            const x = 100 + 55 * Math.sin((angle * Math.PI) / 180);
            const y = 110 - 55 * Math.cos((angle * Math.PI) / 180);

            return (
              <motion.text
                key={i}
                x={x}
                y={y}
                textAnchor="middle"
                fill="url(#gold)"
                fontSize="10"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.08 }}
              >
                ★
              </motion.text>
            );
          })}

          {/* LIQUID WAVE */}
          <motion.path
            d="M40 120 Q100 85 160 120 L160 150 Q100 165 40 150 Z"
            fill="url(#gold)"
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />

          {/* CAP */}
          <motion.g
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <rect x="80" y="20" width="40" height="18" rx="6" fill="url(#gold)" />
            <rect x="88" y="10" width="24" height="14" rx="6" fill="url(#gold)" />
          </motion.g>

        </svg>
      </motion.div>
    </motion.div>
  );
};

export default RouteLoader;
