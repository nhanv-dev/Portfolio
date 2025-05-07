import { motion } from 'framer-motion';
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';
import { FaArrowRightLong, FaGithub } from 'react-icons/fa6';
import { GoArrowDownLeft, GoArrowUpRight } from "react-icons/go";
import { Link, useNavigate } from 'react-router-dom';
import ContactBanner from "../components/ContactBanner";
import HomeSlider from '../components/HomeSlider';
import DevInfiniteScroll from '../components/InfiniteScroll/DevInfiniteScroll';
import { useLoading } from '../components/LoadingProvider';
import PageWithPreload from "../components/PageWithPreload";
import { personalInfo, projects } from '../data';
import { blurAnimation, opacityWheelAnimation, slideLeftWheelAnimation, slideUpWheelAnimation } from '../utils/animations';

const list = [
    { name: "Fullstack Developer" },
    { name: "Web Developer" },
    { name: "Source Code Management" },
];

export default function HomePage() {

    return (
        <PageWithPreload texts={["Discover What's Ahead", "Let's Explore"]}>
            <motion.div {...blurAnimation}>
                <HomeSlider />
            </motion.div>

            <ExploreAboutComponent />

            <div className="py-10 border-t border-b border-gray-200 bg-lightBg">
                <DevInfiniteScroll variant='white' list={list} innerClassName={'!text-[1.5rem]'} innerClassNameSplit={'!text-[1rem]'} />
            </div>

            <ExploreProjectsComponent />

            <ContactBanner />

        </PageWithPreload>
    )
}

const ExploreAboutComponent = () => {
    const { handleNavigationWithAnimation } = useLoading();
    const navigate = useNavigate();

    return (
        <section className="bg-lightBg text-lightText">
            {/* Main Content */}
            <div className="relative pt-20">
                <div className="container-wide relative">
                    <div className="flex flex-col items-center gap-6 z-10 min-w-max absolute top-0 left-0">
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
                <div className="absolute top-0 left-0 w-full ">
                    <div className="container-wide relative">
                        <img
                            src="https://themexriver.com/wp/agenriver-demo/web-agency/wp-content/uploads/sites/20/2025/04/h2-shape-1.webp"
                            alt="Shape"
                            className="absolute top-0 left-0 w-auto h-auto"
                        />
                    </div>
                </div>
                <div className="container-wide flex gap-20 justify-end relative">
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0">
                        <div className="container">
                            <motion.h1
                                {...slideUpWheelAnimation}
                                className="text-[3.5rem] font-extrabold leading-tight"
                            >
                                Transforming Ideas Into
                                <span className="block text-primary">Web Applications</span>
                                with <span className="inline-block text-gray-500">Modern Technology</span>
                            </motion.h1>

                            <div className="flex items-start gap-8 mt-10">
                                <div className="w-[100px] h-[40px] flex items-center justify-center relative">
                                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[2px] bg-[#FFB8D8]"></div>
                                    <div className="w-[32px] h-[32px] bg-[#FFB8D8] rounded-full relative">
                                        <span className="absolute inset-0 bg-[#FFB8D8] rounded-full animate-ping opacity-75"></span>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium text-[18px] leading-[28px] text-gray-600 mb-0 max-w-xl">
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
                    <motion.div
                        {...slideLeftWheelAnimation}
                        className="lg:w-[40%] relative z-20 h-[780px]"
                    >
                        <img
                            src="https://i.pinimg.com/736x/3f/ac/a7/3faca77b9d10bae4a7cb3d15720ce0d3.jpg"
                            alt="Coding"
                            className="w-full h-full max-h-[780px] object-center object-cover relative z-10"
                        />

                        <div className="absolute bottom-[100px] left-[-100px] w-[258px] h-[316px] z-20">
                            <img src="https://i.pinimg.com/736x/e3/5a/43/e35a43db2a75327248f698dc1b65cccb.jpg" alt="Coding" className="w-full h-full object-cover" />
                        </div>
                    </motion.div>
                </div>
                <div className="bg-transparent absolute left-0 top-[90%] w-full h-[300px] z-20">
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
                <div className="bg-lightBg2 absolute left-0 top-[90%] w-full h-[300px] z-10">
                    <div className="container w-full h-full relative">
                        <div className="absolute -bottom-4 left-[40%] ml-20">
                            <h1 className='font-extrabold font-kanit text-transparent xl:text-[140px] uppercase leading-[0.7] tracking-wide block'
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
                <div className="container flex items-end gap-20 relative z-30">
                    <motion.div
                        className="lg:w-[40%] h-[625px] overflow-hidden"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <img
                            src="https://i.pinimg.com/736x/27/e2/b1/27e2b129a12587556a4cca1167709ffc.jpg"
                            alt="About Section"
                            className="w-full h-full object-cover relative z-10"
                        />
                    </motion.div>

                    <div className="flex-1 relative">
                        <div className="w-full absolute right-0 bottom-0">
                            <motion.div
                                className="flex items-end justify-between gap-20 mb-10"
                                {...opacityWheelAnimation}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <div className="flex-1">
                                    <div>
                                        <div className="w-[68px] h-[68px] bg-[#D9D0FF] flex items-center justify-center ml-[24px]">
                                            <img src="/images/web-development.png" alt="Bulb" className='w-[32px] h-[32px]' />
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
                                <div className="flex-1">
                                    <div>
                                        <div className="w-[68px] h-[68px] bg-[#D9D0FF] flex items-center justify-center ml-[24px]">
                                            <img src="/images/innovation.png" alt="Bulb" className='w-[40px] h-[40px]' />
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
            </div>
        </section>
    )
}

const ExploreProjectsComponent = () => {
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
                    <div className="flex flex-col lg:flex-row items-end justify-between">
                        <div className="flex-1">
                            <div className="text-6xl font-semibold font-kanit text-lightText">
                                <span className="flex-1block text-[56px] leading-[60px]">My Selected</span>
                                <span className="ml-[100px] block text-[300px] leading-[210px] mt-5">Work</span>
                            </div>
                        </div>

                        <div className="bg-[#D9D0FF] relative z-10 flex-1">
                            <p className="text-[1.2rem] text-[#3D3D3D] px-12 py-10 font-medium leading-[2rem]">
                                We proudly showcase our creative design work, reflecting our passion for innovation and attention to detail. Each project highlights our commitment to delivering visually stunning and effective solutions.
                            </p>
                            <button
                                onClick={() => handleNavigationWithAnimation('/projects', navigate)}
                                className="p-[22px] font-bold text-[1.05rem] group absolute top-full right-0 w-full bg-lightBg"
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
                    backgroundImage: 'url("https://themexriver.com/wp/agenriver-demo/web-agency/wp-content/uploads/sites/20/2025/04/w2-bg.webp")',
                }}>
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="container-wide relative z-10">
                    <div className="grid grid-cols-4 gap-8">
                        <div className="col-span-1">
                            <ProjectCard project={projects[0]} handleClick={handleClick} />
                        </div>

                        <div className="col-span-1">
                            <ProjectCard project={projects[1]} handleClick={handleClick} />
                        </div>

                        <div className="col-span-2">
                            <ProjectCard project={projects[2]} handleClick={handleClick} />
                        </div>

                        <div className="col-span-2">
                            <ProjectCard project={projects[3]} handleClick={handleClick} />
                        </div>

                        <div className="col-span-1">
                            <ProjectCard project={projects[4]} handleClick={handleClick} />
                        </div>

                        <div className="col-span-1 flex items-end">
                            <ProjectCard project={projects[5]} handleClick={handleClick} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const ProjectCard = ({ project, handleClick }) => {
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
}


