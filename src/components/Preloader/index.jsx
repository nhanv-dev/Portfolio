import { motion } from "framer-motion";
import { useEffect, useState } from "react";



const Preloader = ({ texts, onLoaded }) => {
    const [textIndex, setTextIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!texts || texts.length === 0) {
            onLoaded();
            return;
        }

        const totalDuration = texts.length * 1800; // Total time for loading (texts.length * 1800)
        const targetDuration = totalDuration * 0.85;
        let startTime = Date.now();

        let progressInterval = setInterval(() => {
            const elapsedTime = Date.now() - startTime; // Time elapsed in ms
            const progressPercentage = (elapsedTime / targetDuration) * 100; // Calculate the progress in the first 90% of the time

            // Add randomness to the increment (between 0.5% and 2% per interval)
            const randomIncrement = Math.random() * (2 - 0.5) + 0.5; // Random value between 0.5% and 2%
            const newProgress = progressPercentage + randomIncrement;

            // Cap at 100% and ensure smooth progress
            setProgress((prev) => {
                if (newProgress >= 100) {
                    clearInterval(progressInterval); // Stop the interval once 100% is reached
                    return 100; // Cap at 100%
                }
                return Math.min(newProgress, 100); // Keep the value within bounds
            });
        }, 100);

        let interval = setInterval(() => {
            setTextIndex((prev) => prev + 1);
        }, 1800);

        let timeout = setTimeout(() => {
            clearInterval(interval);
            clearInterval(progressInterval);
            setIsVisible(false);
            onLoaded();
        }, totalDuration);

        return () => {
            clearInterval(interval);
            clearInterval(progressInterval);
            clearTimeout(timeout);
        };
    }, [texts, onLoaded]);

    if (!isVisible) return null;

    return (
        <motion.div
            initial={{ filter: "blur(10px)" }}
            animate={{ filter: "blur(0px)" }}
            transition={{
                duration: 1,
                ease: 'easeOut'
            }}
            className="fixed left-0 top-0 w-full h-full flex flex-col items-center justify-center z-[9999] transition-all duration-500 bg-black text-white"
        >
            {texts.map((text, index) => {
                if (index <= textIndex) {
                    return (
                        <div key={index} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <motion.h1
                                key={index}
                                initial={{
                                    y: 100,
                                    opacity: 0
                                }}
                                animate={{
                                    y: index === textIndex ? 0 : -20,
                                    opacity: index === textIndex ? 1 : 0,
                                    scale: index === textIndex ? 1 : 0.9,
                                }}
                                transition={{
                                    duration: index === textIndex ? 1.5 : 0.6,
                                    ease: 'easeOut'
                                }}
                                className="text-4xl font-bold font-unbounded"
                            >
                                {text}
                            </motion.h1>
                        </div>
                    )
                }
                return null;
            })}
            <div className="fixed bottom-10 left-10 right-10 flex items-end justify-between">
                <div className="flex items-center min-w-max w-[200px] justify-start">
                    <h5 className="font-extrabold text-lg tracking-wide text-darkText">
                        <span>Port</span>
                        <span className="text-primary ml-1">folio.</span>
                    </h5>
                </div>
                <div className="text-center text-lg font-bold">{Math.round(progress || 0)}%</div>
                <div className="font-semibold text-md tracking-[0.2rem] text-darkText uppercase w-[200px] text-right">Loading... </div>
            </div>
        </motion.div>
    );
};

export default Preloader;
