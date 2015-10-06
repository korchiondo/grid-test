'use strict';
(function() {
    angular.module('gridTest')
        .controller('GridController', function(searchService, $scope) {
            var vm = this;
            $scope.searchService = searchService;
            $scope.data = searchService.searchResult;

            $scope.$watch('searchService.searchResult', function (newVal, oldVal, scope) {
                if(newVal) {
                    vm.data = newVal.items;
                    vm.totalRows = newVal.count
                }
            });

            vm.rows = [];
            vm.totalRows = 0;
            vm.rowsPerPage = 3; // this should match however many results your API puts on one page
            getResultsPage(1);

            vm.pagination = {
                current: 1
            };

            vm.pageChanged = function(newPage) {
                getResultsPage(newPage);
            };

            function getResultsPage(pageNumber) {
                // this is just an example, in reality this stuff should be in a service
                var result = searchService.getPromotions({page: pageNumber });

                /*$http.get('path/to/api/users?page=' + pageNumber)
                    .then(function(result) {
                        $scope.users = result.data.Items;
                        $scope.totalUsers = result.data.Count
                    });*/
            }

        });
}());
