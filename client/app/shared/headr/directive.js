import angular from 'angular';

let headr = angular.module('app.headr', []);

headr.directive('headr', () => {
    return {
        restrict: 'E',
        templateUrl: 'client/app/shared/headr/view.html'
    };
});
