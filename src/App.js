import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ContactPage from "./pages/Contact";
import ProjectsPage from "./pages/Projects";
import Layout from "./components/Layout";
import AboutPage from "./pages/About";
import ProjectDetailPage from "./pages/ProjectDetail";

export default function App() {

    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path={"/projects/:slug"} element={<ProjectDetailPage />} />
                    <Route exact={true} path={"/home"} element={<Home />} />
                    <Route exact={true} path={"/projects"} element={<ProjectsPage />} />
                    <Route exact={true} path={"/contact"} element={<ContactPage />} />
                    <Route exact={true} path={"/about"} element={<AboutPage />} />
                    <Route exact path="/" element={<Navigate to="/home" replace />} />
                    <Route path="/*" element={<Navigate to="/home" replace />} />
                </Routes>
            </Layout>
        </Router>
    )
}