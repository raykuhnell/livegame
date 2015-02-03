var GameModel = require('../models/game.js');

exports.list = function(req, res) {
  return GameModel.find().populate('team.info').populate('plays').exec(function (err, games) {
    if (!err) {
      return res.send(games);
    } else {
      return console.log(err);
    }
  });
};

exports.create = function(req, res) {
  var game = new GameModel({
    name: req.body.name,
  });
  game.save(function (err) {
    if (!err) {
      return console.log("created");
    } else {
      return console.log(err);
    }
  });
  return res.send(game);  
};

exports.read = function(req, res) {
  return GameModel.findById(req.params.id).populate('team.info').populate('plays').exec(function (err, game) {
    if (!err) {
      return res.send(game);
    } else {
      return console.log(err);
    }
  });
};

exports.update = function(req, res) {
  return GameModel.findById(req.params.id, function (err, game) {
    game.name = req.body.name;
    return game.save(function (err) {
      if (!err) {
        console.log("updated");
      } else {
        console.log(err);
      }
      return res.send(game);
    });
  });
};

exports.delete = function(req, res) {
  return GameModel.findById(req.params.id).populate('team.info').populate('plays').exec(function (err, game) {
    return game.remove(function (err) {
      if (!err) {
        console.log("removed");
        return res.send('');
      } else {
        console.log(err);
      }
    });
  });
};