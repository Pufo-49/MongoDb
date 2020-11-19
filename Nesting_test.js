const assert=require("assert");
const mongoose=require("mongoose");
const Author=require("../Model/Author_model");


// Let's describe our test
describe("Nesting records",function()
{


  beforeEach(function(done){
    mongoose.connection.collections.authors.drop(function(){
      done();
    });

  });


// Create test one for sub Neting.
  it("Create an author with Sub-Documnets",function(done){
      var pat=new Author({
       name:'James Clear',
       books:[{title:'Atomic Habits',pages:306}]

      });
     pat.save().then(function(){
     Author.findOne({name:'James Clear'}).then(function(result){
       assert(result.books.length===1);
       done();

     });


   });


  });

  // Another test

  it("Adds a book to an author",function(done)
{
  var pat=new Author({
   name:'James Clear',
   books:[{title:"Atomic Habits",pages:306}]



});
   pat.save().then(function(){
     Author.findOne({name:'James Clear'}).then(function(result){
       // add a book to the Books
       result.books.push({title:"Achieve More",pages:400});
       result.save().then(function(){
         Author.findOne({name:'James Clear'}).then(function (record) {
           assert(record.books.length===2);

           done();

         });
       });
     });

   });

 });
});
