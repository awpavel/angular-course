/**
 * Created by Pavel on 26.12.2016.
 */



(function () {
    'use strict';
    function FilterChangeFactory() {
        return function (input, find, replace) {
            input = input || "";
            input = input.toUpperCase()+" add fiesta";
            return input.replace(new RegExp(find, 'g'), replace);
        }
    }

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController)
        .controller('BindingController', BindingFunctionController)
        .filter('changeCase', FilterChangeFactory);

    LunchCheckController.$inject = ['$scope', '$timeout', "changeCaseFilter"];
    BindingFunctionController.$inject = ['$scope'];
    function LunchCheckController($scope, $timeout, changeCaseFilter) {
        $scope.mealsForLunch = "";
        $scope.message = "";
        $scope.result = "";
        $scope.sum = .35;
        $scope.timer = 0;

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

        $scope.getMessage = function () {
            return changeCaseFilter("Hello world", "a", "*()");
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

        $scope.runTimer = function () {
            // setTimeout(function () {
            //     $scope.$apply(function () {
            //         $scope.timer++;
            //         console.log("Update timer");
            //     })
            // }, 2000);
            $timeout(function () {
                $scope.timer++;
                console.log("Update timer");
            }, 2000);
        }

    };


    function BindingFunctionController($scope) {
        // $scope.fullName = "";
        $scope.firstName = "Pavel";

        $scope.getWatcherCount = function () {
            console.log("Watcher count - "+$scope.$$watchersCount);
        }

        $scope.showFullName = function () {
            $scope.fullName = "Androshchuk "+$scope.firstName;
        }
    };



})();