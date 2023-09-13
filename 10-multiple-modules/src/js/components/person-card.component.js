(function(){
    angular.module("person-card-component-module", []).component('personCard', {
        templateUrl: 'src/js/components/person-card.component.html',
        bindings: {
            person: "<"
        },
      });
})()