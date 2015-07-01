'use strict';
configApp.factory("ContactPageService", function($http) {
  return {
  	save : function(sendData)
  	{
  		var urlConfig = [baseUrl, 'admin','contact_page_save'].join('/');
	      return $http({
	        method: 'POST',
	        url: urlConfig,
	        data: $.param({ data : sendData}),
	        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
	      });
  	},
    user : function(sendData)
    {
      var urlConfig = [baseUrl, 'admin','lang'].join('/');
      return $http({
        method: 'POST',
        url: urlConfig,
        data: $.param({ lang : sendData}),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      });
    },
    getContactPage : function()
    {
      var urlConfig = [baseUrl, 'admin','get_contact_page'].join('/');
      return $http({
        method: 'POST',
        url: urlConfig,
        data: $.param({ }),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      });
    },
    server : function()
    {
      var urlConfig = [baseUrl, 'server'].join('/');
      return $http.get(urlConfig);
    }
  }
});

configControllers.controller('ContactPageController', ['$scope', '$rootScope','$routeParams', '$location','$http', '$state', 'ContactPageService', '$route',
  function($scope, $rootScope, $routeParams, $location, $http, $state, ContactPageService, $route) {
    document.title = 'AdminLTE | Thông tin liên hệ';
    ContactPageService.getContactPage().success(function(res){
          if(res)
          {
              $scope.page_name = res.page_name;
              $scope.contact_page = res.page_content;
          }  
           
      }); 
    $scope.btnContactSave = function()
    {
    	
    	if($scope.contact_page !== undefined )
    	{
    		var data = {
    			"contact_page" : $scope.contact_page,
          "page_name" : $scope.page_name
    		};
    		ContactPageService.save(data).success(function(res){
          if(res == "TRUE")
          {

              $scope.message_success = 'Cập nhật thành công';
          }    
		    });
    	}
    }
    
}]);