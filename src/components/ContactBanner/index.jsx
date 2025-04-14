import { motion } from "framer-motion";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { useLoading } from "../LoadingProvider";
import { RiArrowRightUpLine } from "react-icons/ri";

const list = [
    { name: "Fullstack Developer" },
    { name: "Git Management" },
    { name: "Source Code Management" },
];

function ContactBanner() {
    const { setIsLoaded } = useLoading();

    return (
        <div>
            <BackgroundNoFeat />
            <section id="contact" className='py-20 border-t border-gray-900'>
                <div className='container'>
                    <div className="flex items-end justify-between gap-14">
                        <div className={`text-center md:text-left`}>
                            <motion.h2
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: .8, ease: 'easeOut', delay: 0 }}
                                className="text-6xl md:text-7xl font-extrabold font-unbounded text-stroke text-darkBg uppercase"
                                style={{ WebkitTextStrokeWidth: '3px' }}
                            >
                                Let's
                            </motion.h2>
                            <div className="flex items-end">
                                <motion.h2
                                    initial={{ opacity: 0, x: -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: .8, ease: 'easeOut', delay: 0.2 }}
                                    className='text-6xl md:text-7xl font-extrabold font-unbounded text-[#AAAAAA] uppercase'>
                                    Talk
                                </motion.h2>
                                <div className="flex flex-col leading-tight md:ml-4 text-white">
                                    <motion.span
                                        className="text-2xl font-extrabold uppercase mb-1.5"
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ duration: .8, ease: 'easeOut', delay: 0.5 }}
                                    >
                                        smart
                                    </motion.span>
                                    <motion.span
                                        className="text-2xl font-extrabold uppercase"
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ duration: .8, ease: 'easeOut', delay: 0.7 }}
                                    >
                                        ideas
                                    </motion.span>
                                </div>
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: .8, ease: 'easeOut', delay: 0 }}
                        >
                            <Link
                                to={'/contact'} onClick={() => setIsLoaded(false)}
                                className='relative p-2.5 hover:bg-white hover:text-black transition-all duration-700 font-unbounded w-[124px] h-[124px] border-[3px] border-white flex items-end justify-center'>
                                <span className="text-[14px] font-bold">
                                    Read more
                                </span>
                                <span className="absolute right-0 top-0">
                                    <RiArrowRightUpLine className="text-[46px]" />
                                </span>
                            </Link>
                        </motion.div>
                    </div>
                    <div className='flex items-center gap-14'>
                        <div className='min-w-[450px]'>
                            <p className="font-semibold text-[0.9rem] leading-relaxed tracking-wide uppercase font-unbounded">
                                DON’T BE SHY. SAY HI TO UNLOCK CREATIVITY AND INNOVATION FOR YOUR SEAMLESS PROJECT
                            </p>

                        </div>
                        <div className='flex-1 py-10 '>
                            <div className="relative w-full overflow-hidden max-h-[400px]">
                                {/* Gradient che phủ hai bên */}
                                <div className="absolute inset-y-0 left-0 w-[24rem] bg-gradient-to-r dark:from-darkBg to-transparent z-10"></div>
                                <div className="absolute inset-y-0 right-0 w-[24rem] bg-gradient-to-l dark:from-darkBg to-transparent z-10"></div>

                                {/* Thanh scroll animation */}
                                <motion.div
                                    className="flex gap-5 w-max items-center"
                                    animate={{ x: ["0%", "-50%"] }}
                                    transition={{
                                        repeat: Infinity,
                                        ease: "linear",
                                        duration: 80,
                                    }}
                                >
                                    {[...list, ...list, ...list, ...list].map((skill, index) => (
                                        <div key={index} className="flex gap-5 items-center">
                                            <div className="inline-flex w-fit min-w-fit">
                                                <span className="text-[2.5rem] font-extrabold font-unbounded">{skill.name}</span>
                                            </div>
                                            <span className="inline-flex text-[2rem]">
                                                <GoDotFill />
                                            </span>
                                        </div>
                                    ))}
                                </motion.div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ContactBanner;

const BackgroundNoFeat = () => {
    return (
        <section className="relative h-[300px] w-full border-t boder-b border-gray-900">
            <motion.div
                className="w-full h-full bg-center bg-cover bg-fixed"
                style={{ backgroundImage: `url(https://images.unsplash.com/photo-1741851373441-88b6f673d655?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}
            ></motion.div>
            <motion.div
                className="absolute left-0 top-0 w-full h-full bg-black/50"
                initial={{ backdropFilter: 'blur(20px)' }}
                whileInView={{ backdropFilter: 'blur(0px)' }}
                viewport={{ once: true, amount: 1 }}
                transition={{ duration: 1.6, ease: 'easeOut', delay: 0 }}
            ></motion.div>
        </section>
    )
}
