import React from "react";
import ReactDOM from "react-dom";

const button = () => {
  return <button>Click me</button>;
};

export default () => {
  return (
    <div className='app'>
      <h2>Hello React!</h2>
      <strong>Here it is</strong>
      {button()}
    </div>
  );
};
