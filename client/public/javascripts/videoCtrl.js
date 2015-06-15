'use strict';

var videoCtrl = angular.module('videoCtrl', []);


videoCtrl.controller('videoLoader', ['$scope', '$http', function($scope, $http) {


    $scope.load = function(url, name) {
        var _url = url?this.server + '/data/' + url + '/' + name:this.server + '/data/' + name;
        $scope.loadedVideo = { "url" : _url};
    };

    $scope.init = function() {
        var server = "http://localhost:3000";
        this.server = server;
        var url = server + "/videos";
        $http.get(url).then(function(response){
            $scope.videos = response.data;
        }, function(data) {
            $scope.videos = "Server problem";
        });
    };


    $scope.videos = "waiting for the server ....";

    $scope.init();



}]);
