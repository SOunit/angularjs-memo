(function () {
  angular.module('userCard').directive('userCardDirective', userCardDirective);

  function userCardDirective() {
    return {
      templateUrl: 'src/directives/userCard/userCard.directive.html',
    };
  }
})();
