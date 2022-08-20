import React, { Component } from 'react'
import ComponentC from './ComponentC'
import UserContext from './UserContext'

class ComponentB extends Component {

  static contextType = UserContext

  render() {
    return (
      <div>
        <h2>hello {this.context}</h2>
        <ComponentC />
      </div>
    )
  }
}

// ComponentB.contextType = UserContext
export default ComponentB