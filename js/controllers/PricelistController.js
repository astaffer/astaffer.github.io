app.controller('PricelistController',
    function PricelistController($scope,dataService){
      var promiseObj=dataService.getProducts();
        promiseObj.then(function(value) { $scope.pricelist=value; });
    }
)