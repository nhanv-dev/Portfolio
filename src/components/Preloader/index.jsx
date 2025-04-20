import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import './style.css';

const Preloader = ({ texts, onLoaded }) => {
    const [textIndex, setTextIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!texts || texts.length === 0) {
            onLoaded();
            return;
        }

        const totalDuration = texts.length * 1500; // Total time for loading (texts.length * 1800)
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
        }, 1500);

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
        <div className="fixed inset-0 flex flex-col items-center justify-center z-[999] transition-all duration-500 bg-black text-white">
            {textIndex < texts.length && (
                <motion.h1
                    key={textIndex}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-5xl font-bold"
                >
                    {texts[textIndex]}
                </motion.h1>
            )}
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
        </div>
    );
};

export default Preloader;
