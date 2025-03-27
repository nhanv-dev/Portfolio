import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './style.css'
export default function Header({ scrollbar }) {
    const headerRef = useRef(null)

    function scrollingHeader({ offset }) {
        headerRef.current.style.transform = `translateY(${offset.y}px)`
    }

    useEffect(() => {
        scrollbar.scrollbar?.addListener(scrollingHeader)
        console.log('Header');
        
        return () => {
            scrollbar.scrollbar?.removeListener(scrollingHeader)
        }
    }, [scrollbar.scrollbar])

    return (
        <header ref={headerRef} id="header" className="header justify-between flex absolute top-[0] left-[0] righ-[0] z-[50] w-full px-[1.5rem] bg-transparent py-5 text-white transition-all">
            <div className="flex justify-between items-center w-[200px]">
                <Link to={"/home"} className="font-[800] text-[1.5rem] tracking-[3px]">
                    <span>Port</span>
                    <span className="text-[#14bfb5] ml-[2px]">folio.</span>
                </Link>
            </div>
            <div className='w-full'>
                <ul className='w-full flex justify-center items-center gap-5'>
                    <li className='font-semibold text-[1.2rem]'>
                        <Link to={"/home"}>
                            Home
                        </Link>
                    </li>
                    <li className='font-semibold text-[1.2rem]'>
                        <Link to={"/home"}>
                            About
                        </Link>
                    </li>
                    <li className='font-semibold text-[1.2rem]'>
                        <Link to={"/projects"}>
                            Projects
                        </Link>
                    </li>
                    <li className='font-semibold text-[1.2rem]'>
                        <Link to={"/contact"}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='w-[200px]'></div>
        </header>
    )
}