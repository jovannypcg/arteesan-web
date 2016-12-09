let signup = angular.module('app.signup', []);

signup.controller('signupController',
        ['$http', '$location', function($http, $location) {
    this.name = "";
    this.email = "";
    this.password = "";

    this.submitSignup = function() {
        let payload = {
            first_name: this.name,
            email: this.email,
            password: this.password
        };

        $http.post('http://localhost:3000/v1/customers', payload).then(data => {
            $location.path('#/');
        }).catch(error => {
            alert(error.data.error.detail);
        });
    }
}]);
