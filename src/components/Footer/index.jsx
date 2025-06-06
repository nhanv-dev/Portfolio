import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useLoading } from '../LoadingProvider';
import { personalInfo } from '../../data';
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa6";

export default function Footer() {
    const { handleNavigationWithAnimation } = useLoading();
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <footer>
            <div className='hidden py-10 bg-darkBg border-t border-gray-900 relative'>
                <div className="container">
                    <div className="flex flex-wrap items-start justify-between">
                        <div className="min-w-max">
                            <Link to="/home"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavigationWithAnimation("/home", navigate)
                                }}
                                className="text-[2rem] font-bold font-kanit relative mb-6 block h-[48px]"
                            >
                                <span className="relative z-10">
                                    Port
                                    <span className="text-primary">folio.</span>
                                </span>
                            </Link>

                            <div className="mb-6">
                                <ul className="flex gap-10">
                                    <li className="text-darkText font-bold text-[.9rem] relative uppercase tracking-[2px]">
                                        <Link to={"/home"} onClick={(e) => {
                                            e.preventDefault();
                                            if (location.pathname !== "/home") handleNavigationWithAnimation("/home", navigate)
                                        }} className='relative'>
                                            Home
                                        </Link>

                                    </li>
                                    <li className="text-darkText font-bold text-[.9rem] relative uppercase tracking-[2px]">
                                        <Link to={"/about"} onClick={(e) => {
                                            e.preventDefault();
                                            if (location.pathname !== "/about") handleNavigationWithAnimation("/about", navigate)
                                        }}>About me</Link>

                                    </li>
                                    <li className="text-darkText font-bold text-[.9rem] relative uppercase tracking-[2px]">
                                        <Link to={"/projects"} onClick={(e) => {
                                            e.preventDefault();
                                            if (location.pathname !== "/projects") handleNavigationWithAnimation("/projects", navigate)
                                        }}>Projects</Link>

                                    </li>
                                    <li className="text-darkText font-bold text-[.9rem] relative uppercase tracking-[2px]">
                                        <Link to={"/contact"} onClick={(e) => {
                                            e.preventDefault();
                                            if (location.pathname !== "/contact") handleNavigationWithAnimation("/contact", navigate)
                                        }}>Contact</Link>

                                    </li>
                                </ul>
                            </div>
                            <div className="flex items-center gap-3 mb-6">
                                <a href={personalInfo.link.facebook} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-[34px] h-[34px] text-sm text-black bg-white rounded-full transition-all duration-400">
                                    <FaFacebookF size={16} />
                                </a>
                                <a href={personalInfo.link.github} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-[34px] h-[34px] text-sm text-black bg-white rounded-full transition-all duration-400">
                                    <FaGithub size={16} />
                                </a>
                                <a href={personalInfo.link.linkedin} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-[34px] h-[34px] text-sm text-black bg-white rounded-full transition-all duration-400">
                                    <FaLinkedin size={16} />
                                </a>
                            </div>
                            <p className="text-darkText font-bold text-[0.75rem] uppercase tracking-[2px]">
                                Developed by
                                <a href={personalInfo.link.facebook} target="_blank" rel="noreferrer" className="text-primary"> Tran Thanh Nhan</a>
                            </p>
                        </div>
                        <div className="min-w-max flex flex-wrap items-start justify-end gap-4">
                            <div className="flex-1 text-end">
                                <div className="h-[48px] flex items-center justify-end mb-6">
                                    <h3 className="relative text-[1rem] tracking-[2px] uppercase font-bold pb-2 after:bottom-0 after:right-0 after:absolute after:h-[4px] after:w-[20px] after:bg-primary">
                                        Contact info
                                    </h3>
                                </div>
                                <div className="">
                                    <p className="text-darkText font-semibold text-[1rem] mb-3">
                                        Location: {personalInfo.contact.location}
                                    </p>
                                    <p className="text-darkText font-semibold text-[1rem] mb-3">
                                        Phone: {personalInfo.contact.phone}
                                    </p>
                                    <p className="text-darkText font-semibold text-[1rem] mb-3">
                                        Email: {personalInfo.contact.email}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='py-6 border-t border-gray-900'>
                <div className="text-center">
                    <p className="text-darkText font-bold text-[0.75rem] uppercase tracking-[2px]">
                        @2025. Personal portfolio
                    </p>
                </div>
            </div>
        </footer>
    )
}