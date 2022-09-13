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
      })
      .state('menu-items', {
        url: '/menu/{id}',
        templateUrl: 'src/public/menu/menu.html',
        controller: 'menuController',
      });

    $urlRouterProvider.otherwise('/');
  }
})();
