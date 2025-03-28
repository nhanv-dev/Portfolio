

function Slide({ isActive, title, subtitle, children }) {
    const activeClass = isActive ? "active z-1" : "z-[-1]"

    return (
        <div className={activeClass + " slide-text py-10 opacity-0 absolute left-0 top-0 transition-all delay-100 duration-[300ms] ease-in-out w-full"}>
            {/* <LenisMouseEffect> */}

            <div className="w-full h-full flex items-center mb-5">
                <span className="inline-block mt-1 mr-5 w-[40px] h-[2px] bg-[rgba(255,255,255,.1)]"></span>
                <span
                    className="font-[600] text-[.8rem] md:text-[1rem] tracking-[2px] capitalize color-white opacity-80">{subtitle}</span>
            </div>
            <svg width="100%" height="100px">
                <text x="0%" y="60%" textAnchor="left">
                    {title}
                </text>
            </svg>
            {children}
            {/* </LenisMouseEffect> */}
        </div>
    )
}

export default Slide;