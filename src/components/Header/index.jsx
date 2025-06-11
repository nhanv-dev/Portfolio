import { useEffect, useState } from 'react';
import { RiAppsLine } from "react-icons/ri";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { personalInfo } from '../../data';
import { useLoading } from '../LoadingProvider';
import { AnimatePresence, motion } from 'framer-motion';

const listRouting = ["/home", "/about", "/projects", "/contact"];

const colors = {
    light: {
        text: 'text-black',
        text2: 'text-black/50',
        textIcon: 'text-gray-700',
        bg: 'bg-white',
        border: 'border-gray-200',
        border2: 'border-gray-200',
    },
    dark: {
        text: 'text-white',
        text2: 'text-white/50',
        textIcon: 'text-white/90',
        bg: 'bg-black',
        border: 'border-gray-900',
        border2: 'border-gray-900',
    },
}

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeOverlay, setActiveOverlay] = useState(null);
    const location = useLocation();
    const { handleNavigationWithAnimation } = useLoading();
    const navigate = useNavigate();

    useEffect(() => {
        const handleEscKey = (event) => {
            if (event.key === 'Escape' && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscKey);
        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [isMenuOpen]);

    const color = (location.pathname.startsWith('/projects') || location.pathname.startsWith('/contact')) ? 'dark' : 'light'

    return (
        <header>
            <div className={`fixed top-0 bottom-0 right-0 w-[5.25vw] h-screen z-[1000] border-l ${colors[color].border} ${colors[color].bg}`}>
                <div className="h-full flex items-center gap-10 flex-col justify-between pb-10 pt-10">
                    <nav className="flex flex-col items-center w-full">
                        {listRouting.map((route, index) => {
                            const isActive = route === '/projects'
                                ? location.pathname.startsWith('/projects')
                                : location.pathname === route;
                            return (
                                <Link
                                    key={index}
                                    to={route}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (route === '/projects' || !isActive) {
                                            handleNavigationWithAnimation(route, navigate);
                                        }
                                    }}
                                    onMouseEnter={() => setActiveOverlay(index)}
                                    onMouseLeave={() => setActiveOverlay(null)}
                                    className={`text-center transition-colors relative z-[99999] group w-full hover:cursor-none ${isActive ? colors[color].text : colors[color].text2}`}
                                >
                                    <motion.span
                                        style={{
                                            writingMode: 'vertical-lr',
                                            textOrientation: 'mixed',
                                        }}
                                        animate={{
                                            transform: activeOverlay === index ? 'rotate(180deg) translateX(-10px)' : 'rotate(180deg) translateX(0px)',
                                            opacity: activeOverlay === index ? 0 : 1,
                                        }}
                                        transition={{ duration: 0.5 }}
                                        className="py-4 relative transition-all duration-500 font-bold tracking-wider text-[0.925rem] font-unbounded"
                                    >
                                        {route.slice(1).charAt(0).toUpperCase() + route.slice(2)}
                                    </motion.span>
                                    <span className={`absolute left-full top-1/2 -translate-y-1/2 text-[3.5rem] uppercase font-extrabold group-hover:-translate-x-full transition-all duration-700 z-[2] pr-2 ${colors[color].text}`}>
                                        {route.slice(1).charAt(0).toUpperCase() + route.slice(2)}
                                    </span>
                                    <span></span>
                                </Link>
                            );
                        })}
                    </nav>
                    {/* Overlay with Framer Motion */}
                    <AnimatePresence>
                        {activeOverlay != null && (
                            <motion.div
                                key="hover-overlay"
                                initial={{ opacity: 0, }}
                                animate={{ opacity: 1, }}
                                exit={{ opacity: 0, }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                className={`fixed left-0 top-0 bottom-0 right-0 z-[9999] ${colors[color].bg}`}
                            >
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`relative flex justify-center items-center group !outline-none w-[50px] h-[50px] border-2 rounded-full ${colors[color].textIcon} ${colors[color].border2}`}
                    >
                        <RiAppsLine className="text-2xl" />
                    </button>
                </div>
            </div>

            <div className={`fixed top-0 right-[5vw] bottom-0 w-[400px] bg-black border-l border-white/10 z-[999] transition-all duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="h-full overflow-hidden">
                    <div className="px-8 py-10 h-full">
                        <div className="h-full flex flex-col gap-8">
                            <div>
                                <h3 className="text-lg font-bold mb-4 text-primary">Contact</h3>
                                <ul className="space-y-5">
                                    <li>
                                        <p className="text-sm text-gray-400 mb-1 font-bold">Email:</p>
                                        <p className="text-base text-white font-medium">{personalInfo.contact.email}</p>
                                    </li>
                                    <li>
                                        <p className="text-sm text-gray-400 mb-1 font-bold">Phone:</p>
                                        <p className="text-base text-white font-medium">{personalInfo.contact.phone}</p>
                                    </li>
                                    <li>
                                        <p className="text-sm text-gray-400 mb-1 font-bold">Location:</p>
                                        <p className="text-base text-white font-medium">{personalInfo.contact.location}</p>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold mb-4 text-primary">Social Links</h3>
                                <ul className="space-y-5">
                                    <li>
                                        <p className="text-sm text-gray-400 mb-1 font-bold">GitHub:</p>
                                        <a href={personalInfo.link.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                            <p className="text-base text-white font-medium">{personalInfo.social.github}</p>
                                        </a>
                                    </li>
                                    <li>
                                        <p className="text-sm text-gray-400 mb-1 font-bold">LinkedIn:</p>
                                        <a href={personalInfo.link.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                            <p className="text-base text-white font-medium">{personalInfo.social.linkedin}</p>
                                        </a>
                                    </li>
                                    <li>
                                        <p className="text-sm text-gray-400 mb-1 font-bold">Facebook:</p>
                                        <a href={personalInfo.link.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                            <p className="text-base text-white font-medium">{personalInfo.social.facebook}</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="h-[260px] w-full overflow-hidden">
                                <img src="https://i.pinimg.com/736x/e3/5a/43/e35a43db2a75327248f698dc1b65cccb.jpg" alt="Profile" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    );
}
