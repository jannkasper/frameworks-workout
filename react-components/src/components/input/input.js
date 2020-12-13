import React from "react";
import styles from "./input.module.scss";

const Input = React.forwardRef(({type}, ref) => {
    switch (type) {
        case "minimal":
            return (
                <div className={styles.minimal} style={{width: "300px"}}>
                    <input type="text" required />
                    <label>ID</label>
                    <span className={styles.underline}></span>
                </div>
                )
        case "form":
            return (
                <div className={styles.form} style={{width: "300px"}}>
                    <span>https://</span>
                    <input className={styles.formField} type="text" placeholder="domain.tld" />
                </div>
            )
        default:
            return null;
    }
})

export default Input;
