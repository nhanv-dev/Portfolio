import { useEffect, useState } from 'react';
import { RiAppsLine } from "react-icons/ri";
import { useLocation, useNavigate } from 'react-router-dom';
import { personalInfo } from '../../data';
import { useLenis } from '../LenisProvider';
import { useLoading } from '../LoadingProvider';

const listRouting = ["/home", "/about", "/projects", "/contact"];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const lenis = useLenis();
    const { handleNavigationWithAnimation } = useLoading();
    const navigate = useNavigate();

    useEffect(() => {
        if (lenis) {
            if (isMenuOpen) {
                lenis.stop();
                document.body.style.overflow = 'hidden';
            } else {
                lenis.start();
                document.body.style.overflow = '';
            }
        }
    }, [isMenuOpen, lenis]);

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
        <header className="h-[72px]">
            <div className="fixed top-0 left-0 right-0 z-[1000] bg-black/90 backdrop-blur-2xl text-white border-b border-white/10">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-[72px]">
                        {/* Logo with animation */}
                        <div className="text-[1.5rem] font-bold font-kanit relative group">
                            <span className="relative z-10">
                                Port
                                <span className="text-primary">folio.</span>
                            </span>
                            <div className="absolute inset-0 bg-white/10 rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                        </div>

                        {/* Phone Number and Menu Button */}
                        <div className="flex items-center gap-10">
                            {/* Navigation Links */}
                            <nav className="hidden md:flex items-center gap-10">
                                {listRouting.map((route, index) => {
                                    const isActive = location.pathname === route;
                                    return (
                                        <button
                                            key={index}
                                            type="button"
                                            onClick={() => handleNavigationWithAnimation(route, navigate)}
                                            className={`text-base font-bold tracking-normal transition-colors relative group ${isActive
                                                ? 'text-primary'
                                                : 'text-white'
                                                }`}
                                        >
                                            {route.slice(1).charAt(0).toUpperCase() + route.slice(2)}
                                            <span className={`absolute -bottom-1 left-0 w-full h-[3px] transition-all duration-300 ${isActive
                                                ? 'bg-primary'
                                                : 'bg-transparent'
                                                }`}></span>
                                        </button>
                                    );
                                })}
                            </nav>

                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="max-w-max relative flex flex-col justify-center items-center group !border-none !outline-none"
                            >
                                <RiAppsLine className="text-2xl" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sliding Menu from Right */}
            <div className={`fixed top-[72px] right-0 h-[calc(100vh-72px)] w-[400px] bg-black/90 backdrop-blur-2xl z-[999] transition-all duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <div className="h-full overflow-y-auto">
                    <div className="p-8">
                        {/* Personal Information */}
                        <div className="grid grid-cols-1 gap-8">
                            {/* Contact Info */}
                            <div>
                                <h3 className="text-lg font-bold mb-6 text-primary">Contact</h3>
                                <ul className="space-y-6">
                                    <li>
                                        <p className="text-sm text-gray-400 mb-1">Email:</p>
                                        <p className="text-base text-white">{personalInfo.contact.email}</p>
                                    </li>
                                    <li>
                                        <p className="text-sm text-gray-400 mb-1">Phone:</p>
                                        <p className="text-base text-white">{personalInfo.contact.phone}</p>
                                    </li>
                                    <li>
                                        <p className="text-sm text-gray-400 mb-1">Location:</p>
                                        <p className="text-base text-white">{personalInfo.contact.location}</p>
                                    </li>
                                </ul>
                            </div>

                            {/* Social Links */}
                            <div>
                                <h3 className="text-lg font-bold mb-6 text-primary">Social</h3>
                                <ul className="space-y-6">
                                    <li>
                                        <p className="text-sm text-gray-400 mb-1">GitHub:</p>
                                        <a href={personalInfo.link.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                            <p className="text-base text-white">{personalInfo.social.github}</p>
                                        </a>
                                    </li>
                                    <li>
                                        <p className="text-sm text-gray-400 mb-1">LinkedIn:</p>
                                        <a href={personalInfo.link.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                            <p className="text-base text-white">{personalInfo.social.linkedin}</p>
                                        </a>
                                    </li>
                                    <li>
                                        <p className="text-sm text-gray-400 mb-1">Facebook:</p>
                                        <a href={personalInfo.link.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                            <p className="text-base text-white">{personalInfo.social.facebook}</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
