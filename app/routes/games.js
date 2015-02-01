// Use test data for now.  This will come from MongoDB later.
var games = require('../testdata.js');



exports.list = function(req, res){
  res.send(games);
};

exports.load = function(req, res, next){
  var id = req.params.id;
  req.game = games[id];
  if (req.game) {
    next();
  }
  else {
    var err = new Error('The game you have selected is unavailable at this time.');
    err.status = 404;
    next(err);
  }
};

exports.view = function(req, res){
  res.send(games[0]);
};

exports.edit = function(req, res){
  res.render('games/edit', {
    title: 'Editing Game',
    game: req.game
  });
};

exports.update = function(req, res){
  var game = req.body.game;
  res.redirect('back');
};
