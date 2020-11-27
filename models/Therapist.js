const mongoose = require('mongoose');

const Therapist = new mongoose.Schema({
    name: String,
    insurance: String,
    acceptingNew: Boolean,
    imgLink: String
});

module.exports = mongoose.model('Therapist', Therapist);