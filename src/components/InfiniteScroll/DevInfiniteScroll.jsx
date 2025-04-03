import { motion } from "framer-motion";

const skills = [
  { name: "Fullstack Developer" },
  { name: "Web Development" },
  { name: "Git Management" },
  { name: "Source Code Management" },
  { name: "Code Maintenance" },
  { name: "Bug Fixing" },
  { name: "Version Control (Git)" },
  { name: "Backend Development" },
  { name: "Frontend Development" },
  { name: "RESTful APIs" },
  { name: "Database Management" },
  { name: "Agile Development" },
  { name: "Unit Testing" },
  { name: "Debugging" },
  { name: "Performance Optimization" }
];

const DevInfiniteScroll = () => {
  return (
    <div className="relative w-full overflow-hidden max-h-[400px]">
      {/* Gradient che phủ hai bên */}
      <div className="absolute inset-y-0 left-0 w-[24rem] bg-gradient-to-r dark:from-black to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-[24rem] bg-gradient-to-l dark:from-black to-transparent z-10"></div>

      {/* Thanh scroll animation */}
      <motion.div
        className="flex gap-10 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 80,
        }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <div key={index} className="inline-flex w-fit min-w-fit">
            <span className="text-[6rem] font-extrabold uppercase">{skill.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default DevInfiniteScroll;
