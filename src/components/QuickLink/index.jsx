import { useEffect, useRef, } from 'react'
import { GoDotFill } from "react-icons/go";

export default function QuickLink({ links }) {
    const containerRef = useRef(null)

    // function handleScrollQuickLink(e) {
    //     containerRef.current.style.top = `${window.innerHeight / 2 + e.offset.y}px`
    // }

    function scrollIntoView(view) {
        // scrollbar.scrollbar.scrollIntoView(document.querySelector(view))
    }

    // useEffect(() => {
    //     function activeQuickLink({ offset }) {
    //         const buttons = containerRef.current.querySelectorAll('button')
    //         let container = [...links.map(link => link.id)]
    //         container = container.map((item) => document.querySelector(item))
    //         container.forEach((item, index) => {
    //             if (item) {
    //                 let isActive = offset.y >= item.offsetTop - 300 && (container[index + 1] ? offset.y < container[index + 1].offsetTop - 300 : true)
    //                 if (isActive) {
    //                     buttons[index].classList.add('border-[2px]')
    //                 } else {
    //                     buttons[index].classList.remove('border-[2px]')
    //                 }
    //             }

    //         })
    //     }
    //     scrollbar.scrollbar?.addListener(handleScrollQuickLink)
    //     scrollbar.scrollbar?.addListener(activeQuickLink)
    //     return () => {
    //         scrollbar.scrollbar?.removeListener(handleScrollQuickLink)
    //         scrollbar.scrollbar?.removeListener(activeQuickLink)
    //     }
    // }, [links, scrollbar.scrollbar])

    useEffect(() => {
        const position = window.innerHeight / 2
        containerRef.current.style.top = position + 'px'
    }, [])

    return (
        <div ref={containerRef} className="fixed right-[1rem] translate-x-[0%] translate-y-[-50%] z-[10]">
            <div className="flex flex-col gap-1 w-[max-content] h-[max-content]">
                {links.map((link, index) => (
                    <Button key={index} scrollIntoView={() => scrollIntoView(link.id)} name={link.title}></Button>
                ))}
            </div>
        </div>
    )
}

const Button = ({ scrollIntoView, name }) => {
    return (
        <button onClick={scrollIntoView} className="group relative z-[100] h-[24px] w-[24px] cursor-pointer rounded-full transition-all duration-[50ms] ease">
            <GoDotFill className="text-[22px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
            <span onClick={scrollIntoView}
                className="group-hover:opacity-100 group-hover:translate-y-[-50%]
                        group-hover:visible invisible  translate-y-[0] items-center 
                        opacity-0 absolute top-[50%] left-0 translate-x-[-100%] w-[max-content] 
                        transition-translate duration-300 ease-in-out leading-5 tracking-[1.5px] 
                        uppercase font-bold text-[13px] text-center pr-3 text-[rgba(255,255,255,.6)] block"
            >
                {name}
            </span>
        </button>
    )
}