(function(){
    angular.module("components-module").component('personCard', {
        templateUrl: 'src/js/components/person-card.component.html',
        bindings: {
            person: "<"
        },
      });
})()