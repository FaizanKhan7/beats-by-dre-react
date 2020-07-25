import React from "react";
import styles from "./button.module.css";

class BuyButton extends React.Component {
  render() {
    return (
      <div className={styles.btn}>
        <button type="button" className={styles.buyMore}>
          {this.props.btnName}
        </button>
      </div>
    );
  }
}
export default BuyButton;
