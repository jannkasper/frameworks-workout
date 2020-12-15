import React from "react";
import styles from "./item.module.scss"


function Item (props) {

    return (
        <div id="slider-item" className={styles.item}>
            <div className={styles.avatar}>
                <img src={props.image} alt="" />
            </div>
            <div className={styles.content}>
                <h4 className={styles.title}>{props.title}</h4>
                <p className={styles.description}>{props.description}</p>
                <p className={styles.location}>{props.location}</p>
            </div>
        </div>
    )
}

export default Item;
