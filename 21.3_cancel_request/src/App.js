import React, { Component } from "react";
import List from "./List";
class App extends Component {
  
  state = {
    display: false,
  };

  renderList = () => {
    this.setState((prev)=>({display: !prev.display}))
  }

  render() {
    return (
      <div className="app">
        <button onClick={this.renderList}>Show List</button>
        {this.state.display && <List></List>}
      </div>
    );
  }
}

export default App;
