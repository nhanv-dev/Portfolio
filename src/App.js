import React, { Suspense, lazy } from "react";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import { LoadingProvider } from "./components/LoadingProvider";

// Lazy loading pages
const Home = lazy(() => import("./pages/Home"));
const ContactPage = lazy(() => import("./pages/Contact"));
const ProjectsPage = lazy(() => import("./pages/Projects"));
const AboutPage = lazy(() => import("./pages/About"));
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetail"));

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Navigate to="/home" replace />,
        },
        {
            path: "/",
            element: <Layout />,
            children: [
                { path: "home", element: <Home /> },
                { path: "projects", element: <ProjectsPage /> },
                { path: "projects/:slug", element: <ProjectDetailPage /> },
                { path: "contact", element: <ContactPage /> },
                { path: "about", element: <AboutPage /> },
            ]
        },
        {
            path: "*",
            element: <Navigate to="/home" replace />
        }
    ],
    {
        future: {
            v7_startTransition: true,
            v7_relativeSplatPath: true
        }
    }
);

export default function App() {
    return (
        <LoadingProvider>
            <Suspense fallback={<div className="fixed top-0 left-0 w-full h-full bg-black z-[9999]"></div>}>
                <RouterProvider router={router} />
            </Suspense>
        </LoadingProvider>
    );
}