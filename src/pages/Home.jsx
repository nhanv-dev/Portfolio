import { Link } from 'react-router-dom';
import ContactBanner from "../components/ContactBanner";
import FadeContent from '../components/FadeContent';
import HomeSlider from '../components/HomeSlider';
import PageWithPreload from "../components/PageWithPreload";
import TitleSection from '../components/TitleSection';
import { useLoading } from '../components/LoadingProvider';

export default function HomePage() {

    return (
        <PageWithPreload texts={["Welcome", "Let's Explore"]}>
            <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
                <HomeSlider />
            </FadeContent>
            <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
                <ExploreAboutComponent />
            </FadeContent>
            <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
                <ExploreProjectsComponent />
            </FadeContent>
            <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
                <ContactBanner />
            </FadeContent>
        </PageWithPreload>
    )
}

const ExploreAboutComponent = () => {
    const { setIsLoaded } = useLoading();

    return (
        <section>
            <div className='container py-[120px]'>
                <div className="flex gap-7 relative">
                    <div className="w-[34%] h-full">
                        <div
                            className="rounded-lg absolute left-0 w-[34%] h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1538064038510-939dac38102d?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}
                        ></div>
                    </div>
                    <div className="flex-1">
                        <div className="mb-[34px]">
                            <p className="font-semibold text-[0.9rem] mt-2 mb-[16px] uppercase text-gray-400 font-unbounded flex items-center gap-3">
                                <span className="w-[25px] h-[3px] bg-gray-400 block"></span>
                                Building Web Experiences That Matter
                            </p>
                            <h2 className="text-[2.7rem] leading-snug font-semibold mb-[14px] font-unbounded">
                                Fullstack Developer <br />Turning <span className="text-primary">Ideas</span> into <span className="text-primary">Impact</span>
                            </h2>
                            <p className="text-[1rem] leading-relaxed font-medium mb-[28px] text-gray-300">
                                With a focus on clean architecture and seamless user experience, I build fullstack web applications that are both scalable and maintainable.
                                Each line of code reflects a blend of logic and design, crafted to solve real-world problems.
                                Want to know how ideas become polished digital products?
                                Step into my world and see how it all comes together.
                            </p>
                            <Link to={'/about'} onClick={() => setIsLoaded(false)} className="bg-white text-black font-bold rounded-full px-5 py-2 capitalize">
                                About me
                            </Link>
                        </div>
                        <div className="flex gap-5">
                            <div className="flex-1 rounded-lg overflow-hidden h-[300px]">
                                <div
                                    className="bg-cover bg-center w-full h-full"
                                    style={{ backgroundImage: `url(https://images.unsplash.com/photo-1651760937033-8ccab2727cef?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}
                                ></div>
                            </div>
                            <div className="flex-1 rounded-lg overflow-hidden h-[300px]">
                                <div
                                    className="bg-cover bg-center w-full h-full"
                                    style={{ backgroundImage: `url(https://images.unsplash.com/photo-1696960741206-63a41bb798ad?q=80&w=2433&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}
                                ></div>
                            </div>
                            <div className="flex-1 rounded-lg overflow-hidden h-[300px]">
                                <div
                                    className="bg-cover bg-center w-full h-full"
                                    style={{ backgroundImage: `url(https://images.unsplash.com/photo-1639749601642-8d30474f249f?q=80&w=2536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}
                                ></div>
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
        <div className='border-t border-gray-900'>
            <div className='py-[120px]'>
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
                            <div className="p-8 bg-[#1a1a1a] h-[300px] rounded-xl">
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
                            </div>
                        </div>
                        <div className="flex-1 h-[300px]">
                            <div className="p-8 bg-[#1a1a1a] h-[300px] rounded-xl">
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
                            </div>
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
                            <div className='absolute bottom-0 left-1/2 -translate-x-1/2'>
                                <Link to={'/projects'} onClick={() => setIsLoaded(false)} className='hover:bg-white hover:text-black transition-all duration-700 font-unbounded w-[150px] h-[150px] flex items-center justify-center border-[3px] border-white rounded-full font-medium uppercase text-[17px]'>
                                    Let's <br />start
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 h-[300px]">
                            <div className="p-8 bg-[#1a1a1a] h-[300px] rounded-xl">
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
                            </div>
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
            </div>
        </div>
    )
}

