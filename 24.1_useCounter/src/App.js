import React from "react";
import useCounter from "./Hooks/useCounter"

function Test1(params) {
  const { counter, addOne, minusOne } = useCounter(0);
  return (
    <div>
      <button onClick={addOne}>add</button>
      <span>{counter}</span>
      <button onClick={minusOne}>reduce</button>
    </div>
  );
}
function Test2(params) {
  const { counter, divide, double } = useCounter(1);
  return (
    <div>
      <button onClick={divide}>divide</button>
      <span>{counter}</span>
      <button onClick={double}>double</button>
    </div>
  );
}

function Appp() {
  return (
    <div>
      <Test1 />
      <Test2 />
    </div>
  );
}

export default Appp;
