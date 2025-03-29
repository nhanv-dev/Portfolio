import {useEffect, useRef} from 'react'
import {FaRegDotCircle} from 'react-icons/fa'

export default function ContactFixed({scrollbar}) {

    const containerRef = useRef(null)
    const contactRef = useRef(null)
    const overlayRef = useRef(null)

    function handleToggle(e) {
        const target = e.target.closest('button')
        if (containerRef.current.classList.contains('active')) {
            target.style.transform = 'rotate(-90deg)'
            contactRef.current.style.transform = 'translateX(100%)'
            overlayRef.current.style.visibility = 'hidden'
            containerRef.current.classList.remove('active')
            scrollbar.scrollbar?.updatePluginOptions('modal', {open: false})
        } else {
            target.style.transform = 'rotate(0deg)'
            contactRef.current.style.transform = 'translateX(0)'
            overlayRef.current.style.visibility = 'visible'
            containerRef.current.classList.add('active')
            scrollbar.scrollbar?.updatePluginOptions('modal', {open: true})
        }
    }

    function handleScrolling(e) {
        const scroll = e.offset.y
        containerRef.current.style.transform = `translateY(${scroll}px)`
        overlayRef.current.style.transform = `translateY(${scroll}px)`
    }

    useEffect(() => {
        overlayRef.current.addEventListener('click', (e) => {
            containerRef.current.querySelector('button.btn-contact').style.transform = 'rotate(-90deg)'
            contactRef.current.style.transform = 'translateX(100%)'
            overlayRef.current.style.visibility = 'hidden'
            containerRef.current.classList.remove('active')

            scrollbar.scrollbar?.updatePluginOptions('modal', {open: false})
        })
    }, [scrollbar.scrollbar])

    useEffect(() => {
        scrollbar.scrollbar?.addListener(handleScrolling)

        return () => {
            scrollbar.scrollbar?.removeListener(handleScrolling)
        }
    }, [scrollbar.scrollbar])

    return (
        <>
            <div ref={containerRef} className="fixed right-[1.25rem] top-[30px] z-[50]">
                <button onClick={handleToggle} tabIndex={-1} type={"button"}
                        style={{
                            transform: 'rotate(-90deg)',
                            transformOrigin: '118px center'
                        }}
                        className="btn-contact w-[125px] z-[100] cursor-pointer flex items-center justify-between transition-transform ease-out duration-[800ms] focus:outline-none">
                    <span className="text-[12px] font-semibold tracking-[5px] uppercase">Contact</span>
                    <span><FaRegDotCircle className="text-[14px]"/></span>
                </button>

                <div ref={contactRef}
                     className="py-[20px] bg-[#101010] z-[-1] translate-x-[100%] w-[100vw] lg:max-w-[70vw] h-[100vh] max-h-[680px] absolute top-[-100px] right-[-30px] transition-transform ease-out duration-[800ms]">
                    <div id="contact-fixed" className="block overflow-hidden h-full w-full ">
                        <div className="px-[20px] lg:px-[60px] lg:mr-[100px] md:mt-[80px]">
                            <h5 className="font-normal text-[15px] text-gray-400 tracking-[3px] mb-[10px]">
                                Get in touch
                            </h5>
                            <h3 className="font-extrabold text-[2.75rem] py-5">
                                How can I help you?
                            </h3>
                            <div
                                className="relative block w-full h-[2px] bg-[rgba(255,255,255,.2)] after:w-[200px] after:h-[2px] after:bg-white after:left-0 after:top-0 after:absolute "/>
                            <div className="my-[70px]">
                                <div className="flex flex-wrap mx-[-30px]">
                                    <div className="lg:w-[60%] w-full px-[30px]">
                                        <h3 className="font-bold mb-8 text-[22px] tracking-[2px] pl-[20px] block relative border-l-[2px]">
                                            Get in Touch with Me !
                                        </h3>
                                        <form className="mb-[100px]" tabIndex={-1}>
                                            <div className="mb-8">
                                                <label tabIndex={-1} htmlFor="" className="block mb-3 font-bold">Your
                                                    name *</label>
                                                <input type="text" tabIndex={-1} placeholder="Type your name"
                                                       className="cursor-pointer focus:outline-0 block bg-black font-semibold px-3 py-2 w-full"/>
                                            </div>
                                            <div className="mb-8">
                                                <label tabIndex={-1} htmlFor="" className="block mb-3 font-bold">Your
                                                    E-mail *</label>
                                                <input type="text" tabIndex={-1} placeholder="Type your Email Address"
                                                       className="cursor-pointer focus:outline-0 block bg-black font-semibold px-3 py-2 w-full"/>
                                            </div>
                                            <div className="mb-8">
                                                <label tabIndex={-1} htmlFor="" className="block mb-3 font-bold">What's
                                                    up</label>
                                                <textarea tabIndex={-1}
                                                          placeholder="Tell me about you and the world"
                                                          className="cursor-pointer focus:outline-0 block bg-black font-semibold px-3 py-2 w-full">

                                                </textarea>
                                            </div>
                                            <div className="group relative w-[max-content] float-right mr-[8px] ">
                                                <input type="submit" value="Send message" tabIndex={-1}
                                                       className="group-hover:translate-x-[8px] block group-hover:translate-y-[8px] transition-transform ease duration-[300ms] z-[1] opacity-100 relative uppercase tracking-[2px] font-semibold text-[13px] p-4 bg-black">
                                                </input>
                                                <div
                                                    className="group-hover:translate-x-[-8px] group-hover:translate-y-[-8px] transition-transform ease duration-[300ms] z-[-1] top-[8px] left-[8px] opacity-50 border-[1px] w-full h-full absolute"></div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="lg:w-[40%] w-full px-[30px]">
                                        <h3 className="font-bold mb-8 text-[22px] tracking-[2px] pl-[20px] block relative border-l-[2px]">
                                            Contact Info
                                        </h3>
                                        <div className="max-w-[300px] w-[max-content]">
                                            <h5 className="font-[700] text-[20px] text-primary mt-[20px] mb-[10px]">Address</h5>
                                            <p className="font-[500] text-sm text-gray-300 leading-6">80/4/3A Tan Hoa
                                                Dong Street, Disctrict 6, Ho Chi Minh City</p>
                                            <h5 className="font-[700] text-[20px] text-primary mt-[20px] mb-[10px]">Email</h5>
                                            <p className="font-[500] text-sm text-gray-300 leading-6">School Email:
                                                19130159@st.hcmuaf.edu.vn</p>
                                            <p className="font-[500] text-sm text-gray-300 leading-6">Personal Email:
                                                tthanhnhan1512@gmail.com</p>
                                            <h5 className="font-[700] text-[20px] text-primary mt-[20px] mb-[10px]">Phone</h5>
                                            <p className="font-[500] text-sm text-gray-300 leading-6">(+84)
                                                946286951</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={overlayRef}
                 className="bg-[rgba(0,0,0,.7)] invisible z-10 w-[100vw] h-[100vh] fixed top-[0px] right-[0px] left-[0px] bottom-[0px] transition-opacity ease-out duration-[800ms]"/>
        </>
    )
}

