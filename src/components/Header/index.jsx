import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DarkModeToggle from "../DarkModeToggle";
import { useLenis } from "../LenisProvider";
import './style.css';
import { useLoading } from "../LoadingProvider";

const listRouting = ["/home", "/about", "/projects", "/contact"];

export default function Header() {
    const lenis = useLenis();
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { setIsLoaded } = useLoading();

    useEffect(() => {
        if (!lenis) return;

        const handleScroll = ({ scroll }) => {
            setScrolled(scroll > 50);
        };

        lenis.on("scroll", handleScroll);
        return () => {
            lenis.off("scroll", handleScroll);
        };
    }, [lenis]);

    return (
        <header
            className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-[800ms] flex justify-between items-center border-white/20  ${scrolled
                ? "animate-border-glow top-4 w-[850px] max-w-[850px] rounded-full border py-3 px-0 backdrop-blur-2xl bg-black/70"
                : "top-0 bg-none w-screen max-w-[100%] px-0 py-4 border-none bg-black"}`}
        >
            <div className={`container flex items-center justify-between transition-all duration-[800ms] ${scrolled ? 'px-6' : ''}`}>
                {/* Logo */}
                <div className="flex items-center w-[150px] justify-start">
                    <Link to="/home" className="font-extrabold text-lg tracking-wide text-white">
                        <span>Port</span>
                        <span className="text-primary ml-1">folio.</span>
                    </Link>
                </div>

                {/* Navigation */}
                <nav>
                    <ul className="flex gap-6 font-bold text-gray-200">
                        {listRouting.map((path) => {
                            const isActive = location.pathname.startsWith(path);

                            return (
                                <li key={path} className="relative">
                                    <Link
                                        to={path}
                                        onClick={() => setIsLoaded(false)}
                                        className={`relative text-[0.925rem] ${isActive
                                            ? "text-primary after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-4 after:h-[2px] after:bg-primary"
                                            : ""}`}
                                    >
                                        {path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                {/* Dark Mode Toggle */}
                <div className="w-[150px] flex justify-end">
                    <DarkModeToggle />
                </div>
            </div>
        </header>
    );
}
