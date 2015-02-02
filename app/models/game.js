var mongoose = require('mongoose');

var gameSchema = new mongoose.Schema({
    sport: String,
    team: [
        {
            info: {type: Schema.Types.ObjectId, ref: 'Team' }
            score: String,
            periods: [
                {
                    name: String,
                    score: String
                }
            ]
        }
    ],
    period: String,
    time: String
});

module.exports = mongoose.model('Game', gameSchema);