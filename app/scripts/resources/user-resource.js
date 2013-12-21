'use strict';
app.factory('Users', ['DefragResource', function (DefragResource) {

    var Users = DefragResource('users');
    
    Users.defaultConfig.localData = [
        {
            id:         0,
            username:   'petra',
            profilepic: ''
        }
    ];
    
    return Users;

}]);
