import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  //notes
  // styles = {
  //   fontSize: 50,
  //   fontWeight: "bold"
  //   // define a property here, and then reference it below in a jsx expression OR, can just call inline
  // };

  // inline example: <span style={{ fontSize: 30 }} className="badge badge-primary m-2">

  handleIncrement() {
    console.log("Increment Clicked", this.state.count);
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>{this.state.tags.map(tag => <li key={tag}> {tag} </li>)}</ul>
      </div>
    );
  }
  //some reminders: fat arrow => is a short way to write a function with a return

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary"; // classes = classes + "warning" if count is 0. else, classes = classes + "primary"
    return classes;
  }

  // notes
  // type className for JSX attribute.
  // badge & badge primary are classes that come from bootstrap
  // "m-2" = margin 2
  // btn btn btn-sm (sm short for small)

  formatCount() {
    const { count } = this.state; //This syntax sets the const count = this.state.count
    return count === 0 ? "Zero" : count; //This syntax is called a "ternary operator" pretty much does an if, else. --- condition ? expr1 : expr2
    // in this case it means: if the count is equal to 0, display the string "zero", else, display the const count
  }
}

export default Counter;
