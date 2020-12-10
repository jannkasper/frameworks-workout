import React from "react";
import styles from "./button.module.css";

const Button = React.forwardRef(({}, ref) => (
    <button
        ref={ref}
        className={styles.button}
    >
        CLICK
    </button>
))

export default Button;
