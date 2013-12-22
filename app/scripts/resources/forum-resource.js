'use strict';
app.factory('Forum', ['DefragResource', function (DefragResource) {

    var Forum = DefragResource('forum');
    
    Forum.defaultConfig.localData = [
        {
            name: 'General',
            active: false,
            read: false,
            topics: [
                {
                    name: 'Welcome to DeFrag Corp!',
                    read: false,
                    posts: [
                        {
                            username: 'petra',
                            text: 'Hi everyone! My name is Petra.',
                            date: '10/11/2014'
                        },
                        {
                            username: 'yuko',
                            text: 'Haaaaaaaaayy',
                            date: '10/11/2014'
                        },
                        {
                            username: 'bearington',
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
            active: false,
            read: false,
            topics: [
                {
                    name: 'What is..what it is?',
                    read: false,
                    posts: [
                        {
                            username: 'yuko',
                            text: 'I can\'t breaf.',
                            date: '10/11/2014'
                        }
                    ]
                }
            ]
        }
    ];
    
    return Forum;

}]);
