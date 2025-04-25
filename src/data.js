import AmigoTasksProject from './components/Projects/AmigoTasksProject';
import ChitchatProject from './components/Projects/ChitchatProject';
import CommoditiesMartProject from './components/Projects/CommoditiesMartProject';
import DepotProject from './components/Projects/DepotProject';
import ElectronicProject from './components/Projects/ElectronicProject';
import NoonpostProject from './components/Projects/NoonpostProject';
import ShopioProject from './components/Projects/ShopioProject';
import SnakeGameProject from './components/Projects/SnakeGameProject';
import SpotifyProject from './components/Projects/SpotifyProject';
import TodoProject from './components/Projects/TodoProject';

export const links = {
    facebook: 'https://www.facebook.com/your-profile',
    gmail: 'mailto:your.email@gmail.com',
    linkedin: 'https://www.linkedin.com/in/your-profile',
    github: 'https://github.com/your-username',
    twitter: 'https://twitter.com/your-handle',
    instagram: 'https://www.instagram.com/your-profile',
    youtube: 'https://www.youtube.com/@your-channel',
    medium: 'https://medium.com/@your-username',
    dev: 'https://dev.to/your-username',
    stackoverflow: 'https://stackoverflow.com/users/your-user-id'
}

export const slides = [
    { title: 'Code Voyager', subtitle: 'Welcome to My Developer Journey', image: '/images/slide-1.avif', thumbnail: 'https://i.pinimg.com/736x/29/6a/14/296a146a26b1fc95d51f87bc4b3c5719.jpg ' },
    { title: 'Code Creations', subtitle: 'Where Ideas Come to Life', image: '/images/slide-2.avif', thumbnail: 'https://i.pinimg.com/736x/29/6a/14/296a146a26b1fc95d51f87bc4b3c5719.jpg ' },
    { title: 'Let’s Connect!', subtitle: 'Ready to Collaborate ?', image: '/images/slide-3.avif', thumbnail: 'https://i.pinimg.com/736x/29/6a/14/296a146a26b1fc95d51f87bc4b3c5719.jpg ' },
]

