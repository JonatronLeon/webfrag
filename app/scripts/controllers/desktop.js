'use strict';
app.controller('DesktopCtrl', function DesktopCtrl ($scope, $modal, $http) {
    // open email client
    $scope.openClient = function (modalName) {
        // open modal
        var modalInstance = $modal.open({
            templateUrl: 'views/email/client.html',
            controller: 'EmailClientCtrl',
            resolve: {
                '$modalInstance': function() { return function() { return modalInstance; } }
            },
            windowClass: 'email-client-modal'
        });
        console.log('modal opened');
        modalInstance.result.then(function (response) {
            // @TODO: ???
            $scope.selected = response;
            console.log(response);
        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    };
});
