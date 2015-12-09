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
	, { 
	    icon: 'img/yogurt.svg', 
	    title: 'ЙОГУРТ', 
	    color:'yellow', 
	  }
	, { 
	    icon: 'img/perishable.svg', 
	    title: 'СКОРОПОРТ', 
	    color:'yellow', 
	  }
	, { 
	    icon: 'img/meltedcheese.svg', 
	    title: 'ПЛАВЛЕННЫЙ СЫР', 
	    color:'yellow', 
	  }
		, { 
	    icon: 'img/other.svg', 
	    title: 'ДРУГОЕ', 
	    color:'yellow', 
	  }
	];
	

}]);