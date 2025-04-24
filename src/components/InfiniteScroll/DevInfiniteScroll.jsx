import { motion } from "framer-motion";
import { GoDotFill } from "react-icons/go";

const DevInfiniteScroll = ({ list, innerClassName, innerClassNameSplit, variant = "black" }) => {
  const isBlack = variant === "black";
  const gradientColor = isBlack ? "from-darkBg" : "from-lightBg";
  const textColor = isBlack ? "text-darkText" : "text-lightText";
  const bgColor = isBlack ? "bg-darkBg" : "bg-lightBg";

  return (
    <div className={`relative w-full overflow-hidden max-h-[400px] ${bgColor}`}>
      {/* Gradient che phủ hai bên */}
      <div className={`absolute inset-y-0 left-0 w-[40rem] bg-gradient-to-r ${gradientColor} to-transparent z-10`}></div>
      <div className={`absolute inset-y-0 right-0 w-[40rem] bg-gradient-to-l ${gradientColor} to-transparent z-10`}></div>

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
        {[...list, ...list, ...list].map((item, index) => (
          <div key={index} className="flex gap-5 items-center">
            <div className="inline-flex w-fit min-w-fit">
              <span className={`text-[3rem] font-extrabold font-unbounded ${textColor} ${innerClassName}`}>{item?.name || item}</span>
            </div>
            <span className={`inline-flex text-[2.5rem] ${textColor} ${innerClassNameSplit}`}>
              <GoDotFill />
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default DevInfiniteScroll;
