module.exports = function(Question) {



  Question.searchQuestions = function(searchstring, cb) {

   var data = Question.getDataSource().connector.collection('question');
   data.ensureIndex({title:"text"});
   data.find(
      {$text:{$search:searchstring}}).toArray(function(err,res){
      //  console.log(res);
        cb(null,res);
      });
}

  Question.remoteMethod(
      'searchQuestions',
      {
        accepts: {arg: 'searchstring', type: 'string'},
        returns: {arg: 'data', type: 'object'},
        http: {verb: 'get'}
      }
  );



};
