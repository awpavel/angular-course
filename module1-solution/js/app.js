/**
 * Created by Pavel on 26.12.2016.
 */
(function () {
    'use strict';
    angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.mealsForLunch = "";
        $scope.message = "";
        $scope.result = "";

        $scope.countOfTheMeals = function (string) {
            var data = string;

            while (data.substr(data.length-1,1) == ',')
                data = data.substr(0,data.length-1);

            if (data == "") return 0;
            var meals = data.split(",");
            var count = 0;
            meals.forEach(function(item) {
                if (item.trim() != '') count++;
            });
            return count;
        }

        $scope.checkIfTooMuch = function () {
            var count = $scope.countOfTheMeals($scope.mealsForLunch);
            $scope.result = "message-ok";
            if (count == 0) {
                $scope.message = "Please enter data first";
                $scope.result = "message-error";
            }
            else if (count >= 1 && count <=3) $scope.message = "Enjoy!";
            else $scope.message = "Too much!";
        }

    };
})();