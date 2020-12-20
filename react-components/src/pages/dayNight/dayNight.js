import React, { useRef } from "react";
import "./dayNight.scss";

function DayNight() {

    const switchRef = useRef();
    const pageRef = useRef();

    function handleSwitch() {
        if (pageRef.current.classList.contains("night")) {
            console.log("day")
            pageRef.current.classList.remove("night");
            switchRef.current.classList.remove("switched");
        } else {
            console.log("night")
            pageRef.current.classList.add("night");
            switchRef.current.classList.add("switched");
        }
    }
    console.log("start")
    return (
        <div ref={pageRef} id="fullPage">
            <div id="section">
                <div id="illustration">
                    <div className="sun"></div>
                    <div className="moon">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="stars">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="water"></div>
                </div>
                <div id="introText">
                    <h1 href="#">day night simulation</h1>
                </div>
                <div ref={switchRef} id="switch" onClick={handleSwitch} >
                    <div id="circle"></div>
                </div>
            </div>
        </div>
    )
}

export default DayNight