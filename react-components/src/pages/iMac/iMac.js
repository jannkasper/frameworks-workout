import React, {useEffect} from "react";
import styles from "./iMac.module.scss"
import "./iMac.module.scss"

function IMac() {

    function setTransform(element, transform) {
        element.transform = transform;
        element.mozTransform = transform;
        element.webkitTransform = transform;
        element.oTransform = transform;
        element.msTransform = transform;
    }


    useEffect(() => {
        const picture = document.getElementById("picture");
        const mac = document.getElementById("mac");
        const {offsetTop} = mac;

        // initiate the event handler
        window.addEventListener('scroll', handleScroll, false)

        // this will clean up the event every time the component is re-rendered
        return function cleanup() {
            window.removeEventListener('scroll', handleScroll)
        }

        function handleScroll() {
            document.getElementById("scrollme").className = styles.fadeOut;

            let windowTop = window.pageYOffset;
            let scrollPercent = (offsetTop - windowTop) / offsetTop;
            let scale = 'scale(' + scrollPercent + ')';

            setTransform(picture.style, scale);

            if (windowTop >= 930) {
                picture.style.display = "none";
            } else {
                picture.style.display = "block";
            }
        }
    })



    return (
        <div className={styles.page}>
            <h1 id="scrollme">scroll me</h1>
            <div id="picture" className={[styles.intro, styles.mac].join(" ")} />
            <div id="mac" className={styles.mac} />
            <div className={styles.content}>
                <h2>Apple iMac scrolling effect.</h2>
                <p>
                    iMac 27" mockup by <a href="https://dribbble.com/shots/438772-iMac-27-Fully-Scalable-PSD" target="_blank">Koy Carraway</a>.<br/>
                    Picture from <a href="http://wallpaperswide.com/">WallPaperWide</a> - Transfagarasan.<br/>
                </p>
            </div>
        </div>
    )
}

export default IMac;
