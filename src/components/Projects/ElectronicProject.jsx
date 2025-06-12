import React from "react";
import Masonry from "../Mansory";
import ProjectLayout from "./ProjectLayout";

const ElectronicProject = ({ item, index }) => {

	return (
		<ProjectLayout
			index={index}
			tag={"2023"}
		>
			<div className="mt-6 flex flex-wrap gap-10">
				<div className="flex-1">
					<p className="text-[1rem] text-gray-400 font-medium leading-7">
						{item.card.description}
					</p>
					<div className="flex flex-wrap gap-2 mt-4">
						{['Java', 'JSP', 'Servlet', 'E-commerce', 'Shopping Cart', 'Wishlist', 'Order Management', 'User Authentication', 'Admin Dashboard', 'Product Catalog', 'MySQL', 'Backend Development', 'Frontend Development', 'HTML', 'CSS', 'JavaScript', 'Apache Tomcat', 'Database', 'Authentication', 'Eclipse', 'IntelliJ IDEA', 'Deployment'].map(tag => (
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
						🛒 <strong className="text-white">Electronic Store</strong> is a fully functional e-commerce website designed for an electronics store, allowing customers to browse, select, and purchase their favorite products online.
						Built with <strong className="text-white">Java</strong>, <strong className="text-white">JSP</strong>, and <strong className="text-white">Servlet</strong>, this platform provides a seamless shopping experience.
						With features like shopping cart management, order placement, and product wishlist, users can easily manage their purchases and track their orders. The backend is powered by <strong className="text-white">Servlets</strong>, and the frontend uses <strong className="text-white">JSP</strong> to display the product catalog.
						The store is designed to offer both users and store owners an efficient and secure way to manage products, orders, and customers, making it a great learning project to understand e-commerce website development.
					</p>
				</div>
			</div>

			<div className="mt-6">
				<h2 className="text-xl font-bold">Features</h2>
				<div className="mt-4 text-[1rem] text-gray-400 font-medium">
					<ul className="flex flex-col gap-4">
						<li>🛍️ <strong className="text-white">Product Catalog</strong> – Users can browse a variety of electronic products, including detailed descriptions, prices, and images.</li>
						<li>🛒 <strong className="text-white">Shopping Cart</strong> – Add products to the shopping cart, modify quantities, and proceed to checkout with ease.</li>
						<li>❤️ <strong className="text-white">Wishlist</strong> – Save your favorite products for future purchases or price tracking.</li>
						<li>✅ <strong className="text-white">Order Management</strong> – Customers can place orders, track their status, and view previous purchases. Admins can manage orders from the backend.</li>
						<li>🔐 <strong className="text-white">User Authentication</strong> – Customers can create an account, log in, and view their order history and wishlist securely.</li>
						<li>⚙️ <strong className="text-white">Admin Dashboard</strong> – Manage products, process orders, and handle customer requests via a dedicated admin interface.</li>
						<li>📦 <strong className="text-white">Order Confirmation</strong> – After placing an order, customers receive confirmation and details of their purchase.</li>
					</ul>
				</div>
			</div>

			<div className="mt-6">
				<h2 className="text-xl font-bold">Tech Stack</h2>
				<div className="mt-4 text-[1rem] text-gray-400 font-medium">
					<ul className="flex flex-col gap-4">
						<li>☕ <strong className="text-white">Backend</strong> – Developed using <span className="text-white">Java</span> with <span className="text-white">Servlets</span> to handle HTTP requests, manage session data, and perform business logic.</li>
						<li>🌐 <strong className="text-white">Frontend</strong> – Built with <span className="text-white">JSP</span> (JavaServer Pages) for dynamically rendering HTML content, ensuring a responsive and interactive user experience.</li>
						<li>🔐 <strong className="text-white">Authentication</strong> – Users authenticate via secure login mechanisms to manage their profiles, orders, and preferences.</li>
						<li>📊 <strong className="text-white">Database</strong> – Uses <span className="text-white">MySQL</span> to store product details, customer information, order history, and payment data.</li>
						<li>🔧 <strong className="text-white">Development Tools</strong> – Developed with <span className="text-white">Eclipse</span> or <span className="text-white">IntelliJ IDEA</span> for Java development and JSP integration.</li>
						<li>🚀 <strong className="text-white">Deployment</strong> – Can be deployed on servers such as <span className="text-white">Apache Tomcat</span> to make the application available online.</li>
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

export default ElectronicProject;

