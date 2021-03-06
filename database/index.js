const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'db connection error:'));
db.once('open', function() {
  console.log('mongo connected')
});

const ServiceSchema = new Schema({
  userId: {type: String, default: null},
  zip: {type: String, default: null},
  subject: {type: String, default: null},
  text: {type: String, default: null},
  status: {type: String, default: 'open'},
  fulfillerId: {type: String, default: null}
},
{
  collection: 'services'
});

const Service = mongoose.model('Service', ServiceSchema);

module.exports = Service;