import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header/Header'
import List from './components/List'
import Clock from './components/Clock'
import Form from './components/Form'
const data = {
  list: [
    {
      title: '吃饭',
      desc: '去吃麦当劳',
      date: '2019/06/01 12:00:00'
    },
    {
      title: '午睡',
      desc: '吃饱了睡椅i下',
      date: '2019/06/01 15:00:00'
    },
    {
      title: '洗澡',
      desc: '下班洗澡',
      date: '2019/06/01 19:00:00'
    }
  ]
}

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <header className='App-header'>
          <Clock>
            {time => (
              <div>666:{time}</div>
            )}
          </Clock>
          <List />
          <Form />
        </header>
      </div>
    )
  }
}

export default App
