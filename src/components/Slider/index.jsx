import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { WelcomeSlide } from './Slides';
import './style.css';

export default function Slider() {
    const totalSlide = 3;
    const [activeSlide, setActiveSlide] = useState(0);
    const buttonRef = useRef(null);
    const { scrollY } = useScroll();
    const scale = useTransform(scrollY, [0, 500], [1, 1.2]);

    useEffect(() => {
        if (activeSlide < 0) setActiveSlide(0)
        if (activeSlide === 0) buttonRef.current.style.transform = `translateY(85px)`
        else buttonRef.current.style.transform = `translateY(-${85 * activeSlide - 85}px)`
    }, [activeSlide])

    useEffect(() => {
        const timeout = setTimeout(() => setActiveSlide(activeSlide + 1 >= totalSlide ? 0 : activeSlide + 1), 10 * 1000)
        return () => clearTimeout(timeout)
    }, [activeSlide])


    return (
        <section className="h-[660px] w-full">
            <div id="slider" className="h-full w-full flex relative overflow-hidden">
                <div className="flex-1 relative hidden lg:block">
                    <div className="z-[4] absolute max-h-[255px] py-[10px] overflow-hidden left-0 top-[50%] translate-y-[-50%]">
                        <div ref={buttonRef}
                            className="flex flex-col gap-[10px] transition-all duration-1000 ease-in-out">
                            <Button number="01" active={activeSlide === 0 && "active"}
                                handleClick={() => setActiveSlide(0)}
                                image="https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/web%2Fastronaut-thumbbail.jpg?alt=media&token=fa0b2eff-ea5d-475d-9953-42a5c27f48f0" />
                            <Button number="02" active={activeSlide === 1 && "active"}
                                handleClick={() => setActiveSlide(1)}
                                image="https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/web%2Fastronaut-thumbbail.jpg?alt=media&token=fa0b2eff-ea5d-475d-9953-42a5c27f48f0" />
                            <Button number="03" active={activeSlide === 2 && "active"}
                                handleClick={() => setActiveSlide(2)}
                                image="https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/web%2Fastronaut-thumbbail.jpg?alt=media&token=fa0b2eff-ea5d-475d-9953-42a5c27f48f0" />
                        </div>
                    </div>
                </div>
                <motion.div
                    id="slideImage"
                    className="w-full lg:w-[70%] h-full relative overflow-hidden z-[1]"
                    style={{ scale }}
                >
                    <SlideImage
                        index={0}
                        active={activeSlide}
                        image={'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/web%2Fastronaut.jpg?alt=media&token=d3ad0965-b991-499a-ab95-257a8550619d'}
                    />
                    <SlideImage
                        index={1}
                        active={activeSlide}
                        image={'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/web%2Fastronaut.jpg?alt=media&token=d3ad0965-b991-499a-ab95-257a8550619d'}
                    />
                    <SlideImage
                        index={2}
                        active={activeSlide}
                        image={'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/web%2Fastronaut.jpg?alt=media&token=d3ad0965-b991-499a-ab95-257a8550619d'}
                    />
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
                </motion.div>
                <div className='z-[3] container absolute top-[50%] translate-y-[-55%] bottom-0 left-0 right-0'>
                    <div className='relative w-full h-full'>
                        <div className="absolute top-0 left-0 lg:w-[600px] md:w-[600px] sm:w-[500px] w-[100%]">
                            <WelcomeSlide isActive={activeSlide === 0} />
                            <WelcomeSlide isActive={activeSlide === 1} />
                            <WelcomeSlide isActive={activeSlide === 2} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const SlideImage = ({ image, active, index }) => {
    const isActive = index === active;

    return (
        <motion.div
            className="absolute w-full h-full bg-cover bg-center transition-transform"
            style={{ backgroundImage: `url(${image})` }}
            animate={{
                scale: isActive ? 1 : 0.88,  // Giảm mức độ scale khi không active
                opacity: isActive ? 1 : 0.6,  // Làm rõ hơn khi active
                filter: isActive ? "blur(0px)" : "blur(8px)",
                zIndex: isActive ? 10 : 0,
            }}
            transition={{
                duration: 1.8, // Giảm thời gian tổng thể để nhanh hơn
                ease: [0.16, 1, 0.3, 1], // easeOutExpo - chậm dần về cuối
            }}
        >
            <div className="absolute right-[60px] bottom-[90px] text-[10vw] text-white opacity-20">
                {String(index + 1).padStart(2, "0")}
            </div>
        </motion.div>
    );
};

const Button = ({ number, image, handleClick, active }) => {
    return (
        <button onClick={handleClick}
            className={active + " w-[30px] z-[10] relative hover:w-[130px] transition-all duration-1000 ease-in-out"}>
            <div className="overflow-hidden w-full h-[75px] rounded-r-lg">
                <span
                    style={{ WebkitTextStroke: '.75px rgba(255,255,255, 1)' }}
                    className="z-10 transition-all duration-[300ms] ease-in-out absolute right-0 top-[-20px] tracking-widest font-extrabold text-[28px] leading-[1.6] text-white opacity-[0] text-[rgba(255,255,255,.05)]">
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