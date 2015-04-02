angular.module('InstagramSearch', ['ngAnimate'])

.config(function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
})

.controller('searchCtrl', ['$scope', '$http', '$log', function($scope, $http, $log) {
    

}]);