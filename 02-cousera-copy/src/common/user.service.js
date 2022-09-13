(function () {
  angular.module('common').service('UserService', UserService);

  UserService.$inject = ['$http'];
  function UserService($http) {
    var service = this;

    service.getUser = function (id) {
      $http.get(`https://jsonplaceholder.typicode.com/users/${id}`);

      return { name: 'jack', id: 1 };
    };
  }
})();
