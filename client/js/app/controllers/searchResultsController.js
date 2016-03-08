myApp.controller('searchResultsController',['$scope','$timeout','Question','$stateParams', function($scope,$timeout,Question,$stateParams){
  $scope.pageTitle = "Search Results";
  $scope.questions=[];

  function getQuestions(search) {
        Question
          .searchQuestions({searchstring:search})
          .$promise
          .then(function(questions) {
            $scope.questions = questions.data;
          });
      }
  getQuestions($stateParams.searchInput);


}]);
