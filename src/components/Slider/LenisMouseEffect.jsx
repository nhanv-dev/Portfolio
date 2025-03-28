import { motion } from "framer-motion";
import { useState } from "react";

export default function LenisMouseEffect({ children }) {
	const [position, setPosition] = useState({ x: 0, y: 0 });


	// Xử lý hiệu ứng di chuyển theo chuột
	const handleMouseMove = (e) => {
		const { clientX, clientY } = e;
		setPosition({
			x: (clientX - window.innerWidth / 2) / 10, // Chia nhỏ để giảm biên độ
			y: (clientY - window.innerHeight / 2) / 10,
		});
	};

	return (
		<div onMouseMove={handleMouseMove}>
			<motion.div
				animate={{ x: position.x, y: position.y }}
				transition={{ type: "spring", stiffness: 100, damping: 10 }}
				className=""
			>
				{children}
			</motion.div>
		</div>
	);
}
