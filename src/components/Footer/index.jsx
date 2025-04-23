import { FaFacebookF, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <div className='py-10 bg-darkBg border-t border-gray-900'>
                <div className="container">
                    <div className="flex flex-wrap items-start">
                        <div className="flex-1">
                            <h2 className="mb-8 leading-[28px] text-[1.4rem] tracking-wider uppercase font-extrabold">
                                Port<span className="text-primary">folio.</span>
                            </h2>
                            <div className="flex gap-3">
                                <a href="https://www.facebook.com/nhan.kden/" target="_blank" rel="noreferrer"
                                    className="flex items-center justify-center min-w-[30px] min-h-[30px] rounded-full bg-white text-black text-[1.1rem]">
                                    <FaFacebookF />
                                </a>
                                <a href="https://github.com/nhanv-dev?tab=repositories" target="_blank" rel="noreferrer"
                                    className="flex items-center justify-center min-w-[30px] min-h-[30px] rounded-full bg-white text-black text-[1.1rem]">
                                    <FaGithub />
                                </a>
                                <div
                                    className="cursor-not-allowed flex items-center justify-center min-w-[30px] min-h-[30px] rounded-full bg-white text-black text-[1.1rem]">
                                    <FaInstagram />
                                </div>
                                <div
                                    className="cursor-not-allowed flex items-center justify-center min-w-[30px] min-h-[30px] rounded-full bg-white text-black text-[1.1rem]">
                                    <FaYoutube />
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h3 className="relative mb-8 leading-5 text-[1rem] tracking-[2px] uppercase font-bold pb-2 after:bottom-0 after:left-0 after:absolute after:h-[2px] after:w-[20px] after:bg-white ">
                                Contact
                            </h3>
                            <ul>
                                <li className="mb-3 text-darkText font-semibold text-[.8rem]  tracking-[2px]">
                                    Email: tthanhnhan1512@gmail.com
                                </li>
                                <li className="mb-3 text-darkText font-semibold text-[.8rem] tracking-[2px]">
                                    <a href="https://www.facebook.com/nhan.kden/" target="_blank" rel="noreferrer">Facebook: nhan.kden</a>
                                </li>
                                <li className="mb-3 text-darkText font-semibold text-[.8rem] tracking-[2px]">
                                    <a href="https://github.com/nhanv-dev" target="_blank" rel="noreferrer">Github: nhanv-dev</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <h3 className="relative mb-8 leading-5 text-[1rem] tracking-[2px] uppercase font-bold pb-2 after:bottom-0 after:left-0 after:absolute after:h-[2px] after:w-[20px] after:bg-white ">
                                Navigation Links
                            </h3>
                            <ul>
                                <li className="mb-3 text-darkText font-semibold text-[.8rem] uppercase  tracking-[2px]">
                                    <Link to={"/about"}>About me</Link>
                                </li>
                                <li className="mb-3 text-darkText font-semibold text-[.8rem] uppercase  tracking-[2px]">
                                    <Link to={"/projects"}>Projects</Link>
                                </li>
                                <li className="mb-3 text-darkText font-semibold text-[.8rem] uppercase  tracking-[2px]">
                                    <Link to={"/contact"}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div className='bg-darkBg py-8 border-t border-gray-900'>
                <div className='container'>
                    <div className="text-center flex items-center justify-between gap-10">
                        <p className="text-darkText font-bold text-[0.75rem] uppercase tracking-[2px]">
                            @2025. Personal portfolio
                        </p>
                        <p className="text-darkText font-bold text-[0.75rem] uppercase tracking-[2px]">
                            Developed by:
                            <a href="https://www.facebook.com/nhan.kden/" target="_blank" rel="noreferrer" className="text-primary"> Tran Thanh Nhan</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
