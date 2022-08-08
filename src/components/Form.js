import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         Name: '',
         Email:'',
         Topic:'React'
      }
    }

    handleNameChange = (event) => {
        this.setState({ 
            Name: event.target.value
        })
    }

    emailHandler = (event) => {
        this.setState({
            Email: event.target.value
        })

    }

    changeTopicHandler = (event) => {
        this.setState({
            Topic: event.target.value
        })
    }

    submitHandler = (event) => {
        alert(`Name: ${this.state.Name} Email: ${this.state.Email} Topic: ${this.state.Topic}`)
        event.preventDefault()
    }

  render() {
    const { Name, Email, Topic } = this.state
    return (
    <div>
        <form onSubmit={this.submitHandler}>
            <div>
                <label>Name</label>
                <input type="text" name="name" value={Name} onChange = {this.handleNameChange} />
            </div>

            <div>
                <label>Email</label>
                <input type="email" name="email" value={Email} onChange = {this.emailHandler}/>
            </div>

            <div>
                <label >Topic</label>
                <select name="select" value={Topic} onChange ={this.changeTopicHandler}>
                    <option value="React">React</option>
                    <option value="Vue">Vue</option>
                    <option value="Angular">Angular</option>
                </select>
            </div>

            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>
        )
    
  }
}

export default Form