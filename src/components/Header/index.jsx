import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DarkModeToggle from "../DarkModeToggle";
import { useLenis } from "../LenisProvider";
import './style.css';
import { useLoading } from "../Layout";

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
        <>
            <div className="h-[68px] flex items-center justify-center dark:bg-darkBg">
                <header
                    className={`fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 
                                flex justify-between items-center rounded-full text-sm
                                ${scrolled
                            ? "top-5 w-[85%] max-w-[850px] bg-lightBg dark:bg-darkBg/50 backdrop-blur-lg py-2 shadow-md border border-white/20 animate-border-glow px-6"
                            : "top-0 w-full container bg-transparent py-4 border-none"
                        }`}
                >
                    {/* Logo */}
                    <div className="flex items-center w-[150px] justify-start">
                        <Link to="/home" className="font-extrabold text-lg tracking-wide text-lightText dark:text-darkText">
                            <span>Port</span>
                            <span className="text-primary ml-1">folio.</span>
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav>
                        <ul className="transition-theme-text flex gap-6 font-bold text-lightText dark:text-gray-400">
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
                </header>
            </div>
        </>
    );
}
