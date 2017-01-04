/**
 * Created by Pavel on 04.01.2017.
 */
(function () {
    'use strict';

    angular.module('appWithRouting')
        .controller('CategoryController', CategoryController);

    CategoryController.$inject = ['categoriesList'];
    function CategoryController(categoriesList) {
        var ctrl = this;
        ctrl.items = categoriesList;
    }
})();
