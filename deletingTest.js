const assert=require("assert");
const marioChar=require('../Model/mariochar');

describe('Deleting records',function()
{
  var char;
  beforeEach(function(done){
    char =new marioChar({
      name:"Lucifer"
    });

    char.save().then(function()
  {

    done();
  });



  });




// Create test

            it('Delete a record',function(done)
            {
              marioChar.findOneAndRemove({name:"Lucifer"}).then(function()
            {
              marioChar.findOne({name:"Lucifer"}).then(function(result){
              assert(result===null)
              done();
            });
            });
            });




});
