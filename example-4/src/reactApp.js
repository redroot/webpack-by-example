import React from "react";
import ReactDOM from "react-dom";

import styles from "./styles.scss"

const button = () => {
  return <button>Click me</button>;
};

export default () => {
  return (
    <div className={styles.appClass}>
      <h2>Hello React!</h2>
      <strong>Here it is</strong>
      {button()}
    </div>
  );
};
