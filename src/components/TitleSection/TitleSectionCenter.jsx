import React from 'react'
import { motion } from "framer-motion";

export default function TitleSectionCenter({ title, title2, className = "", titleClassName = "", variant }) {

	return (
		<div className={`text-center ${className} w-full`}>
			<motion.h2
				className={`text-6xl lg:text-6xl font-extrabold tracking-wider font-kanit uppercase mb-2 ${titleClassName} text-transparent`}
				initial={{ opacity: 0, x: 50 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, amount: 0.4 }}
				transition={{ duration: .8, ease: 'easeOut', delay: 0 }}
				style={{ WebkitTextStroke: variant === 'white' ? '1px rgb(0, 0, 0)' : '1px rgb(255, 255, 255)' }}
			>
				{title}
			</motion.h2>
			<motion.h2
				initial={{ opacity: 0, x: 50 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, amount: 0.4 }}
				transition={{ duration: .8, ease: 'easeOut', delay: 0 }}
				className={`text-6xl lg:text-6xl font-extrabold tracking-wider font-kanit uppercase ${variant === 'white' ? 'text-lightText' : 'text-darkText'}`}
			>
				{title2}
			</motion.h2>
		</div>
	)
}
