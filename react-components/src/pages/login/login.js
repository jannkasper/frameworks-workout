import React from "react";
import styles from "./login.module.scss"


function Login () {

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.header}>
                    <h2 className={[styles.animation, styles.a1].join(" ")}>Welcome Back</h2>
                    <h4 className={[styles.animation, styles.a2].join(" ")}>Log in to your account using email and password</h4>
                </div>
                <div className={styles.form}>
                    <input type="email" className={[styles.formField, styles.animation, styles.a3].join(" ")} placeholder="Email Address" />
                    <input type="password" className={[styles.formField, styles.animation, styles.a4].join(" ")}  placeholder="Password" />
                    <p className={[styles.animation, styles.a5].join(" ")}><a href="/#">Forgot Password</a></p>
                    <button className={[styles.animation, styles.a6].join(" ")}>LOGIN</button>
                </div>
            </div>
            <div className={styles.right}></div>
        </div>
    )
}

export default Login
