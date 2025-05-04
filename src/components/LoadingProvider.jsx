import { createContext, useContext, useState } from "react";

const LoadingContext = createContext({
    isLoaded: false,
    setIsLoaded: (value) => { },
    transition: false,
    setTransition: (value) => { },
    handleNavigationWithAnimation: (route, navigate) => { },
    handleNavigationWithOverlay: (route, navigate) => { }
});

export const LoadingProvider = ({ children }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [transition, setTransition] = useState(false);

    const handleNavigationWithAnimation = (route, navigate) => {
        setTransition(true);
        setTimeout(() => {
            navigate(route);
            setIsLoaded(false);
        }, 500);
    };

    const handleNavigationWithOverlay = (route, navigate) => {
        setTransition(true);
        setTimeout(() => {
            navigate(route);
            setTransition(false);
        }, 500);
    };

    return (
        <LoadingContext.Provider value={{
            isLoaded,
            setIsLoaded,
            transition,
            setTransition,
            handleNavigationWithAnimation,
            handleNavigationWithOverlay
        }}>
            {children}
        </LoadingContext.Provider>
    );
};

export const useLoading = () => useContext(LoadingContext);