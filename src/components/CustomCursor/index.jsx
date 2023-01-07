import { useRef, useEffect } from 'react';
import './style.css'
function Cursor() {
    const cursorOuterRef = useRef(null)
    const cursorInnerRef = useRef(null)
    function setPositionCursor(event) {
        const { clientX, clientY } = event
        const mouseX = clientX - cursorOuterRef.current?.clientWidth / 2 + 20
        const mouseY = clientY - cursorOuterRef.current?.clientHeight / 2 + 20
        const cursor = window.getComputedStyle(event.target)["cursor"]

        cursorOuterRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
        cursorInnerRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`

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
    useEffect(() => {
        document.querySelector('#main-content').addEventListener('mousemove', setPositionCursor)
        // document.querySelector('.loader').addEventListener('mousemove', setPositionCursor)
        // document.querySelector('.loader').addEventListener('mousemove', (e) => {
        //     cursorOuterRef.current.style.visibility = 'hidden'
        //     cursorInnerRef.current.style.visibility = 'hidden'
        // })
    }, [])

    return (
        <>
            <div className="mouse-cursor cursor-outer" ref={cursorOuterRef} />
            <div className="mouse-cursor cursor-inner" ref={cursorInnerRef} />
        </>
    )

}

export default Cursor;