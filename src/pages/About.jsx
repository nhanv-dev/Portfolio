import { AnimatePresence, motion } from "framer-motion";
import { memo, useState } from "react";
import { FiArrowDownRight, FiArrowUpRight, FiDownload } from "react-icons/fi";
import { MdArrowForward } from 'react-icons/md';
import { Link, useNavigate } from "react-router-dom";
import ContactBanner from "../components/ContactBanner";
import TechInfiniteScroll from "../components/InfiniteScroll/TechInfiniteScroll";
import { useLenis } from "../components/LenisProvider";
import { useLoading } from "../components/LoadingProvider";
import PageWithPreload from "../components/PageWithPreload";
import TitleSection from "../components/TitleSection";
import { personalInfo, skills } from "../data";
import { slideDownWheelAnimation } from "../utils/animations";


export default function AboutPage() {

    return (
        <PageWithPreload texts={["Hi, I'm Tran Thanh Nhan", "Exploring Tech & Creativity"]}>
            <HeroComponent />

            <ResumeComponent />

            <TechInfiniteScroll />

            <SkillsSection />

            <ExploreProjectsComponent />

            <ContactBanner />
        </PageWithPreload>
    );
}

const HeroComponent = memo(() => {
    const navigate = useNavigate();
    const lenis = useLenis();
    const { handleNavigationWithAnimation } = useLoading();

    function scrollContent() {
        const target = document.getElementById('content-about');
        if (target) {
            lenis.scrollTo(target, {
                offset: 0,
                duration: 1.5,
                easing: (t) => 1 - Math.pow(1 - t, 3),
            });
        }
    }

    return (
        <section className="w-full">
            <div className="bg-lightBg text-lightText relative">
                <div className="container-wide relative z-[1]">
                    <div className="pt-20">
                        <div className={`text-center w-full text-[1.25rem] md:text-5xl lg:text-[4rem] font-extrabold tracking-wider font-unbounded uppercase`}>
                            <motion.h2
                                className={`mb-3 md:mb-4 lg:mb-6 text-stroke-unbounded-black leading-snug text-lightBg`}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 1.2, ease: 'easeOut', delay: 0 }}
                                style={{ WebkitTextStrokeWidth: '3px' }}
                            >
                                I'm Tran Thanh Nhan
                            </motion.h2>
                            <motion.h2
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
                                className={`text-lightText leading-snug`}
                            >
                                Full-stack Web Developer
                            </motion.h2>
                        </div>
                    </div>
                    <div className="h-[200px] md:h-[400px] lg:h-[500px] w-full bg-cover bg-top rounded-[25px] relative mt-[50px] md:mt-[75px] lg:mt-[140px]"
                        style={{ backgroundImage: 'url(./images/home2-welcome.webp)' }}
                    >
                        <div className="absolute -top-2 lg:-top-6 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <p className="hidden lg:block absolute right-full top-12 text-[1.35rem] min-w-max font-unbounded font-bold pr-14">Since 2019</p>
                            <button type="button" onClick={scrollContent} className=" rounded-full flex items-center justify-center bg-black text-white w-[60px] h-[60px] md:w-[110px] md:h-[110px] lg:w-[160px] lg:h-[160px] xl:w-[170px] xl:h-[170px] hover:rotate-45 transition-all duration-300">
                                <FiArrowDownRight className="text-[1.5rem] md:text-[2.5rem] lg:text-[3.5rem]" />
                            </button>
                            <p className="hidden lg:block absolute left-full top-12 text-[1.35rem] min-w-max font-unbounded font-bold pl-14">Craft with clarity</p>
                        </div>
                    </div>
                </div>
                <div className="absolute bg-[#eee] left-0 right-0 bottom-0 h-[60px] md:h-[100px] lg:h-[200px]"></div>
            </div>
            <div className="bg-[#eee] text-black pt-14 lg:pt-[120px]" id="content-about">
                <div className="container-fluid pb-20 lg:pb-0">
                    <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 md:gap-12 lg:gap-16">
                        <div>
                            <div className="relative flex items-end gap-5 mb-4 md:mb-5 lg:mb-8">
                                <motion.h2
                                    className={`text-[30px] md:text-[38px] lg:text-[45px] font-bold text-stroke-unbounded-black font-unbounded text-[#eee] leading-none`}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.4 }}
                                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0 }}
                                    style={{ WebkitTextStrokeWidth: '2px' }}
                                >
                                    01.
                                </motion.h2>
                                <p className="relative z-[1] font-unbounded font-bold text-[16px] md:text-[20px] lg:text-[24px] capitalize">
                                    About me
                                </p>
                            </div>
                            <p className="text-[14px] lg:text-[16px] font-medium leading-snug md:leading-[1.75]">
                                Full-stack web developer passionate about building clean, scalable, and user-friendly applications.
                            </p>
                        </div>
                        <div>
                            <div className="relative flex items-end gap-5 mb-4 md:mb-5 lg:mb-8">
                                <motion.h2
                                    className={`text-[30px] md:text-[38px] lg:text-[45px] font-bold text-stroke-unbounded-black font-unbounded text-[#eee] leading-none`}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.4 }}
                                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0 }}
                                    style={{ WebkitTextStrokeWidth: '2px' }}
                                >
                                    02.
                                </motion.h2>
                                <p className="relative z-[1] font-unbounded font-bold text-[16px] md:text-[20px] lg:text-[24px] capitalize">
                                    What I Do
                                </p>
                            </div>
                            <p className="text-[14px] lg:text-[16px] font-medium leading-snug md:leading-[1.75]">
                                I specialize in building full-stack web applications using .NET, Angular, React, and SQL. From API architecture to frontend UI, I turn ideas into functional software.
                            </p>
                        </div>
                        <div>
                            <div className="relative flex items-end gap-5 mb-4 md:mb-5 lg:mb-8">
                                <motion.h2
                                    className={`text-[30px] md:text-[38px] lg:text-[45px] font-bold text-stroke-unbounded-black font-unbounded text-[#eee] leading-none`}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.4 }}
                                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0 }}
                                    style={{ WebkitTextStrokeWidth: '2px' }}
                                >
                                    03.
                                </motion.h2>
                                <p className="relative z-[1] font-unbounded font-bold text-[16px] md:text-[20px] lg:text-[24px] capitalize">
                                    My Work
                                </p>
                            </div>
                            <p className="text-[14px] lg:text-[16px] font-medium leading-snug md:leading-[1.75] mb-6">
                                I've developed admin dashboards, SaaS platforms, and internal tools that serve thousands of users. You can find my projects on GitHub.
                            </p>
                            <Link
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavigationWithAnimation("/projects", navigate);
                                }}
                                className="flex items-center gap-2 font-medium uppercase font-unbounded text-[12px] text-black py-1"
                            >
                                Read more
                                <FiArrowUpRight className="text-[20px]" />
                            </Link>
                        </div>
                        <div>
                            <div className="relative flex items-end gap-5 mb-4 md:mb-5 lg:mb-8">
                                <motion.h2
                                    className={`text-[30px] md:text-[38px] lg:text-[45px] font-bold text-stroke-unbounded-black font-unbounded text-[#eee] leading-none`}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.4 }}
                                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0 }}
                                    style={{ WebkitTextStrokeWidth: '2px' }}
                                >
                                    04.
                                </motion.h2>
                                <p className="relative z-[1] font-unbounded font-bold text-[16px] md:text-[20px] lg:text-[24px] capitalize">
                                    My Education
                                </p>
                            </div>
                            <p className="text-[14px] lg:text-[16px] font-medium leading-snug md:leading-[1.75]">
                                B.S. in Software Engineering, Nong Lam University - HCMC, Vietnam (Class of 2023).
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid mt-[120px] pb-6">
                    <div className="grid xl:grid-cols-3 gap-[20px]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                            <img className="rounded-[20px]" src="./images/contact-2.webp" alt="about-1" />
                            <img className="rounded-[20px]" src="./images/contact-1.webp" alt="about-1" />
                        </div>
                        <div className="relative w-full h-full bg-black rounded-[20px] min-h-[250px] lg:min-h-[280px] xl:min-h-min">
                            <div className="absolute 2xl:top-10 2xl:right-10 xl:top-6 xl:right-6 top-5 right-5 text-white font-bold flex gap-7 text-[14px] md:text-[14px] lg:[16px] font-unbounded">
                                <a href={personalInfo.link.facebook} target="_blank" rel="noopener noreferrer">
                                    fb.
                                </a>
                                <a href={personalInfo.link.linkedin} target="_blank" rel="noopener noreferrer">
                                    in.
                                </a>
                                <a href={personalInfo.link.github} target="_blank" rel="noopener noreferrer">
                                    gh.
                                </a>
                            </div>
                            <div className="absolute 2xl:bottom-10 2xl:left-10 xl:bottom-6 xl:left-6 bottom-5 left-5">
                                <p className="text-white font-bold lg:text-[19px] xl:text-[17px] 2xl:text-[25px] font-unbounded leading-snug mb-3.5">
                                    Join on My
                                    <br />
                                    Social Circle
                                </p>
                                <p className="text-[#ccc] font-medium text-[12px] xl:text-[12px] 2xl:text-[13px] font-unbounded">
                                    <span className="text-[12px] xl:text-[12px] 2xl:text-[16px] leading-none">©</span> Built by Thanh Nhan
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                            <img className="rounded-[20px]" src="./images/contact-4.webp" alt="about-1" />
                            <img className="rounded-[20px]" src="./images/contact-3.webp" alt="about-1" />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
})

