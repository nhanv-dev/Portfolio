import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { GoDotFill } from 'react-icons/go';
import { Link, useNavigate } from "react-router-dom";
import ContactBanner from "../components/ContactBanner";
import DevInfiniteScroll from "../components/InfiniteScroll/DevInfiniteScroll";
import TechInfiniteScroll from "../components/InfiniteScroll/TechInfiniteScroll";
import { useLoading } from "../components/LoadingProvider";
import PageWithPreload from "../components/PageWithPreload";
import TitleSection from "../components/TitleSection";
import { personalInfo } from "../data";
import { blurAnimation } from "../utils/animations";

const slideDownVariants = {
    hidden: { opacity: 0, y: -100 },  // Bắt đầu từ vị trí thấp và ẩn
    visible: { opacity: 1, y: 0 }   // Khi vào viewport, di chuyển về vị trí ban đầu
};

const tags = ['Web Development', 'UI/UX', 'Responsive Design', 'Database Design', 'Problem Solving'];

// const favoriteStack = [
//     { title: 'Javascript', subTitle: 'Frontend Development', percent: 95, description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla facere, doloribus accusamus mollitia expedita, officiis unde dolores ab nostrum harum saepe sint quod amet asperiores quasi qui, vel ad aliquam.' },
//     { title: '.NET', subTitle: 'Frontend Development', percent: 95, description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla facere, doloribus accusamus mollitia expedita, officiis unde dolores ab nostrum harum saepe sint quod amet asperiores quasi qui, vel ad aliquam.' },
//     { title: 'Java', subTitle: 'Frontend Development', percent: 95, description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla facere, doloribus accusamus mollitia expedita, officiis unde dolores ab nostrum harum saepe sint quod amet asperiores quasi qui, vel ad aliquam.' },
//     { title: 'SQL Server', subTitle: 'Frontend Development', percent: 95, description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla facere, doloribus accusamus mollitia expedita, officiis unde dolores ab nostrum harum saepe sint quod amet asperiores quasi qui, vel ad aliquam.' },
//     { title: 'React', subTitle: 'Frontend Development', percent: 95, description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla facere, doloribus accusamus mollitia expedita, officiis unde dolores ab nostrum harum saepe sint quod amet asperiores quasi qui, vel ad aliquam.' },
//     { title: 'Angular', subTitle: 'Frontend Development', percent: 95, description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla facere, doloribus accusamus mollitia expedita, officiis unde dolores ab nostrum harum saepe sint quod amet asperiores quasi qui, vel ad aliquam.' },
// ];

export default function AboutPage() {

    return (
        <PageWithPreload texts={["Hi, I'm Tran Thanh Nhan", "Exploring Tech & Creativity"]}>
            <motion.div {...blurAnimation}>
                <HeroComponent />
            </motion.div>

            {/* <div className="py-6 border-t border-b border-gray-900">
                <DevInfiniteScroll list={tags} innerClassName={'!text-[1.5rem]'} innerClassNameSplit={'!text-[1rem]'} />
            </div> */}

            <ExploreAboutComponent />

            <TechInfiniteScroll />

            <ResumeComponent />

            <ExploreProjectsComponent />

            <ContactBanner />

        </PageWithPreload>
    );
}

