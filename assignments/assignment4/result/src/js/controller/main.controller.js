/**
 * Created by Pavel on 04.01.2017.
 */
(function () {
    'use strict';

    angular.module('appWithRouting')
        .controller('MainController', MainController);

    MainController.$inject = ['categoryList'];
    function MainController(categoryList) {
        var ctrl = this;
    }
})();
