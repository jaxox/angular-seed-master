/**
 * Created by Jay on 9/24/2014.
 */
 'use strict';

app.factory('loginService', function($http){
    return{
        login:function(user){
            console.log("enter login service");


           // var $promise=$http.post('http://localhost:8080/api/login',JSON.stringify(user)); //send data to the api

            var $promise = $http({
                url: '/api/login',
                method: 'POST',
                data: JSON.stringify(user),
                headers: {'Content-Type': 'application/json'}
            });



            $promise.then(function(msg){
                if(msg.data=='succes') console.log('succes login');
                else console.log('error login');

            });

        }
    }
});