angular.module('livegame').controller('TeamsController', ['$scope', '$http',
  function($scope, $http) {
    $http.get('/api/teams').success(function (data) {
      $scope.games = data;
    });
  }
]);
