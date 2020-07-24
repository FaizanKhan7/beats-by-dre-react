import React from "react";
import styles from "./button.module.css";

class MoreBtn extends React.Component {
  render() {
    return (
      <div className={styles.btn}>
        <button type="button" className={styles.viewMore}>
          {this.props.btnName}
        </button>
      </div>
    );
  }
}
export default MoreBtn;
