'use strict';
app.controller('ForumCtrl', function ForumCtrl ($scope, $modalInstance, Forum) {
    $scope.data = Forum.query(); // get articles
    
    $scope.reply = function() {
        //$modalInstance().close($scope.email);
    };
    
    $scope.close = function () {
        $modalInstance().dismiss('cancel');
    };
});
