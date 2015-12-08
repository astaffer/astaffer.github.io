app.controller('MainController', ['$scope', function($scope) {
  $scope.apps = [ 
	 
	  { 
	    icon: 'img/butterlogo.svg', 
	    title: 'МАСЛО', 
	    color:'yellow',
	  },
	  {
	    icon: 'img/milklogo.svg', 
	    title: 'МОЛОКО', 
	    color:'white',
	  }, { 
	    icon: 'img/cheeselogo.svg', 
	    title: 'СЫР', 
	    color:'yellow', 
	  }
	];
}]);