import { motion } from "framer-motion";
import { GoDotFill } from "react-icons/go";

const DevInfiniteScroll = ({ list }) => {
  return (
    <div className="relative w-full overflow-hidden max-h-[400px]">
      {/* Gradient che phủ hai bên */}
      <div className="absolute inset-y-0 left-0 w-[24rem] bg-gradient-to-r dark:from-black to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-[24rem] bg-gradient-to-l dark:from-black to-transparent z-10"></div>

      {/* Thanh scroll animation */}
      <motion.div
        className="flex gap-5 w-max items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 80,
        }}
      >
        {[...list, ...list].map((item, index) => (
          <div key={index} className="flex gap-5 items-center">
            <div className="inline-flex w-fit min-w-fit">
              <span className="text-[3rem] font-extrabold font-unbounded">{item?.name || item}</span>
            </div>
            <span className="inline-flex text-[2.5rem]">
              <GoDotFill />
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default DevInfiniteScroll;
