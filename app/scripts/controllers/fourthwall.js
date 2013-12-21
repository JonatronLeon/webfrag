'use strict';
app.controller('FourthWallCtrl', function FourthWallCtrl ($scope, $modalInstance, FourthWall) {
    $scope.data = FourthWall.query();
    
    $scope.close = function () {
        $modalInstance().dismiss('cancel');
    };
});
