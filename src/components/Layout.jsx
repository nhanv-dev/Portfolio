import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import CustomCursor from "./CustomCursor";
import Footer from "./Footer";
import Header from "./Header";
import { LenisProvider } from "./LenisProvider";
import { useLoading } from "./LoadingProvider";

const titles = {
    "/": "Home - Portfolio",
    "/home": "Home - Portfolio",
    "/about": "About - Portfolio",
    "/contact": "Contact - Portfolio",
    "/projects": "Projects - Portfolio",
};

const Layout = () => {
    const location = useLocation();
    const { transition } = useLoading();
    const [showOverlay, setShowOverlay] = useState(false);

    useEffect(() => {
        document.title = titles[location.pathname] || "Portfolio";
    }, [location.pathname]);

    useEffect(() => {
        setShowOverlay(transition);
    }, [transition]);

    return (
        <LenisProvider>
            <div className="h-full w-full relative text-darkText overflow-hidden pr-[5vw]">
                <motion.div
                    initial={{
                        scale: 0,
                        borderRadius: "0 100% 0 0"
                    }}
                    animate={showOverlay ? {
                        scale: 1.5,
                        borderRadius: "0 100% 0 0"
                    } : {
                        scale: 0,
                        borderRadius: "0 100% 0 0"
                    }}
                    transition={{
                        duration: 1.5,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                    className="fixed left-0 bottom-0 w-full h-full bg-black z-[9998] origin-bottom-left"
                />
                <Outlet />
                <Footer />
                <Header />
            </div>
            {/* <ScrollTop /> */}
            <CustomCursor />
        </LenisProvider>
    );
};

export default Layout;