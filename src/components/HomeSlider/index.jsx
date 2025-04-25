import { motion, useScroll, useTransform } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { slides } from "../../data";
import BlurTextEffect from "../TypeEffect/BlurTextEffect";

// Animation configurations

const IMAGE_ANIMATION = {
    initial: { opacity: 0, filter: "blur(8px)", scale: 1.1 },
    animate: { opacity: 1, filter: "blur(0px)", scale: 1 },
    exit: { opacity: 0, filter: "blur(8px)", scale: 1.1 },
    transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] }
};

export default function HomeSlider() {
    const totalSlide = slides.length;
    const [activeSlide, setActiveSlide] = useState(0);
    const { scrollY } = useScroll();
    const scale = useTransform(scrollY, [0, 500], [1, 1.2]);

    const memoizedSlides = useMemo(() => slides, []);
    const memoizedImageAnimation = useMemo(() => IMAGE_ANIMATION, []);

    const handleSlideChange = useCallback((index) => {
        setActiveSlide(index);
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setActiveSlide((prev) => (prev + 1 >= totalSlide ? 0 : prev + 1));
        }, 10 * 1000);

        return () => {
            clearTimeout(timeout);
        };
    }, [activeSlide, totalSlide]);

    return (
        <section className="h-[calc(100vh-72px)] w-full relative">
            <div id="slider" className="h-full w-full flex relative overflow-hidden">

                <div className="z-[30] absolute left-[60%] bottom-0 gap-10 hidden md:flex items-center justify-start ml-5 mb-5">
                    <div className="h-[35px] flex items-center justify-center ">
                        <p className="h-[35px] flex items-center justify-center w-[35px] border-2 border-ligbg-lightBg/90 border-r-ligbg-lightBg/40">
                            <FaLocationDot />
                        </p>
                        <p className="h-[35px] text-[0.95rem] flex items-center justify-center font-bold px-2 relative border-2 border-l-0 border-ligbg-lightBg/90">Ho Chi Minh City, Vietnam</p>
                    </div>
                    <Clock />
                </div>

                <div className="z-[30] absolute left-[60%] top-5 gap-10 flex items-center justify-center ml-5 mb-5">
                    <div className="relative pl-5">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[90%] bg-darkText"></div>
                        <p className="mb-1 font-bold text-[1rem] text-darkText">
                            Designed & Coded by Tran Thanh Nhan
                        </p>
                        <p className="font-bold text-[1rem] text-darkText">
                            Personal Portfolio
                        </p>
                    </div>
                </div>

                <div className="z-[30] absolute right-[40%] bottom-5 gap-10 flex items-center justify-center mr-10">
                    <div className="flex items-center gap-6 h-[35px]">
                        <p className="font-bold text-[1.05rem] text-darkText">
                            Facebook
                        </p>
                        <p className="w-[7px] h-[7px] bg-darkText rounded-full"></p>
                        <p className="font-bold text-[1.05rem] text-darkText">
                            Github
                        </p>
                        <p className="w-[7px] h-[7px] bg-darkText rounded-full"></p>
                        <p className="font-bold text-[1.05rem] text-darkText">
                            Linkedin
                        </p>
                    </div>
                </div>



                {memoizedSlides.map((slide, index) => (
                    <SlideImage
                        key={index}
                        slide={slide}
                        index={index}
                        active={activeSlide}
                        scale={scale}
                        animation={memoizedImageAnimation}
                        activeSlide={activeSlide}
                        setActiveSlide={handleSlideChange}
                    />
                ))}

                <ImageNavigation
                    activeSlide={activeSlide}
                    setActiveSlide={handleSlideChange}
                />
            </div>
        </section>
    );
}

