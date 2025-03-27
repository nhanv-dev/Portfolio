import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import CustomCursor from './CustomCursor';
import Footer from './Footer';
import Header from './Header';
import { LenisProvider } from './LenisProvider';
import Preloader from './Preloader';
import ScrollTop from './ScrollTop';

const Layout = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        const titles = {
            "/": "Home - Portfolio",
            "/home": "Home - Portfolio",
            "/about": "About - Portfolio",
            "/contact": "Contact - Portfolio",
            "/projects": "Projects - Portfolio",
        };

        document.title = titles[location.pathname] || "Portfolio";
    }, [location.pathname]);

    return (
        <LenisProvider>
            <Preloader />
            <div id="main-content">
                <div className="h-full w-full relative text-white">
                    <Header />
                    {children}
                    <Footer />
                </div>
            </div>
            <ScrollTop />
            <CustomCursor />
        </LenisProvider>
    )
}

export default Layout;
