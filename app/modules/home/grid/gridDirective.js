'use strict';
(function() {
    angular.module('gridTest')
        .directive('grid', function() {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    title: '='
                },
                controllerAs: 'grid',
                controller: 'GridController',
                bindTo: true,
                templateUrl: 'modules/home/grid/gridView.html'
            };
        });
}());
