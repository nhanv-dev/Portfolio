import { createContext, useContext, useState } from "react";

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