import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [timer, setTimer] = useState();

  const handleClick = (event) => {
    let inputValue = event.target.value;
    if (event.keyCode === 13) {
      if (!isNaN(inputValue) && parseInt(inputValue, 10) >= 0) {
        setTimer(parseInt(inputValue));
      } else {
        setTimer(0);
      }
    }
  };

  useEffect(() => {
    let timerId = setInterval(() => {
      if (timer && timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  });

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input
            id="timeCount"
            onKeyDown={(event) => handleClick(event)}
          />{" "}
          sec.
        </h1>
      </div>
      <div id="current-time">{timer}</div>
    </div>
  );
};

export default App;
