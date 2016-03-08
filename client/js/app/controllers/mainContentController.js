myApp.controller('mainContentController', ['$scope','Question', function($scope,Question) {
  $scope.topRatedQuestions=[];
  $scope.latestQuestions=[];
  $scope.topRated=[4,6];
  $scope.latest=[1,2,3];
  $scope.$on('$viewContentLoaded', function() {
    $scope.loadEditorScript();
  });

$scope.loadEditorScript =  function(){

      CKEDITOR.replace('qnMainEditor');
      //bootstrap WYSIHTML5 - text editor
      $(".textarea").wysihtml5();
      $(".select2").select2();

};

function getTopRatedQuestions(qid) {
      Question
        .findById({id:qid})
        .$promise
        .then(function(questions) {

          $scope.topRatedQuestions.push(questions);
        //  console.log(questions);
        });

    }

for(var i=0;i<$scope.topRated.length;i++){
//  console.log($scope.topRated[i]);
    getTopRatedQuestions($scope.topRated[i]);
  }

  function getLatestQuestions(qid) {
        Question
          .findById({id:qid})
          .$promise
          .then(function(questions) {
            //console.log(questions);
            $scope.latestQuestions.push(questions);
          //  console.log(questions);
          });

      }

  for(var i=0;i<$scope.latest.length;i++){
  //  console.log($scope.latest[i]);
      getLatestQuestions($scope.latest[i]);
    }


}]);
