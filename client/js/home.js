import angular from 'angular';
import angularMeteor from 'angular-meteor';
import todosList from './todosList';

angular.module('home', [
  angularMeteor,
  todosList.name
]);
