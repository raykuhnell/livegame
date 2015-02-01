var mongoose = require('mongoose');

var teamSchema = new mongoose.Schema({
    name: String,
    abbreviation: String,
    color: String
});

module.exports = mongoose.model('Team', teamSchema);