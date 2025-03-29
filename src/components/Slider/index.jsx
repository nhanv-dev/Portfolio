import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { Link } from "react-router-dom";
import { slides } from "../../data";
import CircularText from "../CircularText";
import TechInfiniteScroll from "../InfiniteScroll/TechInfiniteScroll";
import Slide, { SlideImage } from "./Slide";
import './style.css';



export default function Slider() {
    const totalSlide = slides.length;
    const [activeSlide, setActiveSlide] = useState(0);
    const { scrollY } = useScroll();
    const scale = useTransform(scrollY, [0, 500], [1, 1.2]);
    const [progress, setProgress] = useState(0);  // Track progress
    const [timeoutStarted, setTimeoutStarted] = useState(false);

    const intervalRef = useRef(null);  // Ref để lưu interval

    useEffect(() => {
        const timeout = setTimeout(() => {
            setActiveSlide((prev) => (prev + 1 >= totalSlide ? 0 : prev + 1));  // Switch to next slide
            setProgress(0);  // Reset progress
            setTimeoutStarted(false);  // Reset timeoutStarted

        }, 10 * 1000); // Timeout after 10 seconds

        setTimeoutStarted(true);  // Mark timeout as started

        return () => {
            clearTimeout(timeout);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeSlide]);


    useEffect(() => {
        if (timeoutStarted) {
            intervalRef.current = setInterval(() => {
                setProgress(prev => {
                    if (prev < 100) return prev + (100 / (10 * 1000 / 100));  // Progress based on 10 seconds
                    clearInterval(intervalRef.current);  // Clear interval once we reach 100%
                    return 100;
                });
            }, 100);

            return () => clearInterval(intervalRef.current);
        }
    }, [timeoutStarted])

    return (
        <>
            <section className="h-[calc(100vh-68px)] w-full relative">
                <div style={{ width: '100%', backgroundColor: '#ccc', height: '5px', borderRadius: '2px' }} className="absolute left-0 right-0 top-0 z-[3]">
                    <div className="bg-primary h-full" style={{ width: `${progress}%`, transition: 'width 0.1s', }}></div>
                </div>
                <div id="slider" className="h-full w-full flex relative overflow-hidden">
                    <Link to={'/contact'} tabIndex={-1} className="z-[30] absolute right-[600px] bottom-[100px] translate-y-[50%] bg-black rounded-full">
                        <CircularText
                            text="LETS TALK . LETS TALK . LETS TALK . "
                            onHover="speedUp"
                            spinDuration={20}
                            className="w-[140px] h-[140px]"
                            innerClassName="text-white"
                        />
                    </Link>
                    <div className="z-[30] absolute left-10 bottom-[50px] translate-y-[50%] bg-black px-6 py-2 font-bold uppercase rounded">
                        Scroll down
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
            <TechInfiniteScroll />
        </>
    )
}


function ImageNavigation({ activeSlide = 0, setActiveSlide }) {
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
        <div className="flex w-[500px] h-[200px] absolute right-0 bottom-0 z-20">
            {/* Prev Button */}
            <div
                className={`relative h-full transition-all duration-500 cursor-pointer bg-white ${active === "prev" ? "w-[300px]" : "w-[200px]"}`}
                onClick={handlePrev}
                onMouseEnter={() => setActive("prev")}
                style={{
                    backgroundImage: active === "prev" ? `url(${slides[prevIndex].src})` : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className={`absolute inset-0 flex flex-col items-center justify-center ${active === "prev" ? "bg-black/20 text-white" : "bg-transparent text-black"}`}>
                    <p className={`absolute top-[75px] left-[50%] translate-x-[-50%] font-extrabold uppercase transition-all duration-[800ms] ${active === 'prev'
                        ? "text-[6rem]"
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
                className={`relative h-full transition-all duration-500 cursor-pointer bg-white ${active === "next" ? "w-[300px]" : "w-[200px]"}`}
                onClick={handleNext}
                onMouseEnter={() => setActive("next")}
                style={{
                    backgroundImage: active === "next" ? `url(${slides[nextIndex].src})` : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className={`absolute inset-0 flex flex-col items-center justify-center ${active === "next" ? "bg-black/20 text-white" : "bg-transparent text-black"}`}>
                    <p className={`absolute top-[75px] left-[50%] translate-x-[-50%] font-extrabold uppercase transition-all duration-[800ms] ${active === 'next'
                        ? "text-[6rem]"
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