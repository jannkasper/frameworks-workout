import React from "react";
import styles from "./button.module.scss";

const Button = React.forwardRef(({type}, ref) => (
    <button className={styles[type]}>{type.toUpperCase()}</button>
))

export default Button;
