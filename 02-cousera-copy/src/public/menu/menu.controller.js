(function () {
  angular.module('menu').controller('menuController', menuController);

  menuController.$inject = ['$scope'];
  function menuController($scope) {
    $scope.categories = [
      { name: 'test1', id: 1 },
      { name: 'test2', id: 2 },
      { name: 'test3', id: 3 },
      { name: 'test4', id: 4 },
    ];
  }
})();
