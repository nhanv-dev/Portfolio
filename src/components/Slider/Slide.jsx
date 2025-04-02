import { motion } from "framer-motion";
import BlurTextEffect from "../TypeEffect/BlurTextEffect";
import { useState } from "react";
import { slides } from "../../data";


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
                opacity: isActive ? 1 : 0,  // Make inactive slides fully transparent
                filter: isActive ? "blur(0px)" : "blur(8px)",
                scale: isActive ? 1 : 1.1,  // Scale inactive images, but don't let them exceed 1
                zIndex: isActive ? 10 : 0,   // Ensure active slide is on top
            }}
            transition={{
                opacity: { duration: 1.8, ease: [0.16, 1, 0.3, 1] },
                filter: { duration: 1.8, ease: [0.16, 1, 0.3, 1] },
                scale: { duration: 1.8, ease: [0.16, 1, 0.3, 1] },
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


export const ImageNavigation = ({ activeSlide = 0, setActiveSlide }) => {
    const [active, setActive] = useState("next");

    const nextIndex = (activeSlide + 1) % slides.length;
    const prevIndex = (activeSlide - 1 + slides.length) % slides.length;

    const handleNext = () => {
        setActiveSlide(nextIndex);
    };

    const handlePrev = () => {
        setActiveSlide(prevIndex);
    };

    return (
        <div className="md:flex hidden w-[500px] h-[200px] absolute right-0 bottom-0 z-20">
            {/* Prev Button */}
            <div
                className={`relative h-full transition-all duration-[800ms] cursor-pointer bg-white ${active === "prev" ? "w-[300px]" : "w-[200px]"}`}
                onClick={handlePrev}
                onMouseEnter={() => setActive("prev")}
                style={{
                    backgroundImage: `url(${slides[prevIndex].src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className={`z-[1] absolute left-0 top-0 w-full h-full transition-all duration-[600ms] bg-white ${active === "prev" ? "opacity-0" : "opacity-100"}`}></div>
                <div className={`z-[2] absolute inset-0 flex flex-col items-center justify-center ${active === "prev" ? "bg-black/20 text-white" : "bg-transparent text-gray-800"}`}>
                    <p className={`absolute top-[80px] left-[50%] translate-x-[-50%] font-bold uppercase transition-all duration-[800ms] ${active === 'prev'
                        ? "text-[6.25rem]"
                        : "text-[1.2rem]"
                        }`}>prev</p>
                    <p className={`absolute top-[100px] text-[1.25rem] font-bold transition-all duration-[800ms] ${active === 'prev'
                        ? "translate-y-[-15px]"
                        : ""
                        }`}>{slides[prevIndex].title}</p>
                </div>
            </div>

            {/* Next Button */}
            <div
                className={`relative h-full transition-all duration-[800ms] cursor-pointer bg-white ${active === "next" ? "w-[300px]" : "w-[200px]"}`}
                onClick={handleNext}
                onMouseEnter={() => setActive("next")}
                style={{
                    backgroundImage: `url(${slides[nextIndex].src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className={`z-[1] absolute left-0 top-0 w-full h-full transition-all duration-[600ms] bg-white ${active === "next" ? "opacity-0" : "opacity-100"}`}></div>
                <div className={`z-[2] absolute inset-0 flex flex-col items-center justify-center ${active === "next" ? "bg-black/20 text-white" : "bg-transparent text-gray-800"}`}>
                    <p className={`absolute top-[80px] left-[50%] translate-x-[-50%] font-bold uppercase transition-all duration-[800ms] ${active === 'next'
                        ? "text-[6.25rem]"
                        : "text-[1.2rem]"
                        }`}>next</p>
                    <p className={`absolute top-[100px] text-[1.25rem] font-bold transition-all duration-[800ms] ${active === 'next'
                        ? "translate-y-[-15px]"
                        : ""
                        }`}>{slides[nextIndex].title}</p>
                </div>
            </div>
        </div>
    );
}