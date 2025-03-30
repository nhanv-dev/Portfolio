import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TypingEffect({ texts, speed = 100, delay = 1500, className = "" }) {
	const [displayText, setDisplayText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);
	const [index, setIndex] = useState(0);
	const [textIndex, setTextIndex] = useState(0);

	useEffect(() => {
		const typingInterval = setTimeout(() => {
			const currentText = texts[textIndex];

			if (!isDeleting) {
				if (index < currentText.length) {
					setDisplayText(currentText.substring(0, index + 1));
					setIndex((prev) => prev + 1);
				} else {
					setTimeout(() => setIsDeleting(true), delay);
				}
			} else {
				if (index > 0) {
					setDisplayText(currentText.substring(0, index - 1));
					setIndex((prev) => prev - 1);
				} else {
					setIsDeleting(false);
					setTextIndex((prev) => (prev + 1) % texts.length);
				}
			}
		}, isDeleting ? speed / 2 : speed);

		return () => clearTimeout(typingInterval);
	}, [index, isDeleting, textIndex, texts, speed, delay]);



	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
		>
			{displayText}
			<span className="bg-gradient-to-r from-pink-400 to-blue-400 text-transparent bg-clip-text animate-pulse">
			</span>
		</motion.div>
	);
}


