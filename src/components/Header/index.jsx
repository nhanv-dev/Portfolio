import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLenis } from "../LenisProvider";
import './style.css';
import { useLoading } from "../LoadingProvider";

const listRouting = ["/home", "/about", "/projects", "/contact"];

export default function Header() {
    const lenis = useLenis();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const { setIsLoaded } = useLoading();

    useEffect(() => {
        if (!lenis) return;

        const handleScroll = ({ scroll }) => {
            // Determine scroll direction and update header visibility
            if (scroll > lastScrollY) {
                // Scrolling down
                setIsVisible(false);
                setIsMenuOpen(true);
            } else {
                // Scrolling up
                setIsVisible(true);
                setIsMenuOpen(false);
            }
            setLastScrollY(scroll);
        };

        lenis.on("scroll", handleScroll);

        return () => {
            lenis.off("scroll", handleScroll);
        };
    }, [lenis, lastScrollY]);

    return (
        <>
            {/* Menu Button */}
            <button
                className="fixed left-0 top-0 bottom-0 z-50 p-2 py-10 w-[60px] bg-black text-black flex flex-col justify-between items-center border-r border-gray-900"
            >
                <div className="w-6 h-5 relative flex flex-col justify-between items-center">
                    <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
            </button>
  
        </>
    );
}
