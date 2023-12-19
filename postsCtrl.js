var app = angular.module('myApp', []);

app.controller('postsCtrl', function($scope, $http) {
    $http.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {$scope.posts = response.data;})
    .catch(error => {console.log('Erro: ', error)});
});