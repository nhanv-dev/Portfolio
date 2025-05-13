import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRight, FaChevronRight } from "react-icons/fa6";
import { GoDotFill } from 'react-icons/go';
import { MdArrowForward } from 'react-icons/md';
import { Link, useNavigate } from "react-router-dom";
import ContactBanner from "../components/ContactBanner";
import TechInfiniteScroll from "../components/InfiniteScroll/TechInfiniteScroll";
import { useLoading } from "../components/LoadingProvider";
import PageWithPreload from "../components/PageWithPreload";
import TitleSection from "../components/TitleSection";
import { personalInfo, projects, skills } from "../data";
import { blurAnimation, slideDownWheelAnimation } from "../utils/animations";
import CircularText from "../components/CircularText";


export default function AboutPage() {

    return (
        <PageWithPreload texts={["Hi, I'm Tran Thanh Nhan", "Exploring Tech & Creativity"]}>
            <motion.div {...blurAnimation}>
                <HeroComponent />
            </motion.div>

            <ExploreAboutComponent />

            <TechInfiniteScroll />

            <ResumeComponent />

            <ExploreProjectsComponent />

            <ContactBanner />

        </PageWithPreload>
    );
}

const HeroComponent = () => {
    const navigate = useNavigate();
    const { handleNavigationWithAnimation } = useLoading();

    return (
        <section className="w-full h-[calc(100vh-72px)] max-h-[1024px] flex bg-lightBg text-lightText overflow-hidden shadow-lg">
            <div className="flex-1 flex flex-col justify-between relative">
                <div className="flex-1 flex gap-20">
                    <div className="flex-1 pl-20 pt-20">
                        <h2 className="text-[1.1rem] font-bold mb-8 flex items-center gap-2">
                            <span className="w-[50px] h-[2px] bg-primary rounded-full relative">
                                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[16px] h-[16px] bg-primary rounded-full">
                                    <span className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75 scale-150"></span>
                                </div>
                            </span>
                            <span>Hi there, I'm <span className="text-primary">Tran Thanh Nhan</span></span>
                        </h2>
                        <div className="mb-8">
                            <motion.h2
                                className={`text-6xl font-extrabold tracking-wider font-kanit uppercase text-transparent mb-4`}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: .8, ease: 'easeOut', delay: 0 }}
                                style={{ WebkitTextStroke: '1px rgb(0, 0, 0)' }}
                            >
                                Fullstack Developer
                            </motion.h2>
                            <h1 className="text-6xl font-extrabold font-kanit uppercase">
                                Tran Thanh Nhan
                            </h1>
                        </div>
                        <p className="text-base font-medium mb-8">
                            I am a software developer who turns ideas into reality through clean code and creative solutions.
                            With a strong foundation in full-stack development, I focus on building performant, user-centric applications.
                        </p>
                        <div className="flex gap-20 mb-10 text-base">
                            <div className="flex flex-col gap-2">
                                <p className="font-bold">Location</p>
                                <p className="font-medium">{personalInfo.contact.location}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="font-bold">Phone</p>
                                <p className="font-medium">{personalInfo.contact.phone}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="font-bold">Email</p>
                                <p className="font-medium">{personalInfo.contact.email}</p>
                            </div>
                        </div>
                        <div className="w-full h-[230px] relative">
                            <img src={projects[0].card.image} alt="avatar" className="w-full h-full object-cover pr-[50px]" />
                            <Link to={'/contact'} onClick={(e) => {
                                e.preventDefault();
                                handleNavigationWithAnimation('/contact', navigate);
                            }} className="absolute bottom-0 right-0 bg-[#173c3a] px-6 py-4 translate-y-1/2 text-white font-bold flex items-center gap-4">
                                Start a Conversation
                                <FaArrowRight className="text-[1rem]" />
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-end px-5">
                        <p className="text-base font-normal font-kanit"
                            style={{
                                writingMode: 'vertical-lr',
                                textOrientation: 'mixed',
                                transform: 'rotate(180deg)',
                            }}>
                            Let's Build Something Amazing Together
                        </p>
                    </div>
                </div>
                <div className="flex gap-8 font-semibold pl-20 pr-5 py-5 justify-between">
                    <div className="text-base font-normal font-kanit flex items-center justify-center gap-6">
                        <a href={personalInfo.link.facebook} target="_blank" rel="noopener noreferrer">
                            Facebook
                        </a>
                        <a href={personalInfo.link.github} target="_blank" rel="noopener noreferrer">
                            Github
                        </a>
                        <a href={personalInfo.link.linkedin} target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </div>
                    <p className="text-base font-normal font-kanit">
                        Designed & Coded by Tran Thanh Nhan
                    </p>
                </div>
                <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
                    <CircularText
                        text="Since 2025 . Since 2025 . Since 2025 . From code into reality . From code into reality . "
                        innerClassName="text-black "
                        className="!w-[400px] !h-[400px]"
                    />
                </div>
            </div>
            <div className="w-[45%] flex flex-col">
                <div className="flex-1 bg-gray-100 flex items-center justify-center relative">
                    <img src={projects[0].card.image} alt="project" className="object-cover w-full h-full" />
                </div>
                <div className="bg-darkBg text-darkText flex min-h-[300px]">
                    <div className="flex-1 p-8 pb-10 flex flex-col justify-center">
                        <p className="text-base font-semibold mb-4 flex items-center gap-3">
                            <span className="w-[20px] h-[3px] bg-white block"></span>
                            Explore My Projects
                        </p>
                        <h2 className="text-3xl font-bold mb-6">
                            Turn Ideas into <span className="text-primary">Realities</span>
                        </h2>
                        <p className="text-gray-300 text-[0.95rem] font-medium max-w-[600px]">
                            Beyond coding, I constantly explore new technologies and design trends to refine my craft.
                            I believe that great software not only functions perfectly but also tells a meaningful story through its experience.
                        </p>
                    </div>
                    <Link to={'/projects'} onClick={(e) => {
                        e.preventDefault();
                        handleNavigationWithAnimation('/projects', navigate);
                    }} className="flex justify-center items-center bg-[#141414] w-[70px]">
                        <FaChevronRight className="text-[1.2rem]" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

