import { motion } from "framer-motion";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { useLoading } from "../LoadingProvider";
import { RiArrowRightUpLine } from "react-icons/ri";
import TitleSection from "../TitleSection";

const list = [
    { name: "Fullstack Developer" },
    { name: "Web Developer" },
    { name: "Fullstack Developer" },
    { name: "Web Developer" },
    { name: "Fullstack Developer" },
    { name: "Web Developer" },
    { name: "Fullstack Developer" },
    { name: "Web Developer" },
];

function ContactBanner() {
    const { setIsLoaded } = useLoading();

    return (
        <section id="contact" className='py-20 border-t border-gray-900'>
            <div className='container'>
                <div className="flex items-end justify-between gap-14">
                    <TitleSection
                        title={"Ready to"}
                        title2={"Connect"}
                        subTitle={'reach out'}
                        subTitle2={'today'}
                    ></TitleSection>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: 0 }}
                    >
                        <Link
                            to={'/contact'} onClick={() => setIsLoaded(false)}
                            className='relative p-2 hover:bg-white hover:text-black transition-all duration-700 font-kanit w-[120px] h-[120px] bg-white text-black flex items-end justify-center'>
                            <span className="text-[15px] font-bold">
                                Let's Talk
                            </span>
                            <span className="absolute right-0 top-0">
                                <RiArrowRightUpLine className="text-[56px]" />
                            </span>
                        </Link>
                    </motion.div>
                </div>
                <div className='flex items-center gap-14'>
                    <div className='min-w-[450px]'>
                        <p className="font-semibold text-[0.9rem] leading-relaxed tracking-wider uppercase font-kanit">
                            DON’T BE SHY. SAY HI TO UNLOCK CREATIVITY AND INNOVATION FOR YOUR SEAMLESS PROJECT
                        </p>

                    </div>
                    <div className='flex-1 py-10 '>
                        <div className="relative w-full overflow-hidden max-h-[400px]">
                            {/* Gradient che phủ hai bên */}
                            <div className="absolute inset-y-0 left-0 w-[24rem] bg-gradient-to-r from-darkBg to-transparent z-10"></div>
                            <div className="absolute inset-y-0 right-0 w-[24rem] bg-gradient-to-l from-darkBg to-transparent z-10"></div>

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
                                {list.map((skill, index) => (
                                    <div key={index} className="flex gap-5 items-center">
                                        <div className="inline-flex w-fit min-w-fit">
                                            <span className="text-[2.5rem] font-extrabold font-kanit">{skill.name}</span>
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
    );
}

export default ContactBanner;
