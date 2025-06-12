export const opacityWheelAnimation = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, amount: 0.4 },
    transition: { duration: 0.8, ease: 'easeOut' }
};

export const slideUpWheelAnimation = {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.4 },
    transition: { duration: 0.8, ease: 'easeOut' }
};

export const slideDownWheelAnimation = {
    initial: { opacity: 0, y: -100 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.4 },
};

export const slideLeftWheelAnimation = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.4 },
    transition: { duration: 0.8, ease: 'easeOut' }
};

export const slideRightWheelAnimation = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.4 },
    transition: { duration: 0.8, ease: 'easeOut' }
};

