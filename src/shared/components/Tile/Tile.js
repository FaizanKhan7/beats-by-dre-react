import React from "react";
import styles from "./tile.module.css";

class Tile extends React.Component {
  render() {
    return (
      <div className={styles.beatsTile} onClick={this.props.onclick}>
        <h4>{this.props.tileName}</h4>
      </div>
    );
  }
}

export default Tile;
