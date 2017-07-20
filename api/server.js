const express = require('express')  
const port = 8080
const app = express()

var mongo = require('mongoskin');
var index = require('./data/libs/index.json');
var random = require('./data/libs/random.json');

var db = mongo.db(process.env.MONGODB_PORT_27017_TCP_ADDR + ':' + process.env.MONGODB_PORT_27017_TCP_PORT + '/devlibs');

app.get('/random',(request, response) => {  
  console.log(request.url)
  response.send(random)
})
app.get('/',(request, response) => {  
  console.log(request.url)
  response.send(index)
})

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }
console.log(`server is listening on ${port}`)
})
