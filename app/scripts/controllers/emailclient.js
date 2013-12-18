'use strict';
app.controller('EmailClientCtrl', function EmailClientCtrl ($scope, $modalInstance, EmailClient) {
    $scope.emails = EmailClient.query();
    
    $scope.ok = function () {
        $modalInstance().close($scope.selected.item);
        console.log('ok');
    };
    $scope.cancel = function () {
        $modalInstance().dismiss('cancel');
        console.log('cancel');
    };
});
