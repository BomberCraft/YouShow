'use strict';

var videoCtrl = angular.module('videoCtrl', []);


videoCtrl.controller('videoLoader', ['$scope', '$http', function($scope, $http) {

    $scope.load = function(url) {
        $scope.loadedVideo = { "url" : url};
    };

    $scope.videos = [
        {
            name : "video",
            url : "video.mp4",
            weight : "123kb"
        },
        {
            name : "video2",
            url : "video2.mp4",
            weight : "alaln"
        }
    ];

}]);
