import React, { Component } from 'react'

class ListItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const todoItem = this.props.todoItem
    return <li className="todoItem">{todoItem.title}</li>
  }
}

export default ListItem
