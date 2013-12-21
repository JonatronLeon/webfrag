'use strict';
app.factory('Forum', ['DefragResource', function (DefragResource) {

    var Forum = DefragResource('forum');
    
    Forum.defaultConfig.localData = [
        {
            name: 'General',
            topics: [
                {
                    name: 'Welcome to DeFrag Corp!',
                    posts: [
                        {
                            user: 'petra',
                            text: 'Hi everyone! My name is Petra.',
                            date: '10/11/2014'
                        },
                        {
                            user: 'yuko',
                            text: 'Haaaaaaaaayy',
                            date: '10/11/2014'
                        },
                        {
                            user: 'bearington',
                            text: 'WELCOME',
                            date: '10/11/2014'
                        }
                    ]
                },
                {
                    name: 'Introductions',
                    posts: []
                }
            ]
        },
        {
            name: 'Real Life',
            topics: []
        }
    ];
    
    return Forum;

}]);
