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
        <header>
            <div className="fixed top-0 bottom-0 right-0 w-[5vw] h-screen z-[1000] bg-white border-l border-black/10">
                <div className="h-full flex items-center gap-10 flex-col justify-between py-20">
                    <nav className="flex flex-col items-center gap-10">
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
                                    className={`text-[0.95rem] font-bold tracking-normal transition-colors font-unbounded relative group ${isActive ? 'text-black' : 'text-[rgba(0,0,0,0.4)]'}`}
                                >
                                    <span
                                        style={{
                                            writingMode: 'vertical-lr',
                                            textOrientation: 'mixed',
                                            transform: 'rotate(180deg)',
                                        }}
                                        className='group-hover:opacity-0 opacity-100 group-hover:translate-x-[20px] transition-all duration-500'
                                    >
                                        {route.slice(1).charAt(0).toUpperCase() + route.slice(2)}
                                    </span>
                                    <span className='absolute left-0 top-1/2 -translate-y-1/2 text-[3rem] opacity-0 group-hover:opacity-100 group-hover:-translate-x-full transition-all duration-500 text-black'>
                                        {route.slice(1).charAt(0).toUpperCase() + route.slice(2)}
                                    </span>
                                    <span></span>
                                </Link>
                            );
                        })}
                    </nav>
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
