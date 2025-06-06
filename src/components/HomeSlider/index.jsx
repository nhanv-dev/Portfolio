import { motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaLocationDot } from "react-icons/fa6";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { personalInfo, projects, slides } from "../../data";
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
    const nextIndex = (activeSlide + 1) % slides.length;
    const prevIndex = (activeSlide - 1 + slides.length) % slides.length;

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
        <section className="h-[calc(100vh-72px)] max-h-hero w-full relative">
            <div className="absolute right-10 top-10 flex items-center justify-center z-20">
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
            {/* 
       

            <div className="z-[30] absolute left-[0%] top-5 gap-10 flex items-center justify-center ml-5">
                <div className="relative pl-5">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[90%] bg-darkText"></div>
                    <p className="mb-1.5 font-bold text-[1.05rem] text-darkText">
                        Designed & Coded by Tran Thanh Nhan
                    </p>
                    <p className="font-bold text-[1.05rem] text-darkText">
                        Personal Portfolio
                    </p>
                </div>
            </div>

    */}

            {/* <div className="z-[30] absolute right-[40%] bottom-5 gap-10 flex items-center justify-center mr-10">
                    <div className="flex items-center gap-6 h-[35px]">
                        <a href={personalInfo.link.facebook} target="_blank" rel="noopener noreferrer" className="font-bold text-[1.05rem] text-darkText">
                            Facebook
                        </a>
                        <p className="w-[7px] h-[7px] bg-darkText rounded-full"></p>
                        <a href={personalInfo.link.github} target="_blank" rel="noopener noreferrer" className="font-bold text-[1.05rem] text-darkText">
                            Github
                        </a>
                        <p className="w-[7px] h-[7px] bg-darkText rounded-full"></p>
                        <a href={personalInfo.link.linkedin} target="_blank" rel="noopener noreferrer" className="font-bold text-[1.05rem] text-darkText">
                            LinkedIn
                        </a>
                    </div>
                </div> */}

            <div className="w-full h-full flex gap-20">
                {/* <div className="w-[25%] h-full bg-darkBg relative z-10">
                    <div className="pl-[120px] pt-[120px] pb-20">
                        {memoizedSlides.map((slide, index) => {
                            const isActive = index === activeSlide;

                            return isActive ? (
                                <div key={index}>
                                    <p className="text-darkText text-[2rem] font-unbounded font-bold tracking-wide mb-2">
                                        {String(index + 1).padStart(2, '0')}.
                                    </p>
                                    <BlurTextEffect
                                        text={slide.title}
                                        delay={500}
                                        direction="top"
                                        animateBy="words"
                                        className="text-[4rem] font-extrabold tracking-wide font-unbounded"
                                    >
                                        {slide.title}
                                    </BlurTextEffect>
                                </div>
                            ) : null
                        })}
                    </div>
                    
                </div> */}
                <div className="relative flex-1 h-full flex flex-col">
                    <div className="flex-1 h-full flex">
                        {/* <div className="min-w-max px-8 h-full bg-darkBg flex items-center justify-center">
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
                        </div> */}
                        <div className="relative flex-1 h-full overflow-hidden">
                            {memoizedSlides.map((slide, index) => {
                                const isActive = index === activeSlide;

                                return isActive ? (
                                    <div key={index} className="absolute left-0 z-10 container right-0 top-1/2 -translate-y-1/2">
                                        <p className="text-darkText text-[2rem] font-unbounded font-bold tracking-wide mb-2">
                                            {String(index + 1).padStart(2, '0')}.
                                        </p>
                                        <BlurTextEffect
                                            text={slide.title}
                                            delay={500}
                                            direction="top"
                                            animateBy="words"
                                            className="text-[4rem] font-extrabold tracking-wide font-unbounded"
                                        >
                                            {slide.title}
                                        </BlurTextEffect>
                                    </div>
                                ) : null
                            })}
                            <div className="z-[30] absolute left-5 top-5 gap-10 hidden md:flex items-center justify-start">
                                <div className="h-[35px] flex items-center justify-center ">
                                    <p className="h-[35px] flex items-center justify-center w-[35px] border-2 border-ligbg-lightBg/90 border-r-ligbg-lightBg/40">
                                        <FaLocationDot />
                                    </p>
                                    <p className="h-[35px] text-[0.95rem] flex items-center justify-center font-bold px-2 relative border-2 border-l-0 border-ligbg-lightBg/90">Ho Chi Minh City, Vietnam</p>
                                </div>
                                <Clock />
                            </div>
                            {memoizedSlides.map((slide, index) => {
                                return (
                                    <motion.div
                                        key={index}
                                        className="z-[1] absolute left-0 top-0 w-full h-full bg-cover bg-center"
                                        style={{ backgroundImage: `url(${slide.image})` }}
                                        initial={memoizedImageAnimation.initial}
                                        animate={index === activeSlide ? memoizedImageAnimation.animate : memoizedImageAnimation.exit}
                                        transition={memoizedImageAnimation.transition}
                                    >
                                        <div className="z-[1] absolute bg-[rgba(0,0,0,0.2)] left-0 top-0 right-0 bottom-0"></div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="h-[60px] w-full bg-lightBg flex">
                        <div className="flex-1"></div>
                        <div className="w-[80%] relative z-10">
                            <div className="h-[200px] w-full absolute left-0 bottom-0 z-10 bg-darkBg">
                                {/* {memoizedSlides.map((slide, index) => {
                                    return (
                                        <motion.div
                                            key={index}
                                            className="z-[1] absolute left-0 top-0 w-full h-full bg-cover bg-center"
                                            style={{ backgroundImage: `url(${slide.thumbnail})` }}
                                            initial={memoizedImageAnimation.initial}
                                            animate={index === activeSlide ? memoizedImageAnimation.animate : memoizedImageAnimation.exit}
                                            transition={memoizedImageAnimation.transition}
                                        >
                                            <div className="z-[1] absolute bg-[rgba(0,0,0,0.2)] left-0 top-0 right-0 bottom-0"></div>
                                        </motion.div>
                                    )
                                })} */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

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