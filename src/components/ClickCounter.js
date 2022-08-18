import React, { Component } from "react";
import WithConter from "./WithConter";

class ClickCounter extends Component {
  render() {
    const { count, incrementHandler } = this.props; 
    return (
      <div>
        <button onClick={incrementHandler}>
           Clicked {count} time
        </button>
      </div>
    );
  }
}

export default WithConter(ClickCounter, 5);
