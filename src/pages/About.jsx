import { motion } from "framer-motion";
import { useRef } from "react";
import { FaAsterisk, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { RiArrowRightUpLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import CircularText from "../components/CircularText";
import ContactBanner from "../components/ContactBanner";
import TechInfiniteScroll from "../components/InfiniteScroll/TechInfiniteScroll";
import PageWithPreload from "../components/PageWithPreload";

const tags = ['Web Development', 'UI/UX', 'Responsive Design', 'Database Design', 'Problem Solving'];

export default function AboutPage() {

    return (
        <PageWithPreload texts={["Welcome", "Let's Explore"]}>

            <HeroComponent />

            <IntroduceComponent />

            <TechInfiniteScroll />

            <ResumeComponent />

            <ContactBanner />

        </PageWithPreload>
    );
}

const HeroComponent = () => {
    const circularTextRef = useRef();

    return (
        <div className="relative h-screen w-full bg-black">
            <div className="absolute left-0 top-0 w-full pt-20 h-full">
                <div className="container h-full relative">
                    <div className="grid grid-cols-3 gap-4 h-full relative">
                        <div
                            className="w-full h-[40%] bg-center bg-no-repeat bg-cover"
                            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1651760937033-8ccab2727cef?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}
                        ></div>
                        <div
                            className="w-full h-[55%] bg-center bg-no-repeat bg-cover"
                            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1696960741206-63a41bb798ad?q=80&w=2433&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}
                        ></div>
                        <div
                            className="w-full h-[75%] bg-center bg-no-repeat bg-cover"
                            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1639749601642-8d30474f249f?q=80&w=2536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}
                        ></div>
                    </div>

                    <div className="absolute left-0 lg:top-[54%] w-full">
                        <div className="container">
                            <p className="relative -top-5 flex items-center jus font-bold text-[1.4rem] gap-3">
                                <span className="w-[20px] h-[3px] bg-white block"></span>
                                Hi, I'm Tran Thanh Nhan
                            </p>
                            <div className="font-extrabold lg:text-[5rem] flex items-center">
                                <span className="mr-8 relative top-[6px]">
                                    <FaAsterisk className="animate-[spin_20s_linear_infinite] text-[4.25rem]" />
                                </span>

                                <h1 className="relative z-[1]">
                                    <span className="relative z-[2] font-unbounded">Fullstack Developer</span>
                                    <span className="z-[1] absolute top-[75px] left-[4px] w-full opacity-40 text-gray-500 translate-y-2 scale-y-[-1] italic">
                                        Fullstack Developer
                                    </span>
                                </h1>
                            </div>
                            <div className="relative z-[2] mt-[40px]">
                                <div className="flex items-center justify-start gap-3 flex-wrap">
                                    {tags.map((value, index) => (
                                        <p key={index} className="py-1 px-2.5 text-white text-[0.95rem] font-bold border-2 border-white">
                                            {value}
                                        </p>
                                    ))}


                                    <Link to={'/contact'} tabIndex={-1} className="z-[30] absolute right-[0] bottom-0 p-1 bg-black rounded-full">
                                        <CircularText
                                            ref={circularTextRef}
                                            text="LETS TALK . LETS TALK . LETS TALK . "
                                            onHover="speedUp"
                                            spinDuration={20}
                                            className="w-[140px] h-[140px]"
                                            innerClassName="text-white"
                                        >
                                        </CircularText>
                                        <div
                                            onMouseEnter={() => circularTextRef.current?.handleHoverStart()}
                                            onMouseLeave={() => circularTextRef.current?.handleHoverEnd()}
                                            className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] bg-[#111111] border-2 border-[#2b2a2a] rounded-full flex items-center justify-center">
                                            <RiArrowRightUpLine className="text-gray-300" size={30} />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute left-1/2 bottom-6 -translate-x-1/2 z-10 container">
                <div className="flex items-center justify-center">
                    <button type="button" className="flex items-center justify-center gap-2 py-2 px-5 uppercase bg-gray-900 rounded-full text-[.775rem] font-bold tracking-widest">
                        <span className="">Scroll down</span>
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
    )
}

