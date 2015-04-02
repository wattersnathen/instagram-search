angular.module('InstagramSearch', ['ngAnimate'])

.config(function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
})

.controller('searchCtrl', ['$scope', '$http', '$log', function($scope, $http, $log) {
    
    var url = 'https://api.instagram.com/v1/tags/%tag%/media/recent', //?count=20
          clientId = '079f0f1b37da4231b24e5331362c4a1a';


}]);