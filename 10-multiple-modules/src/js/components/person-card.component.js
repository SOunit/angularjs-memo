(function(){
    angular.module("page-1-module").component('personCard', {
        templateUrl: 'src/js/components/person-card.component.html',
        bindings: {
            person: "<"
        },
      });
})()