import React, { Component } from "react";

class Counter extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary"; // classes = classes + "warning" if count is 0. else, classes = classes + "primary"
    return classes;
  }

  formatValue() {
    const { value } = this.props.counter; //This syntax sets the const value = this.state.value
    return value === 0 ? "Zero" : value; //This syntax is called a "ternary operator" pretty much does an if, else. --- condition ? expr1 : expr2
    // in this case it means: if the value is equal to 0, display the string "zero", else, display the const count
  }
}

export default Counter;
