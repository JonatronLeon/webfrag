'use strict';
app.controller('ForumCtrl', function ForumCtrl ($scope, $modalInstance, Forum, API_PATH) {
    $scope.data = Forum.query(); // get articles
    $scope.profilepicDir = API_PATH.profilepicDir;
    $scope.posts = [];
    
    $scope.toggle = function (category) {
        category.active = !category.active;
    };
    
    $scope.open = function (topic) {
        $scope.activeTopic = topic;
        $scope.posts = topic.posts;
        topic.read = true;
        $scope.markAsRead();
    };
    
    $scope.reply = function() {
        $scope.activeTopic.replied = true;
        $scope.markAsRead();
    };
    
    $scope.close = function () {
        $modalInstance().dismiss('cancel');
    };
    
    $scope.markAsRead = function () {
        var i, j, read;
        
        for (i = 0; i < $scope.data.length; i++) {
            read = true;
            for (j = 0; j < $scope.data[i].topics.length; j++) {
                if (!$scope.data[i].topics[j].read || !$scope.data[i].topics[j].replied) {
                    read = false;
                    break;
                }
            }
            
            if (read) {
                $scope.data[i].read = true;
            }
        }
    };
});
