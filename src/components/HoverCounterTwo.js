import React, { Component } from 'react'

class HoverCounterTwo extends Component {
   
  render() {
    const{count, incrementCounter} = this.props;
    return (
      <div onMouseOver = {incrementCounter}>Hovered {count} Times</div>
    )
  }
}

export default HoverCounterTwo