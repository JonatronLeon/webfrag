'use strict';
app.controller('EmailCtrl', function EmailCtrl ($scope, $modalInstance, email) {
    $scope.email = email();
    
    $scope.reply = function() {
        $modalInstance().close($scope.email);
    };
    
    $scope.close = function () {
        $modalInstance().dismiss('cancel');
    };
});
