var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    abbreviation: String,
    color: String
});

module.exports = mongoose.model('Team', teamSchema);