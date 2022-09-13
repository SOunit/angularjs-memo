(function () {
  angular
    .module('user-detail')
    .controller('userDetailController', userDetailController);

  userDetailController.$inject = ['$scope', 'user'];
  function userDetailController($scope, user) {
    $scope.user = user;
  }
})();
