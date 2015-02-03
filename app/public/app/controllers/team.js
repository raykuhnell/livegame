angular.module('livegame').controller('TeamController', ['$scope', '$http', '$routeParams',
  function($scope, $http, $routeParams) {
    $http.get('/api/team/' + $routeParams.teamId).success(function (data) {
      $scope.team = data;
    });
  }
]);