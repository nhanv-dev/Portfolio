import { useNavigate, useParams } from "react-router-dom";
import FadeContent from "../components/FadeContent";
import { projects } from "../data";
import GlitchText from "../components/GlitchText";
import { IoArrowBackOutline } from "react-icons/io5";

export default function ProjectDetailPage() {
    const { slug } = useParams(); // Lấy slug từ URL
    const project = projects.find(p => p.slug === `/projects/${slug}`); // Tìm project phù hợp
    const navigate = useNavigate();

    // Xử lý trường hợp slug không hợp lệ
    if (!project?.component) {
        return (
            <div className="container py-20 min-h-[60vh]">
                <GlitchText speed={1} enableShadows={true}>
                    Project not found
                </GlitchText>
                <div className="mt-20 flex items-center justify-center">
                    <button className="dark:bg-white py-2 px-6 rounded-full dark:text-black text-[0.95rem] font-bold flex items-center gap-2" onClick={() => navigate(-1)} >
                        <IoArrowBackOutline size={"1.1rem"} />
                        <span>Back to Projects</span>
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div>
            <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
                <project.component item={project} />
            </FadeContent>
        </div>
    )
}