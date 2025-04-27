import React, { useEffect } from "react";
import { IoArrowBackOutline, IoChevronBack, IoChevronForward } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { projects } from "../../data";
import { useLoading } from "../LoadingProvider";

const ProjectLayout = ({ tag, children, index }) => {
	const { handleNavigationWithOverlay } = useLoading();
	const location = useLocation();
	const project = projects[index];
	const prevIndex = index === 0 ? null : index - 1;
	const nextIndex = index === projects.length - 1 ? null : index + 1;
	const navigate = useNavigate();

	useEffect(() => {
		document.title = project.card.title ? `${project.card.title} - Portfolio` : "Portfolio";
	}, [location.pathname, project.card.title]);

	const handleNavigation = (e, route) => {
		e.preventDefault();
		handleNavigationWithOverlay(route, navigate);
	}

	return (
		<div className="bg-darkBg min-h-screen py-10">
			<div className="container">
				<div className="mb-4 flex items-center justify-between gap-6">
					<Link to={"/projects"} onClick={(e) => handleNavigation(e, "/projects")} className="text-gray-400 text-[0.95rem] font-bold flex items-center gap-2" >
						<IoArrowBackOutline size={"1.1rem"} />
						<span>Back to Projects</span>
					</Link>
					{tag &&
						<p className="text-gray-400 text-sm font-bold py-1 px-3 border-2 border-gray-500 rounded">
							{tag}
						</p>
					}
				</div>

				<div className="rounded-xl mb-6 h-[300px] overflow-hidden">
					<div
						transition={{ duration: 0.8 }}
						className="w-full h-full bg-center bg-cover"
						style={{
							backgroundImage: `url(${project.card.thumbnail})`,
						}}
					></div>
				</div>

				<h1 className="text-4xl font-bold">{project.card.title} - {project.card.subTitle}</h1>

				{children}
				{(prevIndex != null || nextIndex != null) &&
					<div className="flex w-full items-center justify-between gap-6 mt-20">
						{prevIndex != null ? (
							<div>
								<Link to={projects[prevIndex].slug} onClick={(e) => handleNavigation(e, projects[prevIndex].slug)} className="min-w-[180px] flex items-center justify-between gap-6 border-2 rounded-lg p-3 border-gray-800 hover:border-white transition-all duration-300">
									<IoChevronBack />
									<div className="flex flex-col items-end text-[0.95rem] font-medium">
										<span className="text-gray-400">Prev</span>
										<span className="font-semibold">{projects[prevIndex].card.title}</span>
									</div>
								</Link>
							</div>
						) : <div></div>}
						{nextIndex != null ? (
							<div>
								<Link to={projects[nextIndex].slug} onClick={(e) => handleNavigation(e, projects[nextIndex].slug)} className="min-w-[180px] flex items-center justify-between gap-6 border-2 rounded-lg p-3 border-gray-800 hover:border-white transition-all duration-300">
									<div className="flex flex-col items-start text-[0.95rem] font-medium">
										<span className="text-gray-400">Next</span>
										<span className="font-semibold">{projects[nextIndex].card.title}</span>
									</div>
									<IoChevronForward />
								</Link>
							</div>
						) : <div>{nextIndex}</div>}
					</div>
				}
			</div>
		</div>
	);
};

export default ProjectLayout;


