(function () {
  angular.module('restaurant').config(config);

  config.$inject = ['$urlRouterProvider', '$stateProvider'];
  function config($urlRouterProvider, $stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'src/public/home/home.html',
      })
      .state('menu', {
        url: '/menu',
        templateUrl: 'src/public/menu/menu.html',
        controller: 'menuController',
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
      .state('menu-items', {
        url: '/menu/{id}',
        templateUrl: 'src/public/menu-items/menu-items.html',
      });

    $urlRouterProvider.otherwise('/');
  }
})();
