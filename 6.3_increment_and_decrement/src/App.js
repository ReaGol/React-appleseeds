import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCouner] = useState(0);

  const clickHandler = ({ target: { id } }) => {
    const addToCounter = id === "increment" ? 1 : -1;
    const futureCounter = counter + addToCounter;
    console.log(futureCounter);
    if (futureCounter <= 10 && futureCounter >= -10) {
      setCouner((prevState) => prevState + addToCounter);
    }
  };
  return (
    <div className='App'>
      <label>{counter}</label>
      <button onClick={clickHandler} id='increment'>
        Increment
      </button>
      <button onClick={clickHandler} id='decrement'>
        Decrement
      </button>
    </div>
  );
}

export default App;
