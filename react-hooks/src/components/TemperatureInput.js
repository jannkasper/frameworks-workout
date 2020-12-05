import React from "react";
import scaleNames from "../constants/ScaleName";

function TemperatureInput(props) {

    function handleChange(e) {
        props.onTemperatureChange(props.scale, e.target.value);
    }

    return (
        <div>
            <p>Enter temperature in {scaleNames[props.scale]}: </p>
            <input value={props.temperature} onChange={handleChange}/>
        </div>
    )
}

export default TemperatureInput
