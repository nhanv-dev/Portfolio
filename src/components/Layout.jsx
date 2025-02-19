import { useEffect } from 'react';
import Header from './Header'
import Footer from './Footer'
import CustomCursor from './CustomCursor'
import ScrollTop from './ScrollTop'
import ContactFixed from './ContactFixed'
import Preloader from './Preloader'

const Layout = ({ title, children, scrollbar }) => {

    useEffect(() => {
        document.title = title ? ` ${title} - Portfolio` : 'Portfolio';
    }, [title])


    return (
        <div>
            <Preloader />
            <div id="main-content">
                <div className="h-full w-full relative text-white">
                    <Header scrollbar={scrollbar} />
                    {children}
                    <Footer />
                    <ScrollTop scrollbar={scrollbar} />
                    <ContactFixed scrollbar={scrollbar} />
                </div>
            </div>
            <CustomCursor />
        </div>
    )
}

export default Layout;