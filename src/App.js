import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactPage from "./pages/Contact";
import ProjectsPage from "./pages/Projects";
import Layout from "./components/Layout";

export default function App() {

    return (
        <Router>
            <Layout>
                <Routes>
                    <Route exact={true} path={"/home"} element={<Home />} />
                    <Route exact={true} path={"/projects"} element={<ProjectsPage />} />
                    <Route exact={true} path={"/contact"} element={<ContactPage />} />
                    <Route exact={true} path={"/about"} element={<ContactPage />} />
                    <Route exact={true} path={"/"} element={<Home />} />
                    <Route path={"/*"} element={<Home />} />
                </Routes>
            </Layout>
        </Router>
    )
}