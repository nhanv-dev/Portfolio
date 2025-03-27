import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLenis } from '../LenisProvider';
import './style.css';

export default function Header() {
    const headerRef = useRef(null);
    const lenis = useLenis();

    useEffect(() => {
        if (!lenis) return;

        const handleScroll = ({ scroll }) => {
            if (scroll > 0) {
                headerRef.current.classList.add("sticky-header");
            } else {
                headerRef.current.classList.remove("sticky-header");
            }
        }

        lenis.on("scroll", handleScroll);

        return () => {
            lenis.off("scroll", handleScroll);
        };

    }, [lenis])

    return (
        <header ref={headerRef} id="header" className="header justify-between flex fixed top-[0] left-[0] righ-[0] z-[50] w-full px-[1.5rem] bg-transparent py-5 text-white transition-all bg-black">
            <div className="flex justify-between items-center w-[200px]">
                <Link to={"/home"} className="font-[800] text-[1.5rem] tracking-[3px]">
                    <span>Port</span>
                    <span className="text-[#14bfb5] ml-[2px]">folio.</span>
                </Link>
            </div>
            <div className='flex-1'>
                <ul className='w-full flex justify-center items-center gap-5 font-semibold text-[1rem]'>
                    <li className=''>
                        <Link to={"/home"}>
                            Home
                        </Link>
                    </li>
                    <li className=''>
                        <Link to={"/about"}>
                            About
                        </Link>
                    </li>
                    <li className=''>
                        <Link to={"/projects"}>
                            Projects
                        </Link>
                    </li>
                    <li className=''>
                        <Link to={"/contact"}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='w-[200px]'>
                <DarkModeToggle />
            </div>
        </header>
    )
}


function DarkModeToggle() {
    const storedTheme = localStorage.getItem("theme");

    const [darkMode, setDarkMode] = useState(storedTheme ? storedTheme === "dark" : true);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition"
        >
            {darkMode ? "🌙" : "☀️"}
        </button>
    );
}