import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import './index.css';

const savedTheme = localStorage.getItem("theme");
const darkMode = savedTheme === "dark";

if (darkMode || !savedTheme) {
	document.documentElement.classList.add("dark");
	localStorage.setItem("theme", "dark");
} else {
	document.documentElement.classList.remove("dark");
	localStorage.setItem("theme", "light");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

