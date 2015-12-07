app.controller('MainController', ['$scope', function($scope) {
  $scope.apps = [ 
	 
	  { 
	    icon: 'img/butterLogo.svg', 
	    title: 'МАСЛО', 
	    color:'yellow',
	  },
	  {
	    icon: 'img/milkLogo.svg', 
	    title: 'МОЛОКО', 
	    color:'white',
	  }, { 
	    icon: 'img/cheeseLogo.svg', 
	    title: 'СЫР', 
	    color:'yellow', 
	    
	  }
	];
}]);