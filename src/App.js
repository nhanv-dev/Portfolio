import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import ContactPage from "./pages/Contact";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact={true} path={"/home"} element={<Home/>}/>
                <Route exact={true} path={"/contact"} element={<ContactPage/>}/>
                <Route exact={true} path={"/projects"} element={<Home/>}/>
                <Route exact={true} path={"/"} element={<Home/>}/>
                <Route path={"/*"} element={<Home/>}/>
            </Routes>
        </Router>
    )
}