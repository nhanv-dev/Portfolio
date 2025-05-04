import React, { useState } from "react";
import { useLoading } from "../LoadingProvider";
import Preloader from "../Preloader";

export default function PageWithPreload({ children, texts = [] }) {
	const { isLoaded, setIsLoaded, setTransition } = useLoading();
	const [isComplete, setIsComplete] = useState(false);

	if (!isLoaded && !isComplete) {
		return (
			<Preloader texts={texts} onLoaded={() => {
				setIsComplete(true);
				setIsLoaded(true);
				setTransition(false);
			}} />
		);
	}

	return (children);
}

