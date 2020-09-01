import React from "react";
import styles from "./storiesCard.module.css";

export default class StoriesCard extends React.Component {
  render() {
    return (
      <div className={styles.cards}>
        <img className={styles.cardImg} src={this.props.img} alt="actor" />
        <p className={styles.headline}>
          {this.props.headline}
          <span className={styles.readMore}>read</span>
        </p>
      </div>
    );
  }
}
