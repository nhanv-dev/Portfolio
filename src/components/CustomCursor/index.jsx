// CustomCursor.jsx
import { useEffect, useRef } from 'react';
import './style.css';

function CustomCursor() {
    const cursorOuterRef = useRef(null);
    const cursorInnerRef = useRef(null);
    const mousePosition = useRef({ x: 0, y: 0 });
    const rafId = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            mousePosition.current.x = event.clientX;
            mousePosition.current.y = event.clientY;
        };

        document.body.addEventListener('mousemove', handleMouseMove);

        const render = () => {
            const { x, y } = mousePosition.current;
            const mouseX = x - cursorOuterRef.current?.clientWidth / 2 + 20;
            const mouseY = y - cursorOuterRef.current?.clientHeight / 2 + 20;

            const elementUnderMouse = document.elementFromPoint(x, y);
            const computedCursor = elementUnderMouse ? window.getComputedStyle(elementUnderMouse).cursor : 'default';

            if (cursorOuterRef.current && cursorInnerRef.current) {
                cursorOuterRef.current.style.transform = `translate(-50%, -50%) translate3d(${mouseX}px, ${mouseY}px, 0)`;
                cursorInnerRef.current.style.transform = `translate(-50%, -50%) translate3d(${mouseX}px, ${mouseY}px, 0)`;

                if (computedCursor === 'pointer') {
                    cursorOuterRef.current.classList.add('cursor-hover');
                    cursorInnerRef.current.classList.add('cursor-hover');
                } else {
                    cursorOuterRef.current.classList.remove('cursor-hover');
                    cursorInnerRef.current.classList.remove('cursor-hover');
                }

                cursorOuterRef.current.style.visibility = 'visible';
                cursorInnerRef.current.style.visibility = 'visible';
            }

            rafId.current = requestAnimationFrame(render);
        };

        rafId.current = requestAnimationFrame(render);

        return () => {
            cancelAnimationFrame(rafId.current);
            document.body.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <div id='cursorOuter' className="hidden lg:block mouse-cursor cursor-outer" ref={cursorOuterRef} />
            <div className="hidden lg:block mouse-cursor cursor-inner" ref={cursorInnerRef} />
        </>
    );
}

export default CustomCursor;
