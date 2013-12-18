'use strict';
app.controller('DesktopCtrl', function DesktopCtrl ($scope, $modal, $http) {
    $scope.items = ['item1', 'item2', 'item3'];
    $scope.openClient = function (modalName) {
        var modalInstance = $modal.open({
            templateUrl: 'views/email/client.html',
            controller: 'EmailClientCtrl',
            resolve: {
                '$modalInstance': function() { return function() { return modalInstance; } }
            }
        });
        console.log('modal opened');
        modalInstance.result.then(function (response) {
            $scope.selected = response;
            console.log(response);
        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    };
});