const IntroductionSection = () => {
    return (
        <section className="py-[120px] bg-darkBg text-darkText border-t border-gray-900">
            <div className='container'>
                <div className="relative">
                    <TitleSection
                        className={'mb-12'}
                        title={'What I Do'}
                        title2={'MY CRAFT'}
                        subTitle={'Coding'}
                        subTitle2={'Stuff'}
                    ></TitleSection>
                    <div className="pr-[520px] w-full">
                        <div className="w-full flex items-center justify-end gap-10">
                            <div className='flex items-center justify-start gap-3 font-bold text-[1.1rem] min-w-[160px]'>
                                <GoDotFill />
                                <p className='relative'>
                                    Introduction
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-lightBg"></span>
                                </p>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: .8, ease: 'easeOut', delay: 0.4 }}
                                className="flex-1 bg-[#131313]">
                                <p className="text-[1rem] leading-[1.75] font-medium text-gray-300 text-end py-6 px-10">
                                    I'm a Fullstack Web Developer, specializing in building seamless, end-to-end web applications. I work on both front-end and back-end solutions, ensuring smooth integration for efficient, scalable, and user-friendly digital experiences.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: .8, ease: 'easeOut', }}
                        className="absolute right-0 top-0 z-10">
                        <div
                            className="w-[520px] h-[380px] bg-center bg-cover"
                            style={{ backgroundImage: `url(https://themexriver.com/wp/agenriver-demo/freelancer/wp-content/uploads/sites/16/2025/03/pro23.webp)` }}
                        ></div>
                        <div className="absolute left-0 right-0 top-0 bottom-0 bg-black/10"></div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: .8, ease: 'easeOut', }}
                        className="relative w-full pr-20">
                        <div
                            className="w-full h-[40vh] bg-top bg-cover"
                            style={{ backgroundImage: `url(https://themexriver.com/wp/agenriver-demo/freelancer/wp-content/uploads/sites/16/2025/03/pro24.webp)` }}
                        ></div>
                        <div className="absolute left-0 right-0 top-0 bottom-0 bg-black/10"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState('Frontend Development');
    const activeCategoryData = skills.find(item => item.title === activeCategory);

    return (
        <section className="py-[120px] bg-darkBg text-darkText border-t border-gray-900">
            <div className="container">
                <div className="grid grid-cols-12 gap-20">
                    {/* Left Column - Categories */}
                    <div className="col-span-4 flex flex-col">
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
                                    <h3 className="text-[21px] font-bold">
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
                                <p className="text-[16px] leading-relaxed font-medium text-gray-500 mt-2">
                                    {category.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Right Column - Technologies */}
                    <div className="col-span-8 relative min-h-[400px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h4 className="text-[15px] font-bold mb-6">
                                    {activeCategoryData.title}: {activeCategoryData.description}
                                </h4>
                                <div className="grid grid-cols-3 gap-5 relative">
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
}

