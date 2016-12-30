(function () {
    'use strict';

    angular.module('module2App', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('listService', ListServiceFunction);

    ToBuyController.$inject = ['listService'];
    function ToBuyController(listService) {
        var toBuyCtrl = this;

        toBuyCtrl.buyItem = function (index) {
            listService.buyItem(index);
        };

        toBuyCtrl.getItems = function () {
            return listService.getToBuyItems();
        };
    }

    AlreadyBoughtController.$inject = ['listService'];
    function AlreadyBoughtController(listService) {
        var alreadyBoughtCtrl = this;
        alreadyBoughtCtrl.getItems = function () {
            return listService.getAlreadyBoughtItems();
        }
    }

    function ListServiceFunction() {
        var service = this;

        var bought = [
            {name:'cookies', quantity: 10},
            {name:'bread', quantity: 8},
            {name:'milk', quantity: 1},
            {name:'plums', quantity: 12},
            {name:'juice', quantity: 4},
            {name:'apples', quantity: 3}
        ];

        var alreadyBought = [];

        service.buyItem = function (index) {
            var item = bought[index];
            alreadyBought.push(item);
            bought.splice(index,1);
        };

        service.getToBuyItems = function () {
            return bought;
        };

        service.getAlreadyBoughtItems = function () {
            return alreadyBought;
        };

    }

})();
