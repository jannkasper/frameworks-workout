import React from "react";


function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would <span style={{color: "red"}}>boil</span>.</p>
    } else {
        return <p>The water would <span style={{color: "blue"}}>not boil</span>.</p>
    }
}

export default BoilingVerdict