const SkillsSection = memo(() => {
    const [activeCategory, setActiveCategory] = useState('Frontend Development');
    const activeCategoryData = skills.find(item => item.title === activeCategory);

    return (
        <section className="py-[120px] bg-darkBg text-darkText border-t border-gray-900">
            <div className="container">
                <TitleSection
                    className={'mb-6 md:mb-12'}
                    title={'Technical'}
                    title2={'Stack'}
                    subTitle={'Full-Stack'}
                    subTitle2={'Capabilities'}
                    titleClassName='!text-darkBg'
                ></TitleSection>
                <div className="grid grid-cols-12 gap-0 lg:gap-20">
                    {/* Left Column - Categories */}
                    <div className="col-span-12 lg:col-span-5 xl:col-span-4 flex flex-col">
                        {skills.map((category, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveCategory(category.title)}
                                className={`cursor-pointer transition-colors duration-300 relative pl-8 py-5 ${activeCategory === category.title
                                    ? 'text-white'
                                    : 'text-gray-400 hover:text-gray-200'
                                    }`}
                            >
                                <div className={`absolute left-0 top-0 bottom-0 w-[3px] transition-colors duration-300 ${activeCategory === category.title
                                    ? 'bg-white'
                                    : 'bg-gray-950'
                                    }`}></div>
                                <div className="flex items-center justify-between gap-3">
                                    <h3 className="text-[16px] md:text-[21px] font-bold">
                                        {category.title}
                                    </h3>
                                    <motion.div
                                        initial={{ opacity: 0, x: -200 }}
                                        animate={{
                                            opacity: activeCategory === category.title ? 1 : 0,
                                            x: activeCategory === category.title ? 0 : -10
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="text-black bg-white rounded-full w-[22px] h-[22px] flex items-center justify-center"
                                    >
                                        <MdArrowForward className="text-base" />
                                    </motion.div>
                                </div>
                                <p className="hidden md:block text-[16px] leading-relaxed font-medium text-gray-500 mt-2">
                                    {category.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Right Column - Technologies */}
                    <div className="col-span-12 lg:col-span-7 xl:col-span-8 relative min-h-[400px] mt-10 lg:mt-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h4 className="text-[12px] md:text-[15px] font-bold mb-6">
                                    {activeCategoryData.title}: {activeCategoryData.description}
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 relative">
                                    {activeCategoryData?.technologies.map((tech, techIndex) => (
                                        <div
                                            key={techIndex}
                                            className="group p-4 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 border-2 border-gray-800/50 relative overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#1f1f1f] to-[#1a1a1a] hover:border-primary/30"
                                        >
                                            <div className="flex flex-col h-full relative z-10">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-md p-2 group-hover:bg-white/10 transition-all duration-300 relative backdrop-blur-sm group-hover:scale-105 group-hover:rotate-3">
                                                        <img
                                                            src={tech.logo}
                                                            alt={tech.name}
                                                            className="w-full h-full object-contain relative z-10 group-hover:brightness-110 transition-all duration-300"
                                                        />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="font-medium text-gray-200 text-[16px] group-hover:text-white transition-all duration-300">{tech.name}</h4>
                                                    </div>
                                                </div>
                                                <div className="mt-auto">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className="text-gray-200 text-[13px] font-bold group-hover:text-white">Proficiency</span>
                                                        <span className="text-primary font-bold text-[14px]">
                                                            {tech.level}%
                                                        </span>
                                                    </div>
                                                    <div className="h-2 w-full bg-gray-800/50 rounded-md overflow-hidden relative backdrop-blur-sm">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${tech.level}%` }}
                                                            transition={{ duration: 1, ease: "easeOut" }}
                                                            className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-md relative z-10"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
})

const ExploreProjectsComponent = memo(() => {
    const { handleNavigationWithAnimation } = useLoading();
    const navigate = useNavigate();

    return (
        <section className='hidden lg:block py-[120px] bg-darkBg border-t border-gray-900'>
            <div className="container">
                <TitleSection
                    className={'mb-12'}
                    title={'selected'}
                    title2={'works'}
                    subTitle={'featured'}
                    subTitle2={'projects'}
                ></TitleSection>
                <div className="flex gap-7">
                    <div className="flex-1 lg:h-[200px] xl:h-[300px]">
                        <motion.div
                            className="p-5 xl:p-8 bg-[#1a1a1a] h-full rounded-xl"
                            {...slideDownWheelAnimation}
                            transition={{ duration: .8, ease: 'easeOut' }}
                        >
                            <div className='relative w-full h-full'>
                                <div
                                    className='absolute top-0 right-0 lg:text-[30px] xl:text-[45px] text-stroke-unbounded font-extrabold font-unbounded text-[#1a1a1a]'
                                    style={{ WebkitTextStrokeWidth: '3px' }}
                                >
                                    01
                                </div>
                                <div className="absolute bottom-0 left-0 font-bold lg:text-[16px] xl:text-[20px] font-unbounded leading-snug">
                                    Creative <br /> Design
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="flex-1 lg:h-[200px] xl:h-[300px]">
                        <motion.div
                            className="p-5 xl:p-8 bg-[#1a1a1a] h-full rounded-xl"
                            {...slideDownWheelAnimation}
                            transition={{ duration: .8, ease: 'easeOut' }}
                        >
                            <div className='relative w-full h-full'>
                                <div
                                    className='absolute top-0 right-0 lg:text-[30px] xl:text-[45px] text-stroke-unbounded font-extrabold font-unbounded text-[#1a1a1a]'
                                    style={{ WebkitTextStrokeWidth: '3px' }}
                                >
                                    02
                                </div>
                                <div className="absolute bottom-0 left-0 font-bold lg:text-[16px] xl:text-[20px] font-unbounded leading-snug">
                                    System <br /> Scalability
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="flex-1 lg:h-[200px] xl:h-[300px] relative">
                        <div className='relative top-[-70%] bg-[#1a1a1a] h-full lg:p-5 xl:p-8 rounded-xl'>
                            <div className='relative w-full h-full'>
                                <div
                                    className='absolute top-0 right-0 lg:text-[30px] xl:text-[45px] text-stroke-unbounded font-extrabold font-unbounded text-[#1a1a1a]'
                                    style={{ WebkitTextStrokeWidth: '3px' }}
                                >
                                    03
                                </div>
                                <div className="absolute bottom-0 left-0 font-bold lg:text-[16px] xl:text-[20px] font-unbounded leading-snug">
                                    Tech <br /> Innovation
                                </div>
                            </div>
                        </div>
                        <motion.div
                            className='absolute bottom-0 left-1/2'
                            variants={{
                                hidden: { opacity: 0, y: 100, x: '-50%' },
                                visible: { opacity: 1, y: 0, x: '-50%' }
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: .8, ease: 'easeOut' }}
                        >
                            <Link
                                to={'/projects'} onClick={(e) => {
                                    e.preventDefault();
                                    handleNavigationWithAnimation('/projects', navigate);
                                }}
                                className='hover:bg-black hover:text-white transition-all duration-700 font-unbounded w-[120px] h-[120px] xl:w-[150px] xl:h-[150px] flex items-center justify-center border-[3px] border-white rounded-full font-medium uppercase lg:text-[15px] xl:text-[17px]'>
                                Let's <br />start
                            </Link>
                        </motion.div>
                    </div>
                    <div className="flex-1 lg:h-[200px] xl:h-[300px]">
                        <motion.div
                            className="p-5 xl:p-8 bg-[#1a1a1a] h-full rounded-xl"
                            {...slideDownWheelAnimation}
                            transition={{ duration: .8, ease: 'easeOut' }}
                        >
                            <div className='relative w-full h-full'>
                                <div
                                    className='absolute top-0 right-0 lg:text-[30px] xl:text-[45px] text-stroke-unbounded font-extrabold font-unbounded text-[#1a1a1a]'
                                    style={{ WebkitTextStrokeWidth: '3px' }}
                                >
                                    04
                                </div>
                                <div className="absolute bottom-0 left-0 font-bold lg:text-[16px] xl:text-[20px] font-unbounded leading-snug">
                                    Optimal <br /> Performance
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className="flex mt-20 gap-7">
                    <div className="flex-1"></div>
                    <div className="flex-1 font-medium text-gray-300 leading-relaxed text-[1.1rem]">
                        These projects highlight my passion for building innovative, high-performance solutions focused on scalability and user experience.
                        Each project demonstrates my expertise in integrating cutting-edge technologies to solve real-world challenges.
                    </div>
                </div>
            </div>
        </section>
    )
})

const ResumeComponent = memo(() => {
    return (
        <section id="resume" className="bg-darkBg py-[120px] border-t border-gray-900">
            <div className="container">
                {/* Header */}
                <TitleSection
                    className={'mb-6 md:mb-12'}
                    title={'Build'}
                    title2={'History'}
                    subTitle={'Education'}
                    subTitle2={'& Experience'}
                    titleClassName='!text-darkBg'
                ></TitleSection>

                {/* Education & Experience */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <h4 className="mb-5 font-bold text-[1.5rem] tracking-[1px]">Education</h4>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
                            viewport={{ once: true, amount: 0.4 }}
                            className="mb-8 pl-1"
                        >
                            <h5 className="pl-5 relative text-[1.2rem] font-bold tracking-[1px]">
                                Nong Lam University
                                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary w-[8px] h-[8px] rounded-full"></div>
                            </h5>
                            <div className="pl-5 pt-3 pb-5 relative text-[#bbb] text-[16px] leading-[1.6] font-[500]">
                                <p className="mb-3 tracking-[1px]">2019 - 2023</p>
                                <p>
                                    Graduated in Information Technology, specializing in web application development.
                                    Gained expertise in software development, database management, and system maintenance. Passionate about full-stack web development.
                                </p>
                                <div className="absolute left-0 bottom-[0] top-0 -translate-x-1/2 bg-gray-800 w-[1px] h-full"></div>
                            </div>
                        </motion.div>

                        <div className="hidden md:h-[250px] lg:h-[330px] w-full md:flex items-center justify-center overflow-hidden rounded-[20px] relative">
                            <div className="absolute bottom-10 left-10 z-10">
                                <a href="./pdf/Tran-Thanh-Nhan-TopCV.pdf" download className="block text-white font-bold text-[25px] font-unbounded leading-8 mb-3.5">
                                    Resume
                                    <br />
                                    <span className="inline-flex justify-center items-center gap-3">Available Here <FiDownload className="text-[25px]" /></span>
                                </a>
                                <p className="text-[#ccc] font-medium text-[13px] font-unbounded">
                                    <span className="text-[16px] leading-none">©</span> Built by Thanh Nhan
                                </p>
                            </div>
                            <img src={'./images/blog-7.webp'} alt="" className="absolute left-0 bottom-0 z-0 object-cover object-center" />
                            <div className="absolute left-0 right-0 top-0 bottom-0 bg-black/60 z-[1] backdrop-blur-sm"></div>
                        </div>
                    </motion.div>

                    {/* Experience */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <h4 className="mb-5 font-bold text-[1.5rem] tracking-[1px]">Experience</h4>

                        {/* GSoft */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
                            viewport={{ once: true, amount: 0.4 }}
                            className="pl-1"
                        >
                            <h5 className="pl-5 relative text-[1.2rem] font-bold tracking-[1px]">
                                GSoft
                                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary w-[8px] h-[8px] rounded-full"></div>
                            </h5>
                            <div className="pl-5 pt-3 pb-10 relative text-[#bbb] text-[16px] leading-[1.6] font-[500]">
                                <p className="mb-3 tracking-[1px]">September 2023 - January 2025</p>
                                <p className="mb-3 font-bold text-white">Role: Fullstack Developer</p>
                                <p className="mb-3">
                                    I contributed to the development and optimization of banking applications, focusing on security, API development, and real-time technologies like Socket and FCM, using Angular, .NET, and SQL Server.
                                </p>
                                <p>
                                    In CRM and omnichannel projects, I integrated platforms such as Facebook, Google Analytics, Zalo OAuth, and AWS CloudWatch/SES to enhance customer management and streamline communication across multiple channels.
                                </p>
                                <div className="absolute left-0 bottom-[0] top-0 -translate-x-1/2 bg-gray-800 w-[1px] h-full"></div>
                            </div>
                        </motion.div>

                        {/* GlobalChain */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
                            viewport={{ once: true, amount: 0.4 }}
                            className="pl-1"
                        >
                            <h5 className="pl-5 relative text-[1.2rem] font-bold tracking-[1px]">
                                GlobalChain
                                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary w-[8px] h-[8px] rounded-full"></div>
                            </h5>
                            <div className="pl-5 pt-3 pb-5 relative text-[#bbb] text-[16px] leading-[1.6] font-[500]">
                                <p className="mb-3 tracking-[1px]">July 2023 - September 2023</p>
                                <p className="mb-3 font-bold text-white">Role: Intern Web Developer</p>
                                <p>
                                    During my internship as a Web Developer, I contributed to building dynamic web applications, fine-tuning performance, and integrating new features, all while working with Next.js, NestJS, MongoDB, and exploring blockchain possibilities with Hyperledger Fabric.
                                </p>
                                <div className="absolute left-0 bottom-[0] top-0 -translate-x-1/2 bg-gray-800 w-[1px] h-full"></div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div >
        </section >
    );
})
