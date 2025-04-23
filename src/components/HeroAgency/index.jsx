import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HeroAgency = () => {
	return (
		<div className="relative min-h-screen bg-white text-black">


			{/* Main Content */}
			<div className="container flex items-center justify-between gap-20">
				{/* Social Links Sidebar */}
				<div className="flex flex-col gap-6 z-10">
					<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black/70 hover:text-white">
						<FaFacebook size={24} />
					</a>
					<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black/70 hover:text-white">
						<FaTwitter size={24} />
					</a>
					<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black/70 hover:text-white">
						<FaInstagram size={24} />
					</a>
					<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black/70 hover:text-white">
						<FaLinkedin size={24} />
					</a>
				</div>
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Left Content */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="space-y-6"
					>
						<h1 className="text-6xl font-bold leading-tight">
							We Excel In
							<span className="block text-emerald-500">Web Development</span>
							And Agency
							<span className="block text-gray-500">Services</span>
						</h1>

						<p className="text-lg text-gray-300 max-w-xl">
							We excel in delivering top-notch web development and comprehensive agency services,
							ensuring innovative digital solutions for our clients.
						</p>

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.5 }}
						>
							<Link
								to="/contact"
								className="inline-flex items-center px-8 py-3 bg-emerald-500 text-white rounded-full 
                                         font-semibold hover:bg-emerald-600 transition-colors"
							>
								Get Started
							</Link>
						</motion.div>
					</motion.div>

					{/* Right Content - Image Grid */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="relative grid grid-cols-2 gap-4"
					>
						<div className="space-y-4">
							<img
								src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
								alt="Coding"
								className="w-full h-48 object-cover rounded-lg"
							/>
							<img
								src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
								alt="Development"
								className="w-full h-64 object-cover rounded-lg"
							/>
						</div>
						<div className="space-y-4 pt-12">
							<img
								src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
								alt="Technology"
								className="w-full h-64 object-cover rounded-lg"
							/>
							<img
								src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
								alt="Coding Environment"
								className="w-full h-48 object-cover rounded-lg"
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default HeroAgency;



const GridSquares = () => {
	return (
		<div className="relative w-[100px] h-[100px]">
			{/* Container for the squares */}
			<div className="absolute w-full h-full">
				{/* Grid layout */}
				<div className="grid grid-cols-2 gap-1 w-full h-full">
					{/* Top left square - white */}
					<div className="bg-white"></div>
					{/* Top right square - gray */}
					<div className="bg-gray-200"></div>
					{/* Bottom left square - gray */}
					<div className="bg-gray-200"></div>
					{/* Bottom right square - white */}
					<div className="bg-white"></div>
				</div>
			</div>
		</div>
	);
}; 