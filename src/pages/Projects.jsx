import { useState } from "react";
import FadeContent from "../components/FadeContent";
import Preloader from "../components/Preloader";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
    const [isLoaded, setIsLoaded] = useState(true);

    return (
        <>
            {!isLoaded && <Preloader texts={["Welcome", "Let's Explore"]} onLoaded={() => setIsLoaded(true)} />}
            {isLoaded && (
                <>
                    <section className="dark:bg-darkBg dark:text-white py-10">
                        <div className="container">
                            <h1 className="text-[4rem] font-bold">
                                PROFESSIONAL EXPERIENCE
                            </h1>
                            <p className="dark:text-gray-400 text-lg mt-4">
                                Professional Design Agency to provide solutions
                            </p>
                            <button className="mt-6 px-6 py-3 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white rounded-full text-sm">
                                Get Started Now
                            </button>
                        </div>
                    </section>
                    <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
                        <section id="portfolio" className="bg-[#040404]">
                            <div className="container py-[120px]">
                                <div
                                    className="px-4 py-2 bg-[#121212] w-[max-content] font-semibold text-[14px] tracking-[3px] text-[#bbb]">
                                    My Work
                                </div>
                                <div className="mb-[60px]">
                                    <h3 className="pb-6 font-bold text-[2.5rem] leading-[3.5rem] tracking-[2px] my-3">
                                        Take a look at my<br /> latest projects
                                    </h3>
                                    <div className="relative block w-full h-[2px] bg-[#ffffff14] after:w-[200px] after:h-[2px] after:bg-[white] after:left-0 after:top-0 after:absolute " />
                                </div>
                                <ProjectCard />
                            </div>
                        </section>
                    </FadeContent>
                </>
            )}
        </>
    )
}