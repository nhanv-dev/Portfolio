import React from 'react'

export default function TitleSection({ title, title2, subTitle, subTitle2, className }) {
	return (
		<div className={`text-center md:text-left ${className}`}>
			<h2 className="text-6xl md:text-7xl font-extrabold font-unbounded text-stroke text-black uppercase"
				style={{ WebkitTextStrokeWidth: '3px' }}
			>
				{title}
			</h2>
			<br />
			<div className="flex items-end ">
				<h2 className='text-6xl md:text-7xl font-extrabold font-unbounded text-[#AAAAAA] uppercase'>
					{title2}
				</h2>
				<div className="flex flex-col leading-tight md:ml-4 text-white">
					<span className="text-2xl font-extrabold uppercase mb-1.5">{subTitle}</span>
					<span className="text-2xl font-extrabold uppercase">{subTitle2}</span>
				</div>
			</div>
		</div>
	)
}
