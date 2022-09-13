(function () {
  angular.module('users').controller('usersController', usersController);

  usersController.$inject = ['$scope', 'users'];
  function usersController($scope, users) {
    $scope.users = users;
  }
})();
