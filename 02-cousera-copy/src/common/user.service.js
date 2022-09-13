(function () {
  angular.module('common').service('UserService', UserService);

  UserService.$inject = ['$http'];
  function UserService($http) {
    var service = this;

    const apiUrl = 'https://jsonplaceholder.typicode.com';

    service.getUsers = function () {
      return $http.get(`${apiUrl}/users`).then(function (response) {
        return response.data;
      });
    };

    service.getUser = function (id) {
      return $http.get(`${apiUrl}/users/${id}`).then(function (response) {
        return response.data;
      });
    };
  }
})();
