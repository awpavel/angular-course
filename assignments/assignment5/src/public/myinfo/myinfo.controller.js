/**
 * Created by Pavel on 09.01.2017.
 */
(function () {
'use strict';

angular.module('public')
    .controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['userInfo', 'ApiPath'];
function MyInfoController(userInfo, ApiPath) {
    var $ctrl = this;
    $ctrl.user = userInfo;
    $ctrl.apiPath = ApiPath;


}
})();