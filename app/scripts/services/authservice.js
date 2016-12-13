'use strict';

/**
 * @ngdoc service
 * @name arteesanApp.authService
 * @description
 * # authService
 * Service in the arteesanApp.
 */
angular.module('app')
  .service('authService', function () {
      return {
          getEmail: function() {
              return 'jovanny@papu.com';
          }
      };
  });
