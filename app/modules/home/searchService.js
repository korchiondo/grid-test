'use strict';
(function() {
    angular.module('gridTest')
        .factory('searchService', function($http) {
            function prepareParameters (vm) {
                var result = {};
                angular.forEach(vm, function(value, key) {
                    if (!angular.isFunction(value)) {
                        result[key] = value;
                    }
                });
                return result;
            }
            return {
                getPromotions: function(vm) {
                    var scope = this;
                    var parameters = prepareParameters(vm);
                    return $http({
                        url: '/promotions',
                        method: "GET",
                        params: parameters
                    }).then(function(response) {
                            scope.searchResult = response.data;
                            return response.data;
                    });
                }
            };
        });
}());