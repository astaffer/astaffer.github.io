app.controller('MainController', ['$scope', function($scope) {
  $scope.apps = [ 
	 
	  { 
	    icon: 'img/butterLogo.png', 
	    title: 'МАСЛО', 
	    color:'yellow',
	  },
	  {
	    icon: 'img/milkLogo.png', 
	    title: 'МОЛОКО', 
	    color:'white',
	  }, { 
	    icon: 'img/cheeseLogo.png', 
	    title: 'СЫР', 
	    color:'yellow', 
	    
	  }
	];
}]);