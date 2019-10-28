import React, { Component } from 'react'

function TodoItem(props) {
  return (
    <div className="todoItem">
      <h1 className="title">{props.title}</h1>
      <p className="desc">{props.desc}</p>
      <p className="date">{props.date}</p>
    </div>
  )
}

export default TodoItem
