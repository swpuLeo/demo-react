const express = require('express')
const app = express()

app.get('/', function(req, res) {
  res.send('react mock')
})

app.listen(3003, function() {
  console.log('server is running ...')
})
