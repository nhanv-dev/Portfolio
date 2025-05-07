import AmigoTasksProject from "./components/Projects/AmigoTasksProject";
import ChitchatProject from "./components/Projects/ChitchatProject";
import CommoditiesMartProject from "./components/Projects/CommoditiesMartProject";
import DepotProject from "./components/Projects/DepotProject";
import ElectronicProject from "./components/Projects/ElectronicProject";
import NoonpostProject from "./components/Projects/NoonpostProject";
import ShopioProject from "./components/Projects/ShopioProject";
import SnakeGameProject from "./components/Projects/SnakeGameProject";
import SpotifyProject from "./components/Projects/SpotifyProject";
import TodoProject from "./components/Projects/TodoProject";

export const personalInfo = {
	contact: {
		email: "tthanhnhan1512@gmail.com",
		phone: "+84 946 286 951",
		location: "Ho Chi Minh City, Vietnam"
	},
	social: {
		github: "github.com/nhanv-dev",
		facebook: "facebook.com/nhan.kden",
		linkedin: "linkedin.com/thanh-nhan",
	},
	link: {
		github: "https://github.com/nhanv-dev",
		facebook: "https://facebook.com/nhan.kden",
		linkedin: "https://www.linkedin.com/in/thanh-nh%C3%A2n-a6195a290/",
	}
}

export const slides = [
	{ title: "Code Voyager", subtitle: "Welcome to My Developer Journey", image: "/images/slides/slide-1.avif", thumbnail: "/images/slides/thumbnail-1.jpg" },
	{ title: "Code Creations", subtitle: "Where Ideas Come to Life", image: "/images/slides/slide-2.avif", thumbnail: "/images/slides/thumbnail-2.jpg" },
	{ title: "Let's Connect!", subtitle: "Ready to Collaborate ?", image: "/images/slides/slide-3.avif", thumbnail: "/images/slides/thumbnail-3.jpg" },
]

export const skills = [
	{
		title: "Frontend Development",
		description: "Building responsive and interactive user interfaces with modern frameworks.",
		technologies: [
			{ name: "React", level: 90, logo: "/images/icons/react.svg" },
			{ name: "Next.js", level: 85, logo: "/images/icons/next.js.svg" },
			{ name: "Angular", level: 80, logo: "/images/icons/angular.svg" },
			{ name: "Redux", level: 85, logo: "/images/icons/redux.svg" },
			{ name: "JavaScript", level: 90, logo: "/images/icons/javascript.svg" },
			{ name: "TypeScript", level: 85, logo: "/images/icons/typescript.svg" },
			{ name: "HTML5", level: 90, logo: "/images/icons/html5.svg" },
			{ name: "CSS3", level: 85, logo: "/images/icons/css3.svg" }
		]
	},
	{
		title: "Backend Development",
		description: "Developing robust server-side applications and APIs with secure authentication.",
		technologies: [
			{ name: "Node.js", level: 85, logo: "/images/icons/node.js.svg" },
			{ name: "Express.js", level: 80, logo: "/images/icons/express.js.svg" },
			{ name: "NestJS", level: 75, logo: "/images/icons/nestjs.svg" },
			{ name: ".NET", level: 80, logo: "/images/icons/net.svg" },
			{ name: "Java", level: 75, logo: "/images/icons/java.svg" },
			{ name: "Spring Boot", level: 70, logo: "/images/icons/spring_boot.svg" },
			{ name: "JSP / Servlet", level: 70, logo: "/images/icons/jsp___servlet.svg" }
		]
	},
	{
		title: "Database & Cloud",
		description: "Designing and managing database systems with cloud solutions for scalability.",
		technologies: [
			{ name: "SQL Server", level: 85, logo: "/images/icons/sql_server.svg" },
			{ name: "MySQL", level: 80, logo: "/images/icons/mysql.svg" },
			{ name: "MongoDB", level: 75, logo: "/images/icons/mongodb.svg" },
			{ name: "Firebase", level: 70, logo: "/images/icons/firebase.svg" }
		]
	},
	{
		title: "DevOps & Tools",
		description: "Implementing CI/CD pipelines and managing infrastructure for optimal deployment.",
		technologies: [
			{ name: "Docker", level: 75, logo: "/images/icons/docker.svg" },
			{ name: "Git", level: 85, logo: "/images/icons/git.svg" },
			{ name: "Nginx", level: 65, logo: "/images/icons/nginx.svg" },
			{ name: "Socket.IO", level: 75, logo: "/images/icons/socket.io.svg" },
			{ name: "Ocelot", level: 70, logo: "/images/icons/ocelot.svg" }
		]
	}
];

