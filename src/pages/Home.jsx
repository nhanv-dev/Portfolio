import About from '../components/About';
import ContactBanner from '../components/Contact/ContactBanner';
import FadeContent from '../components/FadeContent';
import InfiniteScroll from '../components/InfiniteScroll';
import QuickLink from '../components/QuickLink';
import Resume from '../components/Resume';
import Slider from '../components/Slider';

export default function HomePage() {
    const links = [
        { id: "#about", title: "About" },
        { id: "#resume", title: "My Resume" },
        { id: "#portfolio", title: "Portfolio" },
        { id: "#contact", title: "Contact Me" }
    ]

    return (
        <div>
            <Slider />

            <InfiniteScroll></InfiniteScroll>

            <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
                <About />
            </FadeContent>

            <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
                <Resume />
            </FadeContent>

            <ContactBanner />

            <QuickLink links={links} />
        </div>
    )
}