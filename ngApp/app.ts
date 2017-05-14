namespace SOS {

    angular.module('SOS', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: SOS.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('languages', {
                url: '/languages',
                templateUrl: '/ngApp/views/languages.html',
                controller: SOS.Controllers.LanguagesController,
                controllerAs: 'controller'
            })
            .state('lessons', {
                url: '/lessons',
                templateUrl: '/ngApp/views/lessons.html',
                controller: SOS.Controllers.LessonsController,
                controllerAs: 'controller'
            })
            .state('questions', {
                url: '/questions',
                templateUrl: '/ngApp/views/questions.html',
                controller: SOS.Controllers.QuestionsController,
                controllerAs: 'controller'
            })
            .state('answers', {
                url: '/answers',
                templateUrl: '/ngApp/views/answers.html',
                controller: SOS.Controllers.AnswersController,
                controllerAs: 'controller'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}
