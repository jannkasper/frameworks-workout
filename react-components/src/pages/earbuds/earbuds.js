import React, { useRef, useEffect } from "react";
import styles from "./earbuds.module.scss"

function Earbuds() {

    const html = document.documentElement;
    const canvas = useRef(null);
    let context;

    const frameCount = 148;
    const preloadImages = [];
    const currentFrame = index => (`https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`);

    for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        preloadImages[i] = img;
    }

    //--------------------------------------------------

    useEffect(() => {
        context = canvas.current.getContext("2d");

        // Set canvas dimensions
        canvas.current.width=1158;
        canvas.current.height=770;

        preloadImages[1].onload=function(){
            context.drawImage(preloadImages[1], 0, 0);
        }
    })

    useEffect(() => {
        // initiate the event handler
        window.addEventListener('scroll', handleScroll, false)

        // this will clean up the event every time the component is re-rendered
        return function cleanup() {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    //--------------------------------------------------

    const updateImage = index => {
        if ( index > 0 && index < frameCount) {
            context.drawImage(preloadImages[index], 0, 0);
        }
    }

    function handleScroll() {
        const scrollTop = html.scrollTop; // html.scrollTop == window.pageYOffset
        const maxScrollTop = html.scrollHeight - window.innerHeight; // html.scrollHeight == document.body.offsetHeight
        const scrollFraction = scrollTop / maxScrollTop;

        const frameIndex = Math.min(frameCount - 1, Math.ceil(scrollFraction * frameCount));

        requestAnimationFrame(() => updateImage(frameIndex + 1))

    }

    //--------------------------------------------------

    return (
    <div className={styles.page}>
        <canvas ref={canvas}/>
    </div>
    )
}

export default Earbuds
