angular.module('InstagramSearch', ['ngAnimate'])

.config(function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
})


}]);