import { useEffect, useReducer } from 'react';
import ContactBanner from '../components/Contact/ContactBanner';
import Layout from '../components/Layout';
import QuickLink from '../components/QuickLink';
import scrollbarReducer, { initialState } from '../components/scrollbarReducer';

export default function ContactPage() {
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
        <Layout title="Contact" scrollbar={scrollbar}>
            <section id="contact">
                <ContactBanner scrollbar={scrollbar} />
            </section>
            <QuickLink links={links} scrollbar={scrollbar} />
        </Layout>
    )
}