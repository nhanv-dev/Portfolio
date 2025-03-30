import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CustomCursor from "./CustomCursor";
import Footer from "./Footer";
import Header from "./Header";
import { LenisProvider } from "./LenisProvider";
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

const LoadingContext = createContext({
    isLoaded: false,
    setIsLoaded: (value) => { },
});

export const LoadingProvider = ({ children }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <LoadingContext.Provider value={{ isLoaded, setIsLoaded }}>
            {children}
        </LoadingContext.Provider>
    );
};

export const useLoading = () => useContext(LoadingContext);