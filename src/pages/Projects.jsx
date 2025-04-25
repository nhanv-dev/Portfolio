import { motion } from "framer-motion";
import { useState, useEffect, useMemo, useCallback } from "react";
import { ImLocation2 } from "react-icons/im";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import ContactBanner from "../components/ContactBanner";
import PageWithPreload from "../components/PageWithPreload";
import TitleSection from "../components/TitleSection";
import { projects } from "../data";

// Animation configs
const SLIDE_ANIMATION = {
    duration: 1.2,
    ease: [0.25, 1, 0.5, 1]
};

const SLIDE_VARIANTS = {
    initial: { opacity: 0, filter: "blur(8px)", scale: 1.1 },
    animate: (index, activeIndex) => ({
        opacity: index === activeIndex ? 1 : 0,
        filter: index === activeIndex ? "blur(0px)" : "blur(8px)",
        scale: index === activeIndex ? 1 : 1.1,
        zIndex: index === activeIndex ? 1 : 0
    })
};

const TEXT_VARIANTS = {
    initial: { opacity: 0 },
    animate: (index, activeIndex) => ({
        opacity: index === activeIndex ? 1 : 0,
        zIndex: index === activeIndex ? 2 : 0
    })
};

const THUMBNAIL_VARIANTS = {
    initial: { opacity: 0, scale: 1.1 },
    animate: (index, activeIndex) => ({
        opacity: index === activeIndex ? 1 : 0,
        scale: index === activeIndex ? 1 : 1.1,
        zIndex: index === activeIndex ? 2 : 0
    })
};

