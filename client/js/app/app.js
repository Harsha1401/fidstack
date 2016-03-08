var myApp = angular.module('myApp', ['ui.router',"lbServices"]);

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");


    $stateProvider.state('homePage', {
            url: "/",
            templateUrl: 'templates/mainContent.html',
            data: {pageTitle: 'Home Page'},
            controller: "mainContentController"
        }).
        state('bookmarks', {
                url: "/bookmarks",
                templateUrl: 'templates/questionsTemplate.html',
                data: {pageTitle: 'Bookmarks Page'},
                controller: "bookmarksController",
            }).
        state('notifications', {
                url: "/notifications",
                templateUrl: 'templates/questionsTemplate.html',
                data: {pageTitle: 'Notifications'},
                controller: "notificationsController"
            }).
        state('myquestion', {
                url: "/myquestions",
                templateUrl: 'templates/questionsTemplate.html',
                data: {pageTitle: 'My Questions'},
                controller: "myQuestionsController"

              }).
        state('searchresults', {
                url: "/searchresults/:searchInput",
                templateUrl: 'templates/questionsTemplate.html',
                data: {pageTitle: 'Search Results'},
                controller: "searchResultsController"
                  }).
        state('questions', {
                url: "/question/:id",
                templateUrl: 'templates/questionTemplate.html',
                data: {pageTitle: 'Questions'},
                controller: "questionController"
                });
}]);

myApp.directive('starRating', function () {
    return {
        scope: {
            rating: '=',
            maxRating: '@',
            readOnly: '@',
            click: "&",
            mouseHover: "&",
            mouseLeave: "&"
        },
        restrict: 'EA',
        template:
            "<div style='display: inline-block; margin: 0px; padding: 0px; cursor:pointer;' ng-repeat='idx in maxRatings track by $index'> \
                    <img style='width:12px; height:12px'ng-src='{{((hoverValue + _rating) <= $index) && \"dist/img/star-empty-lg.png\" || \"dist/img/star-fill-lg.png\"}}' \
                    ng-Click='isolatedClick($index + 1)' \
                    ng-mouseenter='isolatedMouseHover($index + 1)' \
                    ng-mouseleave='isolatedMouseLeave($index + 1)'></img> \
            </div>",
        compile: function (element, attrs) {
            if (!attrs.maxRating || (Number(attrs.maxRating) <= 0)) {
                attrs.maxRating = '5';
            };
        },
        controller: function ($scope, $element, $attrs) {
            $scope.maxRatings = [];

            for (var i = 1; i <= $scope.maxRating; i++) {
                $scope.maxRatings.push({});
            };

            $scope._rating = $scope.rating;

			$scope.isolatedClick = function (param) {
				if ($scope.readOnly == 'true') return;

				$scope.rating = $scope._rating = param;
				$scope.hoverValue = 0;
				$scope.click({
					param: param
				});
			};

			$scope.isolatedMouseHover = function (param) {
				if ($scope.readOnly == 'true') return;

				$scope._rating = 0;
				$scope.hoverValue = param;
				$scope.mouseHover({
					param: param
				});
			};

			$scope.isolatedMouseLeave = function (param) {
				if ($scope.readOnly == 'true') return;

				$scope._rating = $scope.rating;
				$scope.hoverValue = 0;
				$scope.mouseLeave({
					param: param
				});
			};
        }
    };
});

myApp.directive('myPostRepeatDirective', [function() {
                return function(scope, element, attrs) {
                  if (scope.$last){
                  // iteration is complete, do whatever post-processing
                  // is necessary
                    setTimeout(function () {
                      $("#questionsTbl").DataTable();
                    }, 100);
                  }
              };
    }]);
