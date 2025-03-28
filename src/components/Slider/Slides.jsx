import { BiChevronRight } from 'react-icons/bi'

export function WelcomeSlide({ isActive }) {
    const activeClass = isActive ? "active z-1" : "z-[-1]"

    return (
        <div className={activeClass + " slide-text py-10 opacity-0 absolute left-0 top-0 transition-all delay-100 duration-[300ms] ease-in-out w-full"}>
            <div className="w-full h-full flex items-center mb-5">
                <span className="inline-block mt-1 mr-5 w-[40px] h-[2px] bg-[rgba(255,255,255,.1)]"></span>
                <span
                    className="font-[600] text-[.8rem] md:text-[1rem] tracking-[2px] capitalize color-white opacity-80">Welcome to my world</span>
            </div>
            <svg width="100%" height="100px">
                <text x="0%" y="60%" textAnchor="left">
                    Hi There.
                </text>
            </svg>

            <div className="w-full mb-10">
                <p className="font-semibold tracking-[.8px] text-[.8rem] md:text-[.9rem] leading-7">
                    My name is Thanh Nhan. Currently, I am studying at the NongLam University.
                    <br />
                    My major is information technology. I am a front-end developer.
                </p>
            </div>
            <a href={"#about"}
                className="hover:scale-[1.05] transition-all duration-300 ease-in-out inline-flex items-center justify-center gap-3 rounded-full px-3 py-2 max-w-[250px] border-[2px] border-[rgba(255,255,255,0.2)] focus:outline-none">
                <span
                    className="w-[30px] h-[30px] border-2 bg-white text-black rounded-full flex items-center justify-center">
                    <BiChevronRight className="text-[22px] relative top-[1px] font-extrabold" />
                </span>
                <span className="text-[12px] tracking-[4px] uppercase font-[700]">About me</span>
            </a>
        </div>
    )
}
