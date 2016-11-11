import angular from 'angular';
import angularMeteor from 'angular-meteor';
import todosList from './todosList';
import home from './home'

angular.module('main', [
  angularMeteor,
  home.name
]);
