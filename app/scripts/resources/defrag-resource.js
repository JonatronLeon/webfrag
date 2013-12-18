'use strict';
app.factory('DefragResource', ['$http', 'API_PATH', function($http, API_PATH){

    function DefragResourceFactory(resource){

        var defaultConfig = {
            url: API_PATH.baseURL + resource,
            path: '',
            params: {},
            data: {},
            localData: {},
            headers: {},
            cache: false,
            isArray: false,
            successCallback: function(result, status, headers, config){
            },
            errorCallback: function(undefined, status, headers, config){
                // generic error handler here
                console.log('Error');
                console.log(status);
                console.log(headers);
                console.log(config);
            }
        };

        var factoryMethod = function(httpPromise, successCallback, errorCallback, isArray, localData) {
            var success = successCallback || angular.noop;
            var error = errorCallback || angular.noop;
            var isArray = isArray || false;
            
            if (httpPromise) {
                return httpPromise.then(function(value) {
                    var result;
                    
                    if (isArray) {
                        result = [];
                        for (var i = 0; i < value.data.length; i++) {
                            result.push(new Resource(value.data[i]));
                        }
                    } 
                    else {
                        result = new Resource(value.data);
                    }
    
                    success(result, value.status, value.headers, value.config);
                    return result;
                }, function(reason) {
                    console.log(reason);
                    error(undefined, reason.status, reason.headers, reason.config);
                    return undefined;
                });
            } else {
                return localData;
            }
        };

        var Resource = function(data){
            angular.extend(this, data);
        };
        
        Resource.defaultConfig = defaultConfig;
        
        Resource.query = function(config){
            try {
               var defaultConfigCopy = angular.copy(defaultConfig), newConfig, httpPromise;
                
                if(angular.isObject(config)) {
                    newConfig = angular.extend(defaultConfigCopy, config);
                } 
                else {
                    newConfig = defaultConfig;
                }
                
                newConfig.url = newConfig.url + '/' + newConfig.path;
                if (!newConfig.localData) {
                    httpPromise = $http.get(newConfig.url, newConfig);
                }
            } catch(e) {
                // error handler here
                console.log(e);
            }
            return factoryMethod(httpPromise, newConfig.successCallback, newConfig.errorCallback, newConfig.isArray, newConfig.localData);
        };

        return Resource;

    }

    return DefragResourceFactory;

}]);
