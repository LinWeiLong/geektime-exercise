const fs = require('fs')
const url = require('url')
const querystring = require('querystring')
const express = require('express')

const app = express()
const game = require('../game')
// app.use(function(req, res) {})

app.get('/favicon.ico', function(req, res) {
  res.writeHead(200)
  res.end()
  return
})

app.get('/', function(req, res) {
  res.writeHead(200)
  res.write(fs.readFileSync(__dirname + '/index.html'))
  res.end()
  return
})

app.get('/game', function(req, res) {
  const userAction = querystring.parse(url.parse(req.url).query).action
  const result = game(userAction)
  res.header('Content-Type', 'application/text;charset=utf-8')
  res.writeHead(200)
  res.end(result)
  return
})

app.listen(3000)
console.log('server running on localhost:3000')
