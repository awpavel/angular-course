/**
 * Created by Pavel on 04.01.2017.
 */
(function () {
    'use strict';
    angular.module('appWithRouting')
        .component('categoryList', {
            templateUrl : 'src/tmpl/component/category-list.tmpl.html',
            bindings : {
                items : '<'
            }
        });
})();
