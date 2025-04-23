import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { GoDotFill } from 'react-icons/go';
import { Link } from "react-router-dom";
import ContactBanner from "../components/ContactBanner";
import DevInfiniteScroll from "../components/InfiniteScroll/DevInfiniteScroll";
import TechInfiniteScroll from "../components/InfiniteScroll/TechInfiniteScroll";
import { useLoading } from "../components/LoadingProvider";
import PageWithPreload from "../components/PageWithPreload";
import TitleSection from "../components/TitleSection";

const slideDownVariants = {
    hidden: { opacity: 0, y: -100 },  // Bắt đầu từ vị trí thấp và ẩn
    visible: { opacity: 1, y: 0 }   // Khi vào viewport, di chuyển về vị trí ban đầu
};

const tags = ['Web Development', 'UI/UX', 'Responsive Design', 'Database Design', 'Problem Solving'];

const favoriteStack = [
    { title: 'Javascript', subTitle: 'Frontend Development', percent: 95, description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla facere, doloribus accusamus mollitia expedita, officiis unde dolores ab nostrum harum saepe sint quod amet asperiores quasi qui, vel ad aliquam.' },
    { title: '.NET', subTitle: 'Frontend Development', percent: 95, description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla facere, doloribus accusamus mollitia expedita, officiis unde dolores ab nostrum harum saepe sint quod amet asperiores quasi qui, vel ad aliquam.' },
    { title: 'Java', subTitle: 'Frontend Development', percent: 95, description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla facere, doloribus accusamus mollitia expedita, officiis unde dolores ab nostrum harum saepe sint quod amet asperiores quasi qui, vel ad aliquam.' },
    { title: 'SQL Server', subTitle: 'Frontend Development', percent: 95, description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla facere, doloribus accusamus mollitia expedita, officiis unde dolores ab nostrum harum saepe sint quod amet asperiores quasi qui, vel ad aliquam.' },
    { title: 'React', subTitle: 'Frontend Development', percent: 95, description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla facere, doloribus accusamus mollitia expedita, officiis unde dolores ab nostrum harum saepe sint quod amet asperiores quasi qui, vel ad aliquam.' },
    { title: 'Angular', subTitle: 'Frontend Development', percent: 95, description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla facere, doloribus accusamus mollitia expedita, officiis unde dolores ab nostrum harum saepe sint quod amet asperiores quasi qui, vel ad aliquam.' },
];

export default function AboutPage() {

    return (
        <PageWithPreload texts={["Hi, I'm Tran Thanh Nhan", "Exploring Tech & Creativity"]}>
            <motion.div
                initial={{ opacity: 0, filter: 'blur(20px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: '0.3' }}
            >
                <HeroComponent />
            </motion.div>

            <div className="py-6 border-t border-gray-900">
                <DevInfiniteScroll list={tags} innerClassName={'!text-[1.5rem]'} innerClassNameSplit={'!text-[1rem]'} />
            </div>
            <ExploreAboutComponent />

            <IntroduceComponent />

            <TechInfiniteScroll />

            <ExploreProjectsComponent />

            <ResumeComponent />

            <ContactBanner />

        </PageWithPreload>
    );
}

const HeroComponent = () => {

    return (
        <div className="relative h-screen flex flex-col" >
            <div className="mt-[60px] container flex-1 relative">
                <div
                    className="w-full h-full bg-center bg-cover"
                    style={{ backgroundImage: `url(https://promo-theme.com/clivo/wp-content/uploads/2020/09/img19.jpg)` }}
                ></div>
                <div className="absolute left-0 top-0 w-full h-full bg-black/50 z-0"></div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-6xl w-full mx-auto">
                    <div className="max-w-6xl w-full mx-auto">
                        <motion.div className="xl:text-[7rem] leading-none font-extrabold relative z-[2] font-unbounded max-w-5xl w-full min-w-full mb-10 text-shadow-sm">
                            Creative
                        </motion.div>
                        <motion.div className="relative xl:text-[7rem] leading-none font-extrabold z-[2] font-unbounded max-w-5xl w-full min-w-full text-center mb-10 text-shadow-sm">
                            Fullstack
                        </motion.div>
                        <motion.div
                            className="xl:text-[7rem] leading-none font-extrabold relative z-[2] font-unbounded max-w-5xl w-full min-w-full flex items-end justify-end gap-10 text-shadow-sm">
                            <div className="text-[1rem] leading-relaxed font-medium mb-2">
                                End-to-End Fullstack Development with a focus on speed, scalability, and modern web architecture.
                            </div>
                            <p>
                                Developer
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="container py-10">
                <div className="flex items-center justify-between gap-10">
                    <div className="flex items-center justify-end gap-5">
                        <Link to={'/contact'} className="font-bold py-2 px-5 rounded-full border-2 border-white flex items-center justify-center gap-5">
                            <span className="capitalize">Contact me</span>
                            <FaArrowRight className="text-[1rem]" />
                        </Link>
                    </div>
                    <div className="flex items-center justify-end gap-5">
                        <a href="https://github.com/nhanv-dev?tab=repositories" target="_blank" rel="noreferrer">
                            <FaGithub className="text-[1.5rem]" />
                        </a>
                        <a href="https://www.facebook.com/nhan.kden/" target="_blank" rel="noreferrer">
                            <FaFacebook className="text-[1.5rem]" />
                        </a>
                        <div className="cursor-not-allowed">
                            <FaInstagram className="text-[1.5rem]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ExploreAboutComponent = () => {
    const { setIsLoaded } = useLoading();

    return (
        <section className="py-[120px] bg-darkBg text-white">
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
                            <Link to={'/about'} onClick={() => setIsLoaded(false)} className='flex items-center justify-start gap-4 font-bold text-[1.1rem] min-w-[160px]'>
                                <GoDotFill />
                                <p className='relative'>
                                    About me
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white"></span>
                                </p>
                            </Link>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: .8, ease: 'easeOut', delay: 0.4 }}
                                className="flex-1 bg-[#131313]">
                                <p className="text-[1rem] leading-[1.75] font-medium text-gray-300 text-end py-6 px-10">
                                    With a focus on clean architecture and seamless user experience, I build fullstack web applications that are both scalable and maintainable.
                                    Each line of code reflects a blend of logic and design, crafted to solve real-world problems.
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
    )
}

const ExploreProjectsComponent = () => {
    const { setIsLoaded } = useLoading();

    return (
        <section className='py-[120px] bg-darkBg'>
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
                                to={'/projects'} onClick={() => setIsLoaded(false)}
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

const IntroduceComponent = () => {
    return (
        <section className="bg-darkBg border-t border-gray-900">
            <div className="container py-[120px] max-w-5xl">
                <div className="flex mb-10">
                    <div className="w-[350px]">
                        <p className="font-bold text-[1rem]">Who I Am:</p>
                    </div>
                    <div className="flex-1">
                        <p className="font-medium">
                            As a freelance UX/UI designer, I bring creativity, precision, and a
                            keen sense of user needs to every project. My goal is to blend
                            your brand’s vision with intuitive design to craft interfaces that
                            not only look great but also work flawlessly.
                        </p>
                    </div>
                </div>
                <div className="flex mb-10">
                    <div className="w-[350px]">
                        <p className="font-bold text-[1rem]">What I Do:</p>
                    </div>
                    <div className="flex-1">
                        <p className="font-medium">
                            I specialize in user research, wireframing, and high-fidelity UI
                            design to bring your product vision to life. Whether you're a
                            startup or an established business, I focus on creating
                            experiences that drive engagement and value.
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-[350px]">
                        <p className="font-bold text-[1rem]">My Approach:</p>
                    </div>
                    <div className="flex-1">
                        <p className="font-medium">
                            Design isn’t just about aesthetics; it’s about problem-solving. My
                            approach combines deep research with a creative process that
                            puts the user at the forefront, ensuring each project is both
                            functional and visually engaging.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

const ResumeComponent = () => {
    return (
        <section id="resume" className="bg-darkBg py-[120px] border-t border-gray-900">
            <div className="container">
                {/* Header */}
                <TitleSection
                    className={'mb-12'}
                    title={'My Resume'}
                    title2={'What I’ve Done'}
                    subTitle={'Build History'}
                    subTitle2={'Education & Experience'}
                    titleClassName='!text-darkBg'
                ></TitleSection>

                {/* Education & Experience */}
                <div className="flex flex-wrap">
                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.4 }}
                        className="lg:w-[50%] w-full px-[15px]"
                    >
                        <h4 className="mb-5 font-bold text-[1.5rem] tracking-[1px]">Education</h4>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            <h5 className="pl-5 relative text-[1.2rem] font-bold tracking-[1px]">
                                Nong Lam University
                                <div className="absolute left-0 top-[50%] translate-x-[-50%] translate-y-[-50%] bg-primary w-[8px] h-[8px] rounded-full"></div>
                            </h5>
                            <div className="pl-5 pt-3 pb-10 relative text-[#bbb] text-[16px] leading-[1.6] font-[500]">
                                <p className="mb-3 tracking-[1px]">2019 - 2023</p>
                                <p className="mb-6">
                                    Graduated in Information Technology, specializing in web application development.
                                    Gained expertise in software development, database management, and system maintenance. Passionate about full-stack web development.
                                </p>
                                <div className="h-[300px] w-full">
                                    <img src={'https://themexriver.com/wp/agenriver-demo/web-agency/wp-content/uploads/sites/20/2025/04/w2-img-2.webp'} alt="" className="h-full w-full object-cover" />
                                </div>
                                <div className="absolute left-0 bottom-[0] top-0 translate-x-[-50%] bg-gray-800 w-[1px] h-full"></div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Experience */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.4 }}
                        className="lg:w-[50%] w-full px-[15px]"
                    >
                        <h4 className="mb-5 font-bold text-[1.5rem] tracking-[1px]">Experience</h4>

                        {/* GSoft */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
                            viewport={{ once: true, amount: 0.4 }}
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
                        >
                            <h5 className="pl-5 relative text-[1.2rem] font-bold tracking-[1px]">
                                GlobalChain
                                <div className="absolute left-0 top-[50%] translate-x-[-50%] translate-y-[-50%] bg-primary w-[8px] h-[8px] rounded-full"></div>
                            </h5>
                            <div className="pl-5 pt-3 pb-10 relative text-[#bbb] text-[16px] leading-[1.6] font-[500]">
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

