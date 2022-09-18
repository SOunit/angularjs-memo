(function () {
  'use strict';

  angular.module('notifications', []);

  angular
    .module('notifications')
    .controller('notificationsController', notificationController);

  notificationController.$inject = ['$scope'];
  function notificationController($scope) {
    $scope.show = false;
    $scope.notifications = [
      { id: 1, message: 'notification 1' },
      { id: 2, message: 'notification 2' },
      { id: 3, message: 'notification 3' },
      { id: 4, message: 'notification 4' },
      { id: 5, message: 'notification 5' },
    ];

    $scope.toggleNotifications = function () {
      $scope.show = !$scope.show;
    };
  }
})();
