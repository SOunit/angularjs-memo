(function () {
  angular.module('app', ['card']);

  angular.module('app').controller('appController', appController);

  appController.$inject = ['$scope'];
  function appController($scope) {
    var users = [
      { id: 1, name: 'Jack' },
      { id: 2, name: 'Bec' },
      { id: 3, name: 'Kevin' },
      { id: 4, name: 'Kate' },
      { id: 5, name: 'Randal' },
    ];

    $scope.users = users;

    function remove(id) {
      console.log('appController remove: ', id);
      users.splice(id, 1);
    }

    $scope.remove = remove;
  }
})();
