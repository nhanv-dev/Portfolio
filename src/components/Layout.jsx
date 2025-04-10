import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import CustomCursor from "./CustomCursor";
import Footer from "./Footer";
import Header from "./Header";
import { LenisProvider } from "./LenisProvider";
import { LoadingProvider } from "./LoadingProvider";
import ScrollTop from "./ScrollTop";

const titles = {
    "/": "Home - Portfolio",
    "/home": "Home - Portfolio",
    "/about": "About - Portfolio",
    "/contact": "Contact - Portfolio",
    "/projects": "Projects - Portfolio",
};

const Layout = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        document.title = titles[location.pathname] || "Portfolio";
    }, [location.pathname]);

    return (
        <div id="main-content">
            <LenisProvider>
                <LoadingProvider>
                    <div className="h-full w-full relative dark:text-darkText text-lightText">
                        <Header />
                        {children}
                        <Outlet />
                        <Footer />
                    </div>
                    <ScrollTop />
                    <CustomCursor />
                </LoadingProvider>
            </LenisProvider>
        </div>
    );
};

export default Layout;