let signup = angular.module('app.signup', []);

signup.controller('signupController', ['$http', function($http) {
    this.name = "";
    this.email = "";
    this.password = "";

    this.submitSignup = function() {
        alert(this.name + " --- " + this.email + " --- " + this.password);
    }
}]);
