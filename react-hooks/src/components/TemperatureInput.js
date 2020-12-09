import React, {useEffect, useReducer} from "react";
import scaleNames from "../constants/ScaleName";

function init(initialTemperature) {
    return {temperature: initialTemperature};
}

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {temperature: parseFloat(state.temperature) ? parseFloat(state.temperature) + 1 : 1};
        case 'decrement':
            return {temperature: parseFloat(state.temperature) ? parseFloat(state.temperature) - 1 : -1};
        case 'value':
            return {temperature: parseFloat(action.value) ? parseFloat(action.value) : action.value};
        default:
            throw new Error();
    }
}

function TemperatureInput(props) {

    const [state, dispatch] = useReducer(reducer, props.temperature, init);

    useEffect(() => {
        props.onTemperatureChange(props.scale, state.temperature);
    }, [state.temperature]);

    function handleChange(e) {
        dispatch({type: "value", value: e.target.value})
    }

    return (
        <div>
            <p>Enter temperature in {scaleNames[props.scale]}: </p>
            <input ref={props.textInput} value={props.temperature} onChange={handleChange}/>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
        </div>
    )
}

export default TemperatureInput
