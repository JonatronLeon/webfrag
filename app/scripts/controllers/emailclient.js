'use strict';
app.controller('EmailClientCtrl', function EmailClientCtrl ($scope, $modal, $modalInstance, EmailClient) {
    $scope.emails = EmailClient.query(); // get emails
    
    $scope.open = function (email) {
        // open email modal
        var modalInstance = $modal.open({
            templateUrl: 'views/email/email.html',
            controller: 'EmailCtrl',
            resolve: {
                '$modalInstance': function() { return function() { return modalInstance; } },
                'email': function() { return function() { return email; } }
            },
            windowClass: 'email-modal'
        });
        
        modalInstance.result.then(function (response) {
            // mark email as read
            $scope.emails[response.id].read = true;
        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
        //$modalInstance().close(email);
    };
    
    $scope.close = function () {
        $modalInstance().dismiss('cancel');
    };
});
