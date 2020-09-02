import React from "react";
import styles from "./button.module.css";

export default class BackTopTop extends React.Component {
  render() {
    return (
      <div className={styles.backToTop}>
        <i className={"fas fa-chevron-up"}></i>
      </div>
    );
  }
}
