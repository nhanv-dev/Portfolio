import React from "react";
import Masonry from "../Mansory";
import ProjectLayout from "./ProjectLayout";

const DepotProject = ({ item, index }) => {

	return (
		<ProjectLayout
			index={index}
			tag={"2024"}
		>
			<div className="mt-6 flex flex-wrap gap-10">
				<div className="flex-1">
					<p className="text-[1rem] text-gray-400 font-medium leading-7">
						{item.card.description}
					</p>
					<div className="flex flex-wrap gap-2 mt-4">
						{['React', 'Redux', 'Ckeditor', 'Material UI', 'Spring Boot', 'MySQL', 'Hibernate', 'Spring Security'].map(tag => (
							<span key={tag} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm font-semibold">{tag}</span>
						))}
					</div>
				</div>
				<div className="min-w-full lg:min-w-[250px] text-gray-300 text-[0.95rem]">
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
						🛒 Built with <strong>Spring Boot</strong>, <strong>Hibernate</strong>, <strong>MySQL</strong>, and <strong>ReactJS</strong>, Depot Store is a powerful and responsive e-commerce platform.
						It enables smooth and secure online shopping experiences for both buyers and sellers.
						Designed for performance and scalability, Depot Store supports modern shopping workflows with rich features and robust backend processing.
					</p>
				</div>
			</div>

			<div className="mt-6">
				<h2 className="text-xl font-bold">Features</h2>
				<div className="mt-4 text-[1rem] text-gray-400 font-medium">
					<ul className="flex flex-col gap-4">
						<li>🛍️ <strong className="text-white">Product Listing & Management</strong> – Sellers can easily list products, manage inventory, update prices, and showcase images.</li>
						<li>🏬 <strong className="text-white">Store Management Dashboard</strong> – A dedicated panel for sellers to monitor orders, track performance, and customize their storefront.</li>
						<li>👥 <strong className="text-white">User Authentication</strong> – Secure registration and login system built with JWT and Spring Security.</li>
						<li>🛒 <strong className="text-white">Cart & Order Processing</strong> – Buyers can add items to cart, place orders, and manage order history seamlessly.</li>
						<li>📦 <strong className="text-white">Checkout & Payment Integration</strong> – Modular checkout process with order summary, shipping info, and future-ready payment integration.</li>
						<li>👤 <strong className="text-white">User Profile & Settings</strong> – Personal dashboard to manage personal info, shipping addresses, and order activities.</li>
						<li>📊 <strong className="text-white">Real-Time Store Analytics</strong> – Track store performance, order volume, and customer behavior using dynamic charts and insights.</li>
						<li>🔍 <strong className="text-white">Smart Search & Filtering</strong> – Buyers can quickly find what they need with intelligent search and filter options.</li>
						<li>🚀 <strong className="text-white">Scalable Microservice Architecture</strong> – Built with Spring Boot and Hibernate, ensuring reliability and future scalability for high traffic.</li>
						<li>🛠️ <strong className="text-white">Ready to transform your online selling?</strong> Explore <strong className="text-white">Depot Store</strong> and experience next-gen e-commerce today!</li>
					</ul>
				</div>
			</div>

			<div className="mt-6">
				<h2 className="text-xl font-bold">Tech Stack</h2>
				<div className="mt-4 text-[1rem] text-gray-400 font-medium">
					<ul className="flex flex-col gap-4">
						<li>🧠 <strong className="text-white">Backend</strong> – <span className="text-white">Spring Boot</span> (RESTful APIs), <span className="text-white">Hibernate</span> (ORM), <span className="text-white">Spring Security</span> (Authentication & Authorization).</li>
						<li>🖥️ <strong className="text-white">Frontend</strong> – <span className="text-white">ReactJS</span> for dynamic UI and component-based architecture.</li>
						<li>🗃️ <strong className="text-white">Database</strong> – <span className="text-white">MySQL</span> for reliable relational data storage and ACID transactions.</li>
						<li>🔐 <strong className="text-white">Security</strong> – <span className="text-white">JWT (JSON Web Token)</span> for secure session management and role-based access.</li>
						<li>⚙️ <strong className="text-white">Architecture</strong> – Clean code structure with layered architecture (Controller → Service → Repository) and separation of concerns.</li>
						<li>🚧 <strong className="text-white">Dev Tools</strong> – <span className="text-white">Maven</span>, <span className="text-white">Postman</span>, <span className="text-white">Spring DevTools</span>, and <span className="text-white">VSCode / IntelliJ</span>.</li>
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

