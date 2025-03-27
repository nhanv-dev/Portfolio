import FadeContent from "../components/FadeContent";
import Tabs from "../components/Tabs";

export default function ProjectsPage() {

    return (
        <div>
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
                        <Tabs />
                    </div>
                </section>
            </FadeContent>
        </div>
    )
}