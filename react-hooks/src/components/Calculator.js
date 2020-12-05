import React, { useEffect, useState} from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";
import scaleNames from "../constants/ScaleName"

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function Calculator() {
    const [temperature, setTemperature] = useState("0");
    const [scale, setScale] = useState("c");

    useEffect(() => {
        // Update the document title using the browser API
        document.title = `Temperature: ${temperature} [${scaleNames[scale]}]`;
    });

    function handleTemperatureChange(scale, temperature) {
        setScale(scale);
        setTemperature(temperature);
    }

    const celsius = scale === "c" ? temperature : tryConvert(temperature, toCelsius);
    const fahrenheit = scale === "f" ? temperature : tryConvert(temperature, toFahrenheit);

    return (
        <div>
            <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handleTemperatureChange} />
            <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={handleTemperatureChange} />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    )
}

export default Calculator
