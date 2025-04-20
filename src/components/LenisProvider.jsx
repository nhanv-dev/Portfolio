import Lenis from "@studio-freight/lenis";
import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

const LenisContext = createContext(null);

export const LenisProvider = ({ children }) => {
    const [lenis, setLenis] = useState(null);
    const location = useLocation();

    useEffect(() => {
        if (!!lenis) return;

        const instance = new Lenis({
            smoothWheel: true,
            lerp: 0.045,             // tăng nhẹ để phản hồi nhanh hơn chút
            duration: 1.5,           // giảm xuống, scrollTo đỡ bị kéo dài quá
            mouseMultiplier: 0.85,   // giảm lực cuộn tay để hạn chế “văng xa”
            normalizeWheel: true,
            smoothTouch: true,
            direction: 'vertical',
        });

        setLenis(instance)

        function raf(time) {
            instance.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
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
