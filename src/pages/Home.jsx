import { useState } from 'react';
import FadeContent from '../components/FadeContent';
import Preloader from '../components/Preloader';
import Slider from '../components/Slider';
import { Link } from 'react-router-dom';
import { FaLocationDot, FaPhone, FaStar } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";

export default function HomePage() {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <>
            {!isLoaded && <Preloader texts={["Welcome", "Let's Explore"]} onLoaded={() => setIsLoaded(true)} />}
            {isLoaded && (
                <div>
                    <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
                        <Slider />
                    </FadeContent>
                    <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
                        <ExploreAboutComponent />
                    </FadeContent>
                </div>
            )}
        </>
    )
}




const ExploreAboutComponent = () => {
    return (
        <div className='mt-[10rem] mb-20'>
            <div className='container relative dark:bg-[#0b0d11] p-20 flex gap-20'>
                <div className="z-[1] absolute left-20 -top-20 bottom-20 w-[500px] bg-center bg-cover" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1654253629804-9214420ad8ef?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}></div>
                <div className='ml-[500px] pl-20 flex-1 relative'>
                    <p className='mb-3 font-semibold capitalize text-[1rem]'>Who I Am</p>
                    <h4 className='text-[3rem] mb-5 font-bold uppercase'>Tran Thanh Nhan</h4>
                    <p className='mb-6 leading-7 text-[0.975rem] font-medium'>
                        My name is Tran Thanh Nhan. I'm a Fullstack Developer. I have 2 years work experience.
                    </p>
                    <div className='grid grid-cols-2 text-[0.925rem] font-medium'>
                        <div className='mb-3 flex items-center justify-start gap-3'>
                            <FaLocationDot />
                            Ho Chi Minh City, Vietnam
                        </div>
                        <div className='mb-3 flex items-center justify-start gap-3'>
                            <IoMailSharp />
                            tthanhnhan1512@gmail.com
                        </div>
                        <div className='mb-3 flex items-center justify-start gap-3'>
                            <FaPhone />
                            (+84) 946 286 951
                        </div>
                        <div className='mb-3 flex items-center justify-start gap-3'>
                            <FaStar />
                            Web Development
                        </div>
                    </div>
                    <div className='mt-10 mb-20'>
                        <Link to={"/about"} className='py-2 px-6 border-2 border-whtie rounded-full font-semibold text-[0.95rem]'>Get Started</Link>
                    </div>
                </div>
                <div className='bg-white/5 w-[2px] absolute right-10 top-10 bottom-10'></div>
                <div className='bg-white/5 w-[2px] absolute left-10 top-10 bottom-10'></div>
                <div className='bg-white/5 h-[2px] absolute right-10 left-10 top-10'></div>
                <div className='bg-white/5 h-[2px] absolute right-10 left-10 bottom-10'></div>
            </div>
        </div>
    )
}