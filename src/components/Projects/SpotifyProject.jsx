import React from "react";
import Masonry from "../Mansory";
import ProjectLayout from "./ProjectLayout";

const SpotifyProject = ({ item, index }) => {

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
						{['React', 'Node.js', 'Express.js', 'MongoDB', 'Material UI', 'Audio Streaming', 'JWT Authentication'].map(tag => (
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
						🎧 The project began as an immersive integration with the official <strong className="text-white">Spotify Web API</strong>, offering users the ability to explore their favorite tracks, artists, and playlists through a clean, responsive UI.
						With features such as live search, dynamic playlist retrieval, and smooth metadata rendering, the application delivers a familiar listening environment while leveraging the robustness of Spotify’s infrastructure.
						It captures the essence of the Spotify user experience, wrapped in a developer-curated design.
					</p>
					<p className="text-[1rem] text-gray-400 font-medium leading-7 mt-4">
						🚀 As the foundation matured, the project evolved into a fully independent platform — a complete backend ecosystem for music lovers to upload, manage, and stream their own content.
						This second phase reimagines the platform as a self-hosted service with capabilities far beyond simple integration: album creation, personal library management, full-text search, and a custom streaming engine all built from the ground up.
						With a UI inspired by modern music apps and a backend tailored for performance, the new version redefines what it means to build a music platform — turning passive playback into active ownership.
					</p>
				</div>
			</div>

			<div className="mt-6">
				<h2 className="text-xl font-bold">Features</h2>
				<div className="mt-4 text-[1rem] text-gray-400 font-medium">
					<ul className="flex flex-col gap-4">
						<li>🎧 <strong className="text-white">Version 1 – Spotify Integration</strong></li>
						<ul className="flex flex-col gap-4 ml-12 list-disc">
							<li>🔍 Search for tracks, artists, and albums using Spotify’s powerful search API.</li>
							<li>📂 Retrieve and display user playlists in a slick, responsive layout.</li>
							<li>📈 Real-time updates with live metadata from Spotify.</li>
						</ul>

						<li className="pt-4">🎼 <strong className="text-white">Version 2 – Full Custom Backend</strong></li>
						<ul className="flex flex-col gap-4  ml-12 list-disc">
							<li>🆕 Upload music files and store them securely via custom backend.</li>
							<li>📀 Create, update, and manage albums and track metadata.</li>
							<li>🔎 Search engine for music and artists, built with fast MongoDB queries.</li>
							<li>🎵 In-browser music streaming with smooth player controls and seeking.</li>
							<li>🖼️ Auto-generated covers and visual elements mimicking Spotify's branding.</li>
						</ul>

						<li className="pt-4">💡 <strong className="text-white">UX Highlights</strong></li>
						<ul className="flex flex-col gap-4  ml-12 list-disc">
							<li>🌙 Full dark mode support with pixel-perfect Spotify-style theming.</li>
							<li>📱 Responsive layout tailored for mobile-first interaction.</li>
							<li>🎚️ Smooth transitions, waveform animations, and real-time song progress tracking.</li>
						</ul>
					</ul>
				</div>
			</div>

			<div className="mt-6">
				<h2 className="text-xl font-bold">Tech Stack</h2>
				<div className="mt-4 text-[1rem] text-gray-400 font-medium">
					<ul className="flex flex-col gap-4">
						<li>🎨 <strong className="text-white">Frontend</strong> – Built with <span className="text-white">React.js</span>, styled with <span className="text-white">Material UI</span>, and structured for maximum component reusability.</li>
						<li>🧠 <strong className="text-white">Backend (Version 2)</strong> – Powered by <span className="text-white">Node.js</span> and <span className="text-white">Express.js</span>, featuring RESTful APIs for music management, media streaming, and album services.</li>
						<li>🗃️ <strong className="text-white">Database</strong> – <span className="text-white">MongoDB</span> stores user data, playlists, track metadata, and album collections.</li>
						<li>🎵 <strong className="text-white">Streaming</strong> – Audio is served directly through Express routes with MIME type handling and chunked streaming for seamless playback.</li>
						<li>🔐 <strong className="text-white">Authentication</strong> – JWT-based session auth with user roles for basic access control.</li>
						<li>🧰 <strong className="text-white">Tooling</strong> – Uses <span className="text-white">Multer</span> for file uploads, <span className="text-white">Mongoose</span> for schema modeling, and <span className="text-white">Postman</span> for testing APIs.</li>
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

export default SpotifyProject;

