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

const Layout = () => {
    const location = useLocation();

    useEffect(() => {
        document.title = titles[location.pathname] || "Portfolio";
    }, [location.pathname]);

    return (
        <LenisProvider>
            <LoadingProvider>
                <div className="h-full w-full relative text-darkText overflow-hidden">
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
                <ScrollTop />
                <CustomCursor />
            </LoadingProvider>
        </LenisProvider>
    );
};

export default Layout;