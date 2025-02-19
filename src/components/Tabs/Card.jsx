import React from "react";

const Card = ({ item, index, show }) => {
    let className = "group mt-[0px] "
    if (index % 3 === 2) className += "lg:mt-[60px] "
    if (index % 3 === 1) className += "lg:mt-[30px] "
    if (index % 3 === 0) className += "lg:mt-[0px] "
    if (index % 2 === 1) className += "md:mt-[30px] "
    if (index % 2 === 0) className += "md:mt-[0px] "

    return (
        <div className={`${className} block`}>
            <a href={item.website} target="_blank" rel="noreferrer" tabIndex={-1}
                className="outline-none group relative block mb-5 w-full h-[300px] cursor-pointer">
                <div
                    className="absolute top-0 left-0 right-0 bottom-0 after:absolute after:top-[-1px] after:left-[-1px] after:right-[-1px] after:bottom-[-1px] after:bg-black after:opacity-[.3]">
                    <div style={{ backgroundImage: `url(${item.card_image})` }}
                        className="w-full h-full bg-cover bg-no-repeat bg-center" />
                </div>
                <div
                    className="absolute top-[-1px] left-[-1px] bottom-[-1px] w-0 group-hover:w-[10px] bg-black transition-all duration-500" />
                <div
                    className="absolute top-[-1px] right-[-1px] bottom-[-1px] w-0 group-hover:w-[10px] bg-black transition-all duration-500" />
                <div
                    className="absolute left-[-1px] right-[-1px] top-[-1px] h-0 group-hover:h-[10px] bg-black transition-all duration-500" />
                <div
                    className="absolute left-[-1px] right-[-1px] bottom-[-1px] h-0 group-hover:h-[10px] bg-black transition-all duration-500" />
            </a>
            <div className="pl-4 border-l-2">
                <p className="text-[1.25rem] font-bold mb-1 cursor-pointer outline-none" tabIndex={-1}
                    dangerouslySetInnerHTML={{ __html: item.card_title }}>
                </p>
                <div
                    className="relative overflow-hidden leading-6 mt-2 text-[#14bfb5] font-bold text-[14px]">
                    <p className="translate-y-[0] group-hover:translate-y-[-100%] transition-all duration-300 ease-in-out"
                        dangerouslySetInnerHTML={{ __html: item.card_desc }}></p>
                    {item.images.length > 0 ?
                        <button
                            type="button"
                            tabIndex={-1}
                            onClick={() => show(index)}
                            className="font-bold block absolute top-[100%] left-0 group-hover:translate-y-[-100%] transition-all duration-300 ease-in-out">
                            Show pictures
                        </button> :
                        <button
                            type="button"
                            tabIndex={-1}
                            className="font-bold block absolute top-[100%] left-0 group-hover:translate-y-[-100%] transition-all duration-300 ease-in-out">
                            Don't have pictures
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}
export default Card;
