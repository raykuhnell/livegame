angular.module('livegame', [
  'ngRoute'
]).config(['$routeProvider', function($routeProvider) {
  var viewPath = '/app/views/';
  $routeProvider
  .when('/', {
    templateUrl: viewPath + 'games.html',
    controller: 'GamesController'
  })
  .when('/games/:gameId', {
    controller: 'GameController',
    templateUrl: viewPath + 'game.html'
  });
}]);
