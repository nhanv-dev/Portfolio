import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import About from "../components/About";
import FadeContent from "../components/FadeContent";
import TechInfiniteScroll from "../components/InfiniteScroll/TechInfiniteScroll";
import Preloader from "../components/Preloader";
import Resume from "../components/Resume";
import TiltedCard from "../components/TiltedCard";
import TypingEffect from "../components/TypeEffect/TypingEffect";

export default function AboutPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    // Theo dõi vị trí cuộn
    const { scrollYProgress } = useScroll();

    // Scale ảnh từ nhỏ (0.7) → lớn dần (1) và giữ nguyên
    const scale = useTransform(scrollYProgress, [0, 0.2, 1], [0.25, 1, 1]);

    // Dịch ảnh từ trên xuống, tránh bị trôi khỏi viewport
    const translateY = useTransform(scrollYProgress, [0, 0.2, 1], [-528, 0, 0]);
    const translateX = useTransform(scrollYProgress, [0, 0.2, 1], [0, 0, 0]);

    return (
        <>
            {!isLoaded && <Preloader texts={["About Me", "My Journey"]} onLoaded={() => setIsLoaded(true)} />}
            {isLoaded && (
                <>
                    {/* Màn hình đầu tiên */}
                    <div className="relative min-h-screen w-full bg-black">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-center w-full h-screen bg-contain bg-no-repeat z-0"
                            style={{ backgroundImage: 'url(https://dsngrid.com/exfolio/wp-content/uploads/sites/14/2025/01/circle-dots-1.png)' }}
                        ></div>
                        <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 container">
                            <div className="z-10 relative flex gap-10">
                                <div>
                                    <TiltedCard
                                        imageSrc="https://plus.unsplash.com/premium_photo-1681139760816-d0c39952f9ac?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        containerHeight="350px"
                                        containerWidth="350px"
                                        imageHeight="350px"
                                        imageWidth="350px"
                                        rotateAmplitude={12}
                                        scaleOnHover={1.1}
                                        showMobileWarning={false}
                                    />
                                </div>
                                <div>
                                    <motion.span
                                        initial={{ opacity: 0, y: 0, x: -100 }} // Bắt đầu mờ và dịch xuống
                                        animate={{ opacity: 1, y: 0, x: 0 }} // Khi active thì hiện lên
                                        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }} // Hiệu ứng mềm mại, chậm về cuối
                                        className="uppercase font-extrabold text-[0.9rem] tracking-[2px] flex items-center mb-4"
                                    >
                                        <span className="inline-block mt-1 mr-5 w-[40px] h-[2px] bg-[rgba(255,255,255)]"></span>
                                        Welcome to My Digital Space
                                    </motion.span>
                                    <div className="text-left h-[90px]">
                                        <TypingEffect
                                            className="font-extrabold text-[3rem] min-w-max bg-gradient-to-r from-[#14bfb5] to-[#0074e4] bg-clip-text text-transparent "
                                            texts={["Building Scalable Web Applications", "Creating Immersive Digital Interfaces", "Bringing Ideas to Life with Code"]}
                                            speed={100}
                                            delay={1500}
                                        />
                                    </div>
                                    <div className="font-medium text-[0.95rem] leading-8 text-gray-300">
                                        I am a Fullstack Developer passionate about building modern, high-performance web applications with seamless user experiences. With a problem-solving mindset and a creative approach, I strive to transform ideas into high-quality digital products.
                                    </div>
                                    <div className="group relative w-[max-content] float-left mt-10">
                                        <button
                                            type="submit"
                                            tabIndex={-1}
                                            className="flex items-center gap-4 group-hover:translate-x-[8px] group-hover:translate-y-[8px] transition-transform ease duration-[300ms] z-[2] opacity-100 relative tracking-[2px] font-bold text-[14px] text-lightText dark:text-lightText px-4 py-2 bg-lightBg2 dark:bg-lightBg"
                                        >
                                            <FiDownload className="text-[1.2rem] text-primary" /> Download CV
                                        </button>
                                        <div className="group-hover:translate-x-[-8px] group-hover:translate-y-[-8px] transition-transform ease duration-[300ms] z-[1] top-[8px] left-[8px] opacity-50 border-[1px] w-full h-full absolute"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute left-1/2 bottom-5 -translate-x-1/2 z-10 container">
                            <div className="flex items-center justify-between">
                                <button type="button" className="flex items-center justify-center gap-2 py-2 px-4 uppercase bg-gray-800 rounded-full text-[.85rem] font-semibold">
                                    <span className="">Explore my journey below !</span>
                                    {/* <FiArrowDownRight size={'16px'}/> */}
                                </button>
                                <div className="flex space-x-3 items-center justify-end">
                                    <a
                                        href="https://facebook.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-gray-800 text-white rounded-full transition-transform"
                                    >
                                        <FaFacebook size={22} />
                                    </a>
                                    <a
                                        href="https://github.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-gray-800 text-white rounded-full transition-transform"
                                    >
                                        <FaGithub size={22} />
                                    </a>
                                    <a
                                        href="https://instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-gray-800 text-white rounded-full transition-transform"
                                    >
                                        <FaInstagram size={22} />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Khi cuộn xuống, ảnh trở về đúng vị trí */}
                    <div className="border-t border-gray-800 bg-darkBg2">
                        <div className="container py-20">
                            <div className="flex items-center justify-center">
                                <motion.div
                                    className="w-full"
                                    style={{ scale, y: translateY, x: translateX }}
                                >
                                    <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
                                        <img
                                            src="/images/thumbnail-about.jpg"
                                            alt="Thumbnail About"
                                            className="rounded-3xl w-full max-w-full"
                                        />
                                    </FadeContent>
                                </motion.div>
                            </div>
                            <div>Ảnh</div>
                        </div>
                    </div>

                    {/* Nội dung trang */}
                    <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
                        <About />
                    </FadeContent>

                    <TechInfiniteScroll />

                    <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
                        <Resume />
                    </FadeContent>
                </>
            )}
        </>
    );
}