(function () {
  angular.module('restaurant').config(config);

  config.$inject = ['$urlRouterProvider', '$stateProvider'];
  function config($urlRouterProvider, $stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'src/public/home/home.html',
      })
      .state('users', {
        url: '/users',
        templateUrl: 'src/public/users/users.html',
        controller: 'usersController',
        resolve: {
          users: function () {
            return [
              { name: 'jack', id: 1 },
              { name: 'bec', id: 2 },
              { name: 'kevin', id: 3 },
              { name: 'kate', id: 4 },
              { name: 'randal', id: 5 },
            ];
          },
        },
      })
      .state('user-detail', {
        url: '/user/{id}',
        templateUrl: 'src/public/user-detail/user-detail.html',
        controller: 'userDetailController',
        resolve: {
          user: [
            'UserService',
            '$stateParams',
            function (UserService, $stateParams) {
              console.log('UserService', UserService, $stateParams);
              return UserService.getUser($stateParams.id);
            },
          ],
        },
      });

    $urlRouterProvider.otherwise('/');
  }
})();
