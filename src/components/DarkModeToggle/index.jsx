import { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
    // const [animating, setAnimating] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        // setAnimating(true);
        setTimeout(() => {
            setDarkMode(!darkMode);
            // setAnimating(false);
        }, 500);
    };

    return (
        <button
            type="button"
            disabled
            onClick={toggleDarkMode}
            className="text-darkText bg-transparent flex items-center justify-center relative overflow-hidden border-none outline-none"
        >
            <span className="transform scale-125 z-10">
                {darkMode ? <MdOutlineDarkMode size={20} /> : <MdOutlineLightMode size={20} />}
            </span>
        </button>
    );
}
