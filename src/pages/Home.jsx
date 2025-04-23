import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ContactBanner from "../components/ContactBanner";
import HomeSlider from '../components/HomeSlider';
import DevInfiniteScroll from '../components/InfiniteScroll/DevInfiniteScroll';
import PageWithPreload from "../components/PageWithPreload";
import { projects } from '../data';

const list = [
    { name: "Fullstack Developer" },
    { name: "Web Developer" },
    { name: "Source Code Management" },
];

export default function HomePage() {

    return (
        <PageWithPreload texts={["Welcome", "Let's Explore"]}>
            <motion.div
                initial={{ opacity: 0, filter: 'blur(20px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: '0.3' }}
            >
                <HomeSlider />
            </motion.div>


            <ExploreProjectsComponent />

            <div className="py-10 border-t border-b border-gray-900">
                <DevInfiniteScroll list={list} innerClassName={'!text-[1.5rem]'} innerClassNameSplit={'!text-[1rem]'} />
            </div>

            <ContactBanner />

        </PageWithPreload>
    )
}

const ExploreProjectsComponent = () => {
    return (
        <section className='relative'>
            <div className="pt-[120px] bg-lightBg">
                <div className="container">
                    <div className="ml-[100px] flex flex-col lg:flex-row items-end justify-between">
                        <div className="flex-1">
                            <h2 className="text-6xl font-semibold font-kanit text-[#10172B]">
                                <span className="block text-[56px] leading-[60px]">My Selected</span>
                                <span className="block text-[300px] leading-[211px] mt-5 ml-12">Work</span>
                            </h2>
                        </div>

                        <div className="mt-6 lg:mt-0">
                            <div className="bg-[#D9D0FF] relative">
                                <p className="text-lg text-[#3D3D3D] px-[48px] py-[44px] font-medium">
                                    We proudly showcase our creative design work, reflecting our passion for innovation and attention to detail. Each project highlights our commitment to delivering visually stunning and effective solutions.
                                </p>
                                <Link
                                    to="/projects"
                                    className="p-[22px] flex justify-center items-center text-emerald-400 hover:text-emerald-300 transition-colors  font-bold text-[20px] absolute top-full right-0 w-full bg-white"
                                >
                                    Browse All Projects
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="bg-center bg-cover bg-no-repeat pt-[200px] pb-20 bg-gray-900"
                style={{
                    backgroundImage: 'url("https://themexriver.com/wp/agenriver-demo/web-agency/wp-content/uploads/sites/20/2025/04/w2-bg.webp")',
                }}>
                <div className="container-wide">
                    <div className="grid grid-cols-4 gap-8 p-4">
                        <div className="col-span-1">
                            <ProjectCard project={projects[0]} />
                        </div>

                        <div className="col-span-1">
                            <ProjectCard project={projects[1]} />
                        </div>

                        <div className="col-span-2">
                            <ProjectCard project={projects[2]} />
                        </div>

                        <div className="col-span-2">
                            <ProjectCard project={projects[3]} />
                        </div>

                        <div className="col-span-1">
                            <ProjectCard project={projects[4]} />
                        </div>
                        <div className="col-span-1">
                            <ProjectCard project={projects[5]} />
                        </div>

                        <div className="col-span-1"></div>

                        <div className="col-span-1">
                            <ProjectCard project={projects[6]} />
                        </div>

                        <div className="col-span-1">
                            <ProjectCard project={projects[7]} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const ProjectCard = ({ project }) => {
    return (
        <Link to={project.slug} className="group overflow-hidden h-full flex flex-col">
            {/* Image container */}
            <div className="relative aspect-square overflow-hidden">
                <img
                    src={project.card.thumbnail}
                    alt={project.card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            {/* Content below image */}
            <div className="pt-4 flex-1 flex flex-col justify-between">
                <div className='text-white'>
                    <h2 className="text-xl font-bold text-white mb-2">{project.card.title}</h2>
                    <p className="text-[1.05rem] text-[#fff9] font-medium">
                        <span className='text-[#fff9] relative top-[-2px]'>//</span> {project.card.subTitle}
                    </p>
                </div>
            </div>
        </Link>
    )
}


