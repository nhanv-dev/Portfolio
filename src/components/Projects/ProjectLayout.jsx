import React, { useEffect } from "react";
import { IoArrowBackOutline, IoChevronBack, IoChevronForward } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { projects } from "../../data";
import { useLoading } from "../Layout";

const ProjectLayout = ({ tag, children, index }) => {
	const { setIsLoaded } = useLoading();
	const location = useLocation();
	const project = projects[index];
	const prevIndex = index === 0 ? null : index - 1;
	const nextIndex = index === projects.length - 1 ? null : index + 1;

	useEffect(() => {
		document.title = project.card_title ? `${project.card_title.split(' - ')[0]} - Portfolio` : "Portfolio";
	}, [location.pathname, project.card_title]);

	return (
		<div className="dark:bg-darkBg dark:text-darkText min-h-screen py-10">
			<div className="container">
				<div className="mb-4 flex items-center justify-between gap-6">
					<Link to={"/projects"} className="dark:text-gray-400 text-[0.95rem] font-bold flex items-center gap-2" onClick={() => { setIsLoaded(true); }} >
						<IoArrowBackOutline size={"1.1rem"} />
						<span>Back to Projects</span>
					</Link>
					{tag &&
						<p className="dark:text-gray-400 text-sm font-bold py-1 px-3 border-2 border-gray-500 rounded">
							{tag}
						</p>
					}
				</div>

				<div className="mb-6">
					<img className="rounded-xl w-full" src={project.thumbnail} alt="Project Preview" />
				</div>

				<div className="flex justify-between items-center gap-6">
					<h1 className="text-4xl font-bold">{project.card_title}</h1>
					<div className="flex items-center justify-end gap-3">
						<a href={project.website} target="_blank" rel="noopener noreferrer" className="dark:bg-lightBg dark:text-lightText px-4 pr-3 py-1 rounded-full flex items-center justify-center gap-2 font-semibold">
							<span className="text-sm">
								Github
							</span>
							<MdOutlineArrowOutward size={"1rem"} />
						</a>
						<a href={project.website} target="_blank" rel="noopener noreferrer" className="dark:bg-lightBg dark:text-lightText px-4 pr-3 py-1 rounded-full flex items-center justify-center gap-2 font-semibold">
							<span className="text-sm">
								Explore Now
							</span>
							<MdOutlineArrowOutward size={"1rem"} />
						</a>
					</div>
				</div>
				{children}
				{(prevIndex != null && nextIndex != null) &&
					<div className="flex w-full items-center justify-between gap-6 mt-20">
						{prevIndex != null ? (
							<div>
								<Link to={projects[prevIndex].slug} className="min-w-[180px] flex items-center justify-between gap-6 border-2 rounded-lg p-3 dark:border-gray-800">
									<IoChevronBack />
									<div className="flex flex-col items-end text-sm font-medium">
										<span className="dark:text-gray-400">Prev</span>
										<span className="font-semibold">{projects[prevIndex].card_title}</span>
									</div>
								</Link>
							</div>
						) : <div></div>}
						{nextIndex != null ? (
							<div>
								<Link to={projects[nextIndex].slug} className="min-w-[180px] flex items-center justify-between gap-6 border-2 rounded-lg p-3 dark:border-gray-800">
									<div className="flex flex-col items-start text-sm font-medium">
										<span className="dark:text-gray-400">Next</span>
										<span className="font-semibold">{projects[nextIndex].card_title}</span>
									</div>
									<IoChevronForward />
								</Link>
							</div>
						) : <div></div>}
					</div>
				}
			</div>
		</div>
	);
};

export default ProjectLayout;


