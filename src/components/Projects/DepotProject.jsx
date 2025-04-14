import React from "react";
import Masonry from "../Mansory";
import ProjectLayout from "./ProjectLayout";

const DepotProject = ({ item, index }) => {

	return (
		<ProjectLayout
			index={index}
			tag={"2024"}
		>
			<div className="mt-6 flex gap-10">
				<div className="flex-1">
					<p className="text-[1rem] text-gray-400 font-medium leading-7">
						{item.card.description}
					</p>
					<div className="flex flex-wrap gap-2 mt-4">
						{['React', 'Redux', 'Ckeditor', 'Material UI', 'Spring Boot', 'MySQL', 'Hibernate', 'Spring Security'].map(tag => (
							<span key={tag} className="dark:bg-gray-800 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-semibold">{tag}</span>
						))}
					</div>
				</div>
				<div className="min-w-[250px]">
					<div className="text-gray-300 text-sm">
						<p className="mb-2">
							<span className="font-bold text-gray-400 inline-block w-[65px]">Roles:</span>
							<span className="font-semibold">Web Developer</span>
						</p>
						<p className="mb-2">
							<span className="font-bold text-gray-400 inline-block w-[65px]">Client:</span>
							<span className="font-semibold">Personal Project</span>
						</p>
					</div>
				</div>
			</div>

			<div className="mt-6">
				<h2 className="text-xl font-bold">Overview</h2>
				<div className="mt-4">
					<p className="text-[1rem] text-gray-400 font-medium leading-7">
						🚀 Built with Node.js, Express.js, and MongoDB, Noonpost is a fast and scalable blogging platform designed for seamless content creation.
						Utilizing SSR with Handlebars, it ensures optimal performance, SEO-friendly rendering, and a smooth user experience.
						Whether you're publishing articles or managing content, Noonpost delivers efficiency and flexibility in a modern web environment.
					</p>
				</div>
			</div>
			<div className="mt-6">
				<h2 className="text-xl font-bold">Features</h2>
				<div className="mt-4 text-[1rem] dark:text-gray-400 font-medium">
					<ul className="flex flex-col gap-4">
						<li>✅ <strong className="dark:text-white">Seamless Writing Experience</strong> – A distraction-free editor with real-time previews, so you can focus on your words.</li>
						<li>⚡ <strong className="dark:text-white">Blazing-Fast Performance</strong> – Built with <strong className="dark:text-white">Node.js & Express.js</strong>, ensuring smooth navigation and quick load times.</li>
						<li>📑 <strong className="dark:text-white">SEO-Optimized with SSR</strong> – Server-side rendering with <strong className="dark:text-white">Handlebars</strong> boosts search engine visibility and improves content reach.</li>
						<li>🌍 <strong className="dark:text-white">Scalable & Flexible</strong> – Powered by <strong className="dark:text-white">MongoDB</strong>, allowing efficient content management and scalability for high-traffic blogs.</li>
						<li>🎨 <strong className="dark:text-white">Customizable Themes</strong> – Personalize your blog with beautifully designed themes and layouts that fit your style.</li>
						<li>📝 <strong className="dark:text-white">Effortless Draft & Publishing</strong> – Save drafts, schedule posts, and publish with a single click.</li>
						<li>💬 <strong className="dark:text-white">Interactive Comments</strong> – Engage with your audience through a dynamic commenting system.</li>
						<li>🔗 <strong className="dark:text-white">Social Sharing Made Easy</strong> – Share your posts effortlessly across multiple platforms with built-in social media integration.</li>
						<li>🚀 <strong className="dark:text-white">Ready to start your blogging journey?</strong> Experience <strong className="dark:text-white">Noonpost</strong> today and bring your ideas to life!</li>
					</ul>
				</div>
			</div>

			{item?.images?.length > 0 &&
				<div className="mt-6" >
					<h2 className="text-xl font-bold">Design Screens</h2>
					<div className="mt-4 mx-[-10px]">
						<Masonry data={item.images} />
					</div>
				</div>
			}
		</ProjectLayout>
	);
};

export default DepotProject;

