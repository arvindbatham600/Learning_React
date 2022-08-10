import React, { PureComponent } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'

class Parent extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
         firstName: 'Arvind',
      }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
            firstName: 'Arvind'
            })
        } , 3000)
    }

  render() {
    console.log("Parent Component Rendered")
    return (
      <div>This is Pure Component
        <RegularComp name = {this.state.firstName}>Regular Component }</RegularComp>
        <PureComp name = {this.state.firstName}>Pure Component </PureComp>
      </div>
    )
  }
}

export default Parent