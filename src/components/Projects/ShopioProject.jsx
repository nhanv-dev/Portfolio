import React from "react";
import Masonry from "../Mansory";
import ProjectLayout from "./ProjectLayout";

const ShopioProject = ({ item, index }) => {

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
						{['React', 'TailwindCSS', 'Node.js', 'Express.js', 'MongoDB'].map(tag => (
							<span key={tag} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm font-semibold">{tag}</span>
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
						🛒 <strong className="text-white">Shopio</strong> is a modern e-commerce marketplace built to empower both sellers and buyers with a seamless digital shopping experience.
						Developed using <strong>React</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MongoDB</strong>, it delivers high performance, dynamic scalability, and an intuitive UI crafted with <strong>TailwindCSS</strong>.
						Whether you're managing a store or browsing for the perfect product, Shopio makes commerce simple, elegant, and fast.
					</p>
					<p className="text-[1rem] text-gray-400 font-medium leading-7 mt-4">
						The platform focuses on seller empowerment through flexible store management tools, while also offering customers a smooth end-to-end buying journey—
						from account registration and login to cart management, checkout, and order tracking. With real-time feedback loops and a responsive design,
						Shopio elevates the online shopping experience to the next level.
					</p>
				</div>
			</div>

			<div className="mt-6">
				<h2 className="text-xl font-bold">Features</h2>
				<div className="mt-4 text-[1rem] text-gray-400 font-medium">
					<ul className="flex flex-col gap-4">
						<li>🛍️ <strong className="text-white">Store Management for Sellers</strong> – Create, update, and organize product listings, manage stock, and monitor sales performance effortlessly.</li>
						<li>🔎 <strong className="text-white">Product Discovery</strong> – Advanced filtering and search help users find exactly what they need, fast.</li>
						<li>🧾 <strong className="text-white">Seamless Checkout</strong> – Cart and order handling with a focus on simplicity and reliability for all users.</li>
						<li>👤 <strong className="text-white">User Account System</strong> – Buyers can register, log in, and maintain their personal details with ease.</li>
						<li>📦 <strong className="text-white">Order Tracking</strong> – Real-time updates for users to track their purchases from checkout to delivery.</li>
						<li>💬 <strong className="text-white">User Feedback</strong> – Buyers can leave reviews, enhancing trust and quality control across the platform.</li>
						<li>📱 <strong className="text-white">Responsive Design</strong> – Fully optimized UI for mobile, tablet, and desktop devices with TailwindCSS utility styling.</li>
						<li>🚀 <strong className="text-white">Optimized Performance</strong> – Built with lightweight React components and efficient API routes to ensure minimal loading times.</li>
					</ul>
				</div>
			</div>

			<div className="mt-6">
				<h2 className="text-xl font-bold">Tech Stack</h2>
				<div className="mt-4 text-[1rem] text-gray-400 font-medium">
					<ul className="flex flex-col gap-4">
						<li>🎨 <strong className="text-white">Frontend</strong> – Developed with <span className="text-white">React.js</span> and styled using <span className="text-white">TailwindCSS</span> for modern and responsive UI design.</li>
						<li>🧠 <strong className="text-white">Backend</strong> – Built with <span className="text-white">Node.js</span> and <span className="text-white">Express.js</span>, serving a RESTful API architecture for scalable marketplace logic.</li>
						<li>🗃️ <strong className="text-white">Database</strong> – Uses <span className="text-white">MongoDB</span> to manage user profiles, product inventories, store data, and transactional records.</li>
						<li>🔐 <strong className="text-white">Authentication</strong> – Implements secure login and session handling via JWT tokens.</li>
						<li>🧰 <strong className="text-white">Tooling</strong> – Development aided by <span className="text-white">Mongoose</span> for schema modeling and <span className="text-white">Postman</span> for API testing.</li>
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

export default ShopioProject;

