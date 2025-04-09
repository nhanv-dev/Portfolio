import { FaAsterisk, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import FadeContent from "../components/FadeContent";
import DevInfiniteScroll from "../components/InfiniteScroll/DevInfiniteScroll";
import TechInfiniteScroll from "../components/InfiniteScroll/TechInfiniteScroll";
import Introduce from "../components/Introduce";
import { useLoading } from "../components/LoadingProvider";
import Preloader from "../components/Preloader";
import Resume from "../components/Resume";
import CircularText from "../components/CircularText";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { RiArrowRightUpLine } from "react-icons/ri";

const tags = ['Web Development', 'UI/UX', 'Responsive Design', 'Database Design', 'Problem Solving'];

export default function AboutPage() {
    const { isLoaded, setIsLoaded } = useLoading();
    const circularTextRef = useRef();

    return (
        <>
            {!isLoaded && <Preloader texts={["About Me", "My Journey"]} onLoaded={() => setIsLoaded(true)} />}
            {isLoaded && (
                <>
                    <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
                        {/* Màn hình đầu tiên */}
                        <div className="relative h-screen w-full bg-black">
                            {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-center w-full h-full bg-contain bg-no-repeat z-0 bg-fixed"
                                style={{ backgroundImage: 'url(https://dsngrid.com/exfolio/wp-content/uploads/sites/14/2025/01/circle-dots-1.png)' }}
                            ></div> */}
                            <div className="absolute left-0 top-0 w-full pt-20 h-full">
                                <div className="container h-full relative">
                                    <div className="grid grid-cols-3 gap-4 h-full relative">
                                        <div
                                            className="w-full h-[50%] bg-center bg-no-repeat bg-cover"
                                            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1651760937033-8ccab2727cef?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}
                                        ></div>
                                        <div
                                            className="w-full h-[65%] bg-center bg-no-repeat bg-cover"
                                            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1696960741206-63a41bb798ad?q=80&w=2433&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}
                                        ></div>
                                        <div
                                            className="w-full h-[75%] bg-center bg-no-repeat bg-cover"
                                            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1639749601642-8d30474f249f?q=80&w=2536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}
                                        ></div>
                                    </div>

                                    <div className="absolute left-0 lg:top-[60%] w-full">
                                        <div className="container">
                                            <p className="relative -top-5 flex items-center jus font-bold text-[1.4rem] gap-3">
                                                <span className="w-[20px] h-[3px] bg-white block"></span>
                                                Hi, I'm Tran Thanh Nhan
                                            </p>
                                            <div className="font-extrabold lg:text-[5rem] flex items-center">
                                                <span className="mr-8 relative top-[6px]">
                                                    <FaAsterisk className="animate-[spin_20s_linear_infinite] text-[4.25rem]" />
                                                </span>

                                                <h1 className="relative z-[1]">
                                                    <span className="relative z-[2]">Fullstack Developer</span>
                                                    <span className="z-[1] absolute top-[75px] left-[4px] w-full opacity-40 text-gray-500 translate-y-2 scale-y-[-1] italic">
                                                        Fullstack Developer
                                                    </span>
                                                </h1>
                                            </div>
                                            <div className="relative z-[2] mt-[40px]">
                                                <div className="flex items-center justify-start gap-3 flex-wrap">
                                                    {tags.map(value => (
                                                        <p className="py-1 px-2.5 text-white text-[0.95rem] font-bold border-2 border-white">
                                                            {value}
                                                        </p>
                                                    ))}


                                                    <Link to={'/contact'} tabIndex={-1} className="z-[30] absolute right-[0] bottom-8 p-1 bg-black rounded-full">
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
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute left-1/2 bottom-6 -translate-x-1/2 z-10 container">
                                <div className="flex items-center justify-between">
                                    <button type="button" className="flex items-center justify-center gap-2 py-2 px-5 uppercase bg-gray-900 rounded-full text-[.775rem] font-bold tracking-widest">
                                        <span className="">Explore my journey below</span>
                                    </button>
                                    <div className="flex gap-6 items-center justify-end">
                                        <a
                                            href="https://facebook.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white rounded-full transition-transform"
                                        >
                                            <FaFacebook size={24} />
                                        </a>
                                        <a
                                            href="https://github.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white rounded-full transition-transform"
                                        >
                                            <FaGithub size={24} />
                                        </a>
                                        <a
                                            href="https://instagram.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white rounded-full transition-transform"
                                        >
                                            <FaInstagram size={24} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeContent>

                    <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
                        <AboutComponent />
                    </FadeContent>

                    {/* Nội dung trang */}
                    <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
                        <Introduce />
                    </FadeContent>

                    <TechInfiniteScroll />

                    <Resume />

                    <DevInfiniteScroll />
                </>
            )
            }
        </>
    );
}

const AboutComponent = () => {
    return (
        <div className="h-[500px] w-full relative mt-10">
            <div
                className="w-full h-full bg-center bg-cover bg-fixed"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1741808045701-16fbab329169?q=80&w=2231&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}></div>
            <div className="absolute left-0 right-0 top-0 bottom-0 bg-black/30"></div>
            <div className="absolute left-1/2 top-1/2 bg-black/50 backdrop-blur-sm p-20 -translate-x-1/2 -translate-y-1/2 rounded-xl">
                <h2>Let's Connect Me</h2>
                <p>I am always do the best thing</p>
            </div>
        </div>
    )
}