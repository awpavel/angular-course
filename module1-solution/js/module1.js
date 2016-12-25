/**
 * Created by Pavel on 26.12.2016.
 */
(function () {
    'use strict';
    angular.module('module1', []).controller('EatingController', EatingController);

    EatingController.$inject = ['$scope'];
    function EatingController($scope) {
        $scope.eatForLunch = "";
        $scope.message = "";

        $scope.countOfTheMeals = function (string) {
            if (string == "") return 0;
            return string.split(",").length;
        }

        $scope.checkIfTooMuch = function () {
            var count = $scope.countOfTheMeals($scope.eatForLunch);
            if (count == 0) $scope.message = "Please enter data first";
            else if (count >= 1 && count <=3) $scope.message = "Enjoy!";
            else $scope.message = "Too much!";
        }

    };
})();