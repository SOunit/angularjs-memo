(function () {
  angular
    .module('user-detail')
    .controller('userDetailController', userDetailController);

  userDetailController.$inject = ['$scope', 'user'];
  function userDetailController($scope, user) {
    console.log('user', user);
    $scope.user = user;
  }
})();
