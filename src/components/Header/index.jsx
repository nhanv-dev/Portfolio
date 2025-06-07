import { useEffect, useState } from 'react';
import { RiAppsLine } from "react-icons/ri";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { personalInfo } from '../../data';
import { useLoading } from '../LoadingProvider';
import { AnimatePresence, motion } from 'framer-motion';

const listRouting = ["/home", "/about", "/projects", "/contact"];

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

    return (
        <header>
            <div
                className="fixed top-0 bottom-0 right-0 w-[5.25vw] h-screen z-[1000] border-l border-black/10"
                style={{
                    background: 'linear-gradient(to bottom, #ffffff 0%, #ffffff 70%, #F6F3FF 100%)'
                }}
            >
                <div className="h-full flex items-center gap-10 flex-col justify-between pb-20 pt-16">
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
                                    className={`text-center transition-colors font-unbounded relative z-[99999] group w-full hover:cursor-default ${isActive ? 'text-black' : 'text-[rgba(0,0,0,0.4)]'}`}
                                >
                                    <motion.span
                                        style={{
                                            writingMode: 'vertical-lr',
                                            textOrientation: 'mixed',
                                        }}
                                        animate={{ 
                                            transform: activeOverlay === index ? 'rotate(180deg) translateX(-10px)' : 'rotate(180deg) translateX(0px)',
                                            opacity: activeOverlay === index ? '0' : '1',
                                        }}
                                        transition={{ duration: 0.5 }}
                                        className="py-4 relative transition-all duration-500 font-semibold tracking-normal text-[0.925rem]"
                                    >
                                        {route.slice(1).charAt(0).toUpperCase() + route.slice(2)}
                                    </motion.span>
                                    <span className='absolute left-full top-1/2 -translate-y-1/2 text-[3.5rem] uppercase font-extrabold group-hover:-translate-x-full transition-all duration-700 text-black z-[2]'>
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
                                className="fixed left-0 top-0 bottom-0 right-0 bg-white z-[9999]"
                            >
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="max-w-max relative flex flex-col justify-center items-center group !outline-none text-black"
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
