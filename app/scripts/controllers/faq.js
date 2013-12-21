'use strict';
app.controller('FaqCtrl', function FaqCtrl ($scope, $modalInstance, FAQ) {
    $scope.data = FAQ.query();
    
    $scope.close = function () {
        $modalInstance().dismiss('cancel');
    };
});
