import { useState } from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const listRouting = ["/home", "/about", "/projects", "/contact"];

const socialLinks = [
    { icon: <FaFacebook size={20} />, url: "https://facebook.com" },
    { icon: <FaInstagram size={20} />, url: "https://instagram.com" },
    { icon: <FaLinkedin size={20} />, url: "https://linkedin.com" },
    { icon: <FaGithub size={20} />, url: "https://github.com" }
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Sidebar */}
            <div className="fixed left-0 top-0 bottom-0 z-50 w-[60px] bg-black text-white flex flex-col items-center">
                {/* Menu Button */}
                <div className="w-full flex justify-center mt-8">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="w-6 h-5 relative flex flex-col justify-between items-center"
                    >
                        <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>

                {/* Social Media Icons */}
                <div className="mt-auto">
                    <ul className="flex flex-col items-center gap-6">
                        {socialLinks.map((social, index) => (
                            <li key={index}>
                                <a
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    {social.icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Scroll Down Text */}
                <div className="mt-auto mb-0">
                    <div className="flex flex-col items-center gap-5">
                        <p
                            className="text-[1rem] font-extrabold font-kanit text-gray-200"
                            style={{
                                writingMode: 'vertical-rl',
                                textOrientation: 'mixed',
                                transform: 'rotate(180deg)',
                            }}
                        >
                            Scroll Down
                        </p>
                        <div className="h-20 w-[3px] bg-gray-200"></div>
                    </div>
                </div>
            </div>

            {/* Full Screen Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black z-40 flex items-center justify-center transition-all duration-500 ${isMenuOpen
                    ? 'opacity-100 visible'
                    : 'opacity-0 invisible'
                    }`}
            >
                <nav className={`w-full max-w-4xl mx-auto transition-all duration-500 ${isMenuOpen
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                    }`}>
                    <ul className="flex flex-col items-center gap-8">
                        {listRouting.map((route, index) => (
                            <li key={index}>
                                <a
                                    href={route}
                                    className="text-4xl font-bold text-white hover:text-gray-400 transition-colors"
                                >
                                    {route.slice(1).charAt(0).toUpperCase() + route.slice(2)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
}
