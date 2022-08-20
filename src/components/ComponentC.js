import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class ComponentC extends Component {
  render() {
    return (
      <UserConsumer>
        {
            (myname) => {
                return(
                    <h1>
                        Hello {myname}
                    </h1>
                )
            }
        }
      </UserConsumer>
    )
  }
}

export default ComponentC