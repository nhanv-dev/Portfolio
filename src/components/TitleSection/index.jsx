import React from 'react'
import { motion } from "framer-motion";

export default function TitleSection({ title, title2, subTitle, subTitle2, className, titleClassName }) {
	return (
		<div className={`text-center md:text-left ${className}`}>
			<motion.h2
				className={`text-6xl lg:text-6xl font-extrabold tracking-wider font-kanit text-stroke text-black uppercase ${titleClassName} mb-2`}
				initial={{ opacity: 0, x: 50 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, amount: 0.4 }}
				transition={{ duration: .8, ease: 'easeOut', delay: 0 }}
			>
				{title}
			</motion.h2> 
			<div className="flex items-end ">
				<motion.h2
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: .8, ease: 'easeOut', delay: 0 }}
					className='text-6xl lg:text-6xl font-extrabold tracking-wider font-kanit text-[#cccccc] uppercase'
				>
					{title2}
				</motion.h2>
				<div className="flex flex-col leading-tight md:ml-4 text-white">
					<motion.span
						className="text-[1.1rem] font-extrabold tracking-wide uppercase font-kanit mb-1.5"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.4 }}
						transition={{ duration: .8, ease: 'easeOut', delay: 0 }}
					>
						{subTitle}
					</motion.span>
					<motion.span
						className="text-[1.1rem] font-extrabold tracking-wide uppercase font-kanit mb-1"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.4 }}
						transition={{ duration: .8, ease: 'easeOut', delay: 0 }}
					>
						{subTitle2}
					</motion.span>
				</div>
			</div>
		</div>
	)
}
