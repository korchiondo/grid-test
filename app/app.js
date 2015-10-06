'use strict';
(function() {
    angular.module('gridTest', ['ui.router', 'angularUtils.directives.dirPagination'])
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");
            $stateProvider
                .state('home', {
                    url: "/",
                    templateUrl: "modules/home/home.html"
                })
        });
}())
