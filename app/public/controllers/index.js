angular.module('livegame').controller('IndexController', function($scope) {
  $http.get('/api/games').success(function (data) {
    $scope.games = data;
  })
});
