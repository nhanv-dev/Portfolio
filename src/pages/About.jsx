import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ContactBanner from "../components/ContactBanner";
import DevInfiniteScroll from "../components/InfiniteScroll/DevInfiniteScroll";
import PageWithPreload from "../components/PageWithPreload";
import TitleSection from "../components/TitleSection";

const tags = ['Web Development', 'UI/UX', 'Responsive Design', 'Database Design', 'Problem Solving'];

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

            <IntroduceComponent />

            <TechStackComponent />

            <ExploreProjectsComponent />

            <ResumeComponent />

            <ContactBanner />
            {/* 
            <TechInfiniteScroll />

       */}

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
            <div className="py-6 border-t border-gray-900">
                <DevInfiniteScroll list={tags} innerClassName={'!text-[1.5rem]'} innerClassNameSplit={'!text-[1rem]'} />
            </div>
        </div>
    )
}

const ExploreProjectsComponent = () => {
    return (
        <section className="py-20 border-t border-gray-900 bg-darkBg">
            <div className="container">
                <TitleSection
                    className={'mb-14'}
                    title={'selected'}
                    title2={'works'}
                    subTitle={'featured'}
                    subTitle2={'projects'}
                    titleClassName='!text-darkBg'
                ></TitleSection>
                <div className="flex items-start justify-start gap-10">
                    <div className="flex-1 relative">
                        <img src="https://codeefly.net/wp/zyan/wp-content/uploads/2023/10/1.jpg" alt="welcome1" className="object-cover object-center rounded-xl" />

                    </div>
                    <div className="flex-1 relative overflow-hidden">
                        <img src="https://codeefly.net/wp/zyan/wp-content/uploads/2023/10/4.jpg" alt="welcome2" className="object-cover object-center rounded-xl" />
                        <div className="absolute bottom-0 left-0">
                            <div className="bg-darkBg w-[190px] h-[190px] flex items-end justify-start rounded-tr-xl">
                                <Link to={'/projects'} className='hover:bg-white hover:text-black transition-all duration-700 font-kanit w-[150px] h-[150px] flex items-center justify-center border-[3px] border-white rounded-full font-medium uppercase text-[17px]'>
                                    Let's <br />start
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const IntroduceComponent = () => {
    return (
        <section className="bg-darkBg border-t border-gray-900">
            <div className="container py-20 max-w-5xl">
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

const TechStackComponent = () => {
    return (
        <>
            <section className="bg-darkBg border-t border-gray-900">
                <div
                    className="bg-cover bg-top relative"
                    style={{ backgroundImage: 'url(https://themexriver.com/wp/agenriver-demo/freelancer/wp-content/uploads/sites/16/2025/03/pro24.webp)' }}
                >
                    <div className="absolute left-0 top-0 w-full h-full bg-black/70"></div>
                    <div className="container py-[120px] relative z-10">
                        <TitleSection
                            className={'mb-10'}
                            title={'What I Do'}
                            title2={'MY CRAFT'}
                            subTitle={'Coding'}
                            subTitle2={'Stuff'}
                        ></TitleSection>
                        <div className="grid lg:grid-cols-3">
                            <div className="flex">
                                <div className="flex items-start gap-4">
                                    <p className="flex items-center gap-4 h-[26px]">
                                        <span className="font-bold text-[1.1rem] font-kanit text-primary">01</span>
                                        <span className="block w-[50px] h-[2px] bg-primary"></span>
                                    </p>
                                    <div className="flex flex-col gap-4">
                                        <p className="uppercase font-bold text-[0.95rem] font-kanit h-[26px]">
                                            Frontend Dev
                                        </p>
                                        <p className="font-medium text-[17px]">
                                            Creativity for us something personal.
                                        </p>
                                        <ul className="list-disc ml-5 font-semibold text-[17px]">
                                            <li className="mb-2">CMS Development</li>
                                            <li className="mb-2">Back-end Prototype</li>
                                            <li className="mb-2">Coding strategy</li>
                                            <li className="mb-2">Beta testing</li>
                                            <li className="mb-0">Page builder</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex items-start gap-4">
                                    <p className="flex items-center gap-4 h-[26px]">
                                        <span className="font-bold text-[1.1rem] font-kanit text-primary">01</span>
                                        <span className="block w-[50px] h-[2px] bg-primary"></span>
                                    </p>
                                    <div className="flex flex-col gap-4">
                                        <p className="uppercase font-bold text-[0.95rem] font-kanit h-[26px]">
                                            Frontend Dev
                                        </p>
                                        <p className="font-medium text-[17px]">
                                            Creativity for us something personal.
                                        </p>
                                        <ul className="list-disc ml-5 font-semibold text-[17px]">
                                            <li className="mb-2">CMS Development</li>
                                            <li className="mb-2">Back-end Prototype</li>
                                            <li className="mb-2">Coding strategy</li>
                                            <li className="mb-2">Beta testing</li>
                                            <li className="mb-0">Page builder</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex items-start gap-4">
                                    <p className="flex items-center gap-4 h-[26px]">
                                        <span className="font-bold text-[1.1rem] font-kanit text-primary">01</span>
                                        <span className="block w-[50px] h-[2px] bg-primary"></span>
                                    </p>
                                    <div className="flex flex-col gap-4">
                                        <p className="uppercase font-bold text-[0.95rem] font-kanit h-[26px]">
                                            Frontend Dev
                                        </p>
                                        <p className="font-medium text-[17px]">
                                            Creativity for us something personal.
                                        </p>
                                        <ul className="list-disc ml-5 font-semibold text-[17px]">
                                            <li className="mb-2">CMS Development</li>
                                            <li className="mb-2">Back-end Prototype</li>
                                            <li className="mb-2">Coding strategy</li>
                                            <li className="mb-2">Beta testing</li>
                                            <li className="mb-0">Page builder</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-darkBg border-t border-gray-900">
                <div className="container py-20">
                    <div className="flex">
                        <h2>FAVOURITE STACK</h2>
                        <div className="">
                            <div className=""></div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

const ResumeComponent = () => {
    return (
        <section id="resume" className="bg-darkBg">
            <div className="container py-[120px]">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="px-4 py-2 bg-darkBg w-[max-content] font-bold text-[14px] tracking-[2px] text-[#bbb]"
                >
                    My Resume
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="mb-[60px]"
                >
                    <h3 className="pb-6 font-bold text-[2.5rem] leading-[3.5rem] tracking-[2px] my-3">
                        Education & Experience
                    </h3>
                    <div className="relative block w-full h-[2px] bg-gray-900 after:w-[200px] after:h-[4px] after:bg-primary after:left-0 after:top-1/2 after:-translate-y-1/2 after:rounded-full rounded-full after:absolute" />
                </motion.div>

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
                                <p>
                                    Graduated in Information Technology, specializing in web application development.
                                    Gained expertise in software development, database management, and system maintenance. Passionate about full-stack web development.
                                </p>
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

