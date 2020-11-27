const mongoose = require('mongoose');
require('dotenv').config();

const Therapist = require('../models/Therapist');

mongoose.connect(`${process.env.DB_HOST}/silverline`, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('silverline server connected to database');
});

module.exports =  {
    getTherapists: async () => {
        return await Therapist.find();
    }
}

