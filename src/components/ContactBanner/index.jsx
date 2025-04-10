import { Link } from 'react-router-dom';
import './style.css';

function ContactBanner() {
    return (
        <section id="contact" className='px-8 mx-auto w-full'>
            <div id="contact-banner" className="relative w-full h-[450px] overflow-hidden bg-center bg-cover"
                style={{ backgroundImage: `url(https://images.unsplash.com/photo-1545659705-c769b5c3d132?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}>
                <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
                <div className="absolute z-[1] top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full text-center">
                    <div className="cursor-pointer">
                        <svg width="100%" height="100%">
                            <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)"></rect>
                            <text x="50%" y="50%" textAnchor="middle" className="text-[2.5rem] tracking-[5px] font-extrabold">
                                Let’s Talk
                            </text>
                        </svg>
                    </div>
                    <div className='font-extrabold text-[3rem] tracking-wide'>
                        <span className='font-semibold'>Have an idea worth building?</span>
                        <br />
                        <span>I’m here to help you make it real.</span>
                    </div>
                    <Link to={'/contact'} className="hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center justify-center gap-3 rounded-full px-6 py-2.5 border-[2px] border-[rgba(255,255,255)] focus:outline-none">
                        <span className="text-[1.1rem] tracking-widest capitalize font-bold">Contact Me</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default ContactBanner;