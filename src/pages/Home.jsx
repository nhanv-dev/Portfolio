import { motion } from 'framer-motion';
import { GoDotFill } from 'react-icons/go';
import { Link } from 'react-router-dom';
import ContactBanner from "../components/ContactBanner";
import HomeSlider from '../components/HomeSlider';
import DevInfiniteScroll from '../components/InfiniteScroll/DevInfiniteScroll';
import { useLoading } from '../components/LoadingProvider';
import PageWithPreload from "../components/PageWithPreload";
import TitleSection from '../components/TitleSection';

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

    return (
        <section className="bg-darkBg">
            <div className='container py-20'>
                <div className="relative">
                    <div className={`text-center md:text-left mb-10`}>
                        <motion.h2
                            className="text-6xl md:text-7xl font-extrabold font-unbounded text-stroke text-black uppercase"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: .8, ease: 'easeOut', delay: 0 }}
                            style={{ WebkitTextStrokeWidth: '3px' }}
                        >
                            What I Do
                        </motion.h2>
                        <br />
                        <div className="flex items-end ">
                            <motion.h2
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: .8, ease: 'easeOut', delay: 0.2 }}
                                className='text-6xl md:text-7xl font-extrabold font-unbounded text-[#AAAAAA] uppercase'
                            >
                                MY CRAFT
                            </motion.h2>
                            <div className="flex flex-col leading-tight md:ml-4 text-white">
                                <motion.span
                                    className="text-2xl font-extrabold uppercase mb-1.5"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: .8, ease: 'easeOut', delay: 0.5 }}
                                >
                                    Coding
                                </motion.span>
                                <motion.span
                                    className="text-2xl font-extrabold uppercase"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: .8, ease: 'easeOut', delay: 0.7 }}
                                >
                                    Stuff
                                </motion.span>
                            </div>
                        </div>
                    </div>
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
                                viewport={{ once: true, amount: 0.5 }}
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
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: .8, ease: 'easeOut', }}
                        className="absolute right-0 top-0 z-10">
                        <div className="w-[520px] h-[380px] bg-center bg-cover"
                            style={{
                                backgroundImage: `url(https://themexriver.com/wp/agenriver-demo/freelancer/wp-content/uploads/sites/16/2025/03/pro23.webp)`
                            }}
                        ></div>
                        <div className="absolute left-0 right-0 top-0 bottom-0 bg-black/40"></div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: .8, ease: 'easeOut', }}
                        className="relative w-full pr-20">
                        <div className="w-full h-[50vh] bg-top bg-cover"
                            style={{
                                backgroundImage: `url(https://themexriver.com/wp/agenriver-demo/freelancer/wp-content/uploads/sites/16/2025/03/pro24.webp)`
                            }}
                        ></div>
                        <div className="absolute left-0 right-0 top-0 bottom-0 bg-black/40"></div>
                    </motion.div>
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
