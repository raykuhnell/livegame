angular.module('livegame.controllers').controller('GamesController', function($scope) {
  $http.get('/api/games').success(function (data) {
    $scope.games = data;
  })
});
