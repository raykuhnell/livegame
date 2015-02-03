var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gameSchema = new Schema({
    _id: Schema.Types.ObjectId,
    sport: String,
    team: [
        {
            info: { type: Schema.Types.ObjectId, ref: 'Team' },
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
    plays: [{ type: Schema.Types.ObjectId, ref: 'Play' }]
});

module.exports = mongoose.model('Game', gameSchema);