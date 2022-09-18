(function () {
  angular.module('card').component('card', {
    templateUrl: 'src/components/card/card.component.html',
    bindings: {
      user: '<',
    },
  });
})();
