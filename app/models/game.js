var mongoose = require('mongoose');

var gameSchema = new mongoose.Schema({
    sport: String,
    team: [
        {
            team: {type: Schema.Types.ObjectId, ref: 'Team' }
            abbreviation: String,
            color: String,
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
    time: String,
    plays: [{type: Schema.Types.ObjectId, ref: 'Play' }]
});

module.exports = mongoose.model('Game', gameSchema);