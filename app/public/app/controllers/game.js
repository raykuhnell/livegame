angular.module('livegame').controller('GameController', function($scope, $http, $routeParams) {
  $http.get('/api/game/' + $routeParams.gameId).success(function (data) {
    $scope.game = data;
  })
});
