(function () {
  'use strict';

  angular.module('restaurant', ['ui.router']).config(config);

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
      });

    $urlRouterProvider.otherwise('/');
  }
})();
