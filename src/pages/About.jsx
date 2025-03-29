import { useState } from "react";
import About from "../components/About";
import FadeContent from "../components/FadeContent";
import Preloader from "../components/Preloader";
import TechInfiniteScroll from "../components/InfiniteScroll/TechInfiniteScroll";

export default function AboutPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <>
            {!isLoaded && <Preloader texts={["About Me", "My Journey"]} onLoaded={() => setIsLoaded(true)} />}
            {isLoaded && (
                <div>
                    <TechInfiniteScroll />
                    <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
                        <About />
                    </FadeContent>
                </div>
            )}
        </>
    )
}