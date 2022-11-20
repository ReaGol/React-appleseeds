import React, { Component } from "react";

class ExactTime extends Component {
    constructor(){
        super()
        this.state = {time : 0}
        this.onInputChange = this.onInputChange.bind(this)
    }
  // const [time, setTime] = useState(null);
  // this.state = {time:''}
  onInputChange(event) {
    if (event.target.name === "seconds") {
      this.setState({ time: event.target.value });
    } else if (event.target.name === "minutes") {
      this.setState({ time: event.target.value * 60 });
    } else if (event.target.name === "hours") {
      this.setState({ time: event.target.value * 3600 });
    }
  }

  render() {
    return (
      <div>
        <label style={{ fontWeight: "bold", margin: "3px" }}>
          Seconds:
          <input
            type='number'
            name='seconds'
            value={this.state.time / 1}
            onChange={this.onInputChange}
            style={{ width: "100px", padding: "10px", margin: "10px" }}
          />
        </label>
        <label style={{ fontWeight: "bold", margin: "3px" }}>
          Minutes:
          <input
            type='number'
            name='minutes'
            value={this.state.time / 60}
            onChange={this.onInputChange}
            style={{ width: "100px", padding: "10px", margin: "10px" }}
          />
        </label>
        <label style={{ fontWeight: "bold", margin: "3px" }}>
          Hours:
          <input
            type='number'
            name='hours'
            value={this.state.time / 3600}
            onChange={this.onInputChange}
            style={{ width: "100px", padding: "10px", margin: "10px" }}
          />
        </label>
      </div>
    );
  }
}

export default ExactTime;
