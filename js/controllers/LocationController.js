app.controller('FirstController',
    function FirstController($scope,dataService){
      var promiseObj=dataService.getProducts();
        promiseObj.then(function(value) { $scope.products=value; });
    }
)