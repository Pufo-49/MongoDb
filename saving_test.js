const assert=require("assert");
var  marioChar=require("../Model/mariochar");
describe("Saving records",function () {
   it("Saves a record to database",function(done){

    var mychar =new marioChar({
      name:'Mario'
    });


  mychar.save().then(function(){
    assert(mychar.isNew===false);
    done();
  });
});
});