export const projects = [
    {
        slug: '/projects/depot',
        github: 'https://github.com/nhanv-dev/DepotStore',
        website: 'https://depot-store-3aa17.web.app/',
        card: {
            title: 'Depot Store',
            subTitle: 'Modern Commerce Hub',
            productType: 'Digital Commerce',
            useCase: 'Interactive Online Storefront',
            tags: ['ReactJS', 'Spring Boot', 'SQL Server'],
            image: 'https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-demo-2/oh__img59.1.jpg',
            thumbnail: 'https://images.unsplash.com/photo-1634578197578-dd387521fea3?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'An advanced eCommerce platform built with ReactJS and Spring Boot, offering seamless user experiences, real-time inventory tracking, and modern UI design. Optimized for speed, scalability, and security.',
        },
        component: DepotProject,
        images: [
            { id: 2, image: '/images/spotifyv1/spotify-2.png', height: 975 },
            { id: 4, image: '/images/spotifyv1/spotify-4.png', height: 650 },
            { id: 3, image: '/images/spotifyv1/spotify-3.png', height: 650 },
        ],
    },
    {
        slug: '/projects/amigo-tasks',
        github: 'https://github.com/nhanv-dev/AmigoTasks',
        website: 'https://amigo-tasks.vercel.app/',
        card: {
            title: 'Amigo Task',
            subTitle: 'Smart Note Workspace',
            productType: 'Productivity Workspace',
            useCase: 'Knowledge Workspace',
            tags: ['NextJS', 'NestJS', 'MongoDB', 'ChatGPT'],
            image: 'https://images.unsplash.com/photo-1509483730228-811e47696246?q=80&w=2356&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            thumbnail: 'https://images.unsplash.com/photo-1610736311554-fc17d5c43de8?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'A powerful note-taking and task management workspace designed for structured thinking, real-time collaboration, and effortless organization. Ideal for individuals and teams who value clarity, focus, and flexibility.'
        },
        component: AmigoTasksProject,
        images: [],
    },
    {
        slug: '/projects/noonpost',
        github: 'https://github.com/nhanv-dev/NoonpostNode',
        website: 'https://personal-blog-node.vercel.app/',
        card: {
            title: 'Noonpost',
            subTitle: 'Thoughtful Blog Space',
            productType: 'Content Platform',
            useCase: 'Digital Publishing',
            tags: ['Brand', 'Blog', 'Webapp'],
            image: 'https://images.unsplash.com/photo-1721864428830-7417b93831b8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            thumbnail: 'https://images.unsplash.com/photo-1612736232022-691d6243202b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'A minimalist blogging platform designed for focus and flow — offering intuitive editing, seamless publishing, and a clean reading experience. Crafted for writers who value clarity, simplicity, and creative freedom.',
        },
        component: NoonpostProject,
        images: [
            { id: 1, image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/noonpost%2Fnoonpost-1.png?alt=media&token=fab3ad5f-de15-4856-bbee-a16dcf27d065', height: 975 },
            { id: 2, image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/noonpost%2Fnoonpost-2.png?alt=media&token=bf5db890-0a09-4036-911b-559d56559338', height: 650 },
            { id: 3, image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/noonpost%2Fnoonpost-3.png?alt=media&token=87060777-9296-4f03-9e33-65551d9384ff', height: 650 },
            { id: 4, image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/noonpost%2Fnoonpost-4.png?alt=media&token=6fd7736d-aa8b-41db-a6ac-bd7d5b6e72a9', height: 975 },
            { id: 5, image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/noonpost%2Fnoonpost-5.png?alt=media&token=26a5cbd8-a23f-4bc0-b0ea-36aef396c5f6', height: 650 }
        ],
    },
    {
        slug: '/projects/spotify',
        github: 'https://github.com/nhanv-dev/SpotifyComplete',
        website: 'https://spotify-client-react.web.app/',
        card: {
            title: 'Spotify',
            subTitle: 'Dynamic Sound Space',
            productType: 'Music Streaming Platform',
            useCase: 'Reimagined Music Streaming',
            tags: ['Brand', 'Product', 'Webapp'],
            image: 'https://images.unsplash.com/photo-1504509546545-e000b4a62425?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            thumbnail: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/spotify%2Fspotify-card.webp?alt=media&token=5af72c1b-760c-4890-9995-752bfc88ab26',
            description: 'A feature-rich music streaming platform that replicates the Spotify experience with real-time playback, playlist management, and API-integrated audio control. Built in two versions — one powered by the official Spotify API, and another using a custom backend for full-stack control and flexibility.',
        },
        component: SpotifyProject,
        images: [
            { id: 2, image: '/images/spotifyv1/spotify-2.png', height: 975 },
            { id: 4, image: '/images/spotifyv1/spotify-4.png', height: 650 },
            { id: 3, image: '/images/spotifyv1/spotify-3.png', height: 650 },
            { id: 1, image: '/images/spotifyv1/spotify-6.png', height: 975 },
            { id: 5, image: '/images/spotifyv1/spotify-8.png', height: 650 },
        ],
    },
    {
        slug: '/projects/shopio',
        github: 'https://github.com/nhanv-dev/Shopio',
        website: 'https://ecommerce-d49f8.web.app/',
        card: {
            title: 'Shopio',
            subTitle: 'Clean. Fast. Commerce.',
            productType: 'Digital Commerce',
            useCase: 'Interactive Online Storefront',
            tags: ['e-commerce', 'ReactJS', 'NodeJS'],
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            thumbnail: 'https://images.unsplash.com/photo-1592839961530-17838c766df1?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'A modern eCommerce solution built for streamlined shopping experiences, intuitive product discovery, and efficient order management. Designed to scale with growing businesses while ensuring fast, secure, and engaging user journeys.',
        },
        component: ShopioProject,
        images: [
            { id: 1, image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/shopio%2Fshopio-2.png?alt=media&token=d5b778ad-1ce6-435f-b8ba-e1a5ebb885f9', height: 750 },
            { id: 2, image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/shopio%2Fshopio-1.png?alt=media&token=a6649940-6d0a-4283-bce9-778d3f04ca74', height: 650 },
            { id: 3, image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/shopio%2Fshopio-3.png?alt=media&token=48548d4b-829f-4081-b782-28e9bc7da1f7', height: 750 },
            { id: 4, image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/shopio%2Fshopio-4.png?alt=media&token=00a7c5a8-cf8d-4b63-b5a3-a6ad2a13b247', height: 400 },
            { id: 5, image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/shopio%2Fshopio-5.png?alt=media&token=4f65fc0c-9692-4e03-879e-669119097b9d', height: 750 },
            { id: 6, image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/shopio%2Fshopio-6.png?alt=media&token=e55ea527-a5b9-4c16-b4bc-69b097c50353', height: 500 },
            { id: 7, image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/shopio%2Fshopio-7.png?alt=media&token=e529e57b-8463-4e95-ad0b-e86c96a64a80', height: 650 },
            { id: 8, image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/shopio%2Fshopio-8.png?alt=media&token=922f8645-379b-423e-b226-a635ee314de7', height: 500 }
        ]
    },
    {
        slug: '/projects/chitchat',
        github: 'https://github.com/nhanv-dev/ChitChat',
        website: 'https://chitchat-e6ec4.web.app/',
        card: {
            title: 'Chitchat',
            subTitle: 'Real-Time. Real Talk.',
            productType: 'Messaging Platform',
            useCase: 'Real-Time Communication',
            tags: ['Websocket', 'CSR', 'Angular'],
            image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            thumbnail: 'https://images.unsplash.com/photo-1704018453307-d563498b585b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'A responsive chat application enabling real-time messaging, smart conversations, and seamless user interactions. Built to support fluid communication, modern UI, and efficient message delivery across devices.',
        },
        component: ChitchatProject,
        images: [
            { id: 1, image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/chitchat%2Fchitchat-1.png?alt=media&token=28232f6a-3a7a-4476-868a-e2bf02ed5be8', height: 750 },
            { id: 2, image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/chitchat%2Fchitchat-2.png?alt=media&token=97b27d3e-4fef-46fe-bde9-f234ea7ce7a4', height: 650 },
            { id: 3, image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/chitchat%2Fchitchat-3.png?alt=media&token=aaf39dcf-ad2a-46e8-8910-1a6edfa78923', height: 750 },
        ],
    },
    {
        slug: '/projects/todo-list',
        github: 'https://github.com/nhanv-dev/ReactTodoList',
        website: 'https://todos-list-f2750.web.app/',
        card: {
            title: 'Todo List',
            subTitle: 'Clear Tasks. Clear Mind',
            productType: 'Personal Productivity',
            useCase: 'Task & Time Management',
            tags: ['React', 'Redux'],
            image: 'https://images.unsplash.com/photo-1729710877209-1d2f9df0c8c8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            thumbnail: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/todo%2Ftodo-card.webp?alt=media&token=708a2847-58ab-43d4-9697-7dc22ab692fe',
            description: 'A minimalist productivity tool designed for planning, prioritizing, and completing daily tasks. Helps users stay focused and organized with a clean, intuitive interface and efficient workflow.',
        },
        component: TodoProject,
        images: [
            { id: 1, image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/todo%2Ftodo-1.png?alt=media&token=ccfe5a0e-b1b0-4975-84f7-0ff7b74f3626', height: 750 },
            { id: 2, image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/todo%2Ftodo-2.png?alt=media&token=55402e14-f91d-4fa7-bc1b-20c3377138e5', height: 650 },
        ],
    },
    {
        slug: '/projects/snake-game',
        website: 'https://snake-game-5bff8.web.app/',
        card: {
            title: 'Snake Game',
            subTitle: 'Classic Game. Fresh UI.',
            productType: 'Interactive Game',
            useCase: 'Casual Gaming Experience',
            tags: ['Gaming', 'Jquery', 'Javascript'],
            image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            thumbnail: 'https://images.unsplash.com/photo-1555864326-5cf22ef123cf?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'A classic arcade-inspired game delivering fast-paced, nostalgic gameplay with intuitive controls, responsive movement, and score-based progression. Designed for simplicity, fun, and endless replayability.',
        },
        component: SnakeGameProject,
        images: [
            { id: 1, image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/snake%2Fsnake-1.png?alt=media&token=100164ea-7ec4-4a2e-825f-7224f72eba69', height: 500 },
            { id: 3, image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/snake%2Fsnake-3.png?alt=media&token=32f97ed9-85b0-4078-b456-eb3130b35fdb', height: 500 },
            { id: 6, image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/snake%2Fsnake-6.png?alt=media&token=c81047f0-a77a-4da5-9684-f0b5cb55b99a', height: 500 },
        ],
    },
    {
        slug: '/projects/electric-store',
        github: 'https://github.com/nhanv-dev/ElectronicStore',
        website: '',
        card: {
            title: 'Electronic Store',
            subTitle: 'Buy Smarter. Brand Closer.',
            productType: 'Branded Commerce Site',
            useCase: 'Single-Brand Online Shopping',
            tags: ['SSR', 'Java', 'JSP', 'Servlet'],
            image: 'https://images.unsplash.com/photo-1631176093617-63490a3d785a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            thumbnail: 'https://images.unsplash.com/photo-1614860243518-c12eb2fdf66c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'A complete e-commerce solution tailored for a single electronic retailer, featuring user authentication, product browsing, cart and checkout flows, and a seamless customer experience from login to order completion.',
        },
        component: ElectronicProject,
        images: [],
    },
    {
        slug: '/projects/commodities-mart',
        github: 'https://github.com/nhanv-dev/CommodityDrawler',
        card: {
            title: 'Commodities Mart',
            subTitle: 'Global Data. Simplified.',
            productType: 'Data Aggregator',
            useCase: 'Commodity Intelligence',
            tags: ['ETL', 'Java', 'Jsoup', 'JSP', 'Servlet'],
            image: 'https://images.unsplash.com/photo-1613441583994-7080eafd6e6b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            thumbnail: 'https://images.unsplash.com/photo-1613441583079-89c728579a07?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'A lightweight data display platform that aggregates commodity prices from multiple online sources, helping users monitor global market trends in real-time. Designed for simplicity, clarity, and efficient data presentation.',
        },
        component: CommoditiesMartProject,
        images: [],
    },
]
