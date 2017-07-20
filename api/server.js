const express = require('express')  
const port = 8080
const app = express()
var cors = require('cors')
var bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

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
    response.send(result[Math.floor(Math.random()*result.length)]);
  });
})
app.get('/',(request, response) => {  
  console.log(request.url)
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-  With, Content-Type, Accept");
  db.collection("sentences").find().toArray(function(err, result) {
    if(err) throw err; 
    response.send(result);
  });
})
app.post('/sentence', (request, response) => {
  console.log(request.url)
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-  With, Content-Type, Accept");
  if (request.body.hasOwnProperty('title') && request.body.hasOwnProperty('text')) {
    db.collection("sentences").insert({title: request.body.title, text: request.body.text})
    response.status(200).send();
  } else {
    response.status(400).send('expected both title and text fields');
  }
})

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }
console.log(`server is listening on ${port}`)
})
