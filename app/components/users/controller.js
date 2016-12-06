let app = angular.module('app.users', []);

app.controller('usersCtrl', ['$http', function($http) {
    let ctrl = this;
    ctrl.users = [];

    $http.get('https://randomuser.me/api/?results=10').success(data => {
        ctrl.users = data.results;
    });
}]);

app.directive('usersList', function() {
    return {
        restrict: 'E',
        templateUrl: 'components/users/view.html',
        controller: 'usersCtrl',
        controllerAs: 'usersCtrl'
    };
});