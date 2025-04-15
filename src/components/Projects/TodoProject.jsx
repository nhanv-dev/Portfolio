import React from "react";
import Masonry from "../Mansory";
import ProjectLayout from "./ProjectLayout";

const TodoProject = ({ item, index }) => {

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
						{['React', 'Redux'].map(tag => (
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
						📋 <strong className="dark:text-white">Todolist</strong> is a simple yet powerful to-do list application designed to help you stay organized and manage tasks effectively.
						Built with <strong className="dark:text-white">React</strong> for the frontend and <strong className="dark:text-white">Redux</strong> for state management,
						this app allows users to add, remove, and toggle tasks with ease. It serves as a great learning project for mastering modern React concepts, including Redux for managing global state and component reactivity.
						Whether you're building a small app or learning how to structure your React applications, Todolist is a perfect starting point to get hands-on experience with the powerful React-Redux ecosystem.
					</p>
				</div>
			</div>

			<div className="mt-6">
				<h2 className="text-xl font-bold">Features</h2>
				<div className="mt-4 text-[1rem] dark:text-gray-400 font-medium">
					<ul className="flex flex-col gap-4">
						<li>📝 <strong className="dark:text-white">Task Management</strong> – Easily add, edit, and delete tasks to stay organized and focused on what matters.</li>
						<li>⚡ <strong className="dark:text-white">Real-time State Updates</strong> – Thanks to <strong className="dark:text-white">Redux</strong>, all changes to tasks are immediately reflected across the app.</li>
						<li>✅ <strong className="dark:text-white">Task Completion</strong> – Mark tasks as completed with a simple toggle, making it easy to track progress.</li>
						<li>🎨 <strong className="dark:text-white">Minimalist Design</strong> – Clean, intuitive UI designed for productivity without distractions.</li>
						<li>🔄 <strong className="dark:text-white">Persistent Data</strong> – Save your tasks in local storage so your to-do list stays intact even after a page reload.</li>
						<li>⚙️ <strong className="dark:text-white">Responsive</strong> – Mobile-friendly design to ensure seamless task management on any device.</li>
						<li>🛠️ <strong className="dark:text-white">Learning Opportunity</strong> – A great project to learn <strong className="dark:text-white">React</strong> and <strong className="dark:text-white">Redux</strong> in a simple yet effective way.</li>
					</ul>
				</div>
			</div>

			<div className="mt-6">
				<h2 className="text-xl font-bold">Tech Stack</h2>
				<div className="mt-4 text-[1rem] dark:text-gray-400 font-medium">
					<ul className="flex flex-col gap-4">
						<li>⚛️ <strong className="dark:text-white">Frontend</strong> – Built with <span className="dark:text-white">React</span>, leveraging hooks, components, and JSX for creating a dynamic and responsive user interface.</li>
						<li>📦 <strong className="dark:text-white">State Management</strong> – Utilizes <span className="dark:text-white">Redux</span> to manage global application state, ensuring smooth state updates across components.</li>
						<li>🔑 <strong className="dark:text-white">Local Storage</strong> – Data persistence using <span className="dark:text-white">localStorage</span> to save tasks between sessions, keeping your to-do list intact.</li>
						<li>🎨 <strong className="dark:text-white">UI/UX</strong> – Styled with <span className="dark:text-white">CSS</span> for a clean and intuitive user experience, focusing on simplicity and usability.</li>
						<li>🔧 <strong className="dark:text-white">Development Tools</strong> – Integrated with <span className="dark:text-white">ESLint</span> and <span className="dark:text-white">Prettier</span> for code quality and formatting.</li>
						<li>🚀 <strong className="dark:text-white">Deployment</strong> – Easily deployable using <span className="dark:text-white">Netlify</span> or <span className="dark:text-white">Vercel</span> for rapid deployment and continuous delivery.</li>
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

export default TodoProject;

