/**
 * Created by Pavel on 04.01.2017.
 */
(function () {
    'use strict';

    angular.module('appWithRouting')
        .service('CategoryService', CategoryService);

    CategoryService.$inject = ['$http'];
    function CategoryService($http) {
        var service = this;
        var categories = [];

        service.getCategories = function () {
            return $http({
                        method: 'get',
                        url : 'https://davids-restaurant.herokuapp.com/categories.json'
                    }).then(
                        function (response) {
                            var result = response.data;
                            console.log('response ',response);
                            return result;
                        },
                        function (error) {
                            console.log('Get error retrieving data ', error);
                        }
                    );
        }

        service.getItems = function (categoryShortName) {
            return $http({
                method: 'get',
                url : 'https://davids-restaurant.herokuapp.com/menu_items.json',
                params : {category : categoryShortName}
            }).then(
                function (response) {
                    var result = response.data;
                    console.log('response ',response);
                    return result;
                },
                function (error) {
                    console.log('Get error retrieving data ', error);
                }
            );
        }
    }
})();