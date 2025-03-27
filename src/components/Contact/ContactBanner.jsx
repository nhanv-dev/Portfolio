import {BiChevronRight} from 'react-icons/bi'
import './style.css'

function ContactBanner() {
    return (
        <section id="contact">
            <div id="contact-banner" className="relative w-full h-[450px] overflow-hidden bg-center bg-cover"
                style={{backgroundImage: `url(https://wallpaperaccess.com/full/4579359.jpg)`}}>
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.5]"></div>
                <div
                    className="absolute z-[1] top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full text-center">
                    <div className="cursor-pointer">
                        <svg width="100%" height="100%">
                            <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)"></rect>
                            <text x="50%" y="50%" textAnchor="middle" className="text-[4rem]">
                                Get in Touch
                            </text>
                        </svg>
                    </div>
                    <div className="hover:scale-[1.05] transition-all duration-300 ease-in-out inline-flex items-center justify-center gap-3 rounded-full px-3 py-2 max-w-[250px] border-[2px] border-[rgba(255,255,255,0.2)] focus:outline-none">
                        <span
                            className="w-[30px] h-[30px] border-2 bg-white text-black rounded-full flex items-center justify-center">
                            <BiChevronRight className="text-[22px] relative top-[1px] font-extrabold"/>
                        </span>
                        <span className="text-[12px] tracking-[4px] uppercase font-[700]">Contact me</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactBanner;