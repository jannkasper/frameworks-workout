import React, {useRef, useEffect} from "react";
import styles from "./mouseOver.module.scss"

function MouseOver() {
    // Init
    const container = useRef(null);
    const inner = useRef(null);
    const helper = useRef(null);

    // Mouse
    const mouse = {
        _x: 0,
        _y: 0,
        x: 0,
        y: 0,
        updatePosition: function(event) {
            let e = event || window.event;
            this.x = e.clientX - this._x;
            this.y = (e.clientY - this._y) * -1;
        },
        setOrigin: function(e) {
            this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
            this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
        },
        show: function() {
            // console.log(this.x, this.y)
            return "(" + this.x + ", " + this.y + ")";
        }
    };

    // Track the mouse position relative to the center of the container.
    useEffect(() => {
        console.log(container.current);
        mouse.setOrigin(container.current);
    })

    //--------------------------------------------------

    let counter = 0;
    let updateRate = 5;
    let isTimeToUpdate = function() {
        return counter++ % updateRate === 0;
    };

    //--------------------------------------------------

    let onMouseEnterHandler = function(event) {
        helper.current.className = "";
        update(event);
    };

    let onMouseLeaveHandler = function() {
        inner.current.style = "";
        helper.current.className = styles.hidden;
    };

    let onMouseMoveHandler = function(event) {
        if (isTimeToUpdate()) {
            update(event);
        }
        displayMousePositionHelper(event);
    };

    //--------------------------------------------------

    let update = function(event) {
        mouse.updatePosition(event);
        updateTransformStyle(
            (mouse.y / inner.current.offsetHeight / 2).toFixed(2),
            (mouse.x / inner.current.offsetWidth / 2).toFixed(2)
        );
    };

    let updateTransformStyle = function(x, y) {
        let style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
        inner.current.style.transform = style;
        inner.current.style.webkitTransform = style;
        inner.current.style.mozTransform = style;
        inner.current.style.msTransform = style;
        inner.current.style.oTransform = style;
    };

    let displayMousePositionHelper = function(event) {
        let e = event || window.event;
        helper.current.innerHTML = mouse.show();
        document.documentElement.style.setProperty('--top',"" + (e.clientY-container.current.offsetTop) + "px");
        document.documentElement.style.setProperty('--left',"" + (e.clientX-container.current.offsetLeft) + "px");
    };

    return (
        <div className={styles.page}>
            <div ref={container} className={styles.container}
                 onMouseEnter={onMouseEnterHandler}
                 onMouseMove={onMouseMoveHandler}
                 onMouseLeave={onMouseLeaveHandler}
            >
                <div ref={inner} className={styles.inner}>
                    <span ref={helper} id={styles.helper} className={styles.hidden}/>
                </div>
            </div>
        </div>
    )
}

export default MouseOver
