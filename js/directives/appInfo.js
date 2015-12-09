app.directive('appInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directives/appInfo.html'
   //templateUrl:$templateCache.get('js/directives/appInfo.html')
  }; 
});