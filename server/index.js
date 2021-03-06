const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/helpers.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
   res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Cache-Control");
   return next();
});


//add service request to DB
app.post('/service', function(req, res) {
  var service = req.body;
  db.addService(service, (data) => {
    res.send('service request saved to DB : ' + data);
  })
})

//get all services by zip code
app.get('/servicesByZip', function(req, res) {
 var zip = req.query.zip; 
 db.getServicesByZip(zip, (data) => {
 	res.send(data);
 	res.end();
 })
})

app.listen(3000, () => console.log('listening on port 3000!'))