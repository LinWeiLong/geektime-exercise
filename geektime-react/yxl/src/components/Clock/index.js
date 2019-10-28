import React, { Component } from 'react'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick()
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  tick = () => {
    this.setState({ date: new Date() })
  }
  addMin = () => {
    let time = this.state.date.getTime() + 1000 * 60

    this.setState({
      date: new Date(time)
    })
  }
  render() {
    console.log(this.props.children(this.state.date))
    return (
      <div>
        <h1>Hello world</h1>
        <h2>Now is {this.state.date.toLocaleTimeString()}</h2>
        <button onClick={this.addMin}>点我加1分钟</button>
        <div>{this.props.children(this.state.date.toLocaleTimeString())}</div>
      </div>
    )
  }
}

export default Clock
