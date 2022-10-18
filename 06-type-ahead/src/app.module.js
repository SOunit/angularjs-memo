var USERS_DATA = [
  {
    id: 1,
    name: 'Jack',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet id corporis, illum rem pariatur necessitatibus voluptate eius dolor? Illo, exercitationem. Quis fuga voluptatum at deserunt veritatis provident qui, illo ullam?',
  },
  {
    id: 2,
    name: 'Bec',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet id corporis, illum rem pariatur necessitatibus voluptate eius dolor? Illo, exercitationem. Quis fuga voluptatum at deserunt veritatis provident qui, illo ullam?',
  },
  {
    id: 3,
    name: 'Kevin',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet id corporis, illum rem pariatur necessitatibus voluptate eius dolor? Illo, exercitationem. Quis fuga voluptatum at deserunt veritatis provident qui, illo ullam?',
  },
  {
    id: 4,
    name: 'Kate',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet id corporis, illum rem pariatur necessitatibus voluptate eius dolor? Illo, exercitationem. Quis fuga voluptatum at deserunt veritatis provident qui, illo ullam?',
  },
  {
    id: 5,
    name: 'Randal',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet id corporis, illum rem pariatur necessitatibus voluptate eius dolor? Illo, exercitationem. Quis fuga voluptatum at deserunt veritatis provident qui, illo ullam?',
  },
];

(function () {
  angular.module('app', []);

  angular.module('app').controller('appController', appController);

  appController.$inject = ['$scope'];
  function appController($scope) {
    $scope.test = function () {
      console.log('test');
    };

    $scope.num = 100;

    $scope.users = USERS_DATA;
  }
})();
