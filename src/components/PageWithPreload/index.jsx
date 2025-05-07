import React, { useEffect, useState, useCallback } from "react";
import PropTypes from 'prop-types';
import { useLoading } from "../LoadingProvider";
import Preloader from "../Preloader";
import { useLenis } from "../LenisProvider";

const PageWithPreload = ({ children, texts = [] }) => {
	const { isLoaded, setIsLoaded, setTransition } = useLoading();
	const [isComplete, setIsComplete] = useState(false);
	const lenis = useLenis();

	const handlePreloaderComplete = useCallback(() => {
		setIsComplete(true);
		setIsLoaded(true);
		setTransition(false);
	}, [setIsComplete, setIsLoaded, setTransition]);

	useEffect(() => {
		const htmlElement = document.documentElement;

		if (lenis) {
			lenis.scrollTo(0, { immediate: true });
		}

		if (!isLoaded && !isComplete) {
			lenis?.stop();
			htmlElement.style.overflow = 'hidden';
		} else {
			lenis?.start();
			htmlElement.style.overflow = 'auto';
		}

		return () => {
			htmlElement.style.overflow = 'auto';
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoaded, isComplete]);

	const showPreloader = !isLoaded && !isComplete;

	return (
		<>
			{children}
			{showPreloader && (
				<Preloader
					texts={texts}
					onLoaded={handlePreloaderComplete}
				/>
			)}
		</>
	);
};

PageWithPreload.propTypes = {
	children: PropTypes.node.isRequired,
	texts: PropTypes.arrayOf(PropTypes.string)
};

export default PageWithPreload;

