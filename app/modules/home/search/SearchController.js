'use strict';
(function() {
    angular.module('gridTest')
        .controller('SearchController', function(searchService) {
            var vm = this;
            vm.startSearch = function () {
                searchService.getPromotions(vm);
            }
        });
}());
