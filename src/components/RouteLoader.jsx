import { motion } from "framer-motion";

const RouteLoader = () => {
  return (
    <motion.div
      className="
        fixed inset-0 z-[9999]
        bg-white backdrop-blur-md
        flex items-center justify-center
      "
    >
      <div className="relative w-[64px] h-[64px]">
        <div className="absolute inset-0 rounded-full border-[3px] border-[#E6E6E6]" />
        <div className="absolute inset-0 rounded-full border-[5px] border-[#BA9948] border-t-transparent animate-spin" />
      </div>
    </motion.div>
  );
};

export default RouteLoader;
