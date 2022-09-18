(function () {
  angular.module('app', []);

  angular.module('app').controller('appController', appController);

  appController.$inject = ['$scope'];
  function appController($scope) {
    $scope.users = [
      { id: 1, name: 'Jack' },
      { id: 2, name: 'Bec' },
      { id: 3, name: 'Kevin' },
      { id: 4, name: 'Kate' },
      { id: 5, name: 'Randal' },
    ];
  }
})();
