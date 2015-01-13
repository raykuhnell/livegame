angular.module('livegame').controller('GamesController', function($scope, $http) {
  $http.get('/api/games').success(function (data) {
    $scope.games = data;
  })
});
