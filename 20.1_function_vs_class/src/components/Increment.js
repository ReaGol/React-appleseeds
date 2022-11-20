import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  increment=()=>{
    this.setState((prevState) => { 
        return {counter: prevState.counter + 1} 
    });
  }
  decrement=()=> {
    this.setState((prevState) => {
        return { counter: prevState.counter - 1 };
    });
  }


  render() {
    return (
      <>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <h3>{this.state.counter}</h3>
      </>
    );
  }
}

export default Counter;
