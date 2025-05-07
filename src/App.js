import React from "react";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import { LoadingProvider } from "./components/LoadingProvider";

// Direct imports instead of lazy loading
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import Home from "./pages/Home";
import ProjectDetailPage from "./pages/ProjectDetail";
import ProjectsPage from "./pages/Projects";

// Commented out lazy loading
// const Home = lazy(() => import("./pages/Home"));
// const ContactPage = lazy(() => import("./pages/Contact"));
// const ProjectsPage = lazy(() => import("./pages/Projects"));
// const AboutPage = lazy(() => import("./pages/About"));
// const ProjectDetailPage = lazy(() => import("./pages/ProjectDetail"));

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
            {/* Removed Suspense since we're not using lazy loading anymore */}
            <RouterProvider router={router} />
        </LoadingProvider>
    );
}