import React from "react";
import styles from "./hamburger.module.css";

function Hamburger() {
  return (
    <div
      className={(styles.hamburger, styles.hamburgerSqueeze)}
      type={"button"}
    >
      <span className={styles.hamburgerBox}>
        <span className={styles.hamburgerInner}></span>
      </span>
    </div>
  );
}

export default Hamburger;
