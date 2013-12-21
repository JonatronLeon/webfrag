'use strict';
app.controller('ArticleCtrl', function ArticleCtrl ($scope, $modalInstance, article) {
    $scope.article = article();
    
    $scope.close = function () {
        $modalInstance().close($scope.article);
    };
});