const IntroduceComponent = () => {
    return (
        <section id="about" className="transition-theme bg-lightBg dark:bg-darkBg border-t border-gray-900">
            <div className="container py-[120px]">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-lightBg2 dark:bg-darkBg2 w-[max-content] font-bold text-[14px] tracking-[2px] text-[#bbb]"
                >
                    Hello
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mb-[60px]"
                >
                    <h3 className="pb-6 font-bold text-[2.5rem] leading-[3.5rem] tracking-[2px] my-3">
                        About Me
                    </h3>
                    <div className="relative block w-full h-[2px] bg-gray-900 after:w-[200px] after:h-[4px] after:bg-primary after:left-0 after:top-1/2 after:-translate-y-1/2 after:rounded-full rounded-full after:absolute" />
                </motion.div>

                {/* Nội dung */}
                <div className="flex flex-row flex-wrap">
                    <div className="basis-full md:basis-1/2 md:pr-10 mb-10">
                        <h5 className="text-primary font-bold text-[1.3rem]">A little bit about myself</h5>
                        <div className="py-5 my-5 border-b-2 border-t-2 border-borderLight font-semibold text-[14px] tracking-[.8px] leading-[24px] text-lightText dark:text-darkText">
                            <p className="mb-3">
                                I’m Trần Thanh Nhân, a front-end developer and a java developer. Now, I am studying at the NongLam University and my major is information technology.
                            </p>
                            <p className="mb-3">
                                I learned about <span className="text-primary font-bold">Java</span>,{' '}
                                <span className="text-primary font-bold">Javascript</span> programming languages and OOP programming in Java.
                            </p>
                        </div>

                        {/* Button */}
                        <div className="group relative w-[max-content] float-left mr-[8px]">
                            <button
                                type="submit"
                                tabIndex={-1}
                                className="flex items-center gap-4 group-hover:translate-x-[8px] group-hover:translate-y-[8px] transition-transform ease duration-[300ms] z-[2] opacity-100 relative tracking-[2px] font-bold text-[14px] text-lightText dark:text-lightText px-4 py-2 bg-lightBg2 dark:bg-lightBg"
                            >
                                <FiDownload className="text-[1.2rem] text-primary" /> Download CV
                            </button>
                            <div className="group-hover:translate-x-[-8px] group-hover:translate-y-[-8px] transition-transform ease duration-[300ms] z-[1] top-[8px] left-[8px] opacity-50 border-[1px] w-full h-full absolute"></div>
                        </div>
                    </div>
                    {/* Kỹ năng */}
                    <div className="basis-full md:basis-1/2 md:pl-10">
                        {[
                            { skill: 'Java', level: 70, color: 'from-primary to-primary' },
                            { skill: 'Spring Boot', level: 60, color: 'from-primary to-primary' },
                            { skill: 'HTML/CSS', level: 70, color: 'from-primary to-primary' },
                            { skill: 'JavaScript', level: 80, color: 'from-primary to-primary' },
                            { skill: 'React JS', level: 60, color: 'from-primary to-primary' },
                            { skill: 'Angular', level: 25, color: 'from-primary to-primary' },
                            { skill: 'Node JS', level: 55, color: 'from-primary to-primary' },
                        ].map(({ skill, level, color }) => (
                            <div key={skill} className="mb-7">
                                <h5 className="font-bold text-[0.9rem] tracking-[.5px] mb-3 text-lightText dark:text-darkText">
                                    {skill}
                                </h5>
                                <div className="relative h-[4px] w-full flex items-center">
                                    {/* Background bar */}
                                    <div className="w-full h-[2px] rounded-full bg-[rgba(255,255,255,.2)]"></div>

                                    {/* Progress bar with gradient */}
                                    <div
                                        className={`absolute left-0 top-0 bottom-0 rounded-full bg-gradient-to-r ${color}`}
                                        style={{ width: `${level}%` }}
                                    ></div>

                                    {/* Percentage label */}
                                    <p
                                        className="absolute bottom-[100%] translate-x-[-50%] mb-2 font-bold text-[.8rem] text-lightText dark:text-darkText"
                                        style={{ left: `${level}%` }}
                                    >
                                        {level}%
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

const ResumeComponent = () => {
    return (
        <section id="resume" className="bg-lightBg dark:bg-darkBg">
            <div className="container py-[120px]">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-lightBg2 dark:bg-darkBg2 w-[max-content] font-bold text-[14px] tracking-[2px] text-[#bbb]"
                >
                    My Resume
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                    viewport={{ once: true }}
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
                        viewport={{ once: true }}
                        className="lg:w-[50%] w-full px-[15px]"
                    >
                        <h4 className="mb-5 font-bold text-[1.5rem] tracking-[1px]">Education</h4>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
                            viewport={{ once: true }}
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
                        viewport={{ once: true }}
                        className="lg:w-[50%] w-full px-[15px]"
                    >
                        <h4 className="mb-5 font-bold text-[1.5rem] tracking-[1px]">Experience</h4>

                        {/* GSoft */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
                            viewport={{ once: true }}
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
                            viewport={{ once: true }}
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

