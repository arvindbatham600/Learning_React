import React from "react";

const WithConter = (WrappedComponent, incrementValue) => {
  class WithConter extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          count: 0,
        };
      }
    
      incrementHandler = () => {
        this.setState((prevState) => {
          return {
            count: prevState.count + incrementValue,
          };
        });
      }

    render() {
      return <WrappedComponent count = {this.state.count} incrementHandler = {this.incrementHandler} />;
    }
  }
  return WithConter;
};

export default WithConter;
