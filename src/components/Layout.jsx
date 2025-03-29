import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CustomCursor from "./CustomCursor";
import Footer from "./Footer";
import Header from "./Header";
import { LenisProvider } from "./LenisProvider";
import ScrollTop from "./ScrollTop";

const Layout = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        const titles = {
            "/": "Home - Portfolio",
            "/home": "Home - Portfolio",
            "/about": "About - Portfolio",
            "/contact": "Contact - Portfolio",
            "/projects": "Projects - Portfolio",
            "/projects/noonpost": "Noonpost - Portfolio",
        };

        document.title = titles[location.pathname] || "Home - Portfolio";
    }, [location.pathname]);

    return (
        <div id="main-content">
            <LenisProvider>
                <div className="h-full w-full relative text-white">
                    <Header />
                    {children}
                    <Footer />
                </div>
                <ScrollTop />
                <CustomCursor />
            </LenisProvider>
        </div>
    );
};

export default Layout;
