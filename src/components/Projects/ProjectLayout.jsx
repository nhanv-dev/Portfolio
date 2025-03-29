import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ProjectLayout = ({ website, title, tag, image, children, role, client }) => {

	const navigate = useNavigate();

	return (
		<div className="dark:bg-darkBg dark:text-darkText min-h-screen py-10">
			<div className="container">

				<div className="mb-4 flex items-center justify-between gap-6">
					<button className="dark:text-gray-400 text-[0.95rem] font-bold flex items-center gap-2" onClick={() => navigate(-1)} >
						<IoArrowBackOutline size={"1.1rem"} />
						<span>Back to Projects</span>
					</button>
					{tag &&
						<p className="dark:text-gray-400 text-sm font-bold py-1 px-3 border border-gray-400">
							{tag}
						</p>
					}
				</div>

				<div className="mb-6">
					<img className="rounded-xl w-full" src={image} alt="Project Preview" />
				</div>

				<div className="flex justify-between items-center">
					<h1 className="text-4xl font-bold">{title}</h1>
					<a href={website} target="_blank" rel="noopener noreferrer" className="dark:bg-lightBg dark:text-lightText px-4 pr-3 py-1 rounded-full flex items-center justify-center gap-2 font-semibold">
						<span className="text-sm">
							Explore Now
						</span>
						<MdOutlineArrowOutward size={"1rem"} />
					</a>
				</div>
				{children}
			</div>
		</div>
	);
};

export default ProjectLayout;


