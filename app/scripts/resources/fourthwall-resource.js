'use strict';
app.factory('FourthWall', ['DefragResource', function (DefragResource) {

    var FourthWall = DefragResource('fourthwall');
    
    FourthWall.defaultConfig.localData = [
        {
            text: 'NEWS! NDFAN AENKATENNKLA KNAGL NAEGNKAETNLASTEASD KASDLKADNGAG TLKEA LTKJELTJLEKJTELTKJL..',
            date: '10/11/2014'
        }
    ];
    
    return FourthWall;

}]);
