import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from '../LenisProvider';

const listRouting = ["/home", "/about", "/projects", "/contact"];

const personalInfo = {
    contact: {
        email: "your.email@example.com",
        phone: "+84 123 456 789",
        location: "Ho Chi Minh City, Vietnam"
    },
    social: {
        github: "github.com/nhanv-dev",
        linkedin: "linkedin.com/in/yourusername",
        twitter: "twitter.com/yourusername"
    }
};

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const lenis = useLenis();

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

    return (
        <header className="h-[72px]">
            <div className="fixed top-0 left-0 right-0 z-[1000] bg-black/90 backdrop-blur-2xl text-white border-b border-white/10">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-[72px]">
                        {/* Logo with animation */}
                        <div className="text-2xl font-bold font-kanit relative group">
                            <span className="relative z-10">
                                Port
                                <span className="text-primary">folio.</span>
                            </span>
                            <div className="absolute inset-0 bg-white/10 rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                        </div>

                        {/* Phone Number and Menu Button */}
                        <div className="flex items-center gap-8">
                            <a href={`tel:${personalInfo.contact.phone}`} className="text-white hover:text-primary transition-colors font-bold text-[0.9rem]">
                                <span className="text-gray-400">PHONE:</span> {personalInfo.contact.phone}
                            </a>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="w-10 h-10 relative flex flex-col justify-center items-center group"
                            >
                                <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                                <span className={`w-6 h-0.5 bg-white transition-all duration-300 mt-1.5 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                                <span className={`w-6 h-0.5 bg-white transition-all duration-300 mt-1.5 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Full Screen Menu Overlay */}
            <div className={`fixed top-[72px] left-0 right-0 bottom-0 bg-black/90 backdrop-blur-2xl z-[999] flex items-center transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="container mx-auto px-4 h-full">
                    <div className="grid grid-cols-2 gap-20 h-full">
                        {/* Navigation Links */}
                        <nav className={`transition-all duration-500 border-r border-white/10 pr-20 h-full flex items-center ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}>
                            <ul className="flex flex-col gap-8">
                                {listRouting.map((route, index) => {
                                    const isActive = location.pathname === route;
                                    return (
                                        <li key={index}>
                                            {isActive ? (
                                                <span className="text-4xl font-bold text-primary cursor-default">
                                                    {route.slice(1).charAt(0).toUpperCase() + route.slice(2)}
                                                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary"></span>
                                                </span>
                                            ) : (
                                                <a
                                                    href={route}
                                                    className="text-4xl font-bold text-white hover:text-gray-400 transition-colors relative group"
                                                >
                                                    {route.slice(1).charAt(0).toUpperCase() + route.slice(2)}
                                                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                                                </a>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>

                        {/* Personal Information */}
                        <div className={`grid grid-cols-2 gap-8 transition-all duration-500 h-full items-center ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}>
                            {/* Contact Info */}
                            <div>
                                <h3 className="text-xl font-bold mb-6 text-primary">Contact</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <span className="text-gray-400">Email:</span>
                                        <p className="text-white">{personalInfo.contact.email}</p>
                                    </li>
                                    <li>
                                        <span className="text-gray-400">Phone:</span>
                                        <p className="text-white">{personalInfo.contact.phone}</p>
                                    </li>
                                    <li>
                                        <span className="text-gray-400">Location:</span>
                                        <p className="text-white">{personalInfo.contact.location}</p>
                                    </li>
                                </ul>
                            </div>

                            {/* Social Links */}
                            <div>
                                <h3 className="text-xl font-bold mb-6 text-primary">Social</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <span className="text-gray-400">GitHub:</span>
                                        <p className="text-white">{personalInfo.social.github}</p>
                                    </li>
                                    <li>
                                        <span className="text-gray-400">LinkedIn:</span>
                                        <p className="text-white">{personalInfo.social.linkedin}</p>
                                    </li>
                                    <li>
                                        <span className="text-gray-400">Twitter:</span>
                                        <p className="text-white">{personalInfo.social.twitter}</p>
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
