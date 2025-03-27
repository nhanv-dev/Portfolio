import { useReducer, useEffect } from 'react';
import Layout from '../components/Layout'
import QuickLink from '../components/QuickLink'
import scrollbarReducer, { initialState } from '../components/scrollbarReducer'
import About from '../components/About'
import Resume from '../components/Resume'
import Tabs from '../components/Tabs'
import Slider from '../components/Slider'
import ContactBanner from '../components/Contact/ContactBanner'

export default function HomePage() {
    const links = [
        { id: "#about", title: "About" },
        { id: "#resume", title: "My Resume" },
        { id: "#portfolio", title: "Portfolio" },
        { id: "#contact", title: "Contact Me" }
    ]
    const [scrollbar, dispatch] = useReducer(scrollbarReducer, initialState)

    useEffect(() => {
        dispatch({ type: 'INIT', container: document.querySelector('#main-content'), scrollbar: 'scrollbar' });
        dispatch({ type: 'INIT', container: document.querySelector('#contact-fixed'), scrollbar: 'contactFixed' });
    }, [])

    return (
        <Layout title="Home" scrollbar={scrollbar}>
            <Slider scrollbar={scrollbar} />
            <About />
            <Resume />
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
                        <div
                            className="relative block w-full h-[2px] bg-[#ffffff14] after:w-[200px] after:h-[2px] after:bg-[white] after:left-0 after:top-0 after:absolute " />
                    </div>
                    <Tabs scrollbar={scrollbar} />
                </div>
            </section>
            <section id="contact">
                <ContactBanner scrollbar={scrollbar} />
            </section>
            <QuickLink links={links} scrollbar={scrollbar} />
        </Layout>
    )
}