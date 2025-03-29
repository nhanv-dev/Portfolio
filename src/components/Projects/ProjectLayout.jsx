import React, { useEffect } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { useLoading } from "../Layout";

const ProjectLayout = ({ website, title, tag, image, children, role, client }) => {
	const { setIsLoaded } = useLoading();
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		document.title = title ? `${title.split(' - ')[0]} - Portfolio` : "Portfolio";
	}, [location.pathname, title]);

	return (
		<div className="dark:bg-darkBg dark:text-darkText min-h-screen py-10">
			<div className="container">
				<div className="mb-4 flex items-center justify-between gap-6">
					<button className="dark:text-gray-400 text-[0.95rem] font-bold flex items-center gap-2" onClick={() => { setIsLoaded(true); navigate(-1) }} >
						<IoArrowBackOutline size={"1.1rem"} />
						<span>Back to Projects</span>
					</button>
					{tag &&
						<p className="dark:text-gray-400 text-sm font-bold py-1 px-3 border-2 border-gray-500 rounded">
							{tag}
						</p>
					}
				</div>

				<div className="mb-6">
					<img className="rounded-xl w-full" src={image} alt="Project Preview" />
				</div>

				<div className="flex justify-between items-center gap-6">
					<h1 className="text-4xl font-bold">{title}</h1>
					<div className="flex items-center justify-end gap-3">
						<a href={website} target="_blank" rel="noopener noreferrer" className="dark:bg-lightBg dark:text-lightText px-4 pr-3 py-1 rounded-full flex items-center justify-center gap-2 font-semibold">
							<span className="text-sm">
								Github
							</span>
							<MdOutlineArrowOutward size={"1rem"} />
						</a>
						<a href={website} target="_blank" rel="noopener noreferrer" className="dark:bg-lightBg dark:text-lightText px-4 pr-3 py-1 rounded-full flex items-center justify-center gap-2 font-semibold">
							<span className="text-sm">
								Explore Now
							</span>
							<MdOutlineArrowOutward size={"1rem"} />
						</a>
					</div>
				</div>
				{children}
			</div>
		</div>
	);
};

export default ProjectLayout;


