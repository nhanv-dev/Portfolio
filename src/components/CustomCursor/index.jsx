import { useEffect, useRef } from 'react';
import './style.css';

function CustomCursor() {
    const cursorOuterRef = useRef(null);
    const cursorInnerRef = useRef(null);

    useEffect(() => {
        const setPositionCursor = (event) => {
            const { clientX, clientY } = event
            const mouseX = clientX - cursorOuterRef.current?.clientWidth / 2 + 20
            const mouseY = clientY - cursorOuterRef.current?.clientHeight / 2 + 20
            const cursor = window.getComputedStyle(event.target)["cursor"]

            cursorOuterRef.current.style.transform = `translate(-50%, -50%) translate3d(${mouseX - 2}px, ${mouseY - 2}px, 0)`
            cursorInnerRef.current.style.transform = `translate(-50%, -50%) translate3d(${mouseX - 2}px, ${mouseY - 2}px, 0)`

            if (cursor === 'pointer') {
                cursorOuterRef.current.classList.add('cursor-hover')
                cursorInnerRef.current.classList.add('cursor-hover')
            } else {
                cursorOuterRef.current.classList.remove('cursor-hover')
                cursorInnerRef.current.classList.remove('cursor-hover')
            }
            cursorOuterRef.current.style.visibility = 'visible'
            cursorInnerRef.current.style.visibility = 'visible'
        }
        document.querySelector('body').addEventListener('mousemove', setPositionCursor)

        return () => {
            document.querySelector('body').removeEventListener('mousemove', setPositionCursor)
        }
    }, [])

    return (
        <>
            <div id='cursorOuter' className="mouse-cursor cursor-outer" ref={cursorOuterRef} />
            <div className="mouse-cursor cursor-inner" ref={cursorInnerRef} />
        </>
    )

}

export default CustomCursor;