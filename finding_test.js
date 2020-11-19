const assert=require("assert");
const marioChar=require("../Model/mariochar");

describe('Findig a record',function(){
  var char;
  beforeEach(function(done){
    char =new marioChar({
      name:"Mario"
    });

    char.save().then(function()
  {
    assert(char.isNew===false);
    done();

     });

     });




// Create test for Finding a record in database

  it('Finding one record out of database',function(done){
   marioChar.findOne({name:"Mario"}).then(function(result)
 {
     assert(result.name==='Mario');
     done();

 });



  });

// Finding By Id
  it('Findig a record by its ID',function(done)
  {

     marioChar.findOne({_id:char._id}).then(function(result) {
       assert(result._id.toString()===char._id.toString());
       done();
     })

  });

});
