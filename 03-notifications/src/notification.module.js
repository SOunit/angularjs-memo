(function () {
  'use strict';

  angular.module('notifications', []);

  angular
    .module('notifications')
    .controller('notificationsController', notificationController);

  notificationController.$inject = ['$scope'];
  function notificationController($scope) {
    $scope.show = false;

    $scope.toggleNotifications = function () {
      $scope.show = !$scope.show;
    };
  }
})();
