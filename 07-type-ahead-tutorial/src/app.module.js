(function () {
  angular.module('app', []);

  angular.module('app').controller('appController', appController);

  appController.$inject = ['$scope'];
  function appController($scope) {
    $scope.test = function () {
      console.log('test');
    };
  }
})();
