import React from "react";
import Masonry from "../Mansory";
import ProjectLayout from "./ProjectLayout";

const AmigoTasksProject = ({ item, index }) => {

	return (
		<ProjectLayout
			index={index}
			tag={"2022"}
		>
			<div className="mt-6 flex gap-10">
				<div className="flex-1">
					<p className="text-[1rem] text-gray-400 font-medium leading-7">
						{item.card.description}
					</p>
					<div className="flex flex-wrap gap-2 mt-4">
						{['Next.js', 'React', 'NestJS', 'MongoDB', 'Google Authentication', 'OAuth', 'Task Management', 'Note-taking', 'Material UI', 'JWT Authentication'].map(tag => (
							<span key={tag} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm font-semibold">{tag}</span>
						))}
					</div>
				</div>
				<div className="min-w-[250px] text-gray-300 text-[0.95rem]">
					<p className="mb-2">
						<span className="font-bold text-gray-400 inline-block w-[65px]">Roles:</span>
						<span className="font-semibold">Web Developer</span>
					</p>
					<p className="mb-5">
						<span className="font-bold text-gray-400 inline-block w-[65px]">Client:</span>
						<span className="font-semibold">Personal Project</span>
					</p>
					<div className="flex gap-2">
						<a href={item.github} target="_blank" rel="noopener noreferrer" className="flex-1 border-2 p-3 border-gray-800 hover:border-white transition-all duration-[800] text-darkText px-4 py-1.5 rounded-sm flex items-center justify-center gap-2 text-[0.95rem] font-medium">
							<span>Github</span>
						</a>
						<a href={item.website} target="_blank" rel="noopener noreferrer" className="flex-1 border-2 p-3 border-gray-800 hover:border-white transition-all duration-[800] text-darkText px-4 py-1.5 rounded-sm flex items-center justify-center gap-2 text-[0.95rem] font-medium">
							<span>Live Site</span>
						</a>
					</div>
				</div>
			</div>

			<div className="mt-6">
				<h2 className="text-xl font-bold">Overview</h2>
				<div className="mt-4">
					<p className="text-[1rem] text-gray-400 font-medium leading-7">
						🧠 Designed for modern learners and creators, <strong className="text-white">Amigo Tasks</strong> is a sleek and intuitive note management platform that reimagines digital learning organization.
						Inspired by the versatility of Notion, it empowers users to create rich-text, structured notes with a powerful editor tailored for knowledge capture and idea flow.
						With seamless Google Authentication, users can sign in securely in seconds.
						Built on the robust trio of <strong className="text-white">NestJS</strong> (backend), <strong className="text-white">Next.js</strong> (frontend), and <strong className="text-white">MongoDB</strong> (database), Amigo Tasks ensures real-time performance, flexibility, and an ultra-responsive experience across all devices.
					</p>
				</div>
			</div>

			<div className="mt-6">
				<h2 className="text-xl font-bold">Features</h2>
				<div className="mt-4 text-[1rem] text-gray-400 font-medium">
					<ul className="flex flex-col gap-4">
						<li>📝 <strong className="text-white">Notion-Style Rich Editor</strong> – Create dynamic notes with headings, checklists, links, code blocks, and more, in a fluid and distraction-free environment.</li>
						<li>🔐 <strong className="text-white">Google OAuth Integration</strong> – Sign in effortlessly using your Google account with full OAuth 2.0 compliance.</li>
						<li>📚 <strong className="text-white">Organized Knowledge Spaces</strong> – Group notes into custom folders or topics, perfect for students, professionals, and lifelong learners.</li>
						<li>🌙 <strong className="text-white">Dark Mode</strong> – Enjoy a beautifully styled dark UI optimized for night sessions and eye comfort.</li>
						<li>⚡ <strong className="text-white">Real-time Updates</strong> – Instantly reflect changes across your notes with a responsive and fast experience.</li>
						<li>🧭 <strong className="text-white">Keyboard Shortcuts</strong> – Navigate and edit like a pro with productivity-boosting hotkeys.</li>
						<li>🚀 <strong className="text-white">Performance-Focused</strong> – Server-side rendering with <strong className="text-white">Next.js</strong> ensures speed, SEO, and smooth hydration on any device.</li>
					</ul>
				</div>
			</div>

			<div className="mt-6">
				<h2 className="text-xl font-bold">Tech Stack</h2>
				<div className="mt-4 text-[1rem] text-gray-400 font-medium">
					<ul className="flex flex-col gap-4">
						<li>🧠 <strong className="text-white">Backend</strong> – Built with <span className="text-white">NestJS</span>, offering a modular and scalable architecture with TypeScript and powerful decorators.</li>
						<li>🖥️ <strong className="text-white">Frontend</strong> – Developed using <span className="text-white">Next.js</span> with both SSR and SPA capabilities for optimal performance and SEO.</li>
						<li>🗃️ <strong className="text-white">Database</strong> – Powered by <span className="text-white">MongoDB</span>, providing flexible and schema-less data modeling for notes and user content.</li>
						<li>🔐 <strong className="text-white">Authentication</strong> – Secure login with <span className="text-white">Google OAuth 2.0</span> and token-based session management.</li>
						<li>🎨 <strong className="text-white">UI/UX</strong> – Modern UI with TailwindCSS and focus on accessibility, minimalism, and smooth animations.</li>
						<li>🔧 <strong className="text-white">Tooling</strong> – Integrated with <span className="text-white">ESLint</span>, <span className="text-white">Prettier</span>, and <span className="text-white">Husky</span> for code quality and commit automation.</li>
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

export default AmigoTasksProject;

