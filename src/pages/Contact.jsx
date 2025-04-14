import PageWithPreload from "../components/PageWithPreload";

export default function ContactPage() {
    return (
        <PageWithPreload texts={["Welcome", "Let's Explore"]}>
            <Contact />
        </PageWithPreload>
    )
}


function Contact() {

    return (
        <section id="contact" className="bg-[#121212]">
            <div className="container py-[120px]">
                <div className="px-4 py-2 bg-[#121212] w-[max-content] font-semibold text-[14px] tracking-[3px] text-[#bbb]">Hello</div>
                <div className=" mb-[60px]">
                    <h3 className="pb-6 font-bold text-[2.5rem] leading-[3.5rem] tracking-[2px] my-3">Contact Me</h3>
                    <div className="relative block w-full h-[2px] bg-[#ffffff14] after:w-[200px] after:h-[2px] after:bg-[white] after:left-0 after:top-0 after:absolute " />
                </div>

                <div className="block h-full w-full ">
                    <div className="flex flex-wrap mx-[-30px]">
                        <div className="lg:w-[60%] w-full px-[30px]">
                            <h3 className="font-bold mb-8 text-[22px] tracking-[2px] pl-[20px] block relative border-l-[2px]">
                                Get in Touch with Me !
                            </h3>
                            <form>
                                <div className="mb-8">
                                    <label htmlFor="" className="block mb-3 font-bold">Your name *</label>
                                    <input type="text" tabIndex="-1" placeholder="Type your name" className="cursor-pointer focus:outline-0 block bg-black font-semibold px-3 py-2 w-full" />
                                </div>
                                <div className="mb-8">
                                    <label htmlFor="" className="block mb-3 font-bold">Your E-mail *</label>
                                    <input type="text" tabIndex="-1" placeholder="Type your Email Address" className="cursor-pointer focus:outline-0 block bg-black font-semibold px-3 py-2 w-full" />
                                </div>
                                <div className="mb-8">
                                    <label htmlFor="" className="block mb-3 font-bold">What's up</label>
                                    <textarea type="text" tabIndex="-1" placeholder="Tell me about you and the world" className="cursor-pointer focus:outline-0 block bg-black font-semibold px-3 py-2 w-full" >

                                    </textarea>
                                </div>
                                <div className="group relative w-[max-content] float-right mr-[8px] ">
                                    <button type="submit" tabIndex="-1"
                                        className="group-hover:translate-x-[8px] group-hover:translate-y-[8px] transition-transform ease duration-[300ms] z-[2] opacity-100 relative uppercase tracking-[2px] font-semibold text-[13px] p-4 bg-black">
                                        Send message
                                    </button>
                                    <div className="group-hover:translate-x-[-8px] group-hover:translate-y-[-8px] transition-transform ease duration-[300ms] z-[1] top-[8px] left-[8px] opacity-50 border-[1px] w-full h-full absolute"></div>
                                </div>
                            </form>
                        </div>
                        <div className="lg:w-[40%] w-full px-[30px]">
                            <h3 className="font-bold mb-8 text-[22px] tracking-[2px] pl-[20px] block relative border-l-[2px]">
                                Contact Info
                            </h3>
                            <div className="max-w-[300px] w-[max-content]">
                                <h5 className="font-[700] text-[20px] text-primary mt-[20px] mb-[10px]">Address</h5>
                                <p className="font-[500] text-sm text-gray-300 leading-6">80/4/3A Tan Hoa Dong Street, Disctrict 6, Ho Chi Minh City</p>
                                <h5 className="font-[700] text-[20px] text-primary mt-[20px] mb-[10px]">Email</h5>
                                <p className="font-[500] text-sm text-gray-300 leading-6">School Email: 19130159@st.hcmuaf.edu.vn</p>
                                <p className="font-[500] text-sm text-gray-300 leading-6">Personal Email: tthanhnhan1512@gmail.com</p>
                                <h5 className="font-[700] text-[20px] text-primary mt-[20px] mb-[10px]">Phone</h5>
                                <p className="font-[500] text-sm text-gray-300 leading-6">(+84) 946 286 951</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

