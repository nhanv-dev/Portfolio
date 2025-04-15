import React from "react";
import Masonry from "../Mansory";
import ProjectLayout from "./ProjectLayout";

const ChitchatProject = ({ item, index }) => {

	return (
		<ProjectLayout
			index={index}
			tag={"2023"}
		>
			<div className="mt-6 flex gap-10">
				<div className="flex-1">
					<p className="text-[1rem] text-gray-400 font-medium leading-7">
						{item.card.description}
					</p>
					<div className="flex flex-wrap gap-2 mt-4">
						{['Angular', 'Socket.IO', 'MongoDB', 'Real-time Chat'].map(tag => (
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
						🚀 <strong className="text-white">Chitchat</strong> is a real-time messaging platform built with Angular and WebSocket to deliver fast, interactive communication.
						Whether you’re sending a quick message or engaging in group chats, Chitchat ensures seamless real-time communication with no delays.
						With WebSocket integration, messages are delivered instantly, providing a fluid and dynamic user experience.
					</p>
				</div>
			</div>

			<div className="mt-6">
				<h2 className="text-xl font-bold">Features</h2>
				<div className="mt-4 text-[1rem] text-gray-400 font-medium">
					<ul className="flex flex-col gap-4">
						<li>✅ <strong className="text-white">Real-Time Messaging</strong> – Powered by WebSocket for instant message delivery without page refreshes.</li>
						<li>⚡ <strong className="text-white">Fast and Responsive</strong> – Built with Angular and optimized for fast load times and smooth user interactions.</li>
						<li>💬 <strong className="text-white">Group Chats & Direct Messages</strong> – Engage in one-on-one conversations or group chats with ease.</li>
						<li>🔒 <strong className="text-white">Real-Time Notifications</strong> – Get notified instantly when a new message arrives, even when the app is minimized.</li>
						<li>🎨 <strong className="text-white">Intuitive UI</strong> – A clean and modern chat interface, built using Angular components and styled with Material UI.</li>
						<li>🔗 <strong className="text-white">Multi-Device Support</strong> – Stay connected across multiple devices with synchronized chat history.</li>
						<li>📝 <strong className="text-white">Message History</strong> – Save and view past conversations to keep track of important chats.</li>
						<li>🌍 <strong className="text-white">Cross-Platform</strong> – Accessible on both desktop and mobile, ensuring a consistent experience across devices.</li>
						<li>🚀 <strong className="text-white">Ready to start chatting?</strong> Join Chitchat today and stay connected with your friends and colleagues!</li>
					</ul>
				</div>
			</div>

			<div className="mt-6">
				<h2 className="text-xl font-bold">Tech Stack</h2>
				<div className="mt-4 text-[1rem] dark:text-gray-400 font-medium">
					<ul className="flex flex-col gap-4">
						<li>🎨 <strong className="dark:text-white">Frontend</strong> – Built with <span className="dark:text-white">Angular</span> for dynamic, single-page application development, providing smooth, fast, and responsive interactions.</li>
						<li>🔗 <strong className="dark:text-white">Real-Time Communication</strong> – Powered by <span className="dark:text-white">WebSocket</span> for instant message delivery, allowing for real-time updates without refreshing the page.</li>
						<li>🎨 <strong className="dark:text-white">UI Design</strong> – Styled with <span className="dark:text-white">Material UI</span>, providing a modern, sleek, and user-friendly interface.</li>
						<li>🔒 <strong className="dark:text-white">Authentication</strong> – Secure user authentication and session management using <span className="dark:text-white">JWT</span> for token-based authentication.</li>
						<li>🧰 <strong className="dark:text-white">Tooling</strong> – Utilizes <span className="dark:text-white">Socket.IO</span> for WebSocket communication, enabling efficient handling of real-time data.</li>
						<li>⚙️ <strong className="dark:text-white">Development</strong> – Built with <span className="dark:text-white">TypeScript</span> to ensure strong typing and better maintainability of the codebase.</li>
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

export default ChitchatProject;

