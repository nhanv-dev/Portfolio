import React from 'react'
import { motion } from "framer-motion";

export default function TitleSection2({ title, subTitle, subTitle2, className, titleClassName, subTitleClassName }) {
	return (
		<div className={`text-center md:text-left font-extrabold font-kanit ${className}`}>
			<motion.h2
				className={`lg:text-5xl font-extrabold font-kanit text-[#AAAAAA] uppercase ${titleClassName}`}
				initial={{ opacity: 0, x: 50 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, amount: 0.4 }}
				transition={{ duration: .8, ease: 'easeOut', delay: 0 }}
			>
				{title}
			</motion.h2>
			<br />
			<motion.h2
				initial={{ opacity: 0, x: 50 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, amount: 0.4 }}
				transition={{ duration: .8, ease: 'easeOut', delay: 0 }}
				className='lg:text-6xl text-white uppercase inline-block'
			>
				<span
					className={`text-6xl md:text-6xl text-stroke text-black uppercase inline-block ${subTitleClassName}`}
					style={{ WebkitTextStrokeWidth: '4px' }}
				>
					{subTitle}
				</span> {subTitle2}
			</motion.h2>
		</div>
	)
}
