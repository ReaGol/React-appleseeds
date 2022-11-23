//https://restcountries.com/v2/all

import axios from "axios";
import React, { Component } from "react";

export default class Countries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      input: "",
    };
  }

  componentDidMount() {
   (async () => {
      const { data } = await axios.get("https://restcountries.com/v3.1/all");
      this.setState((prevState) => ({ ...prevState, countries: data.map((country) => country.name.common) }), () => {console.log(this.state)});
    })();
  }

  render() {
    return (
      <div>
        <input
          type='text'
          value={this.state.input}
          onChange={(e) =>
            this.setState((prevState) => {
              console.log(this.state.input);
              return { input: e.target.value };
            })
          }
        />
        <div>
          {this.state.countries
            .filter((country) =>
              country.toLowerCase().includes(this.state.input.toLowerCase())
            )
            .map((country) => (
              <p>{country}</p>
            ))}
        </div>
      </div>
    );
  }
}
