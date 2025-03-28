import { useState } from 'react';
import About from '../components/About';
import ContactBanner from '../components/Contact/ContactBanner';
import FadeContent from '../components/FadeContent';
import InfiniteScroll from '../components/InfiniteScroll';
import Resume from '../components/Resume';
import Slider from '../components/Slider';
import Preloader from '../components/Preloader';
import QuickLink from '../components/QuickLink';

export default function HomePage() {
    const [isLoaded, setIsLoaded] = useState(false);

    const links = [
        { id: "#about", title: "About" },
        { id: "#resume", title: "My Resume" },
        { id: "#contact", title: "Contact Me" }
    ]

    return (
        <>
            {!isLoaded && <Preloader texts={["Welcome", "Let's Explore"]} onLoaded={() => setIsLoaded(true)} />}
            {isLoaded && (
                <div>
                    <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
                        <Slider />
                    </FadeContent>

                    <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
                        <InfiniteScroll />
                    </FadeContent>

                    <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
                        <About />
                    </FadeContent>

                    <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
                        <Resume />
                    </FadeContent>

                    <ContactBanner />

                    <QuickLink links={links} />
                </div>
            )}
        </>
    )
}