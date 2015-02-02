var TeamModel = require('../models/team.js');

exports.list = function(req, res) {
  return TeamModel.find(function (err, teams) {
    if (!err) {
      return res.send(teams);
    } else {
      return console.log(err);
    }
  });
};

exports.create = function(req, res) {
  var team = new TeamModel({
    name: req.body.name,
    abbreviation: req.body.abbreviation,
    color: req.body.color,
  });
  team.save(function (err) {
    if (!err) {
      return console.log("created");
    } else {
      return console.log(err);
    }
  });
  return res.send(team);  
};

exports.read = function(req, res) {
  return TeamModel.findById(req.params.id, function (err, team) {
    if (!err) {
      return res.send(team);
    } else {
      return console.log(err);
    }
  });
};

exports.update = function(req, res) {
  return TeamModel.findById(req.params.id, function (err, team) {
    team.name = req.body.name;
    team.abbreviation = req.body.abbreviation;
    team.color = req.body.color;
    return team.save(function (err) {
      if (!err) {
        console.log("updated");
      } else {
        console.log(err);
      }
      return res.send(team);
    });
  });
};

exports.delete = function(req, res) {
  return TeamModel.findById(req.params.id, function (err, team) {
    return team.remove(function (err) {
      if (!err) {
        console.log("removed");
        return res.send('');
      } else {
        console.log(err);
      }
    });
  });
};