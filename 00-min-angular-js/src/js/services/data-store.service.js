(function () {
    "use strict";

    angular.module("data-store-service-module", []).service("DataStoreService", DataStoreService);

    DataStoreService.$inject = [];
    function DataStoreService() {
        var dataStoreService = this;

        dataStoreService.store = { personList: [{ id: 1, name: "Jack" }, { id: 2, name: "Bec" }, { id: 3, name: "Kevin" }, { id: 4, name: "Kate" }] };
    }
})()