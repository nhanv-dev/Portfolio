import { FiDownload } from 'react-icons/fi';

function About() {
    return (
        <section id="about" className="transition-theme bg-lightBg dark:bg-darkBg">
            <div className="container py-[120px]">
                {/* Tiêu đề */}
                <div className="px-4 py-2 bg-darkBg w-[max-content] font-semibold text-[14px] tracking-[3px] text-secondary dark:text-darkText">
                    Hello
                </div>
                <div className="mb-[60px]">
                    <h3 className="pb-6 font-bold text-[2.5rem] leading-[3.5rem] tracking-[2px] my-3 text-lightText dark:text-darkText">
                        About Me
                    </h3>
                    <div className="relative block w-full h-[2px] bg-borderLight after:w-[200px] after:h-[2px] after:bg-primary after:left-0 after:top-0 after:absolute" />
                </div>

                {/* Nội dung */}
                <div className="flex flex-row flex-wrap">
                    <div className="basis-full md:basis-1/2 md:pr-10 mb-10">
                        <h5 className="text-primary font-bold text-[1.3rem]">A little bit about myself</h5>
                        <div className="py-5 my-5 border-b-2 border-t-2 border-borderLight font-semibold text-[14px] tracking-[.8px] leading-[24px] text-lightText dark:text-darkText">
                            <p className="mb-3">
                                I’m Trần Thanh Nhân, a front-end developer and a java developer. Now, I am studying at the NongLam University and my major is information technology.
                            </p>
                            <p className="mb-3">
                                I learned about <span className="text-primary font-bold">Java</span>,{' '}
                                <span className="text-primary font-bold">Javascript</span> programming languages and OOP programming in Java.
                            </p>
                        </div>

                        {/* Button */}
                        <div className="group relative w-[max-content] float-left mr-[8px]">
                            <button
                                type="submit"
                                tabIndex={-1}
                                className="flex items-center gap-4 group-hover:translate-x-[8px] group-hover:translate-y-[8px] transition-transform ease duration-[300ms] z-[2] opacity-100 relative tracking-[2px] font-bold text-[14px] text-lightText dark:text-darkText px-4 py-2 bg-lightBg2 dark:bg-darkBg2"
                            >
                                <FiDownload className="text-[1.2rem] text-primary" /> Download CV
                            </button>
                            <div className="group-hover:translate-x-[-8px] group-hover:translate-y-[-8px] transition-transform ease duration-[300ms] z-[1] top-[8px] left-[8px] opacity-50 border-[1px] w-full h-full absolute"></div>
                        </div>
                    </div>
                    {/* Kỹ năng */}
                    <div className="basis-full md:basis-1/2 md:pl-10">
                        {[
                            { skill: 'Java', level: 70, color: 'from-primary to-primary' },
                            { skill: 'Spring Boot', level: 60, color: 'from-primary to-primary' },
                            { skill: 'HTML/CSS', level: 70, color: 'from-primary to-primary' },
                            { skill: 'JavaScript', level: 80, color: 'from-primary to-primary' },
                            { skill: 'React JS', level: 60, color: 'from-primary to-primary' },
                            { skill: 'Angular', level: 25, color: 'from-primary to-primary' },
                            { skill: 'Node JS', level: 55, color: 'from-primary to-primary' },
                        ].map(({ skill, level, color }) => (
                            <div key={skill} className="mb-7">
                                <h5 className="font-bold text-[0.9rem] tracking-[.5px] mb-3 text-lightText dark:text-darkText">
                                    {skill}
                                </h5>
                                <div className="relative h-[4px] w-full flex items-center">
                                    {/* Background bar */}
                                    <div className="w-full h-[2px] rounded-full bg-[rgba(255,255,255,.2)]"></div>

                                    {/* Progress bar with gradient */}
                                    <div
                                        className={`absolute left-0 top-0 bottom-0 rounded-full bg-gradient-to-r ${color}`}
                                        style={{ width: `${level}%` }}
                                    ></div>

                                    {/* Percentage label */}
                                    <p
                                        className="absolute bottom-[100%] translate-x-[-50%] mb-2 font-bold text-[.8rem] text-lightText dark:text-darkText"
                                        style={{ left: `${level}%` }}
                                    >
                                        {level}%
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
