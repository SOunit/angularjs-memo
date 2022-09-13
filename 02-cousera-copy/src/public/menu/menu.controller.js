(function () {
  angular.module('menu').controller('menuController', menuController);

  menuController.$inject = ['$scope', 'users'];
  function menuController($scope, users) {
    $scope.users = users;
  }
})();
