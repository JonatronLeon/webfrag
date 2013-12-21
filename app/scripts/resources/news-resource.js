'use strict';
app.factory('NewsClient', ['DefragResource', function (DefragResource) {

    var NewsClient = DefragResource('newsclient');
    
    NewsClient.defaultConfig.localData = [
        {
            id:       0,
            headline: 'Mystery children popping up everywhere. Oh god where are they all coming from?',
            date:     '10/11/2014',
            body:     'Man just look at all those suckers fall it’s crazy.',
            read:     false
        }
    ];
    
    return NewsClient;

}]);
