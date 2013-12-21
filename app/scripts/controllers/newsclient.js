'use strict';
app.controller('NewsClientCtrl', function NewsClientCtrl ($scope, $modal, $modalInstance, NewsClient) {
    $scope.articles = NewsClient.query(); // get articles
    
    $scope.open = function (article) {
        // open article modal
        var modalInstance = $modal.open({
            templateUrl: 'views/news/article.html',
            controller: 'ArticleCtrl',
            resolve: {
                '$modalInstance': function() { return function() { return modalInstance; } },
                'article': function() { return function() { return article; } }
            },
            windowClass: 'article-modal'
        });
        
        modalInstance.result.then(function (response) {
            // mark article as read
            $scope.articles[response.id].read = true;
        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    };
    
    $scope.close = function () {
        $modalInstance().dismiss('cancel');
    };
});
