/**
 * Created by Kaushik Samanta on 10-04-2016.
 */
angular
    .module('Resume', ['ui.router', 'ngAnimate','anim-in-out'])
    .config(function($stateProvider, $urlRouterProvider)
    {
        $urlRouterProvider.otherwise('/page/About');
        $stateProvider
            .state('About', {
                name: 'About',
                url: '/About',
                templateUrl: 'app/views/About.html'
            })
            .state('Tech-Skills', {
                name: 'Tech-Skills',
                url: '/Tech-Skills',
                templateUrl: 'app/views/Tech-Skills.html'
            })
            .state('Projects', {
                name: 'Projects',
                url: '/Projects',
                templateUrl: 'app/views/Projects.html'
            })
            .state('Contact', {
                name: 'Contact',
                url: '/Contact',
                templateUrl: 'app/views/Contact.html'
            });
    })
    .controller('DemoController', function( $scope, $window, $state ,$timeout)
    {
        $scope.transition = 'slide-left';
        $state.go('About');
        $scope.left = function()
        {
            $scope.transition = 'anim-slide-left';
            $state.go('About');
        };

        $scope.right = function()
        {
            $scope.transition = 'anim-slide-right';
            $state.go('Tech-Skills');
        };

        $scope.top = function()
        {
            $scope.transition = 'anim-slide-left';
            $state.go('Projects');
        };

        $scope.bottom = function()
        {
            $scope.transition = 'anim-slide-right';
            $state.go('Contact');
        };

    });