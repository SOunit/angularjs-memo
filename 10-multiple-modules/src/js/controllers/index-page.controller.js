(function () {
    angular.module("page-1-module").controller("IndexPageController", IndexPageController)

    IndexPageController.$inject = ["DataStoreService"];
    function IndexPageController(DataStoreService) {
        var IndexPageCtrl = this;

        function init() {
            IndexPageCtrl.personList = DataStoreService.store.personList;
        }
        init();

        IndexPageCtrl.add = function () {
            var name = IndexPageCtrl.name;
            console.log("add", { name });

            var id = Math.random();
            var newPerson = { id, name };

            var store = DataStoreService.store;
            var personList = store.personList;
            personList.push(newPerson);

            console.log({ store });

            // reset
            IndexPageCtrl.name = "";
        }
    }
})()