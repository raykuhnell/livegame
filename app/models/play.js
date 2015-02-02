var mongoose = require('mongoose');

var playSchema = new mongoose.Schema({
    game: {type: Schema.Types.ObjectId, ref: 'Game' }
    time: String,
    description: String
});

module.exports = mongoose.model('Play', playSchema);