const ExploreAboutComponent = () => {
    return (
        <div className="w-full">
            <IntroductionSection />
            <SkillsSection />
        </div>
    )
}

const ExploreProjectsComponent = () => {
    const { handleNavigationWithAnimation } = useLoading();
    const navigate = useNavigate();

    return (
        <section className='py-[120px] bg-darkBg border-t border-gray-900'>
            <div className="container">
                <TitleSection
                    className={'mb-12'}
                    title={'selected'}
                    title2={'works'}
                    subTitle={'featured'}
                    subTitle2={'projects'}
                ></TitleSection>
                <div className="flex gap-7">
                    <div className="flex-1 h-[300px]">
                        <motion.div
                            className="p-8 bg-[#1a1a1a] h-[300px] rounded-xl"
                            {...slideDownWheelAnimation}
                            transition={{ duration: .8, ease: 'easeOut' }}
                        >
                            <div className='relative w-full h-full'>
                                <div
                                    className='absolute top-0 right-0 lg:text-[45px] text-stroke-unbounded font-extrabold font-unbounded text-[#1a1a1a]'
                                    style={{ WebkitTextStrokeWidth: '3px' }}
                                >
                                    01
                                </div>
                                <div className="absolute bottom-0 left-0 font-bold text-[20px] font-unbounded leading-snug">
                                    Creative <br /> Design
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="flex-1 h-[300px]">
                        <motion.div
                            className="p-8 bg-[#1a1a1a] h-[300px] rounded-xl"
                            {...slideDownWheelAnimation}
                            transition={{ duration: .8, ease: 'easeOut' }}
                        >
                            <div className='relative w-full h-full'>
                                <div
                                    className='absolute top-0 right-0 lg:text-[45px] text-stroke-unbounded font-extrabold font-unbounded text-[#1a1a1a]'
                                    style={{ WebkitTextStrokeWidth: '3px' }}
                                >
                                    02
                                </div>
                                <div className="absolute bottom-0 left-0 font-bold text-[20px] font-unbounded leading-snug">
                                    System <br /> Scalability
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="flex-1 relative h-[300px]">
                        <div className='relative top-[-70%] bg-[#1a1a1a] h-[300px] p-8 rounded-xl'>
                            <div className='relative w-full h-full'>
                                <div
                                    className='absolute top-0 right-0 lg:text-[45px] text-stroke-unbounded font-extrabold font-unbounded text-[#1a1a1a]'
                                    style={{ WebkitTextStrokeWidth: '3px' }}
                                >
                                    03
                                </div>
                                <div className="absolute bottom-0 left-0 font-bold text-[20px] font-unbounded leading-snug">
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
                                className='hover:bg-black hover:text-white transition-all duration-700 font-unbounded w-[150px] h-[150px] flex items-center justify-center border-[3px] border-white rounded-full font-medium uppercase text-[17px]'>
                                Let's <br />start
                            </Link>
                        </motion.div>
                    </div>
                    <div className="flex-1 h-[300px]">
                        <motion.div
                            className="p-8 bg-[#1a1a1a] h-[300px] rounded-xl"
                            {...slideDownWheelAnimation}
                            transition={{ duration: .8, ease: 'easeOut' }}
                        >
                            <div className='relative w-full h-full'>
                                <div
                                    className='absolute top-0 right-0 lg:text-[45px] text-stroke-unbounded font-extrabold font-unbounded text-[#1a1a1a]'
                                    style={{ WebkitTextStrokeWidth: '3px' }}
                                >
                                    04
                                </div>
                                <div className="absolute bottom-0 left-0 font-bold text-[20px] font-unbounded leading-snug">
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
}

const ResumeComponent = () => {
    return (
        <section id="resume" className="bg-darkBg py-[120px] border-t border-gray-900">
            <div className="container">
                {/* Header */}
                <TitleSection
                    className={'mb-12'}
                    title={'Build'}
                    title2={'History'}
                    subTitle={'Education'}
                    subTitle2={'& Experience'}
                    titleClassName='!text-darkBg'
                ></TitleSection>

                {/* Education & Experience */}
                <div className="flex flex-wrap gap-4">
                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.4 }}
                        className="flex-1"
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
                        <div className="h-[330px] w-full flex items-center justify-center overflow-hidden ">
                            <img src={'https://i.pinimg.com/736x/7d/63/e1/7d63e100d2d24ace9de49d759c74cf8e.jpg'} alt="" className="mr-3 h-full w-full object-cover object-center" />
                        </div>
                    </motion.div>

                    {/* Experience */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.4 }}
                        className="flex-1"
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
            </div>
        </section>
    );
};
