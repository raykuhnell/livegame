var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var games = require('./routes/games');
var teams = require('./routes/teams');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// Games
app.get('/api/games', games.list);
app.post('/api/game', game.create);
app.get('/api/game/:id', games.read);
app.put('/api/game/:id/update', games.update);
app.delete('/api/game/:id/delete', games.delete);

// Teams
app.get('/api/teams', teams.list);
app.post('/api/team', teams.create);
app.get('/api/team/:id', teams.read);
app.put('/api/team/:id/update', teams.update);
app.delete('/api/team/:id/delete', teams.delete);

// Plays
app.get('/api/plays', teams.list);
app.post('/api/play', teams.create);
app.get('/api/play/:id', teams.read);
app.put('/api/play/:id/update', teams.update);
app.delete('/api/play/:id/delete', teams.delete);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

mongoose.connect('mongodb://localhost/test');

module.exports = app;
