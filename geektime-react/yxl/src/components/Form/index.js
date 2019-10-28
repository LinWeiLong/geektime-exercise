import React, { Component } from 'react'

class AddTodoFrom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      detail: '',
      date: ''
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            待办名称：
            <input
              type='text'
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <input type='submit' value='提交' />
        </div>
      </form>
    )
  }
  handleChange = event => {
    this.setState({ title: event.target.value })
    console.log('now title is ' + this.state.title)
  }
  handleSubmit = event => {
    alert('title is ' + this.state.title)
    event.preventDefault()
  }
}

export default AddTodoFrom
