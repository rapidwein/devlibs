const express = require('express')  
const port = 8080
const app = express()
var cors = require('cors')

app.use(cors())

var mongo = require('mongoskin');
var index = require('./data/libs/index.json');
var random = require('./data/libs/random.json');

console.log(process.env);
var db = mongo.db("mongodb://db:27017/devlibs");
app.get('/random',(request, response) => {  
  console.log(request.url)
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-  With, Content-Type, Accept");
  db.collection("sentences").find().toArray(function(err, result) {
    if(err) throw err; 
  response.send(result)
  })
})
app.get('/',(request, response) => {  
  console.log(request.url)
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-  With, Content-Type, Accept");
  db.collection("sentences").find().toArray(function(err, result) {
    if(err) throw err; 
  response.send(result)
  })
})

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }
console.log(`server is listening on ${port}`)
})