export const projects = [
	{
		slug: "/projects/depot",
		github: "https://github.com/nhanv-dev/DepotStore",
		website: "https://depot-store-3aa17.web.app/",
		card: {
			title: "Depot Store",
			subTitle: "Modern Commerce Hub",
			productType: "Digital Commerce",
			useCase: "Interactive Online Storefront",
			tags: ["ReactJS", "Spring Boot", "SQL Server"],
			image: "/images/projects/depot/image.jpg",
			thumbnail: "/images/projects/depot/thumbnail.jpg",
			description: "An advanced eCommerce platform built with ReactJS and Spring Boot, offering seamless user experiences, real-time inventory tracking, and modern UI design. Optimized for speed, scalability, and security.",
		},
		component: DepotProject,
		images: [
			{ id: 1, image: "/images/projects/depot/depot-1.png", height: 650 },
			{ id: 2, image: "/images/projects/depot/depot-2.png", height: 650 },
			{ id: 3, image: "/images/projects/depot/depot-3.png", height: 650 },
			{ id: 4, image: "/images/projects/depot/depot-4.png", height: 650 },
			{ id: 5, image: "/images/projects/depot/depot-5.png", height: 650 },
			{ id: 6, image: "/images/projects/depot/depot-6.png", height: 650 },
			{ id: 7, image: "/images/projects/depot/depot-7.png", height: 650 },
			{ id: 8, image: "/images/projects/depot/depot-8.png", height: 650 },
			{ id: 9, image: "/images/projects/depot/depot-9.png", height: 650 },
			{ id: 10, image: "/images/projects/depot/depot-10.png", height: 650 },
			{ id: 11, image: "/images/projects/depot/depot-11.png", height: 650 },
			{ id: 12, image: "/images/projects/depot/depot-12.png", height: 650 },
			{ id: 13, image: "/images/projects/depot/depot-13.png", height: 650 },
			{ id: 14, image: "/images/projects/depot/depot-14.png", height: 650 },
			{ id: 15, image: "/images/projects/depot/depot-15.png", height: 650 },
			{ id: 16, image: "/images/projects/depot/depot-16.png", height: 650 },
			{ id: 17, image: "/images/projects/depot/depot-17.png", height: 650 }
		],
	},
	{
		slug: "/projects/amigo-tasks",
		github: "https://github.com/nhanv-dev/AmigoTasks",
		website: "https://amigo-tasks.vercel.app/",
		card: {
			title: "Amigo Task",
			subTitle: "Smart Note Workspace",
			productType: "Productivity Workspace",
			useCase: "Knowledge Workspace",
			tags: ["NextJS", "NestJS", "MongoDB", "ChatGPT"],
			image: "/images/projects/amigo-tasks/image.jpg",
			thumbnail: "/images/projects/amigo-tasks/thumbnail.jpg",
			description: "A powerful note-taking and task management workspace designed for structured thinking, real-time collaboration, and effortless organization. Ideal for individuals and teams who value clarity, focus, and flexibility."
		},
		component: AmigoTasksProject,
		images: [],
	},
	{
		slug: "/projects/noonpost",
		github: "https://github.com/nhanv-dev/NoonpostNode",
		website: "https://personal-blog-node.vercel.app/",
		card: {
			title: "Noonpost",
			subTitle: "Thoughtful Blog Space",
			productType: "Content Platform",
			useCase: "Digital Publishing",
			tags: ["Brand", "Blog", "Webapp"],
			image: "/images/projects/noonpost/image.jpg",
			thumbnail: "/images/projects/noonpost/thumbnail.jpg",
			description: "A minimalist blogging platform designed for focus and flow — offering intuitive editing, seamless publishing, and a clean reading experience. Crafted for writers who value clarity, simplicity, and creative freedom.",
		},
		component: NoonpostProject,
		images: [
			{ id: 1, image: "/images/projects/noonpost/noonpost-1.png", height: 650 },
			{ id: 2, image: "/images/projects/noonpost/noonpost-2.png", height: 650 },
			{ id: 3, image: "/images/projects/noonpost/noonpost-3.png", height: 650 },
			{ id: 4, image: "/images/projects/noonpost/noonpost-4.png", height: 650 },
			{ id: 5, image: "/images/projects/noonpost/noonpost-5.png", height: 650 }
		],
	},
	{
		slug: "/projects/spotify",
		github: "https://github.com/nhanv-dev/SpotifyComplete",
		website: "https://spotify-client-react.web.app/",
		card: {
			title: "Spotify",
			subTitle: "Dynamic Sound Space",
			productType: "Music Streaming Platform",
			useCase: "Reimagined Music Streaming",
			tags: ["Brand", "Product", "Webapp"],
			image: "/images/projects/spotify/image.jpg",
			thumbnail: "/images/projects/spotify/thumbnail.jpg",
			description: "A feature-rich music streaming platform that replicates the Spotify experience with real-time playback, playlist management, and API-integrated audio control. Built in two versions — one powered by the official Spotify API, and another using a custom backend for full-stack control and flexibility.",
		},
		component: SpotifyProject,
		images: [
			{ id: 1, image: "/images/projects/spotify/spotify-v1-1.png", height: 650 },
			{ id: 2, image: "/images/projects/spotify/spotify-v1-2.png", height: 650 },
			{ id: 3, image: "/images/projects/spotify/spotify-v1-3.png", height: 650 },
			{ id: 4, image: "/images/projects/spotify/spotify-v1-4.png", height: 650 },
			{ id: 5, image: "/images/projects/spotify/spotify-v1-5.png", height: 650 },
			{ id: 6, image: "/images/projects/spotify/spotify-v1-6.png", height: 650 },
			{ id: 7, image: "/images/projects/spotify/spotify-v1-7.png", height: 650 },
			{ id: 8, image: "/images/projects/spotify/spotify-v1-8.png", height: 650 },
			{ id: 9, image: "/images/projects/spotify/spotify-v2-1.png", height: 650 },
			{ id: 10, image: "/images/projects/spotify/spotify-v2-2.png", height: 650 },
			{ id: 11, image: "/images/projects/spotify/spotify-v2-3.png", height: 650 },
			{ id: 12, image: "/images/projects/spotify/spotify-v2-4.png", height: 650 },
			{ id: 13, image: "/images/projects/spotify/spotify-v2-5.png", height: 650 },
			{ id: 14, image: "/images/projects/spotify/spotify-v2-6.png", height: 650 },
			{ id: 15, image: "/images/projects/spotify/spotify-v2-7.png", height: 650 },
			{ id: 16, image: "/images/projects/spotify/spotify-v2-8.png", height: 650 }
		],
	},
	{
		slug: "/projects/shopio",
		github: "https://github.com/nhanv-dev/Shopio",
		website: "https://ecommerce-d49f8.web.app/",
		card: {
			title: "Shopio",
			subTitle: "Clean. Fast. Commerce.",
			productType: "Digital Commerce",
			useCase: "Interactive Online Storefront",
			tags: ["e-commerce", "ReactJS", "NodeJS"],
			image: "/images/projects/shopio/image.jpg",
			thumbnail: "/images/projects/shopio/thumbnail.jpg",
			description: "A modern eCommerce solution built for streamlined shopping experiences, intuitive product discovery, and efficient order management. Designed to scale with growing businesses while ensuring fast, secure, and engaging user journeys.",
		},
		component: ShopioProject,
		images: [
			{ id: 1, image: "/images/projects/shopio/shopio-1.png", height: 650 },
			{ id: 2, image: "/images/projects/shopio/shopio-2.png", height: 650 },
			{ id: 3, image: "/images/projects/shopio/shopio-3.png", height: 650 },
			{ id: 4, image: "/images/projects/shopio/shopio-4.png", height: 650 },
			{ id: 5, image: "/images/projects/shopio/shopio-5.png", height: 650 },
			{ id: 6, image: "/images/projects/shopio/shopio-6.png", height: 650 },
			{ id: 7, image: "/images/projects/shopio/shopio-7.png", height: 650 },
			{ id: 8, image: "/images/projects/shopio/shopio-8.png", height: 650 }
		]
	},
	{
		slug: "/projects/chitchat",
		github: "https://github.com/nhanv-dev/ChitChat",
		website: "https://chitchat-e6ec4.web.app/",
		card: {
			title: "Chitchat",
			subTitle: "Real-Time. Real Talk.",
			productType: "Messaging Platform",
			useCase: "Real-Time Communication",
			tags: ["Websocket", "CSR", "Angular"],
			image: "/images/projects/chitchat/image.jpg",
			thumbnail: "/images/projects/chitchat/thumbnail.jpg",
			description: "A responsive chat application enabling real-time messaging, smart conversations, and seamless user interactions. Built to support fluid communication, modern UI, and efficient message delivery across devices.",
		},
		component: ChitchatProject,
		images: [
			{ id: 1, image: "/images/projects/chitchat/chitchat-1.png", height: 650 },
			{ id: 2, image: "/images/projects/chitchat/chitchat-2.png", height: 650 },
			{ id: 3, image: "/images/projects/chitchat/chitchat-3.png", height: 650 }
		],
	},
	{
		slug: "/projects/todo-list",
		github: "https://github.com/nhanv-dev/ReactTodoList",
		website: "https://todos-list-f2750.web.app/",
		card: {
			title: "Todo List",
			subTitle: "Clear Tasks. Clear Mind",
			productType: "Personal Productivity",
			useCase: "Task & Time Management",
			tags: ["React", "Redux"],
			image: "/images/projects/todo-list/image.jpg",
			thumbnail: "/images/projects/todo-list/thumbnail.jpg",
			description: "A minimalist productivity tool designed for planning, prioritizing, and completing daily tasks. Helps users stay focused and organized with a clean, intuitive interface and efficient workflow.",
		},
		component: TodoProject,
		images: [
			{ id: 1, image: "/images/projects/todo-list/todo-list-1.png", height: 650 },
			{ id: 2, image: "/images/projects/todo-list/todo-list-2.png", height: 650 }
		],
	},
	{
		slug: "/projects/snake-game",
		website: "https://snake-game-5bff8.web.app/",
		card: {
			title: "Snake Game",
			subTitle: "Classic Game. Fresh UI.",
			productType: "Interactive Game",
			useCase: "Casual Gaming Experience",
			tags: ["Gaming", "Jquery", "Javascript"],
			image: "/images/projects/snake-game/image.jpg",
			thumbnail: "/images/projects/snake-game/thumbnail.jpg",
			description: "A classic arcade-inspired game delivering fast-paced, nostalgic gameplay with intuitive controls, responsive movement, and score-based progression. Designed for simplicity, fun, and endless replayability.",
		},
		component: SnakeGameProject,
		images: [
			{ id: 1, image: "/images/projects/snake-game/snake-game-1.png", height: 650 },
			{ id: 2, image: "/images/projects/snake-game/snake-game-2.png", height: 650 },
			{ id: 3, image: "/images/projects/snake-game/snake-game-3.png", height: 650 },
			{ id: 4, image: "/images/projects/snake-game/snake-game-4.png", height: 650 },
			{ id: 5, image: "/images/projects/snake-game/snake-game-5.png", height: 650 },
			{ id: 6, image: "/images/projects/snake-game/snake-game-6.png", height: 650 }
		],
	},
	{
		slug: "/projects/electric-store",
		github: "https://github.com/nhanv-dev/ElectronicStore",
		website: "",
		card: {
			title: "Electronic Store",
			subTitle: "Buy Smarter. Brand Closer.",
			productType: "Branded Commerce Site",
			useCase: "Single-Brand Online Shopping",
			tags: ["SSR", "Java", "JSP", "Servlet"],
			image: "/images/projects/electric-store/image.jpg",
			thumbnail: "/images/projects/electric-store/thumbnail.jpg",
			description: "A complete e-commerce solution tailored for a single electronic retailer, featuring user authentication, product browsing, cart and checkout flows, and a seamless customer experience from login to order completion.",
		},
		component: ElectronicProject,
		images: [],
	},
	{
		slug: "/projects/commodities-mart",
		github: "https://github.com/nhanv-dev/CommodityDrawler",
		card: {
			title: "Commodities Mart",
			subTitle: "Global Data. Simplified.",
			productType: "Data Aggregator",
			useCase: "Commodity Intelligence",
			tags: ["ETL", "Java", "Jsoup", "JSP", "Servlet"],
			image: "/images/projects/commodities-mart/image.jpg",
			thumbnail: "/images/projects/commodities-mart/thumbnail.jpg",
			description: "A lightweight data display platform that aggregates commodity prices from multiple online sources, helping users monitor global market trends in real-time. Designed for simplicity, clarity, and efficient data presentation.",
		},
		component: CommoditiesMartProject,
		images: [],
	},
]
