import { motion } from "framer-motion";
import BlurTextEffect from "../TypeEffect/BlurTextEffect";


function Slide({ isActive, title, subtitle, children }) {
    return (
        <div
            className={`px-10 py-5 absolute left-0 bottom-[100px] transition-opacity delay-100 duration-[300ms] ease-in-out z-20 
                ${isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-[-1] pointer-events-none"}`}
        >
            <div className="w-full h-full flex items-center mb-5">
                <motion.span
                    initial={{ opacity: 0, y: 0, x: -100 }} // Bắt đầu mờ và dịch xuống
                    animate={isActive ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 0, x: -100 }} // Khi active thì hiện lên
                    transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }} // Hiệu ứng mềm mại, chậm về cuối
                    className="font-[600] text-[.8rem] md:text-[1rem] tracking-[2px] capitalize text-white flex items-center"
                >
                    <span className="inline-block mt-1 mr-5 w-[40px] h-[2px] bg-[rgba(255,255,255,1)]"></span>
                    {subtitle}
                </motion.span>
            </div>
            {isActive &&
                <BlurTextEffect
                    text={title}
                    delay={500}
                    animateBy="words"
                    direction="top"
                    className="text-white text-[100px] font-extrabold uppercase"
                />
            }
        </div>
    );
}

export default Slide;


export const SlideImage = ({ image, active, index }) => {
    const isActive = index === active;

    const textStyle = {
        WebkitTextStroke: '3px rgba(255, 255, 255, 0.5)',
    };

    return (
        <motion.div
            className="absolute w-full h-full bg-cover bg-center transition-transform"
            style={{ backgroundImage: `url(${image})` }}
            animate={{
                scale: isActive ? 1 : 0.88,
                opacity: isActive ? 1 : 0.6,
                filter: isActive ? "blur(0px)" : "blur(8px)",
                zIndex: isActive ? 10 : 0,
            }}
            transition={{
                duration: 1.8,
                ease: [0.16, 1, 0.3, 1],
            }}
        >
            {/* Lớp overlay màu đen nhẹ */}
            <div className="z-[1] absolute dark:bg-[rgba(0,0,0,0.1)] left-0 top-0 right-0 bottom-0"></div>

            <div className="z-[2] absolute font-bold right-[60px] bottom-[170px] text-[10vw] text-[rgba(255,255,255,0.1)]"
                style={textStyle}
            >
                {String(index + 1).padStart(2, "0")}
            </div>
        </motion.div>
    );
};