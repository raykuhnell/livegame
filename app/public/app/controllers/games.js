angular.module('livegame').controller('GamesController', ['$scope', '$http',
  function($scope, $http) {
    $http.get('/api/games').success(function (data) {
      $scope.games = data;
    });
  }
]);
