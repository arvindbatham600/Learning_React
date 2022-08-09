import React, { Component } from "react";

class MountingA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "red",
    };

    console.log("MountingA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("MountingA getDerivedStateFromProps");
    return{
        color: props.color
    }
  }

  componentDidMount(){
    setTimeout(() => {
        this.setState({
            color: "pink"
        })
    }, 1000);
    console.log("MountingA componentDidMount");
}
  render() {
    console.log("MountingA render");

    return (
      <div>
        <p>My favorite color is {this.state.color}</p>
      </div>
    );
  }

    
}

export default MountingA;
