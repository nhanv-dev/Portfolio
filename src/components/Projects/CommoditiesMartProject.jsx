import React from "react";
import Masonry from "../Mansory";
import ProjectLayout from "./ProjectLayout";

const CommoditiesMartProject = ({ item, index }) => {

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
						{['Java', 'JSoup', 'Web Scraping', 'ETL', 'Data Warehouse', 'MySQL', 'FTP', 'Data Crawling', 'Excel Export', 'Batch Processing', 'Data Extraction', 'Automation', 'Scheduled Crawling', 'Backend Development'].map(tag => (
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
						🏪 <strong className="text-white">Commodity Mart</strong> is a data warehouse project focused on web scraping commodity prices from multiple e-commerce websites.
						Developed using <strong className="text-white">Java</strong> and <strong className="text-white">JSoup</strong>, the system crawls product prices and other related data on a daily basis, extracting useful information
						such as product names, prices, and other attributes. The crawled data is stored in a <strong className="text-white">MySQL</strong> database for further processing and analysis.
						Additionally, the system is configured to store extracted data in files on an <strong className="text-white">FTP server</strong> and export reports to <strong className="text-white">Excel</strong> format.
						The project implements an ETL (Extract, Transform, Load) process, extracting data from external websites, transforming it into structured format, and loading it into a centralized data warehouse.
						This project offers valuable insights into handling large datasets, automating data extraction, and building data pipelines in the field of data warehousing.
					</p>
				</div>
			</div>

			<div className="mt-6">
				<h2 className="text-xl font-bold">Features</h2>
				<div className="mt-4 text-[1rem] text-gray-400 font-medium">
					<ul className="flex flex-col gap-4">
						<li>📊 <strong className="text-white">Web Scraping</strong> – Using <strong className="text-white">JSoup</strong>, the system crawls various e-commerce websites to gather product prices, descriptions, and other details.</li>
						<li>⏰ <strong className="text-white">Daily Data Crawling</strong> – The system is configured to run daily, scraping fresh data on commodity prices and ensuring up-to-date information.</li>
						<li>🗂️ <strong className="text-white">FTP Storage</strong> – Extracted data is saved on an <strong className="text-white">FTP server</strong> for easy access and further analysis.</li>
						<li>📈 <strong className="text-white">Excel Export</strong> – The system can export crawled data into <strong className="text-white">Excel</strong> format for easy reporting and analysis by users.</li>
						<li>🔄 <strong className="text-white">ETL Process</strong> – The project follows an <strong className="text-white">ETL</strong> process: extracting data from websites, transforming it into a structured format, and loading it into a <strong className="text-white">MySQL</strong> database.</li>
						<li>💾 <strong className="text-white">MySQL Database</strong> – Crawled and transformed data is stored in a <strong className="text-white">MySQL</strong> database, allowing efficient querying and data management.</li>
						<li>🔍 <strong className="text-white">Data Quality</strong> – The system implements data cleaning and transformation techniques to ensure the quality and consistency of extracted data.</li>
					</ul>
				</div>
			</div>

			<div className="mt-6">
				<h2 className="text-xl font-bold">Tech Stack</h2>
				<div className="mt-4 text-[1rem] text-gray-400 font-medium">
					<ul className="flex flex-col gap-4">
						<li>☕ <strong className="text-white">Backend</strong> – Developed with <span className="text-white">Java</span> for data extraction, transformation, and loading tasks.</li>
						<li>🌐 <strong className="text-white">Web Scraping</strong> – <span className="text-white">JSoup</span> is used to scrape and parse HTML data from various e-commerce websites to gather product details.</li>
						<li>🔐 <strong className="text-white">Database</strong> – <span className="text-white">MySQL</span> is used to store crawled data, enabling efficient data management and querying.</li>
						<li>💾 <strong className="text-white">FTP Server</strong> – Crawled data is stored on an <span className="text-white">FTP server</span> for secure storage and access.</li>
						<li>📊 <strong className="text-white">Data Export</strong> – The system exports data in <span className="text-white">Excel</span> format for easy reporting and further analysis.</li>
						<li>🔄 <strong className="text-white">ETL Process</strong> – Data is extracted from web pages, transformed into structured data, and loaded into a <span className="text-white">MySQL</span> database.</li>
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

export default CommoditiesMartProject;

