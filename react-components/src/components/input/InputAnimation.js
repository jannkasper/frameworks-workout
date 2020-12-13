import React, {useState} from "react";
import styles from "./inputAnimation.module.scss"



function InputAnimation () {

    const [active, setActive] = useState(false);
    const [focus, setFocus] = useState(false);
    const [value, setValue] = useState("");

    function handleClick (e) {
        e.preventDefault();
        const tempActive = active;
        setActive(!tempActive);
    }

    function handleFocus () {
        setFocus(true);
    }

    function handleBlur () {
        value !== 0 ? setFocus(true) : setFocus(false);
    }

    function handleChange (event) {
        setValue(event.target.value);
    }
    let styleList = [
        styles.searchForm,
        active ? styles.active : null,
        focus ? styles.focus : null
    ].join(" ");

    console.log("active ", active);
    console.log("focus ", focus);
    console.log("value ", value)

    return (
        <div className={styleList}>
            <form>
                <input className={styles.input}
                    value={value}
                    onChange={e => handleChange(e)}
                    onFocus={() => handleFocus()}
                    onBlur={() => handleBlur()} type="text"
                />
                <button className={styles.button} onClick={e => handleClick(e)}></button>
            </form>
        </div>
    )
}

export default InputAnimation;
