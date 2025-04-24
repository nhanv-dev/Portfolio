import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { RiArrowRightUpLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { slides } from "../../data";
import CircularText from "../CircularText";
import './style.css';
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
    const circularTextRef = useRef();

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
        <section className="h-screen w-full relative">
            <div id="slider" className="h-full w-full flex relative overflow-hidden">
                <Link to={'/contact'} tabIndex={-1} className="z-[30] absolute right-[600px] bottom-[100px] translate-y-[50%] p-1 bg-black rounded-full">
                    <CircularText
                        ref={circularTextRef}
                        text="LETS TALK . LETS TALK . LETS TALK . "
                        onHover="speedUp"
                        spinDuration={20}
                        className="w-[140px] h-[140px]"
                        innerClassName="text-ligbg-lightBg"
                    />
                    <div
                        onMouseEnter={() => circularTextRef.current?.handleHoverStart()}
                        onMouseLeave={() => circularTextRef.current?.handleHoverEnd()}
                        className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] bg-[#111111] border-2 border-[#2b2a2a] rounded-full flex items-center justify-center">
                        <RiArrowRightUpLine className="text-gray-300" size={30} />
                    </div>
                </Link>

                <div className="z-[30] absolute left-10 bottom-[50px] translate-y-[50%] gap-10 hidden md:flex items-center justify-start">
                    <div className="h-[35px] flex items-center justify-center ">
                        <p className="h-[35px] flex items-center justify-center w-[35px] border-2 border-ligbg-lightBg/90 border-r-ligbg-lightBg/40">
                            <FaLocationDot />
                        </p>
                        <p className="h-[35px] text-[0.95rem] flex items-center justify-center font-bold px-2 relative border-2 border-l-0 border-ligbg-lightBg/90">Ho Chi Minh City, Vietnam</p>
                    </div>
                    <Clock />
                </div>

                <motion.div
                    id="slideImage"
                    className="w-full h-full relative overflow-hidden z-[1]"
                    style={{ scale }}
                >
                    {memoizedSlides.map((slide, index) => (
                        <SlideImage
                            key={index}
                            index={index}
                            active={activeSlide}
                            image={slide.src}
                            animation={memoizedImageAnimation}
                        />
                    ))}
                </motion.div>

                <div className="h-[3px] absolute left-0 right-[500px] bottom-[100px] translate-y-[50%] z-20 bg-lightBg"></div>

                {memoizedSlides.map((slide, index) => (
                    <Slide
                        key={index}
                        isActive={activeSlide === index}
                        subtitle={slide.subtitle}
                        title={slide.title}
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

const Slide = ({ isActive, title, subtitle }) => {
    return (
        <div className={`px-10 py-5 absolute left-0 bottom-[100px] transition-opacity delay-100 duration-[300ms] ease-in-out z-20 
            ${isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-[-1] pointer-events-none"}`} >
            <div className="w-full h-full flex items-center mb-5">
                <motion.span
                    initial={{ opacity: 0, y: 0, x: -100 }} // Bắt đầu mờ và dịch xuống
                    animate={isActive ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 0, x: -100 }} // Khi active thì hiện lên
                    transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }} // Hiệu ứng mềm mại, chậm về cuối
                    className="text-[.8rem] md:text-[1rem] tracking-[2px] capitalize text-ligbg-lightBg flex items-center font-bold"
                >
                    <span className="inline-block mt-1 mr-5 w-[40px] h-[2px] bg-[rgba(255,255,255,1)]"></span>
                    {subtitle}
                </motion.span>
            </div>
            {isActive && (
                <BlurTextEffect
                    text={title}
                    delay={500}
                    animateBy="words"
                    direction="top"
                    className="text-ligbg-lightBg text-[80px] font-extrabold uppercase font-unbounded"
                />
            )}
        </div>
    );
};

const SlideImage = ({ image, active, index, animation }) => {
    const isActive = index === active;
    const textStyle = {
        WebkitTextStroke: '3px rgba(255, 255, 255, 0.5)',
    };

    return (
        <div className="absolute w-full h-full flex justify-end ">
            <div className="flex-1 h=full bg-darkBg"></div>
            <motion.div
                className="relative w-[75%] h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
                initial={animation.initial}
                animate={isActive ? animation.animate : animation.exit}
                transition={animation.transition}
            >
                <div className="z-[1] absolute bg-[rgba(0,0,0,0.1)] left-0 top-0 right-0 bottom-0"></div>
                <div className="z-[2] absolute font-bold right-[60px] bottom-[170px] text-[10vw] text-[rgba(255,255,255,0.1)]"
                    style={textStyle}
                >
                    {String(index + 1).padStart(2, "0")}
                </div>
            </motion.div>
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
        <div className="md:flex hidden w-[500px] h-[200px] absolute right-0 bottom-0 z-20">
            {/* Prev Button */}
            <div
                className={`relative h-full transition-all duration-[800ms] cursor-pointer bg-lightBg ${active === "prev" ? "w-[300px]" : "w-[200px]"}`}
                onClick={handlePrev}
                onMouseEnter={() => setActive("prev")}
                style={{
                    backgroundImage: `url(${slides[prevIndex].src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className={`z-[1] absolute left-0 top-0 w-full h-full transition-all duration-[600ms] bg-lightBg ${active === "prev" ? "opacity-0" : "opacity-100"}`}></div>
                <div className={`z-[2] absolute inset-0 flex flex-col items-center justify-center ${active === "prev" ? "bg-black/20 text-ligbg-lightBg" : "bg-transparent text-gray-800"}`}>
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
                className={`relative h-full transition-all duration-[800ms] cursor-pointer bg-lightBg ${active === "next" ? "w-[300px]" : "w-[200px]"}`}
                onClick={handleNext}
                onMouseEnter={() => setActive("next")}
                style={{
                    backgroundImage: `url(${slides[nextIndex].src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className={`z-[1] absolute left-0 top-0 w-full h-full transition-all duration-[600ms] bg-lightBg ${active === "next" ? "opacity-0" : "opacity-100"}`}></div>
                <div className={`z-[2] absolute inset-0 flex flex-col items-center justify-center ${active === "next" ? "bg-black/20 text-ligbg-lightBg" : "bg-transparent text-gray-800"}`}>
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
};