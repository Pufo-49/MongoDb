const assert=require("assert");
const marioChar=require('../Model/mariochar');

describe('Updating  records',function(){
   var char;

   beforeEach(function(done)
 {
    char=new marioChar({
      name:"king",
      weight:90
    });
   char.save().then(function()
      {

        done();
      });

 });


 // update test

 it('Upadating a Record',function(done){
   marioChar.findOneAndUpdate({name:"king"},{name:"Luigi"}).then(function(){
     marioChar.findOne({_id:char._id}).then(function(result)
   {
     assert(result.name==='Luigi');
     done();
   });

 });

});


// using update Operator
it('Increament the weight By one',function(done)
{
  marioChar.update({},{$inc:{weight:1}}).then(function()
{
  marioChar.findOne({name:"king"}).then(function(result)
{
        assert(result.weight===91);
        done();
});
});
});


});
