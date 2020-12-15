import React from "react";
import styles from "./button.module.scss";

const Button = React.forwardRef(({type}, ref) => {
    switch (type) {
        case "atom":
            return (
            <div className={styles.atom}>
                <label>{type}</label>
                <div className={styles.dot}></div>
            </div>
            )
        case "prism":
            return (
                <figure className={styles.prism}>
                    <div>
                        <button>Hover</button>
                        <button>{type}</button>
                    </div>
                </figure>
            )
        default:
            return <button alt={type} className={styles[type]}>{type}</button>
    }
})

export default Button;
