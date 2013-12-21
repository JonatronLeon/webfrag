'use strict';
app.factory('FAQ', ['DefragResource', function (DefragResource) {

    var FAQ = DefragResource('faq');
    
    FAQ.defaultConfig.localData = [
        'NEWS! NDFAN AENKATENNKLA KNAGL NAEGNKAETNLASTEASD KASDLKADNGAG TLKEA LTKJELTJLEKJTELTKJL..'
    ];
    
    return FAQ;

}]);
