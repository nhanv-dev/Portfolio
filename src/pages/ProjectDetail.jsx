import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import ContactBanner from "../components/ContactBanner";
import GlitchText from "../components/GlitchText";
import { useLoading } from "../components/LoadingProvider";
import { projects } from "../data";

export default function ProjectDetailPage() {
    const { setIsLoaded } = useLoading();
    const { slug } = useParams(); // Lấy slug từ URL
    const index = projects.findIndex(p => p.slug === `/projects/${slug}`); // Tìm project phù hợp
    const project = projects[index];
    const navigate = useNavigate();

    // Xử lý trường hợp slug không hợp lệ
    if (!project?.component) {
        return (
            <div className="container py-[140px] min-h-[60vh]">
                <div className="flex items-center justify-center relative">
                    <GlitchText speed={1} enableShadows={true}>
                        Project not found
                    </GlitchText>
                </div>
                <div className="mt-20 flex items-center justify-center">
                    <button
                        type="button"
                        className="bg-lightBg py-2 px-6 rounded-full text-black text-[0.95rem] font-bold flex items-center gap-2"
                        onClick={() => { setIsLoaded(true); navigate(-1) }}
                    >
                        <IoArrowBackOutline size={"1.1rem"} />
                        <span>Back to Projects</span>
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div>
            <project.component item={project} index={index} />
            <ContactBanner />
        </div>
    )
}