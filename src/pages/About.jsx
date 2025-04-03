import { useState } from "react";
import { FaAsterisk, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import FadeContent from "../components/FadeContent";
import DevInfiniteScroll from "../components/InfiniteScroll/DevInfiniteScroll";
import TechInfiniteScroll from "../components/InfiniteScroll/TechInfiniteScroll";
import Introduce from "../components/Introduce";
import Preloader from "../components/Preloader";
import Resume from "../components/Resume";

const tags = ['Web Development', 'UI/UX', 'Responsive Design', 'Database Design', 'Problem Solving'];

export default function AboutPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <>
            {!isLoaded && <Preloader texts={["About Me", "My Journey"]} onLoaded={() => setIsLoaded(true)} />}
            {isLoaded && (
                <>
                    <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
                        {/* Màn hình đầu tiên */}
                        <div className="relative min-h-screen w-full bg-black">
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-center w-full h-screen bg-contain bg-no-repeat z-0 bg-fixed"
                                style={{ backgroundImage: 'url(https://dsngrid.com/exfolio/wp-content/uploads/sites/14/2025/01/circle-dots-1.png)' }}
                            ></div>
                            <div className="absolute left-0 top-0 w-full pt-20">
                                <div className="container">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="w-full">
                                            <div
                                                className="w-full h-[420px] bg-center bg-no-repeat bg-cover"
                                                style={{ backgroundImage: "url(https://images.unsplash.com/photo-1651760937033-8ccab2727cef?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}
                                            ></div>
                                        </div>
                                        <div className="w-full">
                                            <div
                                                className="w-full h-[520px] bg-center bg-no-repeat bg-cover"
                                                style={{ backgroundImage: "url(https://images.unsplash.com/photo-1696960741206-63a41bb798ad?q=80&w=2433&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}
                                            ></div>

                                        </div>
                                        <div className="w-full">
                                            <div
                                                className="w-full h-[620px] bg-center bg-no-repeat bg-cover"
                                                style={{ backgroundImage: "url(https://images.unsplash.com/photo-1639749601642-8d30474f249f?q=80&w=2536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}
                                            ></div>
                                        </div>
                                    </div>
                                    <div className="absolute left-0 lg:top-[480px] w-full pt-20">
                                        <div className="container">
                                            <p className="flex items-center jus font-bold text-[1.4rem] gap-3">
                                                <span className="w-[20px] h-[3px] bg-white block"></span>
                                                Hi, I'm Tran Thanh Nhan
                                            </p>
                                            <div className="font-extrabold lg:text-[5rem] flex items-center">
                                                <span className="mr-8 relative top-[6px]">
                                                    <FaAsterisk className="animate-[spin_20s_linear_infinite] text-[4.25rem]" />
                                                </span>
                                                <h1 className="relative z-[1]">
                                                    <span className="relative z-[2]">Fullstack Developer</span>
                                                    {/* <span className="absolute top-full left-0 w-full text-gray-500 opacity-40 scale-y-[-1] translate-y-2">
                                                    Fullstack Developer
                                                </span> */}
                                                    <span className="z-[1] absolute top-[75px] left-[4px] w-full opacity-40 text-gray-500 translate-y-2 scale-y-[-1] italic">
                                                        Fullstack Developer
                                                    </span>
                                                </h1>
                                            </div>
                                            <div className="relative z-[2] mt-[40px]">
                                                <div className="flex items-center justify-start gap-3 flex-wrap">
                                                    {tags.map(value => (
                                                        <p className="py-1 px-4 text-white text-[1rem] font-bold border-2 border-white">
                                                            {value}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute left-1/2 bottom-6 -translate-x-1/2 z-10 container">
                                <div className="flex items-center justify-between">
                                    <button type="button" className="flex items-center justify-center gap-2 py-2 px-4 uppercase bg-gray-900 rounded-full text-[.85rem] font-bold tracking-widest">
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
            )}
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