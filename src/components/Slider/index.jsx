import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import './style.css';
import Slide from "./Slide";
import { Link } from "react-router-dom";

const images = [
    'https://images.unsplash.com/photo-1636730740168-c94f3ab802e6?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1692023496239-0554df299b0d?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1604599340212-3d27b5c6afe1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
]

export default function Slider() {
    const totalSlide = 3;
    const [activeSlide, setActiveSlide] = useState(0);
    const buttonRef = useRef(null);
    const { scrollY } = useScroll();
    const scale = useTransform(scrollY, [0, 500], [1, 1.2]);

    useEffect(() => {
        if (activeSlide < 0) setActiveSlide(0)
        if (activeSlide === 0) buttonRef.current.style.transform = `translateY(110px)`
        else buttonRef.current.style.transform = `translateY(-${110 * activeSlide - 110}px)`
    }, [activeSlide])

    useEffect(() => {
        const timeout = setTimeout(() => setActiveSlide(activeSlide + 1 >= totalSlide ? 0 : activeSlide + 1), 10 * 1000)
        return () => clearTimeout(timeout)
    }, [activeSlide])


    return (
        <section className="h-[660px] w-full">
            <div id="slider" className="h-full w-full flex relative overflow-hidden">
                <div className="flex-1 relative hidden lg:block">
                    <div className="z-[4] absolute max-h-[330px] py-[10px] overflow-hidden left-0 top-[50%] translate-y-[-50%]">
                        <div ref={buttonRef} className="flex flex-col gap-[10px] transition-all duration-1000 ease-in-out">
                            {images.map((image, index) => (
                                <Button
                                    key={index}
                                    number={String(index + 1).padStart(2, '0')}
                                    active={activeSlide === index && "active"}
                                    handleClick={() => setActiveSlide(index)}
                                    image={image}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <motion.div
                    id="slideImage"
                    className="w-full lg:w-[70%] h-full relative overflow-hidden z-[1]"
                    style={{ scale }}
                >
                    {images.map((image, index) => (
                        <SlideImage key={index} index={index} active={activeSlide} image={image} />
                    ))}
                </motion.div>
                <div className="absolute bottom-[50px] right-[70px] flex gap-5 transition-all linear duration-[800ms]">
                    <button onClick={() => {
                        setActiveSlide(activeSlide - 1 < 0 ? 0 : activeSlide - 1)
                    }}
                        className="w-[40px] h-[40px] z-[10] border-[2px] flex items-center justify-center rounded-full hover:scale-[1.2] transition-all duration-300 ease-in-out">
                        <BiChevronLeft className="text-[24px] leading-[40px] font-extrabold" />
                    </button>
                    <button
                        onClick={() => setActiveSlide(activeSlide + 1 >= totalSlide ? 0 : activeSlide + 1)}
                        className="w-[40px] h-[40px] z-[10] border-[2px] flex items-center justify-center rounded-full hover:scale-[1.2] transition-all duration-300 ease-in-out">
                        <BiChevronRight className="text-[24px] leading-[40px] font-extrabold" />
                    </button>
                </div>
                <div className='z-[3] container absolute top-[50%] translate-y-[-55%] bottom-0 left-0 right-0'>
                    <div className='relative w-full h-full'>
                        <div className="absolute top-0 left-0 lg:w-[800px] md:w-[600px] sm:w-[500px] w-[100%]">
                            <Slide isActive={activeSlide === 0} subtitle={"Welcome to My Developer Journey"} title={"Code Voyager Here"}>
                                <div className="w-full mb-10">
                                    <p className="font-semibold tracking-[.8px] text-[.8rem] md:text-[.9rem] leading-7">
                                        I’m a Front-end Developer and a student at Nong Lam University, majoring in Information Technology.
                                        <br />
                                        Want to know more about my skills and experience? Check out my resume!
                                    </p>
                                </div>
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const SlideImage = ({ image, active, index }) => {
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
            <div className="z-[1] absolute inset-0 bg-black bg-opacity-30"></div>

            <div className="z-[2] absolute right-[60px] bottom-[90px] text-[8vw] text-[rgba(255,255,255,0.05)]"
                style={textStyle}
            >
                {String(index + 1).padStart(2, "0")}
            </div>


        </motion.div>
    );
};


const Button = ({ number, image, handleClick, active }) => {
    return (
        <button onClick={handleClick} className={active + " w-[50px] z-[10] relative hover:w-[190px] transition-all duration-1000 ease-in-out"}>
            <div className="overflow-hidden w-full h-[100px] rounded-r-lg">
                <span
                    style={{ WebkitTextStroke: '.75px rgba(255,255,255, 1)' }}
                    className="z-10 transition-all duration-[300ms] ease-in-out absolute right-0 top-[-30px] tracking-widest font-extrabold text-[2.25rem] leading-[1.6] opacity-[0] text-[rgba(255,255,255,.05)]">
                    {number}
                </span>
                <div
                    className="w-full h-full origin-center bg-center bg-fixed bg-clip-content bg-cover relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-20 after:rounded-r-lg"
                    style={{ backgroundImage: `url(${image})` }}>
                </div>
            </div>
        </button>
    )
}