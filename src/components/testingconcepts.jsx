import React, { Component } from "react";
import Counter from "./counter";

class Tests extends Component {
  state = {
    numbers: [1, 2, "adf", 4, 5]
  };
  render() {
    return <div>{this.state.numbers.map(a => <li>{a}</li>)}</div>;
  }
}

export default Tests;
