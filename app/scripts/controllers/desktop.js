'use strict';
app.controller('DesktopCtrl', function DesktopCtrl ($scope, $modal, $http) {
    var modalInstance;
    // open email client
    $scope.openEmailClient = function () {
        // open modal
        modalInstance = $modal.open({
            templateUrl: 'views/email/client.html',
            controller: 'EmailClientCtrl',
            resolve: {
                '$modalInstance': function() { return function() { return modalInstance; } }
            },
            windowClass: 'email-client-modal'
        });
        
        modalInstance.result.then(function (response) {
            // @TODO: ???
            $scope.selected = response;
            console.log(response);
        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    };

    // open forum client
    $scope.openForums = function () {
        // open modal
        modalInstance = $modal.open({
            templateUrl: 'views/forum/forum.html',
            controller: 'ForumCtrl',
            resolve: {
                '$modalInstance': function() { return function() { return modalInstance; } }
            },
            windowClass: 'forum-modal'
        });
        
        modalInstance.result.then(function (response) {
            // @TODO: ???
            $scope.selected = response;
            console.log(response);
        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    };
    
    // open news client
    $scope.openNewsClient = function () {
        // open modal
        modalInstance = $modal.open({
            templateUrl: 'views/news/client.html',
            controller: 'NewsClientCtrl',
            resolve: {
                '$modalInstance': function() { return function() { return modalInstance; } }
            },
            windowClass: 'news-client-modal'
        });
        
        modalInstance.result.then(function (response) {
            // @TODO: ???
            $scope.selected = response;
            console.log(response);
        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    };
    
    // open 4th wall
    $scope.openFourthWall = function () {
        // open modal
        modalInstance = $modal.open({
            templateUrl: 'views/fourthwall/fourthwall.html',
            controller: 'FourthWallCtrl',
            resolve: {
                '$modalInstance': function() { return function() { return modalInstance; } }
            },
            windowClass: 'fourth-wall-modal'
        });
        
        modalInstance.result.then(function (response) {
            // @TODO: ???
            $scope.selected = response;
            console.log(response);
        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    };
    
    // open faq
    $scope.openFAQ = function () {
        // open modal
        modalInstance = $modal.open({
            templateUrl: 'views/faq/faq.html',
            controller: 'FaqCtrl',
            resolve: {
                '$modalInstance': function() { return function() { return modalInstance; } }
            },
            windowClass: 'faq-modal'
        });
        
        modalInstance.result.then(function (response) {
            // @TODO: ???
            $scope.selected = response;
            console.log(response);
        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    };
});
