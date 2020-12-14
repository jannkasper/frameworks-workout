import React, { useEffect } from "react";
import styles from "./cubic.module.scss";

function Cubic () {

    useEffect(() => {
        // initiate the event handler
        window.addEventListener('scroll', handleScroll, false)

        // this will clean up the event every time the component is re-rendered
        return function cleanup() {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    function handleScroll(event) {
        document.documentElement.style.setProperty('--scroll',"" + window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    }

    return (
        <div className={styles.page}>
        <div className={styles.progress}></div>

        <div className={styles.cubeWrap}>
            <div className={styles.cube}>
                <div className={[styles.side, styles.top].join(" ")}></div>
                <div className={[styles.side, styles.bottom].join(" ")}></div>
                <div className={[styles.side, styles.front].join(" ")}></div>
                <div className={[styles.side, styles.back].join(" ")}></div>
                <div className={[styles.side, styles.left].join(" ")}></div>
                <div className={[styles.side, styles.right].join(" ")}></div>
            </div>
        </div>
        </div>
    )
}


export default Cubic
