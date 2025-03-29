import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = ({ texts, onLoaded }) => {
    const [textIndex, setTextIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (!texts || texts.length === 0) {
            onLoaded();
            return;
        }

        let interval = setInterval(() => {
            setTextIndex((prev) => prev + 1);
        }, 1800);

        const timeout = setTimeout(() => {
            clearInterval(interval);
            setIsVisible(false);
            onLoaded();
        }, texts.length * 1800);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [texts, onLoaded]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center z-50 transition-all duration-500 bg-white text-black dark:bg-black dark:text-white">
            {textIndex < texts.length && (
                <motion.h1
                    key={textIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-5xl font-bold"
                >
                    {texts[textIndex]}
                </motion.h1>
            )}
        </div>
    );
};

export default Preloader;
