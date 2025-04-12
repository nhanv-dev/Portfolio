import { Link } from 'react-router-dom';
import ContactBanner from "../components/ContactBanner";
import FadeContent from '../components/FadeContent';
import HomeSlider from '../components/HomeSlider';
import PageWithPreload from "../components/PageWithPreload";

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
                        <div className="mb-12">
                            <p className="font-bold mt-2 mb-6 uppercase text-gray-400 flex items-center gap-3">
                                <span className="w-[25px] h-[3px] bg-gray-400 block"></span>
                                Building Web Experiences That Matter
                            </p>
                            <h2 className="text-[3rem] leading-snug font-bold mb-7">
                                Fullstack Developer Turning<br /><span className="text-primary">Ideas</span> into <span className="text-primary">Impact</span>
                            </h2>
                            <p className="text-[1rem] leading-relaxed font-medium mb-9 text-gray-300">
                                With a focus on clean architecture and seamless user experience, I build fullstack web applications that are both scalable and maintainable.
                                Each line of code reflects a blend of logic and design, crafted to solve real-world problems.
                                Want to know how ideas become polished digital products?
                                Step into my world and see how it all comes together.
                            </p>
                            <Link to={'/about'} className="bg-white text-black font-bold rounded-full px-5 py-2 capitalize">
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
                            {/* <div className="flex-1 rounded-lg overflow-hidden h-[290px]">
                                <div
                                    className="bg-cover bg-center w-full h-full"
                                    style={{ backgroundImage: `url(https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}
                                ></div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


const ExploreProjectsComponent = () => {
    return (
        <div className='border-t border-gray-900'>
            <div className='py-[120px]'>
                <div className="container">
                    <div className="flex gap-5">
                        <div className="flex-1 bg-[#1a1a1a] h-[300px] p-8 rounded-xl">
                            <div className='relative w-full h-full'>
                                <div className='absolute top-0 right-0 font-bold text-[2rem]'>
                                    01
                                </div>
                                <div className="absolute bottom-0 left-0 font-bold text-[2rem]">
                                    Initial <br /> Analysis
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 bg-[#1a1a1a] h-[300px] p-8 rounded-xl">
                            <div className='relative w-full h-full'>
                                <div className='absolute top-0 right-0 font-bold text-[2rem]'>
                                    01
                                </div>
                                <div className="absolute bottom-0 left-0 font-bold text-[2rem]">
                                    Initial <br /> Analysis
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 bg-[#1a1a1a] h-[300px] p-8 rounded-xl">
                            <div className='relative w-full h-full'>
                                <div className='absolute top-0 right-0 font-bold text-[2rem]'>
                                    01
                                </div>
                                <div className="absolute bottom-0 left-0 font-bold text-[2rem]">
                                    Initial <br /> Analysis
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 bg-[#1a1a1a] h-[300px] p-8 rounded-xl">
                            <div className='relative w-full h-full'>
                                <div className='absolute top-0 right-0 font-bold text-[2rem]'>
                                    01
                                </div>
                                <div className="absolute bottom-0 left-0 font-bold text-[2rem]">
                                    Initial <br /> Analysis
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

