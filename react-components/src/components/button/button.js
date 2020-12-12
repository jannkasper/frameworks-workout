import React from "react";
import styles from "./button.module.scss";

const Button = React.forwardRef(({type}, ref) => {
    switch (type) {
        case "atom":
            return (
            <div className={styles.atom}>
                <text>{type}</text>
                <div className={styles.dot}></div>
            </div>
            )
        case "prism":
            return (
                <div className={styles.body}>
                <figure className={styles.prism}>
                    <div>
                        <button>Hover</button>
                        <button>{type}</button>
                    </div>
                </figure>
                </div>
            )
        default:
            return <button alt={type} className={styles[type]}>{type}</button>
    }
})

export default Button;
