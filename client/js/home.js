import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './../templates/home.html';

class HomeCtrl {
    constructor() {
      console.log('home...');
    }
}

export default angular.module('home', [
  angularMeteor
]).component('home', {
    templateUrl: 'client/templates/home.html',
    controller: HomeCtrl
});
