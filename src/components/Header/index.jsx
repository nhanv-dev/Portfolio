import { useEffect, useState } from 'react';
import { RiAppsLine } from "react-icons/ri";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { personalInfo } from '../../data';
import { useLoading } from '../LoadingProvider';

const listRouting = ["/home", "/about", "/projects", "/contact"];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        <header className="h-[72px]">
            <div className="fixed top-0 left-0 right-0 z-[1000] bg-black text-white border-b border-white/10">
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
                                        <Link
                                            key={index}
                                            to={route}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleNavigationWithAnimation(route, navigate);
                                            }}
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
                                        </Link>
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
            <div className={`fixed top-[72px] right-0 h-[calc(100vh-72px)] w-[400px] bg-black border-l border-white/10 z-[999] transition-all duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="h-full overflow-hidden">
                    <div className="px-8 py-6 h-full">
                        {/* Personal Information */}
                        <div className="h-full flex flex-col gap-8 justify-between">
                            {/* Contact Info */}
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

                            {/* Social Links */}
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
        </header>
    );
}