const SlideImage = ({ active, index, scale, animation, slide, activeSlide, setActiveSlide }) => {
    const isActive = index === active;
    const textStyle = {
        WebkitTextStroke: '3px rgba(255, 255, 255, 0.5)',
    };

    return (
        <div className={`absolute w-full h-full flex justify-end ${isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-[-1] pointer-events-none"}`}>
            <div className="relative w-[60%] min-w-[60%] h-full overflow-hidden">
                <motion.div
                    className="relative w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${slide.image})`,
                        scale: isActive ? scale : 1
                    }}
                    initial={animation.initial}
                    animate={isActive ? animation.animate : animation.exit}
                    transition={animation.transition}
                >
                    <div className="z-[1] absolute bg-[rgba(0,0,0,0.2)] left-0 top-0 right-0 bottom-0"></div>

                    <div className="z-[2] absolute font-bold left-10 bottom-[170px] text-[10vw] text-[rgba(255,255,255,0.1)]"
                        style={textStyle}
                    >
                        {String(index + 1).padStart(2, "0")}
                    </div>
                </motion.div>
            </div>
            <div className={`flex-1 h-full bg-darkBg flex flex-col`}>
                <div className="relative flex-1 overflow-hidden">
                    <motion.div
                        className="relative w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${slide.thumbnail})` }}
                        initial={{ opacity: 0 }}
                        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="z-[1] absolute bg-[rgba(0,0,0,0.2)] left-0 top-0 right-0 bottom-0"></div>
                    </motion.div>

                    <div className="z-[30] absolute right-5 bottom-5 gap-10 hidden md:flex items-center justify-start">
                        <div className="flex items-center gap-5">
                            <button
                                type="button"
                                className="text-white flex items-center justify-center cursor-pointer"
                                onClick={() => {
                                    const prevIndex = (activeSlide - 1 + slides.length) % slides.length;
                                    setActiveSlide(prevIndex);
                                }}
                            >
                                <MdOutlineNavigateBefore size={"4rem"} />
                            </button>
                            <button
                                type="button"
                                className="text-white flex items-center justify-center cursor-pointer"
                                onClick={() => {
                                    const nextIndex = (activeSlide + 1) % slides.length;
                                    setActiveSlide(nextIndex);
                                }}
                            >
                                <MdOutlineNavigateNext size={"4rem"} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex-1 bg-[#60725A] p-5 relative">
                    <div className="absolute left-5 top-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                        <p
                            className="text-darkText text-[1.1rem] font-bold tracking-wide flex items-center justify-center"
                            style={{
                                writingMode: 'vertical-lr',
                                textOrientation: 'mixed',
                                transform: 'rotate(0deg)',
                            }}
                        >
                            Let's Build Together
                        </p>
                    </div>
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 flex flex-col items-center gap-10 bg-white w-[3px] h-[120px]">
                    </div>
                    <div className="absolute right-5 top-1/2 translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                        <p
                            className="text-darkText text-[1.1rem] font-bold tracking-wide flex items-center justify-center"
                            style={{
                                writingMode: 'vertical-lr',
                                textOrientation: 'mixed',
                                transform: 'rotate(0deg)',
                            }}
                        >
                            Just a place to share what I build.
                        </p>
                    </div>
                    <div className="ml-20 mt-10">
                        <p className="text-darkText text-2xl font-extrabold font-unbounded tracking-wider mb-2">
                            {String(index + 1).padStart(2, "0")}.
                        </p>
                        {isActive && (
                            <BlurTextEffect
                                text={slide.title}
                                delay={500}
                                animateBy="words"
                                direction="top"
                                className="text-ligbg-lightBg text-[45px] font-extrabold uppercase tracking-wider font-unbounded"
                            />
                        )}
                        <div className="flex items-center gap-5 mt-6">
                            <span className="w-[50px] h-[3px] bg-lightBg rounded-full"></span>
                            <p className="text-darkText text-[1rem] font-extrabold font-unbounded tracking-wider">
                                {slide.subtitle}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ImageNavigation = ({ activeSlide = 0, setActiveSlide }) => {
    const [active, setActive] = useState("next");
    const nextIndex = (activeSlide + 1) % slides.length;
    const prevIndex = (activeSlide - 1 + slides.length) % slides.length;

    const handleNext = useCallback(() => {
        setActiveSlide(nextIndex);
    }, [nextIndex, setActiveSlide]);

    const handlePrev = useCallback(() => {
        setActiveSlide(prevIndex);
    }, [prevIndex, setActiveSlide]);

    return (
        <div className="md:flex hidden w-[500px] h-[200px] absolute left-10 bottom-0 z-20">
            {/* Prev Button */}
            <div
                className={`relative h-full transition-all duration-[800ms] cursor-pointer bg-lightBg ${active === "prev" ? "w-[300px]" : "w-[200px]"}`}
                onClick={handlePrev}
                onMouseEnter={() => setActive("prev")}
                style={{
                    backgroundImage: `url(${slides[prevIndex].image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className={`z-[1] absolute left-0 top-0 w-full h-full transition-all duration-[600ms] bg-lightBg ${active === "prev" ? "opacity-0" : "opacity-100"}`}></div>
                <div className={`z-[2] absolute inset-0 flex flex-col items-center justify-center ${active === "prev" ? "bg-black/20 text-ligbg-lightBg" : "bg-transparent text-gray-800"}`}>
                    <p className={`absolute top-[80px] left-[50%] translate-x-[-50%] font-bold font-kanit uppercase transition-all duration-[800ms] ${active === 'prev'
                        ? "text-[6.25rem]"
                        : "text-[1.5rem] "
                        }`}>prev</p>
                    <p className={`absolute top-[110px] text-[1.25rem] font-bold font-kanit transition-all duration-[800ms] ${active === 'prev'
                        ? "translate-y-[-35px]"
                        : ""
                        }`}>{slides[prevIndex].title}</p>
                </div>
            </div>

            {/* Next Button */}
            <div
                className={`relative h-full transition-all duration-[800ms] cursor-pointer bg-lightBg ${active === "next" ? "w-[300px]" : "w-[200px]"}`}
                onClick={handleNext}
                onMouseEnter={() => setActive("next")}
                style={{
                    backgroundImage: `url(${slides[nextIndex].image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className={`z-[1] absolute left-0 top-0 w-full h-full transition-all duration-[600ms] bg-lightBg ${active === "next" ? "opacity-0" : "opacity-100"}`}></div>
                <div className={`z-[2] absolute inset-0 flex flex-col items-center justify-center ${active === "next" ? "bg-black/20 text-ligbg-lightBg" : "bg-transparent text-gray-800"}`}>
                    <p className={`absolute top-[80px] left-[50%] translate-x-[-50%] font-bold font-kanit uppercase transition-all duration-[800ms] ${active === 'next'
                        ? "text-[6.25rem]"
                        : "text-[1.5rem]"
                        }`}>next</p>
                    <p className={`absolute top-[110px] text-[1.25rem] font-bold font-kanit transition-all duration-[800ms] ${active === 'next'
                        ? "translate-y-[-35px]"
                        : ""
                        }`}>{slides[nextIndex].title}</p>
                </div>
            </div>
        </div>
    );
};

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        let interval;
        const now = new Date();
        const delay = (60 - now.getSeconds()) * 1000;

        const timeout = setTimeout(() => {
            setTime(new Date());
            interval = setInterval(() => {
                setTime(new Date());
            }, 60 * 1000);
        }, delay);

        return () => {
            clearTimeout(timeout);
            if (interval) clearInterval(interval);
        };
    }, []);

    const vietnamTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Ho_Chi_Minh",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    }).format(time);

    return (
        <div className="h-[35px] flex items-center justify-center font-bold text-[0.95rem]">
            Local / {`${vietnamTime} (GMT+7)`}
        </div>
    );
};