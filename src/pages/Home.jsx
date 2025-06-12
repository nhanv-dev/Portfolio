import { motion } from 'framer-motion';
import { memo } from 'react';
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';
import { FaArrowRightLong, FaGithub } from 'react-icons/fa6';
import { GoArrowDownLeft, GoArrowUpRight } from "react-icons/go";
import { Link, useNavigate } from 'react-router-dom';
import ContactBanner from "../components/ContactBanner";
import DevInfiniteScroll from '../components/InfiniteScroll/DevInfiniteScroll';
import { useLoading } from '../components/LoadingProvider';
import PageWithPreload from "../components/PageWithPreload";
import { personalInfo, projects } from '../data';
import { opacityWheelAnimation, slideLeftWheelAnimation, slideRightWheelAnimation, slideUpWheelAnimation } from '../utils/animations';
import { MdOutlineArrowOutward } from "react-icons/md";

const list = [
    { name: "Fullstack Developer" },
    { name: "Web Developer" },
    { name: "Source Code Management" },
];

export default function HomePage() {

    return (
        <PageWithPreload texts={["Discover What's Ahead", "Let's Explore"]}>

            <ExploreAboutComponent />

            <div className="py-10 border-t border-b border-gray-200 bg-lightBg">
                <DevInfiniteScroll variant='white' list={list} innerClassName={'!text-[1.5rem]'} innerClassNameSplit={'!text-[1rem]'} />
            </div>

            <ExploreProjectsComponent />

            <ExploreContactComponent />

            <ContactBanner />

        </PageWithPreload>
    )
}

