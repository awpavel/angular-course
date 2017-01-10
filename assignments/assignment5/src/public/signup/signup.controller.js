/**
 * Created by Pavel on 08.01.2017.
 */
(function () {
'use strict';

angular.module('public')
    .controller('SignupController', SignupController);

SignupController.$inject = ['MenuService', 'UserService'];
function SignupController(MenuService, UserService){
    var $ctrl = this;
    $ctrl.user = {
        firstName : '',
        lastName : '',
        phoneNumber : '',
        email : '',
        favoriteDish : '',
        favoriteDishInfo : ''
    };
    $ctrl.message = '';
    $ctrl.errorMessage = '';
    $ctrl.dishFlag = false;


    $ctrl.findDish = function () {
        MenuService.findDish($ctrl.user.favoriteDish).then(
            function Success(response) {
                $ctrl.user.favoriteDishInfo = response;
                $ctrl.errorMessage = '';
                $ctrl.dishFlag = true;
            },
            function Error() {
                $ctrl.errorMessage = "Unknown dish with the short name '" + $ctrl.user.favoriteDish+"'";
                $ctrl.message = '';
                $ctrl.user.favoriteDishInfo = [];
                $ctrl.dishFlag = false;
            }
        );

    };

    $ctrl.signUp = function () {
        UserService.setUser($ctrl.user);
        $ctrl.message = 'Your information has been saved';
    };

    $ctrl.logUserService = function () {
        console.log("User info ", UserService.getUser());
    };
}
})();
