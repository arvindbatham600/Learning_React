import React, { Component } from "react";
import "./buttonStyle.css";

const message = {
  fontSize: "50px",
  color: "gray",
};

export default class Message extends Component {
  constructor() {
    super();
    this.state = {
      msg: "Welcome Visitor",
    };
  }

  changeMessage() {
    this.setState({
      msg: "This is KC kanpur Wala 😎",
    });
  }

  render() {
    return (
      <div>
        <h1 style={message}>{this.state.msg}</h1>
        <button className="btn" onClick={() => {this.changeMessage()}}>Change Message</button>
      </div>
    );
  }
}
