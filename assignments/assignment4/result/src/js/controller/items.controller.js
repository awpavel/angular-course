/**
 * Created by Pavel on 04.01.2017.
 */
(function () {
    'use strict';
    angular.module('appWithRouting')
        .controller('ItemController', ItemController);

    ItemController.$inject = ['data'];
    function ItemController(data) {
        var ctrl = this;
        ctrl.items = data.menu_items;
        ctrl.category = data.category;
    }
})();
