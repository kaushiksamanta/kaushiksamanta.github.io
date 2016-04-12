/**
 * Created by Kaushik Samanta on 10-04-2016.
 */
angular
    .module('Resume', ['ui.router', 'ngAnimate','anim-in-out'])
    .config(function($stateProvider, $urlRouterProvider)
    {
        $urlRouterProvider.otherwise('/page/tab1');
        $stateProvider
            .state('tab1', {
                name: 'tab1',
                url: '/tab1',
                templateUrl: 'app/views/tab1.html'
            })
            .state('tab2', {
                name: 'tab2',
                url: '/tab2',
                templateUrl: 'app/views/tab2.html'
            })
            .state('tab3', {
                name: 'tab3',
                url: '/tab3',
                templateUrl: 'app/views/tab3.html'
            })
            .state('tab4', {
                name: 'tab4',
                url: '/tab4',
                templateUrl: 'app/views/tab4.html'
            });
    })
    .controller('DemoController', function( $scope, $window, $state ,$timeout)
    {
        $scope.transition = 'slide-left';
        $state.go('tab1');
        $scope.left = function()
        {
            $scope.transition = 'anim-slide-left';
            $state.go('tab1');
        };

        $scope.right = function()
        {
            $scope.transition = 'anim-slide-right';
            $state.go('tab2');
        };

        $scope.top = function()
        {
            $scope.transition = 'anim-slide-left';
            $state.go('tab3');
        };

        $scope.bottom = function()
        {
            $scope.transition = 'anim-slide-right';
            $state.go('tab4');
        };

    });