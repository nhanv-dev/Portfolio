import { Link } from 'react-router-dom';
import ContactBanner from "../components/ContactBanner";
import FadeContent from '../components/FadeContent';
import PageWithPreload from "../components/PageWithPreload";
import Slider from '../components/Slider';
import { projects } from "../data";

export default function HomePage() {

    return (
        <PageWithPreload texts={["Welcome", "Let's Explore"]}>
            <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
                <Slider />
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
        <section className="">
            <div className='container py-[120px]'>
                <div className="flex gap-6 relative">
                    <div className="w-[30%] h-full">
                        <div
                            className="rounded-lg absolute left-0 w-[30%] h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1624704848173-6e3d09e13cf6?q=80&w=2628&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}
                        ></div>
                    </div>
                    <div className="flex-1">
                        <div className="mb-10">
                            <p className="font-bold mb-2 uppercase text-primary flex items-center gap-3">
                                <span className="w-[25px] h-[3px] bg-primary block"></span>
                                Building Web Experiences That Matter
                            </p>
                            <h2 className="text-[3rem] leading-tight font-bold mb-5">
                                Fullstack Developer Turning<br /><span className="text-primary">Ideas</span> into <span className="text-primary">Impact</span>
                            </h2>
                            <p className="text-[1rem] leading-relaxed font-medium mb-8">
                                With a focus on clean architecture and seamless user experience, I build fullstack web applications that are both scalable and maintainable.
                                Each line of code reflects a blend of logic and design, crafted to solve real-world problems.
                                Want to know how ideas become polished digital products?
                                Step into my world and see how it all comes together.
                            </p>
                            <Link to={'/about'} className="bg-white text-black font-bold rounded-full px-7 py-2 capitalize">
                                About me
                            </Link>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-1 rounded-lg overflow-hidden h-[290px]">
                                <div
                                    className="bg-cover bg-center w-full h-full"
                                    style={{ backgroundImage: `url(https://images.unsplash.com/photo-1699631109477-4b3e120051f7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}
                                ></div>
                            </div>
                            <div className="flex-1 rounded-lg overflow-hidden h-[290px]">
                                <div
                                    className="bg-cover bg-center w-full h-full"
                                    style={{ backgroundImage: `url(https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}
                                ></div>
                            </div>
                            <div className="flex-1 rounded-lg overflow-hidden h-[290px]">
                                <div
                                    className="bg-cover bg-center w-full h-full"
                                    style={{ backgroundImage: `url(https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}
                                ></div>
                            </div>
                            <div className="flex-1 rounded-lg overflow-hidden h-[290px]">
                                <div
                                    className="bg-cover bg-center w-full h-full"
                                    style={{ backgroundImage: `url(https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}
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
    return (
        <div className='w-full mx-auto border-t border-gray-900'>
            <div className='px-10'>
                {projects[0].card.title}
            </div>
        </div>
    )
}

