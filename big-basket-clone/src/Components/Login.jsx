import React from "react";
import styles from "./Navbar.module.css";

export default function Login(){
    let value=false;
    function handleChange(){
        value=true;
    }
    return (
        <>
        <div className={styles.inputcontainer}>
            <label className={value && "filled"}>
                Enter Email
              </label>
              <input type='email' onChange={handleChange} className={styles.loginin}/>
            </div>
            <div>
              <button className={styles.loginbtn} >Login</button>
            </div>
        </>
    );
}