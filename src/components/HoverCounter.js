import React, { Component } from "react";
import WithConter from "./WithConter";

class HoverCounter extends Component {
  render() {
    const { count, incrementHandler } = this.props;
    return (
      <div>
        <h3 onMouseEnter={incrementHandler}>Hovered {count} times</h3>
      </div>
    );
  }
}

export default WithConter(HoverCounter, 10);
