import { useState, useEffect } from 'react';

const useIntersectionObserver = (ref, options = { threshold: 0.5 }) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			options
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				// eslint-disable-next-line react-hooks/exhaustive-deps
				observer.unobserve(ref.current);
			}
		};
	}, [ref, options]);

	return isVisible;
};

export default useIntersectionObserver;
