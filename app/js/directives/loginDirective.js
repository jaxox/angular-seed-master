

app.directive('loginDirective', function(){
    return {
        restrict: 'E',
        templateUrl : 'partials/tpl/login.tpl.html',
        controller:function($scope, loginService){
            $scope.login=function(user){
                console.log('login function here');
                loginService.login(user);
            };
        },
        controllerAs:'loginCtrl'
    };
});
