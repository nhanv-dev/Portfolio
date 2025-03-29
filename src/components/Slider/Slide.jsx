import { motion } from "framer-motion";


function Slide({ isActive, title, subtitle, children }) {
    return (
        <div
            className={`px-10 py-5 absolute left-0 bottom-[100px] transition-opacity delay-100 duration-[300ms] ease-in-out z-20 
                ${isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-[-1] pointer-events-none"}`}
        >
            <div className="w-full h-full flex items-center mb-5">
                <span className="inline-block mt-1 mr-5 w-[40px] h-[2px] bg-[rgba(255,255,255,.5)]"></span>
                <span className="font-[600] text-[.8rem] md:text-[1rem] tracking-[2px] capitalize color-white opacity-80">
                    {subtitle}
                </span>
            </div>

            {/* Hiệu ứng h1 */}
            <motion.h1
                initial={{ opacity: 0, y: 50 }} // Bắt đầu mờ và dịch xuống
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Khi active thì hiện lên
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }} // Hiệu ứng mềm mại, chậm về cuối
                className="text-white text-[100px] font-extrabold uppercase"
            >
                {title}
            </motion.h1>
        </div>
    );
}

export default Slide;


export const SlideImage = ({ image, active, index }) => {
    const isActive = index === active;

    const textStyle = {
        WebkitTextStroke: '3px rgba(255, 255, 255, 0.5)',
    };

    return (
        <motion.div
            className="absolute w-full h-full bg-cover bg-center transition-transform"
            style={{ backgroundImage: `url(${image})` }}
            animate={{
                scale: isActive ? 1 : 0.88,
                opacity: isActive ? 1 : 0.6,
                filter: isActive ? "blur(0px)" : "blur(8px)",
                zIndex: isActive ? 10 : 0,
            }}
            transition={{
                duration: 1.8,
                ease: [0.16, 1, 0.3, 1],
            }}
        >
            {/* Lớp overlay màu đen nhẹ */}
            <div className="z-[1] absolute dark:bg-[rgba(0,0,0,0.1)] left-0 top-0 right-0 bottom-0"></div>

            <div className="z-[2] absolute font-bold right-[60px] bottom-[170px] text-[10vw] text-[rgba(255,255,255,0.1)]"
                style={textStyle}
            >
                {String(index + 1).padStart(2, "0")}
            </div>
        </motion.div>
    );
};


export const SlideButton = ({ number, image, handleClick, active }) => {
    return (
        <button onClick={handleClick} className={active + " w-[50px] z-[10] relative hover:w-[190px] transition-all duration-1000 ease-in-out"}>
            <div className="overflow-hidden w-full h-[100px] rounded-r-lg">
                <span
                    style={{ WebkitTextStroke: '.75px rgba(255,255,255, 1)' }}
                    className="z-10 transition-all duration-[300ms] ease-in-out absolute right-0 top-[-30px] tracking-widest font-extrabold text-[2.25rem] leading-[1.6] opacity-[0] text-[rgba(255,255,255,.05)]">
                    {number}
                </span>
                <div
                    className="w-full h-full origin-center bg-center bg-fixed bg-clip-content bg-cover relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-20 after:rounded-r-lg"
                    style={{ backgroundImage: `url(${image})` }}>
                </div>
            </div>
        </button>
    )
}