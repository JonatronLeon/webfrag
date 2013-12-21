'use strict';
app.factory('EmailClient', ['DefragResource', function (DefragResource) {

    var EmailClient = DefragResource('emailclient');
    
    EmailClient.defaultConfig.localData = [
        {
            id:      0,
            subject: 'Allowwwwwww www wwwwwwww wwww www wwwwwwww wwwwwww www wwwwww wwwwwww wwww wwww wwwww wwwwwwwww wwwww wwwwwwww me to introduce myself',
            from:    'Bearington',
            date:    '10/11/2014',
            body:    'content',
            read:    false
        }
    ];
    
    return EmailClient;

}]);
