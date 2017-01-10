/**
 * Created by Pavel on 09.01.2017.
 */
(function () {
'use strict';

angular.module('public')
    .service('UserService', UserService);

function UserService() {
    var service = this;


    service.user = {
        firstName : '',
        lastName : '',
        phoneNumber : '',
        email : '',
        favoriteDishInfo : {}
    };

    service.setUser = function (user) {
        service.user.firstName = user.firstName;
        service.user.lastName = user.lastName;
        service.user.phoneNumber = user.phoneNumber;
        service.user.email = user.email;
        service.user.favoriteDishInfo = user.favoriteDishInfo;
    };

    service.getUser = function () {
        return service.user;
    };

}

})();

