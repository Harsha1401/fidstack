myApp.controller('mainController', ['$scope', function($scope) {

 $scope.$on('$viewContentLoaded', function() {
   $scope.loadEditorScript();
 });

$scope.loadEditorScript =  function(){

      CKEDITOR.replace('qnEditor');
      //bootstrap WYSIHTML5 - text editor
      $(".textarea").wysihtml5();
      $(".select2").select2();

};


}]);
