(function(){
    angular.module("app").component('personCard', {
        templateUrl: 'src/js/components/person-card.component.html',
        bindings: {
            person: "<"
        },
      });
})()