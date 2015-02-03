var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playSchema = new Schema({
    game: {type: Schema.Types.ObjectId, ref: 'Game' }
    time: String,
    description: String
});

module.exports = mongoose.model('Play', playSchema);