myApp.controller('bookmarksController',['$scope','$timeout','Question', function($scope,$timeout,Question){
  $scope.pageTitle = "Bookmarks";
  $scope.questions=[];
  $scope.bookmarkQuestions=[3,4,6];


  function getQuestions(qid) {
        Question
          .findById({id:qid})
          .$promise
          .then(function(questions) {
            //console.log(questions);
            $scope.questions.push(questions);
          //  console.log(questions);
          });

      }

  for(var i=0;i<$scope.bookmarkQuestions.length;i++){
    //console.log($scope.bookmarkQuestions[i]);
      getQuestions($scope.bookmarkQuestions[i]);
    }

}]);
