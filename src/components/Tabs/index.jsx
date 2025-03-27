import React from 'react';
import { projects } from "../../data";
import Card from "./Card";

export default function Tabs() {
    // const [active, setActive] = useState(-1);
    // const [top, setTop] = useState(0);
    // const containerRef = useRef(null)

    // function show(index) {
    //     setActive(index)
    //     containerRef.current.style.transform = `translateY(${top}px)`;
    //     scrollbar.scrollbar?.updatePluginOptions('modal', { open: true });
    // }

    // function hidden() {
    //     setActive(-1);
    //     scrollbar.scrollbar?.updatePluginOptions('modal', { open: false });
    // }

    // function handleScrollingTabs(e) {
    //     if (containerRef?.current?.style) containerRef.current.style.transform = `translate3d(0,${e.offset.y}px,0)`
    //     // setTop(e.offset.y);
    // }

    // useEffect(() => {
    //     scrollbar.scrollbar?.addListener(handleScrollingTabs)
    //     return () => scrollbar.scrollbar?.removeListener(handleScrollingTabs)
    // }, [scrollbar.scrollbar])

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {/* // show={show} */}
                {projects.map((project, index) => (
                    <Card key={project.slug} item={project} index={index} />
                ))}
                {/* <div ref={containerRef}
                    className={`${active !== -1 ? 'visible opacity-100' : 'invisible opacity-0'} transition-opacity duration-500 backdrop-blur w-[100vw] h-[100vh] left-0 top-0 fixed z-[1000] flex items-center bg-[rgba(0,0,0,0.7)]`}>
                    <Slide active={active} projects={projects} hidden={hidden} />
                    <button tabIndex={-1} onClick={hidden}
                        className="z-[100] cursor-pointer absolute right-[22px] top-[22px] w-[32px] h-[32px] rounded-full bg-[rgba(255,255,255,.7)] hover:bg-white text-black flex items-center justify-center ">
                        <IoClose className="text-2xl" />
                    </button>
                </div> */}
            </div>
        </div>
    );
}

// const Slide = ({ active, projects, hidden }) => {
//     const [project, setProject] = useState(null);
//     const [image, setImage] = useState(null);
//     const [index, setIndex] = useState(-1);
//     const [loaded, setLoaded] = useState(false);

//     useEffect(() => {
//         const keyboardFunction = (event) => {
//             if (event.key === "Escape") {
//                 hidden();
//             }
//             // else if (event.key === 'ArrowRight') {
//             //     handleNextImage()
//             // } else if (event.key === 'ArrowLeft') {
//             //     handlePrevImage()
//             // }
//         }

//         if (active === -1) {
//             setProject(null);
//             document.removeEventListener("keydown", keyboardFunction, false);
//         } else {
//             setProject(projects[active])
//             document.addEventListener("keydown", keyboardFunction, false);
//         }
//         return () => {
//             setIndex(-1)
//             setProject(null);
//             setLoaded(false);
//             document.removeEventListener("keydown", keyboardFunction, false);
//         }
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [active])

//     useEffect(() => {
//         if (project) {
//             setImage(project.images[index])
//             setIndex(0)
//             setLoaded(true)
//         } else {
//             setImage(null)
//             setIndex(-1)
//             setLoaded(false)
//         }
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [project])

//     useEffect(() => {
//         if (index === -1) {
//             setImage(null)
//         } else {
//             setImage(project.images[index])
//         }
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [index])

//     const handleNextImage = () => {
//         if (index === project.images.length - 1)
//             setIndex(0)
//         else
//             setIndex(prev => prev + 1)
//     }

//     const handlePrevImage = () => {
//         if (index === 0)
//             setIndex(project.images.length - 1)
//         else
//             setIndex(prev => prev - 1)
//     }

//     return loaded && (
//         <div className="relative w-full h-full flex items-center justify-center">
//             <div
//                 className="relative lg:w-[950px] z-50 transition-all duration-300 flex items-center justify-center">
//                 <button tabIndex={-1} onClick={handlePrevImage}
//                     className={"absolute top-[50%] left-[-50px] translate-y-[-50%] z-50 font-semibold text-4xl text-black outline-none flex items-center justify-center w-[32px] h-[32px] bg-[rgba(255,255,255,.7)] hover:bg-white rounded-full"}>
//                     <BsArrowLeftShort />
//                 </button>
//                 <div className="rounded-md border border-white min-h-[300px] min-w-[800px] relative">
//                     <img src={image} alt="Image Tab" className={`h-full rounded-md`} />
//                 </div>
//                 {/* <ProgressiveImage src={image} placeholder={'loading'}>
//                     {(src, loading) => (
//                         <div className="rounded-md border border-white min-h-[300px] min-w-[800px] relative">
//                             {loading ?
//                                 <div id={"loader"} className={"loader-new rounded-md"}>
//                                     <div className="clock-loader"></div>
//                                 </div> :
//                                 <img
//                                     src={src}
//                                     alt="loading"
//                                     className={`h-full rounded-md`}
//                                 />
//                             }
//                         </div>
//                     )}
//                 </ProgressiveImage> */}
//                 <button tabIndex={-1} onClick={handleNextImage}
//                     className={"absolute top-[50%] right-[-50px] translate-y-[-50%] z-50 font-semibold text-4xl text-black outline-none flex items-center justify-center w-[32px] h-[32px] bg-[rgba(255,255,255,.7)] hover:bg-white rounded-full"}>
//                     <BsArrowRightShort />
//                 </button>
//                 <p onClick={handleNextImage}
//                     className={"absolute left-[50%] translate-x-[-50%] bottom-[-60px] px-3 rounded-full z-50 font-semibold text-[0.95rem] text-black flex items-center justify-center bg-[rgba(255,255,255,.7)] hover:bg-white"}>
//                     {index + 1} / {project?.images?.length || 0}
//                 </p>
//             </div>
//         </div>
//     )
// }

