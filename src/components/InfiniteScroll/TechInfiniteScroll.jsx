import { motion } from "framer-motion";

const skills = [
  // Frontend Development
  { name: "React", icon: "/images/icons/react.svg" },
  { name: "Next.js", icon: "/images/icons/next.js.svg" },
  { name: "Angular", icon: "/images/icons/angular.svg" },
  { name: "Redux", icon: "/images/icons/redux.svg" },
  { name: "JavaScript", icon: "/images/icons/javascript.svg" },
  { name: "TypeScript", icon: "/images/icons/typescript.svg" },
  { name: "HTML5", icon: "/images/icons/html5.svg" },
  { name: "CSS3", icon: "/images/icons/css3.svg" },

  // Backend Development
  { name: "Node.js", icon: "/images/icons/node.js.svg" },
  { name: "Express.js", icon: "/images/icons/express.js.svg" },
  { name: "NestJS", icon: "/images/icons/nestjs.svg" },
  { name: ".NET", icon: "/images/icons/net.svg" },
  { name: "Java", icon: "/images/icons/java.svg" },
  { name: "Spring Boot", icon: "/images/icons/spring_boot.svg" },
  { name: "JSP / Servlet", icon: "/images/icons/jsp___servlet.svg" },

  // Databases
  { name: "SQL Server", icon: "/images/icons/sql_server.svg" },
  { name: "MySQL", icon: "/images/icons/mysql.svg" },
  { name: "MongoDB", icon: "/images/icons/mongodb.svg" },

  // DevOps & Tools
  { name: "Linux", icon: "/images/icons/linux.svg" },
  { name: "Ubuntu", icon: "/images/icons/ubuntu.svg" },
  { name: "IIS", icon: "/images/icons/iis.svg" },
  { name: "Nginx", icon: "/images/icons/nginx.svg" },
  { name: "Ocelot", icon: "/images/icons/ocelot.svg" },
  { name: "Socket.IO", icon: "/images/icons/socket.io.svg" },
  { name: "Docker", icon: "/images/icons/docker.svg" },
  { name: "Firebase", icon: "/images/icons/firebase.svg" },
  { name: "Git", icon: "/images/icons/git.svg" },
];


const TechInfiniteScroll = () => {
  return (
    <div className="relative w-full overflow-hidden bg-darkBg py-[2rem] border-t border-b border-gray-900 max-h-[104px]">
      {/* Gradient che phủ hai bên */}
      <div className="absolute inset-y-0 left-0 w-[24rem] bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-[24rem] bg-gradient-to-l from-black to-transparent z-10"></div>

      {/* Thanh scroll animation */}
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 80,
        }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <div key={index} className="inline-flex w-fit min-w-fit items-center gap-2.5 rounded-full border px-4 py-2 text-sm shadow transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-800 text-text-primary">
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-auto h-[18px]"
            />
            <span className="font-semibold text-[0.9rem] relative top-[-1px]">{skill.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechInfiniteScroll;
