import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useLoading } from '../LoadingProvider';
import { personalInfo } from '../../data';

export default function Footer() {
    const { handleNavigationWithAnimation } = useLoading();
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <footer>
            <div className='py-10 bg-darkBg border-t border-gray-900 relative'>
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
                            <p className="text-darkText font-bold text-[0.75rem] uppercase tracking-[2px]">
                                @2025. Personal portfolio
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
                    <p className="text-darkText font-bold text-[0.8rem] uppercase tracking-[2px]">
                        Developed by
                        <a href="https://www.facebook.com/nhan.kden/" target="_blank" rel="noreferrer" className="text-primary"> Tran Thanh Nhan</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

// export default function Footer() {

//     return (
//         <footer className='mt-[120px]'>
//             <div className='relative container'>
//                 <ul className='flex items-center justify-center gap-7 mb-10 font-semibold text-[1.1rem]'>
//                     <li>
//                         <Link to={"/home"}>Home</Link>
//                     </li>
//                     <li>
//                         <Link to={"/about"}>About me</Link>
//                     </li>
//                     <li>
//                         <Link to={"/projects"}>Projects</Link>
//                     </li>
//                     <li>
//                         <Link to={"/contact"}>Contact</Link>
//                     </li>
//                 </ul>
//                 <div className='flex items-center justify-center gap-4 mb-10'>
//                     <div className="text-center flex items-center justify-between gap-10">
//                         <p className="text-darkText font-bold text-[0.75rem] uppercase tracking-[2px]">
//                             @2025. Personal portfolio  Developed by:
//                             <a href="https://www.facebook.com/nhan.kden/" target="_blank" rel="noreferrer" className="text-primary"> Tran Thanh Nhan</a>
//                         </p>
//                     </div>

//                 </div>
//             </div>
//             <div className="relative">
//                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 h-[800px] w-[800px] border-[3px] border-gray-400 rounded-full"></div>
//             </div>
//         </footer>
//     )
// }