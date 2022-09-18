(function () {
  angular.module('card').directive('cardDirective', cardDirective);

  function cardDirective() {
    var ddo = {
      templateUrl: 'src/directives/card/card.directive.html',
      transclude: true,
    };

    return ddo;
  }
})();