const HeroComponent = () => {
    const { handleNavigationWithAnimation } = useLoading();
    const navigate = useNavigate();
    return (
        <section className="relative h-[calc(100vh-72px)] max-h-[1024px] flex bg-darkBg" >
            <div className="flex-1">
                <div className="h-full flex flex-col items-end justify-center p-10">
                    <div className="flex items-center justify-center">
                        <div className="text-darkText text-[18px] font-bold tracking-wider flex items-center justify-center gap-6"
                            style={{
                                writingMode: 'vertical-lr',
                                textOrientation: 'mixed',
                                transform: 'rotate(180deg)',
                            }}>
                            <a href={personalInfo.link.facebook} target="_blank" rel="noopener noreferrer" className="text-darkText text-[1.1rem] leading-relaxed font-medium">
                                Facebook
                            </a>
                            <p className="h-[30px] w-[2px] bg-darkText"></p>
                            <a href={personalInfo.link.github} target="_blank" rel="noopener noreferrer" className="text-darkText text-[1.1rem] leading-relaxed font-medium">
                                Github
                            </a>
                            <p className="h-[30px] w-[2px] bg-darkText"></p>
                            <a href={personalInfo.link.linkedin} target="_blank" rel="noopener noreferrer" className="text-darkText text-[1.1rem] leading-relaxed font-medium">
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container flex flex-col items-start justify-start h-full max-h-full">
                <div className="flex-1 flex w-full gap-10">
                    <div className="flex-1 flex items-center">
                        <div>
                            <h2 className="text-[1.1rem] font-bold mb-4 flex items-center gap-2">
                                <span className="w-[50px] h-[2px] bg-primary rounded-full relative">
                                    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[16px] h-[16px] bg-primary rounded-full">
                                        <span className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75 scale-150"></span>
                                    </div>
                                </span>
                                <span>Hi there, I'm <span className="text-primary">Tran Thanh Nhan</span></span>
                            </h2>
                            <div className="flex items-center gap-10 mb-6">
                                <h1 className="text-[3rem] leading-[1.3] font-bold">
                                    Step Inside to <span className="text-secondary">Discover</span> <br />
                                    the <span className="text-primary">My World</span>
                                </h1>
                            </div>
                            <p className="text-[1.1rem] leading-[1.5] font-medium text-gray-300 mb-9">
                                I am a software developer who turns ideas into reality through clean code and creative solutions.
                                With a strong foundation in full-stack development, I focus on building performant, user-centric applications.
                            </p>
                            <div className="flex items-center">
                                <div className="flex-1 h-[2px] bg-gray-300"></div>
                                <Link to={'/contact'} onClick={(e) => {
                                    e.preventDefault();
                                    handleNavigationWithAnimation('/contact', navigate);
                                }} className="text-[1rem] leading-[1.75] font-semibold text-gray-300 border-2 border-gray-300 rounded-full px-4 py-1 flex items-center gap-4 max-w-max">
                                    Get Started
                                    <FaArrowRightLong />
                                </Link>
                                <div className="w-[5%] h-[2px] bg-gray-300"></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[40%] relative">
                        <div
                            className="absolute inset-0 w-full h-full bg-center bg-cover"
                            style={{ backgroundImage: 'url(https://i.pinimg.com/736x/3e/02/d5/3e02d5f343be14713c463544fd2a747d.jpg)' }}
                        />
                    </div>
                </div>
                <div className="w-full overflow-hidden min-h-[80px] h-[80px] flex items-center justify-center">
                    <DevInfiniteScroll list={tags} innerClassName={'!text-[1rem]'} innerClassNameSplit={'!text-[1rem]'} />
                </div>
                <div className="flex w-full h-[35%] gap-10">
                    <div className="w-[50%] relative">
                        <div className="absolute inset-0 w-full h-full bg-center bg-cover"
                            style={{ backgroundImage: 'url(https://i.pinimg.com/736x/3e/02/d5/3e02d5f343be14713c463544fd2a747d.jpg)' }}
                        />
                    </div>
                    <div className="flex-1 h-full bg-[#60725A] p-10">
                        <h2 className="text-[1.05rem] font-bold mb-4">
                            A passionate developer shaping digital experiences.
                        </h2>
                        <p className="text-[1.1rem] leading-[1.75] font-medium text-gray-300 mb-8">
                            Beyond coding, I constantly explore new technologies and design trends to refine my craft.
                            I believe that great software not only functions perfectly but also tells a meaningful story through its experience.
                        </p>
                        <div className="flex items-center gap-5">
                            <div className='flex items-center justify-start gap-3 font-bold text-[1rem]'>
                                <p className='relative'>
                                    What I Do
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-lightBg"></span>
                                </p>
                            </div>
                            <GoDotFill />
                            <div className='flex items-center justify-start gap-3 font-bold text-[1rem]'>
                                <p className='relative'>
                                    Tech Stack
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-lightBg"></span>
                                </p>
                            </div>
                            <GoDotFill />
                            <div className='flex items-center justify-start gap-3 font-bold text-[1rem]'>

                                <p className='relative'>
                                    Resume
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-lightBg"></span>
                                </p>
                            </div>
                            <GoDotFill />
                            <div className='flex items-center justify-start gap-3 font-bold text-[1rem]'>
                                <p className='relative'>
                                    Projects
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-lightBg"></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1">
                <div className="h-full flex flex-col items-start justify-center px-10 py-20">
                    <div className="flex items-center justify-center">
                        <div className="text-[1.1rem] leading-relaxed font-medium flex items-center justify-center gap-6"
                            style={{
                                writingMode: 'vertical-lr',
                                textOrientation: 'mixed',
                                transform: 'rotate(0)',
                            }}>
                            <span>Designed & Coded by Nhan</span>
                            <div className="w-[3px] h-[30px] bg-darkText"></div>
                            <span>2025</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const ExploreAboutComponent = () => {

    return (
        <div className="w-full mt-[120px] border-t border-gray-900">
            <section className="py-[120px] bg-darkBg text-darkText">
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
                            <div className="w-[520px] h-[380px] bg-center bg-cover"
                                style={{
                                    backgroundImage: `url(https://themexriver.com/wp/agenriver-demo/freelancer/wp-content/uploads/sites/16/2025/03/pro23.webp)`
                                }}
                            ></div>
                            <div className="absolute left-0 right-0 top-0 bottom-0 bg-black/0"></div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: .8, ease: 'easeOut', }}
                            className="relative w-full pr-20">
                            <div className="w-full h-[50vh] bg-top bg-cover"
                                style={{
                                    backgroundImage: `url(https://themexriver.com/wp/agenriver-demo/freelancer/wp-content/uploads/sites/16/2025/03/pro24.webp)`
                                }}
                            ></div>
                            <div className="absolute left-0 right-0 top-0 bottom-0 bg-black/0"></div>
                        </motion.div>
                    </div>
                </div>
            </section>
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
                            variants={slideDownVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: .8, ease: 'easeOut', delay: 0 }}
                        >
                            <div className='relative w-full h-full'>
                                <div className='absolute top-0 right-0 font-semibold lg:text-[45px] text-stroke !text-[#1a1a1a] font-kanit'>
                                    01
                                </div>
                                <div className="absolute bottom-0 left-0 font-bold text-[20px] font-unbounded leading-tight">
                                    Creative <br /> Design
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="flex-1 h-[300px]">
                        <motion.div
                            className="p-8 bg-[#1a1a1a] h-[300px] rounded-xl"
                            variants={slideDownVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: .8, ease: 'easeOut', delay: 0 }}
                        >
                            <div className='relative w-full h-full'>
                                <div className='absolute top-0 right-0 font-semibold lg:text-[45px] text-stroke !text-[#1a1a1a] font-kanit'>
                                    02
                                </div>
                                <div className="absolute bottom-0 left-0 font-bold text-[20px] font-unbounded leading-tight">
                                    System <br /> Scalability
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="flex-1 relative h-[300px]">
                        <div className='relative top-[-70%] bg-[#1a1a1a] h-[300px] p-8 rounded-xl'>
                            <div className='relative w-full h-full'>
                                <div className='absolute top-0 right-0 font-semibold lg:text-[45px] text-stroke !text-[#1a1a1a] font-kanit'>
                                    03
                                </div>
                                <div className="absolute bottom-0 left-0 font-bold text-[20px] font-unbounded leading-tight">
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
                            transition={{ duration: .8, ease: 'easeOut', delay: 0 }}
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
                            variants={slideDownVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: .8, ease: 'easeOut', delay: 0 }}
                        >
                            <div className='relative w-full h-full'>
                                <div className='absolute top-0 right-0 font-semibold lg:text-[45px] text-stroke !text-[#1a1a1a] font-kanit'>
                                    04
                                </div>
                                <div className="absolute bottom-0 left-0 font-bold text-[20px] font-unbounded leading-tight">
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
                                <div className="absolute left-0 top-[50%] translate-x-[-50%] translate-y-[-50%] bg-primary w-[8px] h-[8px] rounded-full"></div>
                            </h5>
                            <div className="pl-5 pt-3 pb-5 relative text-[#bbb] text-[16px] leading-[1.6] font-[500]">
                                <p className="mb-3 tracking-[1px]">2019 - 2023</p>
                                <p>
                                    Graduated in Information Technology, specializing in web application development.
                                    Gained expertise in software development, database management, and system maintenance. Passionate about full-stack web development.
                                </p>
                                <div className="absolute left-0 bottom-[0] top-0 translate-x-[-50%] bg-gray-800 w-[1px] h-full"></div>
                            </div>
                        </motion.div>
                        <div className="h-[330px] w-full flex items-center justify-center overflow-hidden">
                            <img src={'https://i.pinimg.com/736x/7d/63/e1/7d63e100d2d24ace9de49d759c74cf8e.jpg'} alt="" className="h-full w-full object-cover object-center" />
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
                                <div className="absolute left-0 top-[50%] translate-x-[-50%] translate-y-[-50%] bg-primary w-[8px] h-[8px] rounded-full"></div>
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
                                <div className="absolute left-0 bottom-[0] top-0 translate-x-[-50%] bg-gray-800 w-[1px] h-full"></div>
                            </div>
                        </motion.div>

                        {/* GlobalChain */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
                            viewport={{ once: true, amount: 0.4 }}
                            className="pl-1"
                        >
                            <h5 className="pl-5 relative text-[1.2rem] font-bold tracking-[1px]">
                                GlobalChain
                                <div className="absolute left-0 top-[50%] translate-x-[-50%] translate-y-[-50%] bg-primary w-[8px] h-[8px] rounded-full"></div>
                            </h5>
                            <div className="pl-5 pt-3 pb-5 relative text-[#bbb] text-[16px] leading-[1.6] font-[500]">
                                <p className="mb-3 tracking-[1px]">July 2023 - September 2023</p>
                                <p className="mb-3 font-bold text-white">Role: Intern Web Developer</p>
                                <p>
                                    During my internship as a Web Developer, I contributed to building dynamic web applications, fine-tuning performance, and integrating new features, all while working with Next.js, NestJS, MongoDB, and exploring blockchain possibilities with Hyperledger Fabric.
                                </p>
                                <div className="absolute left-0 bottom-[0] top-0 translate-x-[-50%] bg-gray-800 w-[1px] h-full"></div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

