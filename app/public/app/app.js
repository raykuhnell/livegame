angular.module('livegame', [
  'ngRoute',
  'livegame.controllers'
]).config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'views/games.html',
    controller: 'GamesController'
  });
}]);
