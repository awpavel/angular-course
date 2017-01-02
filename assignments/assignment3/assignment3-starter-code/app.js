/**
 * Created by Pavel on 02.01.2017.
 */

(function () {
    'use strict';

    angular.module('module3', [])
        .controller('narrowItDownController', NarrowItDownControllerFunction)
        .service('menuSearchService', MenuSearchServiceFunction)
        .directive('foundItems', listViewFunction);

    function listViewFunction() {
        return {
            templateUrl: 'found-items-template.html',
            scope: {
                items: '<',
                onRemove: '&',
                emptyMessage: '='
            },
            controller: ShoppingListDirectiveController,
            controllerAs: 'list',
            bindToController: true,
            transclude: true,
            link: ListControllerDirectiveLink
        };
    }

    function ListControllerDirectiveLink(scope, element, attribute, controller) {
        scope.$watch('list.emptyMessage', function (newValue, oldValue) {
            if (newValue !== oldValue) {
                element.find('div.error').css('display', newValue ? 'block' : 'none');
            }
        });
    }

    function ShoppingListDirectiveController() {
        var directiveCtrl = this;
    }



    NarrowItDownControllerFunction.$inject = ['menuSearchService'];
    function NarrowItDownControllerFunction(dataService) {
        var ctrl = this;
        ctrl.searchText = '';
        ctrl.items = [];
        ctrl.emptyList = false;

        this.getData = function() {
            var asyncRequest = dataService.getMatchedMenuItems(ctrl.searchText);
            if (asyncRequest.length === 0){
                ctrl.items = [];
                ctrl.emptyList = true;
            } else {
                asyncRequest.then(function (response) {
                    console.log("Data from service: ", response);
                    ctrl.items = response;
                    ctrl.emptyList = ctrl.items.length === 0;
                }, function (error) {
                    ctrl.emptyList = true;
                    ctrl.items = [];
                });
            }
        };

        this.removeItem = function (index) {
            ctrl.items.splice(index, 1);
        }

    }

    MenuSearchServiceFunction.$inject = ['$http'];
    function MenuSearchServiceFunction($http) {
        var service = this;
        var items = [];
        var errorMessage;

        service.getMatchedMenuItems = function(searchTerm) {
            if (searchTerm === "") {
                return [];
            }
            return $http({
                method : "get",
                url : 'https://davids-restaurant.herokuapp.com/menu_items.json'
            }).then(
                function (response) {
                    var object = response.data;
                    items = object.menu_items;
                    var matchedItems = [];
                    items.forEach(function(item, index, array) {
                        if (item.description.includes(searchTerm)) matchedItems.push(item);
                    });
                    // if (matchedItems.length !== 0) emptyList = false;
                    return matchedItems;
                },
                function (error) {
                    console.log("Get error: ", error.statusText);
                    errorMessage = error.statusText;
                }
            );
        }
    }
})();