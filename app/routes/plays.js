var PlayModel = require('../models/play.js');

exports.list = function(req, res){
  return PlayModel.find(function (err, plays) {
    if (!err) {
      return res.send(plays);
    } else {
      return console.log(err);
    }
  });
};

exports.create = function(req, res){
  var play = new PlayModel({
    game: req.body.game,
    time: req.body.time,
    description: req.body.description
  });
  play.save(function (err) {
    if (!err) {
      return console.log("created");
    } else {
      return console.log(err);
    }
  });
  return res.send(play);  
};

exports.read = function(req, res){
  return PlayModel.findById(req.params.id, function (err, play) {
    if (!err) {
      return res.send(play);
    } else {
      return console.log(err);
    }
  });
};

exports.update = function(req, res){
  return PlayModel.findById(req.params.id, function (err, play) {
    play.game = req.body.game;
    play.time = req.body.time;
    play.description = req.body.description;
    return play.save(function (err) {
      if (!err) {
        console.log("updated");
      } else {
        console.log(err);
      }
      return res.send(play);
    });
  });
};

exports.delete = function(req, res){
  return PlayModel.findById(req.params.id, function (err, play) {
    return play.remove(function (err) {
      if (!err) {
        console.log("removed");
        return res.send('');
      } else {
        console.log(err);
      }
    });
  });
};