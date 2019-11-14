const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('react mock')
})

app.get('/api/helloworld', (req, res) => {
  res.send('hello, world')
})

app.listen(3003, () => {
  console.log('server is running ...')
})
