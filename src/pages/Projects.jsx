import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ImLocation2 } from "react-icons/im";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import FadeContent from "../components/FadeContent";
import { useLoading } from "../components/LoadingProvider";
import Preloader from "../components/Preloader";
import { projects } from "../data";

export default function ProjectsPage() {
    const { isLoaded, setIsLoaded } = useLoading();

    return (
        <>
            {!isLoaded && (
                <Preloader
                    texts={["Ignite Creativity", "Turn Ideas into Reality"]}
                    onLoaded={() => setIsLoaded(true)}
                />
            )}
            {isLoaded && (
                <div>
                    <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
                        <HeroSlider />
                    </FadeContent>

                    <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
                        <AboutProjects />
                    </FadeContent>

                    <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
                        <Projects />
                    </FadeContent>
                </div>
            )}
        </>
    );
}

function HeroSlider() {
    const [activeIndex, setActiveIndex] = useState(0);

    const textStyle = {
        WebkitTextStroke: '5px rgba(255, 255, 255, 0.1)',
    };

    const nextSlide = () => {
        setActiveIndex(activeIndex + 1 >= projects.length ? 0 : activeIndex + 1);
    };

    const prevSlide = () => {
        setActiveIndex(activeIndex - 1 < 0 ? projects.length - 1 : activeIndex - 1);
    };

    const activeProject = projects[activeIndex];
    const progressPercent = ((activeIndex + 1) / (projects.length)) * 100;

    return (
        <section className="relative w-full h-[100vh] overflow-hidden text-white flex">
            <div className="relative h-full lg:w-[75vw] overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeProject.card.image}
                        initial={{ opacity: 0, filter: 'blur(8px)', scale: 1.1 }}
                        animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                        exit={{ opacity: 0, filter: 'blur(8px)', scale: 1.1 }}
                        transition={{
                            opacity: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                            filter: { duration: 0.5 },
                            scale: { duration: 0.5 },
                        }}
                        className="absolute left-0 top-0 bottom-0 right-0 z-0 bg-no-repeat bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${activeProject.card.image})`,
                        }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-30" />
                    </motion.div>
                </AnimatePresence>

                <div style={textStyle} className="z-[2] absolute font-bold left-[20rem] bottom-0 mb-[100px] min-w-max text-[20rem] text-[rgba(255,255,255,0)]">
                    {activeProject.card.title}
                </div>

                <div className="absolute bottom-0 left-0 right-0 transform z-30 bg-black flex h-[200px] pl-20">
                    <div className="lg:ml-[600px] w-full flex items-start gap-10 py-8">
                        <div className="flex-1">
                            <p className="flex items-center justify-start gap-2 mb-4">
                                <ImLocation2 />
                                <span className="font-bold">Turn code into innovation</span>
                            </p>
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={activeProject.card.description}
                                    className="font-medium text-[0.95rem] text-gray-400"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {activeProject.card.description}
                                </motion.p>
                            </AnimatePresence> 
                        </div>
                        <div className="max-w-max">
                            <Link to={activeProject.slug} className="font-semibold py-2 px-5 border-2 border-white">
                                Explore more
                            </Link>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-10 ml-[600px] mb-[200px]">
                        <div className="px-5 mb-3">
                            <div className="flex gap-8">
                                {activeProject.card.tags.map(tag => (
                                    <div key={tag} className="text-[1rem] tracking-wider uppercase font-semibold text-shadow-xl">
                                        {tag}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-20 left-10 bg-black w-[600px]">
                        <div className="flex mb-8">
                            <motion.div
                                transition={{ duration: 0.8 }}
                                className="w-[400px] h-[200px] bg-center bg-cover"
                                style={{
                                    backgroundImage: `url(${activeProject.card.thumbnail})`,
                                }}
                            >
                                <div className="absolute -top-10 left-0 font-bold text-[1.25rem] text-shadow-xl">
                                    {activeProject.card.useCase}
                                </div>
                            </motion.div>
                            <div className="flex-1 flex items-start justify-center">
                                <button
                                    onClick={prevSlide}
                                    className="text-white flex-1 h-[100px] flex items-center justify-center cursor-pointer"
                                >
                                    <MdOutlineNavigateBefore size={"2rem"} />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="text-white flex-1 h-[100px] flex items-center justify-center cursor-pointer"
                                >
                                    <MdOutlineNavigateNext size={"2rem"} />
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-6 w-[400px] px-1">
                            <p className="font-semibold text-[16px]">
                                {(activeIndex + 1).toString().padStart(2, '0')}
                            </p>
                            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-[#e76f51] transition-all duration-500"
                                    style={{ width: `${progressPercent}%` }}
                                />
                            </div>
                            <p className="font-semibold text-[16px]">
                                {projects.length}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute right-10 top-1/2 -translate-y-1/2">
                <div className="">
                    <ul className="flex gap-10 rotate-90 translate-x-1/2">
                        <li className="font-medium text-[1rem]">
                            Facebook
                        </li>
                        <li className="font-medium text-[1rem]">
                            Instagram
                        </li>
                        <li className="font-medium text-[1rem]">
                            Github
                        </li>
                    </ul>
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeProject.card.title + activeProject.card.subTitle}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute right-[25vw] top-1/2 z-20 translate-x-1/2 lg:w-[700px] -translate-y-[120px]"
                >
                    <h5 className="font-semibold text-[1.5rem] text-shadow-xl mb-3">
                        {(activeIndex + 1).toString().padStart(2, '0')}. {activeProject.card.productType}
                    </h5>
                    <h1 className="mb-1 relative lg:text-[3.5rem] leading-tight font-bold text-shadow-xl capitalize">
                        {activeProject.card.title}
                    </h1>
                    <h1 className="lg:text-[3.5rem] leading-tight font-bold text-shadow-xl capitalize">
                        {activeProject.card.subTitle}
                    </h1>
                </motion.div>
            </AnimatePresence>
        </section>
    );
}

function AboutProjects() {
    return (
        <section className="relative bg-[#121212]">
            {/* <div className="absolute inset-0 z-0 pointer-events-none">
                {[20, 40, 60, 80].map((pos, i) => (
                    <div
                        key={i}
                        className="absolute top-0 h-full w-px bg-gradient-to-b from-white/30 via-white/10 to-white/30 opacity-40"
                        style={{ left: `${pos}%` }}
                    />
                ))}
            </div> */}
            <div className="py-16 container mx-auto z-10 text-white">
                <h1 className="text-center text-4xl font-bold mb-12">
                    What I’ve Been Working On
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                    {/* Cột 1: Mô tả giới thiệu */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-300">
                            From Concept to Code
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            Here’s a glimpse into the solutions I’ve built — spanning end-to-end development,
                            system integration, and performance-optimized frontends. Each project is crafted
                            with attention to detail and long-term maintainability.
                        </p>
                    </div>

                    {/* Cột 2: Các vai trò */}
                    <div className="text-gray-300 space-y-4">
                        <div className="text-lg font-medium">👨‍💻 Developer</div>
                        <div className="text-lg font-medium">🎨 UI/UX Designer</div>
                        <div className="text-lg font-medium">🧠 System Architect</div>
                        <div className="text-lg font-medium">🚀 Performance Tuner</div>
                    </div>

                    {/* Cột 3: Hình ảnh minh họa */}
                    <div className="flex justify-center">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1731948133366-0d1dbb7db851?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Project Preview"
                            className="rounded-xl shadow-xl max-w-[250px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

function Projects() {
    return (
        <section className="py-20 mx-auto container">
            <h1 className="text-center text-3xl font-bold mb-20">
                Projects Gallery
            </h1>
            <div className="grid grid-cols-3">
                {projects.slice(0, 10).map((project, index) => (
                    <div key={index} className="relative">
                        <div
                            className="w-full h-[500px] bg-center bg-cover"
                            style={{ backgroundImage: `url(${project.card.image})` }}
                        ></div>
                        <div className="z-10 absolute bottom-0 left-0 top-0 right-0 bg-black/70 w-full"></div>
                        <div className="z-20 absolute top-0 left-0 w-full">
                            <h6 className="p-6 font-bold text-[1.5rem] leading-tight w-[250px]">
                                {project.card.subTitle}
                            </h6>
                        </div>
                        <div className="z-20 absolute bottom-8 left-10 origin-bottom-left -rotate-90">
                            <h6 className="font-medium text-[1.25rem]">
                                {project.card.useCase}
                            </h6>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}