const ExploreAboutComponent = memo(() => {
    const { handleNavigationWithAnimation } = useLoading();
    const navigate = useNavigate();

    return (
        <section className="bg-lightBg text-lightText">
            {/* Main Content */}
            <div className="relative xl:pt-10 xl:pb-0 xl:mb-0 py-[120px] mb-[120px] border-b border-gray-200 xl:border-none">
                <div className="container-wide relative">
                    <div className="hidden 2xl:flex flex-col items-center gap-6 z-10 min-w-max absolute top-0 left-0">
                        <div className="w-[44px] h-[235px] bg-gradient-to-b from-transparent to-[#F3F3F3] rounded-b-[40px]"></div>
                        <a href={personalInfo.link.facebook} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-[44px] h-[44px] text-black border-2 border-[#DFE0DF] rounded-full transition-all duration-400">
                            <FaFacebookF size={18} />
                        </a>
                        <a href={personalInfo.link.github} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-[44px] h-[44px] text-black border-2 border-[#DFE0DF] rounded-full transition-all duration-400">
                            <FaGithub size={18} />
                        </a>
                        <a href={personalInfo.link.linkedin} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-[44px] h-[44px] text-black border-2 border-[#DFE0DF] rounded-full transition-all duration-400">
                            <FaLinkedin size={18} />
                        </a>
                        <div className="w-[44px] h-[235px] bg-gradient-to-b from-[#F3F3F3] to-transparent rounded-t-[40px]"></div>
                    </div>
                </div>
                <div className="absolute left-0 top-5 lg:top-10 w-full z-10">
                    <div className="container">
                        <div className="text-[1.6rem] font-bold font-kanit relative">
                            Port
                            <span className="text-primary">folio.</span>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 left-0 w-full">
                    <div className="container-wide relative">
                        <img
                            src="/images/h2-shape-1.webp"
                            alt="Shape"
                            className="absolute top-0 left-0 w-auto h-auto"
                        />
                    </div>
                </div>
                <div className="container xl:container-wide flex md:gap-20 justify-end relative xl:min-h-[750px]">
                    <div className="xl:absolute flex-1 xl:top-1/2 xl:-translate-y-1/2 xl:left-0 xl:right-0">
                        <div className="xl:container flex">
                            <div className="w-full xl:w-[55%] 2xl:w-50%]">
                                <motion.h1
                                    {...slideUpWheelAnimation}
                                    className="text-[1.5rem] md:text-[3.5rem] lg:text-[2.5rem] xl:text-[3rem] 2xl:text-[3.5rem] font-extrabold leading-tight"
                                >
                                    Transforming Ideas Into
                                    <span className="block text-primary">Web Applications</span>
                                    with <span className="inline-block text-gray-500">Modern Technology</span>
                                </motion.h1>

                                <div className="flex items-start gap-8 mt-10">
                                    <div className="hidden xl:flex w-[100px] h-[40px] items-center justify-center relative">
                                        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[2px] bg-[#FFB8D8]"></div>
                                        <div className="w-[32px] h-[32px] bg-[#FFB8D8] rounded-full relative">
                                            <span className="absolute inset-0 bg-[#FFB8D8] rounded-full animate-ping opacity-75"></span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium text-[16px] md:text-[18px] leading-[28px] text-gray-600 mb-0 max-w-xl">
                                            I turn ideas into scalable web applications using modern fullstack technologies.
                                            With a strong focus on clean architecture and real-world impact, I build reliable, production-ready solutions tailored to business needs.
                                        </p>
                                        <motion.div {...slideUpWheelAnimation} className='mt-10'>
                                            <button
                                                onClick={() => handleNavigationWithAnimation('/contact', navigate)}
                                                className="inline-flex items-center px-8 py-3 bg-darkBg text-white rounded-full font-bold transition-colors"
                                            >
                                                Get Started
                                                <FaArrowRightLong className='ml-3 relative top-[1px]' size={18} />
                                            </button>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <motion.div
                        {...slideLeftWheelAnimation}
                        className="hidden lg:block lg:w-[35%] xl:w-[35%] 2xl:w-[38%] relative z-20 md:h-[550px] xl:h-[700px] 2xl:h-[780px]"
                    >
                        <img
                            src="./images/home2.jpg"
                            alt="Coding"
                            className="w-full h-full max-h-[780px] object-center object-cover relative z-10"
                        />

                        <div className="absolute bottom-[100px] left-[-100px] lg:w-[170px] lg:h-[210px] 2xl:w-[258px] 2xl:h-[316px] z-20">
                            <img src="./images/home1.jpg" alt="Coding" className="w-full h-full object-cover" />
                        </div>
                    </motion.div>
                </div>
                <div className="hidden xl:block bg-transparent absolute left-0 top-[90%] w-full h-[300px] z-20">
                    <div className="absolute top-0 left-1/2 -translate-y-1/2 z-30">
                        <div className="w-[112px] h-[112px] flex flex-wrap">
                            <div className="w-[56px] h-[56px] bg-[#ECEAEB] flex items-center justify-center">
                                <GoArrowUpRight size={24} />
                            </div>
                            <div className="relative w-[56px] h-[56px] bg-white z-20">
                            </div>
                            <div className="w-[56px] h-[56px] bg-white"></div>
                            <div className="w-[56px] h-[56px] bg-[#ECEAEB] flex items-center justify-center">
                                <GoArrowDownLeft size={24} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden xl:block bg-lightBg2 absolute left-0 top-[90%] w-full h-[300px] z-10">
                    <div className="container w-full h-full relative">
                        <div className="absolute -bottom-4 left-[40%] ml-20">
                            <h1 className='hidden xl:block font-extrabold font-kanit text-transparent xl:text-[120px] 2xl:text-[140px] uppercase leading-[0.7] tracking-wide'
                                style={{
                                    WebkitTextStrokeWidth: '1px',
                                    WebkitTextStrokeColor: 'rgba(1, 1, 1, .2)'
                                }}
                            >
                                About Me
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden pb-[120px]">
                <div className="container flex flex-wrap items-end gap-20 relative z-30">
                    <motion.div
                        className="w-[100%] lg:w-[50%] xl:w-[40%] h-[625px] overflow-hidden"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <img
                            src="./images/home3.jpg"
                            alt="About Section"
                            className="w-full h-full object-cover relative z-10"
                        />
                    </motion.div>

                    <div className="flex-1 relative">
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 items-end justify-between gap-10 md:gap-16 lg:gap-10 xl:gap-20 mb-10"
                            {...opacityWheelAnimation}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div>
                                <div>
                                    <div className="w-[68px] h-[68px] bg-[#D9D0FF] flex items-center justify-center ml-[24px]">
                                        <img src="/images/icons/web-development.png" alt="Bulb" className='w-[32px] h-[32px]' />
                                    </div>
                                    <div className="w-[24px] h-[24px] bg-[#F5F5F5]"></div>
                                    <div className="w-full h-[2px] bg-[#F5F5F5]"></div>
                                </div>
                                <div>
                                    <h5 className="font-unbounded font-bold text-[1.25rem] leading-[32px] tracking-wide text-black/80 my-[32px] mb-6">
                                        A Little About Me
                                    </h5>
                                    <p className='font-medium text-base text-gray-500'>
                                        Passionate Fullstack Developer with 1+ years of experience in crafting fast, scalable web application.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div className="w-[68px] h-[68px] bg-[#D9D0FF] flex items-center justify-center ml-[24px]">
                                        <img src="/images/icons/innovation.png" alt="Bulb" className='w-[40px] h-[40px]' />
                                    </div>
                                    <div className="w-[24px] h-[24px] bg-[#F5F5F5]"></div>
                                    <div className="w-full h-[2px] bg-[#F5F5F5]"></div>
                                </div>
                                <div>
                                    <h5 className="font-unbounded font-bold text-[1.25rem] leading-[32px] tracking-wide text-black/80 my-[32px] mb-6">
                                        Behind the Code
                                    </h5>
                                    <p className='font-medium text-base text-gray-500'>
                                        Turning ideas into fast, reliable web applications with a passion for technology and detail.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            {...slideLeftWheelAnimation}
                            className='mt-10'
                        >
                            <button
                                onClick={() => handleNavigationWithAnimation('/about', navigate)}
                                className="inline-flex items-center text-primary text-[1.05rem] font-bold tracking-[-0.01rem]"
                            >
                                About Me
                                <span className='ml-3 flex items-center justify-center bg-primary rounded-full w-[32px] h-[32px] text-darkText'>
                                    <FaArrowRightLong size={14} />
                                </span>
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
})

const ExploreProjectsComponent = memo(() => {
    const { handleNavigationWithAnimation, handleNavigationWithOverlay } = useLoading();
    const navigate = useNavigate();

    const handleClick = (e, slug) => {
        e.preventDefault();
        handleNavigationWithOverlay(slug, navigate);
    }

    return (
        <section className='relative'>
            <div className="pt-[120px] bg-lightBg text-lightText">
                <div className="container">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between">
                        <div className="flex-1">
                            <div className="hidden lg:block text-6xl font-semibold font-kanit text-lightText">
                                <p className="xl:text-[56px] xl:leading-[60px]">My Selected</p>
                                <p className="lg:ml-[50px] xl:ml-[100px] lg:text-[170px] xl:text-[300px] lg:leading-[120px] xl:leading-[210px] mt-5">Work</p>
                            </div>
                            <div className="block lg:hidden mb-5 text-6xl font-semibold font-kanit text-lightText">
                                <p className="xl:text-[56px] xl:leading-[60px]">My Selected Work</p>
                            </div>
                        </div>

                        <div className="bg-[#D9D0FF] relative z-10 flex-1">
                            <p className="md:text-[16px] xl:text-[1.2rem] md:leading-[1.5rem] xl:leading-[2rem] text-[#3D3D3D] px-12 py-10 font-medium">
                                I proudly showcase our creative design work, reflecting our passion for innovation and attention to detail. Each project highlights our commitment to delivering visually stunning and effective solutions.
                            </p>
                            <button
                                onClick={() => handleNavigationWithAnimation('/projects', navigate)}
                                className="p-[22px] font-bold text-[1.05rem] group absolute top-full right-0 w-full bg-lightBg min-w-max"
                            >
                                <span className='flex justify-center items-center transition-all duration-300 text-primary'>
                                    Browse All Projects
                                    <FaArrowRightLong className='ml-3 relative top-[1px]' size={18} />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="bg-center bg-cover bg-no-repeat pt-[200px] pb-20 bg-gray-900 relative z-0"
                style={{
                    backgroundImage: 'url("./images/w2-bg.webp")',
                }}>
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="container-wide relative z-10">
                    <div className="grid grid-cols-4 gap-8">
                        <div className="col-span-4 md:col-span-2 lg:col-span-1">
                            <ProjectCard project={projects[0]} handleClick={handleClick} />
                        </div>

                        <div className="col-span-4 md:col-span-2 lg:col-span-1">
                            <ProjectCard project={projects[1]} handleClick={handleClick} />
                        </div>

                        <div className="col-span-4 md:col-span-2 lg:col-span-2">
                            <ProjectCard project={projects[2]} handleClick={handleClick} />
                        </div>

                        <div className="col-span-4 md:col-span-2 lg:col-span-2">
                            <ProjectCard project={projects[3]} handleClick={handleClick} />
                        </div>

                        <div className="col-span-4 md:col-span-2 lg:col-span-1">
                            <ProjectCard project={projects[4]} handleClick={handleClick} />
                        </div>

                        <div className="col-span-4 md:col-span-2 lg:col-span-1 flex items-end">
                            <ProjectCard project={projects[5]} handleClick={handleClick} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
})

const ProjectCard = memo(({ project, handleClick }) => {
    return (
        <Link
            to={project.slug}
            onClick={(e) => handleClick(e, project.slug)}
            className="group overflow-hidden max-h-max flex flex-col"
        >
            <motion.div
                className="relative aspect-square overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5 }}
            >
                <img
                    src={project.card.thumbnail}
                    alt={project.card.title}
                    className="w-full h-full object-cover transition-all duration-500"
                />
            </motion.div>
            <motion.div
                className="pt-4 flex-1 flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className='text-white'>
                    <h2 className="text-xl font-bold text-white mb-2">{project.card.title}</h2>
                    <p className="text-[1.05rem] text-[#fff9] font-medium">
                        <span className='text-[#fff9] relative top-[-2px]'>{'//'}</span> {project.card.subTitle}
                    </p>
                </div>
            </motion.div>
        </Link>
    )
})

const ExploreContactComponent = memo(() => {
    const { handleNavigationWithAnimation } = useLoading();
    const navigate = useNavigate();

    return (
        <section className='relative bg-[#F6F3FF] text-lightText'>
            <div className="container mb-[120px]">
                <div className="flex flex-wrap items-start">
                    <div className="min-w-[90%] lg:min-w-[80%] xl:min-w-[40%] pt-[120px] pb-10 relative h-full">
                        <div className="text-4xl md:text-6xl lg:text-6xl leading-none tracking-wider font-bold uppercase font-kanit">
                            <motion.p {...slideRightWheelAnimation} >
                                Experimental
                            </motion.p>
                            <motion.p {...{ ...slideRightWheelAnimation, transition: { ...slideRightWheelAnimation.transition, delay: .15 } }}>Studio</motion.p>
                        </div>
                        <div className="mt-10">
                            <ul className="flex gap-8">
                                <li className="font-bold text-[1rem]">
                                    <a href={personalInfo.link.facebook} target="_blank" rel="noopener noreferrer">
                                        / Facebook
                                    </a>
                                </li>
                                <li className="font-bold text-[1rem]">
                                    <a href={personalInfo.link.github} target="_blank" rel="noopener noreferrer">
                                        / Github
                                    </a>
                                </li>
                                <li className="font-bold text-[1rem]">
                                    <a href={personalInfo.link.linkedin} target="_blank" rel="noopener noreferrer">
                                        / LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <p className='hidden md:block absolute h-[85%] top-0 right-0 bg-black w-[2px]'>
                            <motion.button
                                type='button'
                                initial={{ x: '-50%', rotate: 180 }}
                                whileInView={{ x: '-50%', rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                onClick={() => handleNavigationWithAnimation('/projects', navigate)}
                                className='absolute top-full w-[80px] h-[80px] left-1/2 border-2 border-black rounded-full font-semibold flex items-center justify-center'>
                                <MdOutlineArrowOutward className='text-[2.25rem]' />
                            </motion.button>
                        </p>
                    </div>
                    <div className="hidden md:block xl:flex-1 pt-[60px] ml-auto mr-0 xl:ml-[120px] relative">
                        <p className='absolute left-0 font-bold text-[10rem] md:text-[10rem] lg:text-[10rem] xl:text-[12rem] leading-none opacity-5 font-unbounded'>
                            2025
                        </p>
                        <motion.p
                            {...{ ...slideLeftWheelAnimation }}
                            className='pt-[110px] mb-3 font-extrabold font-kanit text-[6rem] uppercase leading-none text-end text-stroke-trans'>
                            Project
                        </motion.p>
                        <p className='font-medium text-[1rem] uppercase font-kanit tracking-wider'>
                            Development, for me, is about crafting solutions that last.
                        </p>
                    </div>
                </div>
            </div>
            <div className="h-[18vh] w-full overflow-hidden bg-center bg-cover" style={{ backgroundImage: 'url("./images/home.jpg")' }}>
                <div className="container w-full h-full">
                    <img src="./images/studio.svg" alt="studio" className='h-full' />
                </div>
            </div>
            <div className="container py-[120px]">
                <div className="flex flex-wrap items-center">
                    <div className="mb-10 xl:mb-0 w-full xl:w-[40%] text-4xl md:text-6xl lg:text-6xl leading-none tracking-wider font-bold uppercase font-kanit">
                        <motion.p {...slideRightWheelAnimation}>Design +</motion.p>
                        <motion.p {...{ ...slideRightWheelAnimation, transition: { ...slideRightWheelAnimation.transition, delay: .15 } }}>Development</motion.p>
                    </div>
                    <div className="flex-1 flex flex-col md:flex-row justify-between gap-10">
                        <div className=" font-medium text-[1rem] uppercase font-kanit tracking-wider">
                            <p className='mb-3'>
                                Behind every clean UI and robust backend is thoughtful development.
                            </p>
                            <p>
                                Every project is a challenge to do better than <br />anything I have already done!
                            </p>
                        </div>
                        <div className="md:pl-10 text-2xl leading-2xl font-kanit font-bold">
                            <p>{projects.length + 1}+</p>
                            <p>Projects</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
})

