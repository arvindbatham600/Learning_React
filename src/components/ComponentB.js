import React, { Component } from 'react'
import ComponentC from './ComponentC'
import UserContext from './UserContext'

class ComponentB extends Component {

  render() {
    return (
      <div>
        <ComponentC />
      </div>
    )
  }
}

// ComponentB.contextType = UserContext

export default ComponentB