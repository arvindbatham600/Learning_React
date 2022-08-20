import React, { Component } from "react";

class ClickCounterTwo extends Component {
 

  render() {
    const{count, incrementCounter} = this.props;
    return (
      <div>
        <button onClick={incrementCounter}>
          Clicked {count} times
        </button>
      </div>
    );
  }
}

export default ClickCounterTwo;
