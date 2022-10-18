const ITEMS_DATA = ['test1', 'test2', 'test3', 'test4', 'test5'];

(function () {
  angular.module('app', ['ui.bootstrap']);

  angular.module('app').controller('appController', appController);

  appController.$inject = ['$scope'];
  function appController($scope) {
    $scope.test = function () {
      console.log('test');
    };

    $scope.items = ITEMS_DATA;
  }
})();
