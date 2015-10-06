'use strict';
(function() {
    angular.module('gridTest')
        .directive('search', function() {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    title: '='
                },
                controllerAs: 'search',
                controller: 'SearchController',
                bindTo: true,
                templateUrl: 'modules/home/search/searchView.html'
            };
        });
}());