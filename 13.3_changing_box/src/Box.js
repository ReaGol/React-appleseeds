import React, { useEffect, useState } from "react";
import "./box.css";

const colors = ["purple","blue", "green", "yellow", "orange", "red"];

function Box() {
  const [changeColor, setChangeColor] = useState(null);
  const [counter, setCounter] = useState(-1);

  useEffect(() => {
    if (counter <= 5) {
      setTimeout(() => {
        setChangeColor(colors[counter]);
        setCounter((prev) => ++prev);
      }, 500);
    }
  }, [counter]);

  return (
    <div
      className={`myBox ${counter > 5 && "circle"}`}
      style={{ backgroundColor: changeColor }}
    >
      {counter}
    </div>
  );
}

export default Box;
