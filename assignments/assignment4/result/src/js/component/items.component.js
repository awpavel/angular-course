/**
 * Created by Pavel on 05.01.2017.
 */
(function () {
    'use strict';

    angular.module('appWithRouting')
        .component('itemsList', {
            templateUrl : 'src/tmpl/component/items-list.tmpl.html',
            bindings : {
                items : '<'
            }
        });
})();