import React, { Component } from "react";
import "./App.css";
import Box from "./components/Box";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 1000,
      show: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 5000);
  }

  // componentDidUnMount() {
  //   clearInterval()
  // }

  render() {
    return (
      <>
        {this.state.show && (
          <div>
            <Box />
            <Box2 />
            <Box3 />
          </div>
        )}
      </>
    );
  }
}

export default App;

