import Lenis from "@studio-freight/lenis";
import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

const LenisContext = createContext(null);

export const LenisProvider = ({ children }) => {
    const [lenis, setLenis] = useState(null);
    const location = useLocation();

    useEffect(() => {
        if (!!lenis) return;

        const instance = new Lenis({ smooth: true });
        setLenis(instance)

        function raf(time) {
            instance.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis?.stop();
            lenis?.destroy();
        };
    }, [lenis]);

    useEffect(() => {
        if (!lenis) return;

        lenis.scrollTo(0, { immediate: true }); // Cuộn lên đầu mỗi khi route thay đổi

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname]); // Lắng nghe thay đổi route

    return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
};

// Hook để sử dụng Lenis ở mọi component
export const useLenis = () => {
    return useContext(LenisContext);
};
