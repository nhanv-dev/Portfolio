import React from "react";
import { useLoading } from "../LoadingProvider";
import Preloader from "../Preloader";

export default function PageWithPreload({ children, texts = [] }) {
	const { isLoaded, setIsLoaded } = useLoading();

	return (
		<>
			{!isLoaded && (
				<Preloader texts={texts} onLoaded={() => setIsLoaded(true)} />
			)}
			{isLoaded && children}
		</>
	);
}

