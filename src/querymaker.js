const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`${process.env.DB_HOST}/silverline`, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected to database');
});