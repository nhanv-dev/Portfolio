import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { FaLocationDot } from "react-icons/fa6";
import { RiArrowRightUpLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { slides } from "../../data";
import CircularText from "../CircularText";
import Slide, { ImageNavigation, SlideImage } from "./Slide";
import './style.css';


export default function Slider() {
    const totalSlide = slides.length;
    const [activeSlide, setActiveSlide] = useState(0);
    const { scrollY } = useScroll();
    const scale = useTransform(scrollY, [0, 500], [1, 1.2]);
    const circularTextRef = useRef();
    // const [progress, setProgress] = useState(0);  // Track progress
    // const [timeoutStarted, setTimeoutStarted] = useState(false);
    // const intervalRef = useRef(null);  // Ref để lưu interval

    useEffect(() => {
        const timeout = setTimeout(() => {
            setActiveSlide((prev) => (prev + 1 >= totalSlide ? 0 : prev + 1));  // Switch to next slide
            // setProgress(0);  // Reset progress
            // setTimeoutStarted(false);  // Reset timeoutStarted

        }, 10 * 1000); // Timeout after 10 seconds

        // setTimeoutStarted(true);  // Mark timeout as started

        return () => {
            clearTimeout(timeout);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeSlide]);


    // useEffect(() => {
    //     if (timeoutStarted) {
    //         intervalRef.current = setInterval(() => {
    //             setProgress(prev => {
    //                 if (prev < 100) return prev + (100 / (10 * 1000 / 100));  // Progress based on 10 seconds
    //                 clearInterval(intervalRef.current);  // Clear interval once we reach 100%
    //                 return 100;
    //             });
    //         }, 100);

    //         return () => clearInterval(intervalRef.current);
    //     }
    // }, [timeoutStarted])

    return (
        <>
            <section className="h-screen w-full relative">
                {/* <div style={{ width: '100%', backgroundColor: '#ccc', height: '5px', borderRadius: '2px' }} className="absolute left-0 right-0 top-0 z-[3]">
                    <div className="bg-primary h-full" style={{ width: `${progress}%`, transition: 'width 0.1s', }}></div>
                </div> */}

                <div id="slider" className="h-full w-full flex relative overflow-hidden">
                    <Link to={'/contact'} tabIndex={-1} className="z-[30] absolute right-[600px] bottom-[100px] translate-y-[50%] p-1 bg-black rounded-full">
                        <CircularText
                            ref={circularTextRef}
                            text="LETS TALK . LETS TALK . LETS TALK . "
                            onHover="speedUp"
                            spinDuration={20}
                            className="w-[140px] h-[140px]"
                            innerClassName="text-white"
                        >
                        </CircularText>
                        <div
                            onMouseEnter={() => circularTextRef.current?.handleHoverStart()}
                            onMouseLeave={() => circularTextRef.current?.handleHoverEnd()}
                            className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] bg-[#111111] border-2 border-[#2b2a2a] rounded-full flex items-center justify-center">
                            <RiArrowRightUpLine className="text-gray-300" size={30} />
                        </div>
                    </Link>
                    <div className="z-[30] absolute left-10 bottom-[50px] translate-y-[50%] gap-5 hidden md:flex items-center justify-start">
                        <div className="h-[35px] flex items-center justify-center ">
                            <p className="h-[35px] flex items-center justify-center w-[35px] border-2 border-white/90 border-r-white/40">
                                <FaLocationDot />
                            </p>
                            <p className="h-[35px] text-[0.95rem] flex items-center justify-center font-bold px-2 relative border-2 border-l-0 border-white/90">Ho Chi Minh City, Vietnam</p>
                        </div>
                        <Clock />
                    </div>
                    <motion.div
                        id="slideImage"
                        className="w-full h-full relative overflow-hidden z-[1]"
                        style={{ scale }}
                    >
                        {slides.map((slide, index) => (
                            <SlideImage key={index} index={index} active={activeSlide} image={slide.src} />
                        ))}
                    </motion.div>

                    <div className="h-[3px] absolute left-0 right-[500px] bottom-[100px] translate-y-[50%] z-20 bg-white"></div>

                    <Slide isActive={activeSlide === 0} subtitle={"Welcome to My Developer Journey"} title={"Code Voyager Here"}>
                        <Link to={"/about"}
                            className="hover:scale-[1.05] transition-all duration-300 ease-in-out inline-flex items-center justify-center gap-3 rounded-full px-3 py-2 border-[2px] border-[rgba(255,255,255,0.2)] focus:outline-none">
                            <span
                                className="w-[30px] h-[30px] border-2 bg-white text-black rounded-full flex items-center justify-center">
                                <BiChevronRight className="text-[22px] relative top-[1px] font-extrabold" />
                            </span>
                            <span className="text-[12px] tracking-[2px] uppercase font-[700]">Discover My Resume</span>
                        </Link>
                    </Slide>
                    <Slide isActive={activeSlide === 1} subtitle={"Where Ideas Come to Life"} title={"Code Creations"}>
                        <div className="w-full mb-10">
                            <p className="font-semibold tracking-[.8px] text-[.8rem] md:text-[.9rem] leading-7">
                                My name is Thanh Nhan. Currently, I am studying at the NongLam University.
                                <br />
                                My major is information technology. I am a front-end developer.
                            </p>
                        </div>
                        <Link to={"/about"}
                            className="hover:scale-[1.05] transition-all duration-300 ease-in-out inline-flex items-center justify-center gap-3 rounded-full px-3 py-2 border-[2px] border-[rgba(255,255,255,0.2)] focus:outline-none">
                            <span
                                className="w-[30px] h-[30px] border-2 bg-white text-black rounded-full flex items-center justify-center">
                                <BiChevronRight className="text-[22px] relative top-[1px] font-extrabold" />
                            </span>
                            <span className="text-[12px] tracking-[2px] uppercase font-[700]">Explore My Work</span>
                        </Link>
                    </Slide>
                    <Slide isActive={activeSlide === 2} subtitle={"Ready to Collaborate?"} title={"Let’s Connect!"}>
                        <div className="w-full mb-10">
                            <p className="font-semibold tracking-[.8px] text-[.8rem] md:text-[.9rem] leading-7">
                                My name is Thanh Nhan. Currently, I am studying at the NongLam University.
                                <br />
                                My major is information technology. I am a front-end developer.
                            </p>
                        </div>
                        <Link to={"/about"}
                            className="hover:scale-[1.05] transition-all duration-300 ease-in-out inline-flex items-center justify-center gap-3 rounded-full px-3 py-2 border-[2px] border-[rgba(255,255,255,0.2)] focus:outline-none">
                            <span
                                className="w-[30px] h-[30px] border-2 bg-white text-black rounded-full flex items-center justify-center">
                                <BiChevronRight className="text-[22px] relative top-[1px] font-extrabold" />
                            </span>
                            <span className="text-[12px] tracking-[2px] uppercase font-[700]">Get in Touch</span>
                        </Link>
                    </Slide>

                    <ImageNavigation activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
                </div>
            </section>
        </>
    )
}

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        let interval; // Lưu interval để có thể clear
        const now = new Date();
        const delay = (60 - now.getSeconds()) * 1000; // Đợi đến đầu phút tiếp theo

        const timeout = setTimeout(() => {
            setTime(new Date());

            // Sau đó cập nhật mỗi phút
            interval = setInterval(() => {
                setTime(new Date());
            }, 60 * 1000);
        }, delay);

        return () => {
            clearTimeout(timeout);
            if (interval) clearInterval(interval); // Đảm bảo cleanup chính xác 
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
