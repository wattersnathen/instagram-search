angular.module('InstagramSearch', ['ngAnimate'])

.config(function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
})

.controller('searchCtrl', ['$scope', '$http', '$log', function($scope, $http, $log) {
    
    var url = 'https://api.instagram.com/v1/tags/%tag%/media/recent', //?count=20
          clientId = '079f0f1b37da4231b24e5331362c4a1a';

    $scope.searchComplete = false;

    $scope.submit = function() {
        if ($scope.instragramSearchForm.$valid) {
            $http({
                method: 'JSONP',
                url: url.replace("%tag%", $scope.query),
                params: {
                    client_id: clientId,
                    callback: 'JSON_CALLBACK',
                }
            })
            .success(function(data, status, header, config) {
                $scope.results = data.data;
                $log.info(data);

                $scope.searchComplete = true;

            })
            .error(function(data, status, header, config) {
                $log.warn("Failure to retrieve images from Instagram");
            });

        } else {
            $log.warn("Form submission was invalid");
        }

    };

    $scope.results = [];

}]);