import { Link } from 'react-router-dom';
import ContactBanner from "../components/ContactBanner";
import HomeSlider from '../components/HomeSlider';
import PageWithPreload from "../components/PageWithPreload";
import TitleSection from '../components/TitleSection';
import { useLoading } from '../components/LoadingProvider';
import { motion } from 'framer-motion';
import DevInfiniteScroll from '../components/InfiniteScroll/DevInfiniteScroll';
import { useEffect, useRef, useState } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { RiArrowRightUpLine } from "react-icons/ri";

const slideDownVariants = {
    hidden: { opacity: 0, y: -100 },  // Bắt đầu từ vị trí thấp và ẩn
    visible: { opacity: 1, y: 0 }   // Khi vào viewport, di chuyển về vị trí ban đầu
};

const list = [
    { name: "Fullstack Developer" },
    { name: "Fullstack Developer" },
    { name: "Git Management" },
    { name: "Source Code Management" },
];

export default function HomePage() {

    return (
        <PageWithPreload texts={["Welcome", "Let's Explore"]}>
            <motion.div
                initial={{ opacity: 0, filter: 'blur(20px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: '0.3' }}
            >
                <HomeSlider />
            </motion.div>

            <ExploreAboutComponent />

            <div className="py-10 border-t border-b border-gray-900">
                <DevInfiniteScroll list={list} />
            </div>

            <ExploreProjectsComponent />

            <ContactBanner />

        </PageWithPreload>
    )
}

const ExploreAboutComponent = () => {
    const { setIsLoaded } = useLoading();
    const imageRef1 = useRef(null);
    const isImageVisible1 = useIntersectionObserver(imageRef1);
    const [hasBeenVisible, setHasBeenVisible] = useState(false);

    useEffect(() => {
        if (isImageVisible1 && !hasBeenVisible) {
            setHasBeenVisible(true);
        }
    }, [isImageVisible1, hasBeenVisible]);

    return (
        <section className="bg-darkBg">
            <div className='container py-[120px]'>
                <div className="flex gap-7 relative">
                    <div className="w-[34%] h-full">
                        <div
                            className="rounded-lg absolute left-0 w-[34%] h-full bg-cover bg-center overflow-hidden"

                            style={{
                                backgroundImage: `url(https://images.unsplash.com/photo-1581355229055-93567d4d909c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`
                            }}
                        ></div>
                    </div>
                    <div className="flex-1">
                        <div className="mb-[34px]">
                            <p className="font-semibold text-[0.825rem] mt-2 mb-[16px] uppercase text-gray-200 font-unbounded flex items-center gap-3">
                                <span className="w-[25px] h-[3px] bg-gray-200 block"></span>
                                Building Web That Resonates
                            </p>
                            <h2 className="text-[2.7rem] leading-snug font-semibold mb-[18px] font-unbounded">
                                Fullstack Developer <br />Turning <span className="text-primary">Ideas</span> into <span className="text-primary">Impact</span>
                            </h2>
                            <p className="text-[1rem] leading-relaxed font-medium mb-[32px] text-gray-200">
                                With a focus on clean architecture and seamless user experience, I build fullstack web applications that are both scalable and maintainable.
                                <br />
                                Each line of code reflects a blend of logic and design, crafted to solve real-world problems.
                                <br />
                                Want to know how ideas become polished digital products ?
                                Step into my world and see how it all comes together.
                            </p>
                            {/* border-2 border-white */}
                            <Link to={'/about'} onClick={() => setIsLoaded(false)} className="flex items-center">
                                <span className='bg-gray-800 text-white text-[0.95rem] font-bold rounded-full px-7 h-[42px] flex items-center justify-center capitalize'>
                                    Explore My World
                                </span>
                                <span className='w-[42px] h-[42px] flex items-center justify-center bg-gray-800 rounded-full relative -translate-x-[8px]'>
                                    <RiArrowRightUpLine className='text-[1.3rem]' />
                                </span>
                            </Link>
                        </div>
                        <div className="flex gap-5" ref={imageRef1}>
                            <div className="flex-1 rounded-lg overflow-hidden h-[300px]">
                                <div className={`flex-1 rounded-lg overflow-hidden h-[300px] duration-700 ease-out ${hasBeenVisible ? 'translate-y-[0px] opacity-100' : 'translate-y-[100px] opacity-0'}`}                            >
                                    <img
                                        src="https://images.unsplash.com/photo-1553008803-c0282c9ef38d?q=80&w=1600&auto=format&fit=crop"
                                        alt="Project background 1"
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                            </div>
                            <div className="flex-1 rounded-lg overflow-hidden h-[300px]">
                                <div className={`flex-1 rounded-lg overflow-hidden h-[300px] duration-700 delay-300 ease-out ${hasBeenVisible ? 'translate-y-[0px] opacity-100' : 'translate-y-[100px] opacity-0'}`}                            >
                                    <img
                                        src="https://images.unsplash.com/photo-1553008803-c0282c9ef38d?q=80&w=1600&auto=format&fit=crop"
                                        alt="Project background 2"
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                            </div>

                            <div className="flex-1 rounded-lg overflow-hidden h-[300px]">
                                <div className={`flex-1 rounded-lg overflow-hidden h-[300px] duration-700 delay-[600ms] ease-out ${hasBeenVisible ? 'translate-y-[0px] opacity-100' : 'translate-y-[100px] opacity-0'}`}                            >
                                    <img
                                        src="https://images.unsplash.com/photo-1553008803-c0282c9ef38d?q=80&w=1600&auto=format&fit=crop"
                                        alt="Project background 3"
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const ExploreProjectsComponent = () => {
    const { setIsLoaded } = useLoading();

    return (
        <section className='py-[120px]'>
            <div className="container">
                <TitleSection
                    className={'mb-14'}
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
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: .8, ease: 'easeOut', delay: 0 }}
                        >
                            <div className='relative w-full h-full'>
                                <div className='absolute top-0 right-0 font-semibold lg:text-[45px] font-unbounded text-stroke text-[#1a1a1a]'
                                    style={{ WebkitTextStrokeWidth: '3px' }}
                                >
                                    01
                                </div>
                                <div className="absolute bottom-0 left-0 font-bold text-[24px] font-unbounded leading-tight">
                                    Creative   <br /> Design
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
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: .8, ease: 'easeOut', delay: 0 }}
                        >
                            <div className='relative w-full h-full'>
                                <div className='absolute top-0 right-0 font-semibold lg:text-[45px] font-unbounded text-stroke text-[#1a1a1a]'
                                    style={{ WebkitTextStrokeWidth: '3px' }}
                                >
                                    02
                                </div>
                                <div className="absolute bottom-0 left-0 font-bold text-[24px] font-unbounded leading-tight">
                                    System  <br /> Scalability
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="flex-1 relative h-[300px]">
                        <div className='relative top-[-70%] bg-[#1a1a1a] h-[300px] p-8 rounded-xl'>
                            <div className='relative w-full h-full'>
                                <div className='absolute top-0 right-0 font-semibold lg:text-[45px] font-unbounded text-stroke text-[#1a1a1a]'
                                    style={{ WebkitTextStrokeWidth: '3px' }}
                                >
                                    03
                                </div>
                                <div className="absolute bottom-0 left-0 font-bold text-[24px] font-unbounded leading-tight">
                                    Tech   <br /> Innovation
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
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: .8, ease: 'easeOut', delay: 0 }}
                        >
                            <Link
                                to={'/projects'} onClick={() => setIsLoaded(false)}
                                className='hover:bg-white hover:text-black transition-all duration-700 font-unbounded w-[150px] h-[150px] flex items-center justify-center border-[3px] border-white rounded-full font-medium uppercase text-[17px]'>
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
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: .8, ease: 'easeOut', delay: 0 }}
                        >
                            <div className='relative w-full h-full'>
                                <div className='absolute top-0 right-0 font-semibold lg:text-[45px] font-unbounded text-stroke text-[#1a1a1a]'
                                    style={{ WebkitTextStrokeWidth: '3px' }}
                                >
                                    04
                                </div>
                                <div className="absolute bottom-0 left-0 font-bold text-[24px] font-unbounded leading-tight">
                                    Optimal   <br /> Performance
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