export default function ProjectsPage() {
    return (
        <PageWithPreload texts={["Ignite Creativity", "Turn Ideas into Reality"]}>
            <motion.div
                initial={{ opacity: 0, filter: 'blur(20px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: '0.3' }}
            >
                <HeroSlider />
            </motion.div>

            <Projects />

            <ContactBanner />
        </PageWithPreload>
    );
}

function HeroSlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const memoizedProjects = useMemo(() => projects, []);

    const textStyle = useMemo(() => ({
        WebkitTextStroke: '2px rgba(255, 255, 255, 0.2)',
    }), []);

    const nextSlide = useCallback(() => {
        setActiveIndex(activeIndex + 1 >= memoizedProjects.length ? 0 : activeIndex + 1);
    }, [activeIndex, memoizedProjects.length]);

    const prevSlide = useCallback(() => {
        setActiveIndex(activeIndex - 1 < 0 ? memoizedProjects.length - 1 : activeIndex - 1);
    }, [activeIndex, memoizedProjects.length]);

    const progressPercent = useMemo(() =>
        ((activeIndex + 1) / (memoizedProjects.length)) * 100,
        [activeIndex, memoizedProjects.length]
    );

    useEffect(() => {
        const autoSlideTimer = setTimeout(() => {
            nextSlide();
        }, 5000);

        return () => clearTimeout(autoSlideTimer);
    }, [activeIndex, nextSlide]);

    return (
        <section className="relative w-full h-[calc(100vh-72px)] overflow-hidden text-white flex">
            <div className="relative h-full lg:w-[75vw] overflow-hidden">
                {memoizedProjects.map((project, index) => (
                    <motion.div
                        key={project.card.image}
                        initial={SLIDE_VARIANTS.initial}
                        animate={SLIDE_VARIANTS.animate(index, activeIndex)}
                        transition={SLIDE_ANIMATION}
                        className="absolute left-0 top-0 bottom-0 right-0 bg-no-repeat bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${project.card.image})`,
                        }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-30" />
                    </motion.div>
                ))}

                {memoizedProjects.map((project, index) => (
                    <motion.div
                        key={`title-${project.card.title}`}
                        initial={TEXT_VARIANTS.initial}
                        animate={TEXT_VARIANTS.animate(index, activeIndex)}
                        transition={SLIDE_ANIMATION}
                        style={textStyle}
                        className="absolute font-bold left-10 top-20 min-w-max text-[5rem] text-transparent"
                    >
                        {(index + 1).toString().padStart(2, '0')} - {project.card.title}
                    </motion.div>
                ))}

                <div className="absolute bottom-0 left-0 right-0 transform z-30 bg-black flex h-[200px] pl-10">
                    <div className="lg:ml-[600px] w-full flex items-start gap-10 py-8 pl-5">
                        <div className="flex-1 relative">
                            <p className="flex items-center justify-start gap-2 mb-4">
                                <ImLocation2 />
                                <span className="font-bold">Turn code into innovation</span>
                            </p>
                            {memoizedProjects.map((project, index) => (
                                <motion.p
                                    key={project.card.description}
                                    initial={TEXT_VARIANTS.initial}
                                    animate={TEXT_VARIANTS.animate(index, activeIndex)}
                                    transition={SLIDE_ANIMATION}
                                    className="absolute font-medium text-[0.95rem] text-gray-400"
                                >
                                    {project.card.description}
                                </motion.p>
                            ))}
                        </div>
                        <div className="max-w-max">
                            <Link to={memoizedProjects[activeIndex].slug} className="font-semibold py-2 px-5 border-2 border-white">
                                Explore more
                            </Link>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-10 ml-[600px] mb-[200px]">
                        <div className="px-5 mb-3">
                            <div className="flex gap-8">
                                {memoizedProjects[activeIndex].card.tags.map(tag => (
                                    <div key={tag} className="text-[1rem] tracking-wider uppercase font-semibold text-shadow-xl">
                                        {tag}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-20 left-10 bg-black w-[600px]">
                        <div className="flex mb-8">
                            <div className="w-[400px] h-[200px] relative overflow-hidden">
                                {memoizedProjects.map((project, index) => (
                                    <motion.div
                                        key={project.card.thumbnail}
                                        initial={THUMBNAIL_VARIANTS.initial}
                                        animate={THUMBNAIL_VARIANTS.animate(index, activeIndex)}
                                        transition={SLIDE_ANIMATION}
                                        className="absolute w-full h-full bg-center bg-cover"
                                        style={{
                                            backgroundImage: `url(${project.card.thumbnail})`,
                                        }}
                                    />
                                ))}
                            </div>
                            {memoizedProjects.map((project, index) => (
                                <motion.div
                                    key={`usecase-${project.card.thumbnail}`}
                                    initial={TEXT_VARIANTS.initial}
                                    animate={TEXT_VARIANTS.animate(index, activeIndex)}
                                    transition={SLIDE_ANIMATION}
                                    className="absolute -top-10 left-0 font-bold text-[1.25rem] text-shadow-xl"
                                >
                                    {project.card.useCase}
                                </motion.div>
                            ))}
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
                                {memoizedProjects.length}
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

            {memoizedProjects.map((project, index) => (
                <motion.div
                    key={project.card.title}
                    initial={TEXT_VARIANTS.initial}
                    animate={TEXT_VARIANTS.animate(index, activeIndex)}
                    transition={SLIDE_ANIMATION}
                    className="absolute right-[25vw] top-1/2 translate-x-1/2 lg:w-[700px] -translate-y-[120px]"
                >
                    <h5 className="font-semibold text-[1.5rem] text-shadow-xl mb-3">
                        {(index + 1).toString().padStart(2, '0')}. {project.card.productType}
                    </h5>
                    <h1 className="mb-1 relative lg:text-[3.5rem] leading-tight font-bold text-shadow-xl capitalize">
                        {project.card.title}
                    </h1>
                    <h1 className="lg:text-[3.5rem] leading-tight font-bold text-shadow-xl capitalize">
                        {project.card.subTitle}
                    </h1>
                </motion.div>
            ))}
        </section>
    );
}

function Projects() {
    const memoizedProjects = useMemo(() => projects, []);

    return (
        <section className="py-[120px] container border-t border-gray-900">
            <TitleSection
                className={'mb-12'}
                title={'PORTFOLIO'}
                title2={'GALLERY'}
                subTitle={'creative'}
                subTitle2={'work'}
            ></TitleSection>
            <div className="grid grid-cols-3 gap-3">
                {memoizedProjects.slice(0, 9).map((project, index) => (
                    <Link to={project.slug} key={index} className="group relative">
                        <div
                            className="w-full h-[540px] bg-center bg-cover"
                            style={{ backgroundImage: `url(${project.card.image})` }}
                        ></div>
                        <div className="z-10 absolute bottom-0 left-0 top-0 right-0 bg-black/70 w-full group-hover:backdrop-blur-md transition-all duration-300 ease-out"></div>
                        <div className="z-20 absolute top-5 left-5 w-full flex gap-4 items-center">
                            <h6 className="font-bold text-[1.5rem] leading-tight text-shadow-lg border-[3px] border-white w-[58px] h-[58px] flex items-center justify-center">
                                {(index + 1).toString().padStart(2, '0')}
                            </h6>
                            <div className="flex-1">
                                <h6 className="font-bold text-[1.3rem] leading-tight mb-2.5 text-shadow-lg">
                                    {project.card.title}
                                </h6>
                                <h6 className="font-bold text-[1.3rem] leading-tight text-shadow-lg">
                                    {project.card.subTitle}
                                </h6>
                            </div>
                        </div>
                        <div className="z-20 absolute bottom-5 right-5">
                            <h6 className="font-semibold text-[1.1rem] text-shadow-lg text-right">
                                {project.card.productType}
                            </h6>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}