import DepotProject from './components/Projects/DepotProject';
import NoonpostProject from './components/Projects/NoonpostProject';
import ShopioProject from './components/Projects/ShopioProject';
import SpotifyProject from './components/Projects/SpotifyProject';

export const slides = [
    { title: 'Welcome Aboard', src: '/images/slide-1.jpg' },
    { title: 'Discover Me', src: '/images/slide-2.avif' },
    { title: 'Get in Touch', src: '/images/slide-3.avif' },
]

// https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-demo-2/oh__img59.1.jpg

export const projects = [
    {
        slug: '/projects/depot',
        website: 'https://depot-store-3aa17.web.app/',
        thumbnail: 'https://devrajchatribin.com/_next/image?url=https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fct2epucbo91koigl3xmr.png&w=828&q=75',
        card_title: 'Depot',
        card_desc: 'eCommerce - ReactJS - Spring Boot',
        card_image: 'https://mona.media/wp-content/uploads/2021/07/ecommerce.png',
        component: DepotProject,
    },
    {
        slug: '/projects/amigo-tasks',
        website: 'https://amigo-tasks.vercel.app/',
        thumbnail: 'https://devrajchatribin.com/_next/image?url=https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fct2epucbo91koigl3xmr.png&w=828&q=75',
        card_title: 'Amigo Tasks',
        card_desc: 'NextJS - NestJS - MongoDB - ChatGPT',
        card_image: 'https://images.unsplash.com/photo-1493839523149-2864fca44919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80',
        images: [],
    },
    {
        slug: '/projects/noonpost',
        website: 'https://personal-blog-node.vercel.app/',
        thumbnail: 'https://devrajchatribin.com/_next/image?url=https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fct2epucbo91koigl3xmr.png&w=828&q=75',
        card_title: 'Noonpost',
        card_desc: 'Brand - Blog - Webapp',
        card_image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/noonpost%2Fnoonpost-card.jpg?alt=media&token=72c7a1c4-2218-4448-a04d-156186ae3106',
        component: NoonpostProject,
        images: [
            {
                id: 1,
                image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/noonpost%2Fnoonpost-1.png?alt=media&token=fab3ad5f-de15-4856-bbee-a16dcf27d065',
                height: 975
            },
            {
                id: 2,
                image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/noonpost%2Fnoonpost-2.png?alt=media&token=bf5db890-0a09-4036-911b-559d56559338',
                height: 650
            },
            {
                id: 3,
                image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/noonpost%2Fnoonpost-3.png?alt=media&token=87060777-9296-4f03-9e33-65551d9384ff',
                height: 650
            },
            {
                id: 4,
                image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/noonpost%2Fnoonpost-4.png?alt=media&token=6fd7736d-aa8b-41db-a6ac-bd7d5b6e72a9',
                height: 975
            },
            {
                id: 5,
                image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/noonpost%2Fnoonpost-5.png?alt=media&token=26a5cbd8-a23f-4bc0-b0ea-36aef396c5f6',
                height: 650
            }
        ],
    },
    {
        slug: '/projects/spotify',
        website: 'https://spotify-client-react.web.app/',
        thumbnail: 'https://devrajchatribin.com/_next/image?url=https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fct2epucbo91koigl3xmr.png&w=828&q=75',
        card_title: 'Spotify v1',
        card_desc: 'Brand - Product - Webapp',
        card_image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/spotify%2Fspotify-card.webp?alt=media&token=5af72c1b-760c-4890-9995-752bfc88ab26',
        component: SpotifyProject,
        images: [
            {
                id: 2,
                image: '/images/spotifyv1/spotify-2.png',
                height: 975
            },
            {
                id: 4,
                image: '/images/spotifyv1/spotify-4.png',
                height: 650
            },
            {
                id: 3,
                image: '/images/spotifyv1/spotify-3.png',
                height: 650
            },
            {
                id: 1,
                image: '/images/spotifyv1/spotify-6.png',
                height: 975
            },
            {
                id: 5,
                image: '/images/spotifyv1/spotify-8.png',
                height: 650
            }
        ],
    },
    {
        slug: '/projects/spotify-v2',
        website: 'https://spotify-storage-2bef1.web.app/',
        thumbnail: 'https://devrajchatribin.com/_next/image?url=https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fct2epucbo91koigl3xmr.png&w=828&q=75',
        card_title: 'Spotify v2',
        card_desc: 'React - Node - MongoDB',
        card_image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/spotify-v2%2Fspotify-v2-card.jpg?alt=media&token=89fb8541-40b5-45c7-aea6-6bf4ff69042f',
        images: [
            { id: 1, image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/spotify-v2%2Fspotify-v2-(1).png?alt=media&token=c26d6e1d-3aff-43ad-af4d-1bd946d0b234', height: 650 },
            { id: 2, image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/spotify-v2%2Fspotify-v2-(8).png?alt=media&token=8ce0ae01-f3ef-4c32-a677-74e287765288', height: 650 },
            { id: 3, image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/spotify-v2%2Fspotify-v2-(7).png?alt=media&token=a18fba24-a00c-47bc-8c34-41b4d0935dcf', height: 650 },
            { id: 4, image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/spotify-v2%2Fspotify-v2-(6).png?alt=media&token=d1f9b886-4a61-4c85-b1bd-7a7b1db9508e', height: 650 },
            { id: 5, image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/spotify-v2%2Fspotify-v2-(5).png?alt=media&token=a1c8dab0-3044-4718-8624-a17890e70d29', height: 650 },
            { id: 6, image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/spotify-v2%2Fspotify-v2-(3).png?alt=media&token=d1ddae38-814d-4013-932a-3118edc43206', height: 650 },
            { id: 7, image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/spotify-v2%2Fspotify-v2-(4).png?alt=media&token=b5003ff2-95b3-494e-bf28-055258b475f3', height: 650 },
            { id: 8, image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/spotify-v2%2Fspotify-v2-(2).png?alt=media&token=6b60caf5-03cb-4217-a31b-42faf3eb65b3', height: 650 },
        ],
    },
    {
        slug: '/projects/shopio',
        website: 'https://ecommerce-d49f8.web.app/',
        thumbnail: 'https://devrajchatribin.com/_next/image?url=https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fct2epucbo91koigl3xmr.png&w=828&q=75',
        card_title: 'Shopio',
        card_desc: 'eCommerce - ReactJS - NodeJS',
        card_image: 'https://cdn.dribbble.com/users/2198224/screenshots/14443181/media/c61c0b293ccf395c7160f8495067fd20.jpg?compress=1&resize=800x600',
        component: ShopioProject,
        images: [
            {
                'id': 1,
                'image': 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/shopio%2Fshopio-2.png?alt=media&token=d5b778ad-1ce6-435f-b8ba-e1a5ebb885f9',
                'height': 750
            },
            {
                'id': 2,
                'image': 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/shopio%2Fshopio-1.png?alt=media&token=a6649940-6d0a-4283-bce9-778d3f04ca74',
                'height': 650
            },
            {
                'id': 3,
                'image': 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/shopio%2Fshopio-3.png?alt=media&token=48548d4b-829f-4081-b782-28e9bc7da1f7',
                'height': 750
            },
            {
                'id': 4,
                'image': 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/shopio%2Fshopio-4.png?alt=media&token=00a7c5a8-cf8d-4b63-b5a3-a6ad2a13b247',
                'height': 400
            },
            {
                'id': 5,
                'image': 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/shopio%2Fshopio-5.png?alt=media&token=4f65fc0c-9692-4e03-879e-669119097b9d',
                'height': 750
            },
            {
                'id': 6,
                'image': 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/shopio%2Fshopio-6.png?alt=media&token=e55ea527-a5b9-4c16-b4bc-69b097c50353',
                'height': 500
            },
            {
                'id': 7,
                'image': 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/shopio%2Fshopio-7.png?alt=media&token=e529e57b-8463-4e95-ad0b-e86c96a64a80',
                'height': 650
            },
            {
                'id': 8,
                'image': 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/shopio%2Fshopio-8.png?alt=media&token=922f8645-379b-423e-b226-a635ee314de7',
                'height': 500
            }
        ]

    },
    {
        slug: '/projects/chitchat',
        website: 'https://chitchat-e6ec4.web.app/',
        thumbnail: 'https://devrajchatribin.com/_next/image?url=https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fct2epucbo91koigl3xmr.png&w=828&q=75',
        card_title: 'Chitchat',
        card_desc: 'Websocket - CSR - Angular',
        card_image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/chitchat%2Fchitchat.jpg?alt=media&token=51908088-ad87-430c-90c1-77b09d2eb5e4',
        images: [
            'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/chitchat%2Fchitchat-1.png?alt=media&token=28232f6a-3a7a-4476-868a-e2bf02ed5be8',
            'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/chitchat%2Fchitchat-2.png?alt=media&token=97b27d3e-4fef-46fe-bde9-f234ea7ce7a4',
            'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/chitchat%2Fchitchat-3.png?alt=media&token=aaf39dcf-ad2a-46e8-8910-1a6edfa78923',
        ],
    },
    {
        slug: '/projects/todo-list',
        website: 'https://todos-list-f2750.web.app/',
        thumbnail: 'https://devrajchatribin.com/_next/image?url=https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fct2epucbo91koigl3xmr.png&w=828&q=75',
        card_title: 'Todo List',
        card_desc: 'Blog - Webapp',
        card_image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/todo%2Ftodo-card.webp?alt=media&token=708a2847-58ab-43d4-9697-7dc22ab692fe',
        images: [
            'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/todo%2Ftodo-1.png?alt=media&token=ccfe5a0e-b1b0-4975-84f7-0ff7b74f3626',
            'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/todo%2Ftodo-2.png?alt=media&token=55402e14-f91d-4fa7-bc1b-20c3377138e5',
        ],
    },
    {
        slug: '/projects/snake-game',
        website: 'https://snake-game-5bff8.web.app/',
        thumbnail: 'https://devrajchatribin.com/_next/image?url=https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fct2epucbo91koigl3xmr.png&w=828&q=75',
        card_title: 'Snake Game',
        card_desc: 'Entertainment - Jquery - Javascript',
        card_image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/snake%2Fsnake-card.jpg?alt=media&token=761c905d-23b6-44f4-ba7e-956afd01b77b',
        images: [
            'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/snake%2Fsnake-1.png?alt=media&token=100164ea-7ec4-4a2e-825f-7224f72eba69',
            'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/snake%2Fsnake-2.png?alt=media&token=a273de38-f49c-4707-a39a-df724fed7f9e',
            'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/snake%2Fsnake-3.png?alt=media&token=32f97ed9-85b0-4078-b456-eb3130b35fdb',
            'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/snake%2Fsnake-4.png?alt=media&token=4c7e192f-97d4-4357-b098-bfcdfc55de3b',
            'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/snake%2Fsnake-5.png?alt=media&token=e3e5e6c9-61a4-4ae3-8a37-964a6d34edad',
            'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-9a2f1.appspot.com/o/snake%2Fsnake-6.png?alt=media&token=c81047f0-a77a-4da5-9684-f0b5cb55b99a',
        ],
    },
    {
        slug: '/projects/electric-store',
        website: '',
        thumbnail: 'https://devrajchatribin.com/_next/image?url=https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fct2epucbo91koigl3xmr.png&w=828&q=75',
        card_title: 'Electronic Store',
        card_desc: 'eCommerce - SSR - JavaWeb',
        card_image: 'https://cdn.dribbble.com/users/3713179/screenshots/9536384/media/ed9f05d7ed5b92878712ced805e97a54.png?compress=1&resize=400x300',
        images: [],
    },
    {
        slug: '/projects/data-warehouse',
        website: 'https://ecommerce-d49f8.web.app/',
        thumbnail: 'https://devrajchatribin.com/_next/image?url=https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fct2epucbo91koigl3xmr.png&w=828&q=75',
        card_title: 'Commodities Mart',
        card_desc: 'ETL - Java - Jsoup - JSP - Servlet',
        card_image: 'https://mona.media/wp-content/uploads/2021/07/ecommerce.png',
        images: [],
    },
]