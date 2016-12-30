/**
 * Created by Pavel on 28.12.2016.
 */
(function () {
    'use strict';
    angular.module(['appRepeat'],[])
        .controller('repeatController', repeatFunctionController);
    repeatFunctionController.$inject = ['$scope'];

    function repeatFunctionController($scope) {
        $scope.list = ['apple', 'raspberry', 'milk', 'juice', 'chocolate'];

        $scope.getWatcherCount = function () {
            console.log("Watcher count - "+$scope.$$watchersCount);
        }

        $scope.addItemsToList = function () {
            $scope.list.push("pineapple");
            $scope.list.push("banan");
            $scope.list.push("pear");
            $scope.list.push("plum");
            $scope.list.push("cherry");
        }

        $scope.addItemsToList2 = function () {
            $scope.list = [];
            $scope.list.push("pineapple1");
            $scope.list.push("banan1");
            $scope.list.push("pear1");
            $scope.list.push("plum1");
            $scope.list.push("cherry1");
        }
    }


})();