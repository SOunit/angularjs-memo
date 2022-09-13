(function () {
  angular.module('common').service('UserService', UserService);

  UserService.$inject = ['$http'];
  function UserService($http) {
    var service = this;

    service.getUser = function (id) {
      return $http
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(function (response) {
          return response.data;
        });
    };
  }
})();
