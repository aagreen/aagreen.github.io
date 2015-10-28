angular.module("teahouse").controller("navCtrl", function($scope, $rootScope, $timeout){
    
    $scope.showFooter = false;

    $rootScope.$on("$routeChangeStart", function(){
        $scope.showFooter = false;
    });
    $rootScope.$on("$routeChangeSuccess", function(){
        $timeout(function(){
            $scope.showFooter = true
        }, 3000);
    });
    
});
