import React, { Component } from 'react'
import ListItem from '../ListItem'
class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          title: '吃饭'
        },
        {
          title: '午饭'
        },
        {
          title: '晚饭'
        }
      ]
    }
  }
  render() {
    return (
      <ul>
        {this.state.data.map(item => (
          <ListItem key={item.title} todoItem={item} />
        ))}
      </ul>
    )
  }
}

export default List
