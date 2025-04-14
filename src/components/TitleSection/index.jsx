import React from 'react'
import { motion } from "framer-motion";

export default function TitleSection({ title, title2, subTitle, subTitle2, className }) {
	return (
		<div className={`text-center md:text-left ${className}`}>
			<motion.h2
				className="text-6xl md:text-7xl font-extrabold font-unbounded text-stroke text-black uppercase"
				initial={{ opacity: 0, x: -100 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: .8, ease: 'easeOut', delay: 0 }}
				style={{ WebkitTextStrokeWidth: '3px' }}
			>
				{title}
			</motion.h2>
			<br />
			<div className="flex items-end ">
				<motion.h2
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: .8, ease: 'easeOut', delay: 0.2 }}
					className='text-6xl md:text-7xl font-extrabold font-unbounded text-[#AAAAAA] uppercase'
				>
					{title2}
				</motion.h2>
				<div className="flex flex-col leading-tight md:ml-4 text-white">
					<motion.span
						className="text-2xl font-extrabold uppercase mb-1.5"
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: .8, ease: 'easeOut', delay: 0.5 }}
					>
						{subTitle}
					</motion.span>
					<motion.span
						className="text-2xl font-extrabold uppercase"
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: .8, ease: 'easeOut', delay: 0.7 }}
					>
						{subTitle2}
					</motion.span>
				</div>
			</div>
		</div>
	)
}
