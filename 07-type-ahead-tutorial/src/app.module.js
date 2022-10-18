const ITEMS_DATA = [
  { title: 'test1' },
  { title: 'test2' },
  { title: 'test3' },
  { title: 'test4' },
  { title: 'test5' },
  { title: 'test6' },
  { title: 'test7' },
  { title: 'test8' },
  { title: 'test9' },
  { title: 'test10' },
  { title: 'test11' },
  { title: 'test12' },
  { title: 'test13' },
  { title: 'test14' },
  { title: 'test15' },
];

(function () {
  angular.module('app', ['ui.bootstrap']);

  angular.module('app').controller('appController', appController);

  appController.$inject = ['$scope'];
  function appController($scope) {
    $scope.selectItem = function ($item, $model, $label) {
      console.log('$item', $item);
      console.log('$model', $model);
      console.log('$label', $label);

      // reset search keyword
      $scope.selectedItems.push($item);
      $scope.searchQuery = '';
    };

    $scope.items = ITEMS_DATA;
    $scope.selectedItems = [];
  }
})();
