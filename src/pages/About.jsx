import { useState } from "react";
import Preloader from "../components/Preloader";
import FadeContent from "../components/FadeContent";
import InfiniteScroll from "../components/InfiniteScroll";
import About from "../components/About";
import ContactBanner from "../components/Contact/ContactBanner";
import QuickLink from "../components/QuickLink";

export default function AboutPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    const links = [
        { id: "#about", title: "About" },
        { id: "#resume", title: "My Resume" },
        { id: "#portfolio", title: "Portfolio" },
        { id: "#contact", title: "Contact Me" }
    ]

    return (
        <>
            {!isLoaded && <Preloader texts={["About Me", "My Journey"]} onLoaded={() => setIsLoaded(true)} />}
            {isLoaded && (
                <div>

                    <InfiniteScroll />

                    <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
                        <About />
                    </FadeContent>


                    <ContactBanner />

                    <QuickLink links={links} />
                </div>
            )}
        </>
    )
}