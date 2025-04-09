import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from 'react';
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

    useEffect(() => {
        const timeout = setTimeout(() => {
            setActiveSlide((prev) => (prev + 1 >= totalSlide ? 0 : prev + 1));  // Switch to next slide

        }, 10 * 1000);

        return () => {
            clearTimeout(timeout);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeSlide]);

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

                <div className="z-[30] absolute left-10 bottom-[50px] translate-y-[50%] gap-10 hidden md:flex items-center justify-start">
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

                <Slide isActive={activeSlide === 0} subtitle={"Welcome to My Developer Journey"} title={"Code Voyager Here"}> </Slide>
                <Slide isActive={activeSlide === 1} subtitle={"Where Ideas Come to Life"} title={"Code Creations"}></Slide>
                <Slide isActive={activeSlide === 2} subtitle={"Ready to Collaborate?"} title={"Let’s Connect!"}></Slide>

                <ImageNavigation activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
            </div>
        </section>
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
