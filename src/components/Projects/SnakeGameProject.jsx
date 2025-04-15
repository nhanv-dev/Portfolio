import React from "react";
import Masonry from "../Mansory";
import ProjectLayout from "./ProjectLayout";

const SnakeGameProject = ({ item, index }) => {

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
						{['JavaScript', 'HTML5', 'CSS3', 'Game Development', 'Canvas', 'Snake Game', 'Frontend Development', 'JavaScript Game', 'User Input', 'Game Logic', 'Animation', 'Web Game', 'Game Loop', 'DOM Manipulation', 'Web Development', 'Responsive Design', 'Event Handling'].map(tag => (
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
						🐍 <strong className="dark:text-white">Snake Game</strong> is a classic arcade game where the player controls a snake to collect food, grow longer, and avoid hitting walls or itself. This game is built with <strong className="dark:text-white">JavaScript</strong> for the game logic, <strong className="dark:text-white">HTML</strong> for structure, and <strong className="dark:text-white">CSS</strong> for styling.
						The goal is to create a fun and challenging gaming experience while helping users improve their coding skills in JavaScript.
						Whether you're a beginner or looking for a simple project, <strong className="dark:text-white">Snake Game</strong> is a great way to practice handling user inputs, game logic, and dynamic rendering in web development.
					</p>
				</div>
			</div>

			<div className="mt-6">
				<h2 className="text-xl font-bold">Features</h2>
				<div className="mt-4 text-[1rem] dark:text-gray-400 font-medium">
					<ul className="flex flex-col gap-4">
						<li>🕹️ <strong className="dark:text-white">Simple Gameplay</strong> – Control the snake using arrow keys, eat food to grow, and avoid obstacles.</li>
						<li>⚡ <strong className="dark:text-white">Responsive UI</strong> – Clean and simple design that adapts to different screen sizes.</li>
						<li>✅ <strong className="dark:text-white">Game Over Handling</strong> – Snake game ends when the snake collides with the wall or itself, with a restart option available.</li>
						<li>🎮 <strong className="dark:text-white">Easy to Play</strong> – Easy-to-understand mechanics, making it suitable for players of all ages.</li>
						<li>🏆 <strong className="dark:text-white">High Score Tracker</strong> – Tracks your best score for replay value.</li>
						<li>🎨 <strong className="dark:text-white">Minimalist Design</strong> – Focuses on the game experience with an intuitive user interface.</li>
					</ul>
				</div>
			</div>

			<div className="mt-6">
				<h2 className="text-xl font-bold">Tech Stack</h2>
				<div className="mt-4 text-[1rem] dark:text-gray-400 font-medium">
					<ul className="flex flex-col gap-4">
						<li>💻 <strong className="dark:text-white">Frontend</strong> – Built using <span className="dark:text-white">HTML</span>, <span className="dark:text-white">CSS</span>, and <span className="dark:text-white">JavaScript</span> to create a dynamic gaming experience.</li>
						<li>🎮 <strong className="dark:text-white">Game Logic</strong> – The core logic is written in <span className="dark:text-white">JavaScript</span>, handling snake movement, collision detection, and score calculation.</li>
						<li>📊 <strong className="dark:text-white">State Management</strong> – Simple in-game state management to track the snake's position and score.</li>
						<li>🔧 <strong className="dark:text-white">Development Tools</strong> – Uses <span className="dark:text-white">VSCode</span> for development with <span className="dark:text-white">ESLint</span> for code linting.</li>
						<li>🚀 <strong className="dark:text-white">Deployment</strong> – Can be deployed easily using platforms like <span className="dark:text-white">GitHub Pages</span> or <span className="dark:text-white">Firebase</span> for seamless sharing and play.</li>
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

export default SnakeGameProject;

