import angular from 'angular';
import angularMeteor from 'angular-meteor';

angular.module('app', [
  angularMeteor,
  'app.users',
  'app.headr'
]);
