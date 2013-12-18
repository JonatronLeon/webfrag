'use strict';
app.factory('EmailClient', ['DefragResource', function (DefragResource) {

    var EmailClient = DefragResource('emailclient');
    
    EmailClient.defaultConfig.localData = [
        {
            subject: 'Allow me to introduce myself',
            from:    'Bearington',
            date:    '10/11/2014'
        }
    ];
    
    return EmailClient;

}]);
