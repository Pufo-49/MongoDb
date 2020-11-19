var mongoose=require("mongoose");

// ES6 Promise Lib

mongoose.Promise=global.Promise;


//  Connect to Dataabse Before test

before(function(done){
  mongoose.connect('mongodb://localhost/testaroo');

  mongoose.connection.once('open',function()
  {
   console.log("Conneced to MongoDB !!! start Exploding");
  done();

  }).on("error",function(error){
    console.log("Connection Error",error)
  });

});


//Drop the collection before each test

beforeEach(function(done)
{
  mongoose.connection.collections.mariochars.drop(function()
{
  done();

})
});
