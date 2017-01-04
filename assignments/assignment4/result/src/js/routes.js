/**
 * Created by Pavel on 04.01.2017.
 */

(function () {
    'use strict';

    angular.module('appWithRouting')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url : '/',
                templateUrl : 'src/tmpl/home.tmpl.html'
            })
            .state('categories', {
                url : '/categories',
                templateUrl : 'src/tmpl/categories.tmpl.html',
                controller : 'CategoryController as categoryCtrl',
                resolve : {
                    categoriesList : ['CategoryService', function (CategoryService) {
                        return CategoryService.getCategories();
                    }]
                }
            })
            .state('items', {
                url : '/categories/{shortName}/items',
                templateUrl : 'src/tmpl/items.tmpl.html',
                controller : 'ItemController as itemCtrl',
                resolve : {
                    data : ['CategoryService', '$stateParams',  function (CategoryService, $stateParams) {
                        return CategoryService.getItems($stateParams.shortName);
                    }]
                }
            });
    }
})();