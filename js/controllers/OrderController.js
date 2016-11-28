app.controller('OrderController',
    function OrderController($scope,dataService){
      var promiseObj=dataService.getProducts();
        promiseObj.then(function(value) { $scope.order=value; });
    }
)