var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://medhavigupta6:mongodb@cluster0-h3jmt.mongodb.net/test?retryWrites=true&w=majority');

app.listen(3000);
var Schema = mongoose.Schema;

var personSchema = new Schema({
    name : String,
    number : Number
});

var Person = mongoose.model('Person',personSchema);

var medh = Person({
   name : 'mg',
   number : '1234'
});

medh.save(function(err){
    if (err) throw err;
    console.log("Person saved!");
});

//get all the users
 Person.find({'name': 'mg'}, function(err, users){
    if(err) throw err;
    console.log(users + 'printing correctly');
 });

 app.get('/:id', function(req, res) {
   Person.find({'name': req.param.id}, function(err, users){
      if(err) throw err;
      console.log(req.params.id +' got here!!!!');
      res.send(users);
   });
});

app.get('/test/:id', function(req,res){
 res.send('<html><head></head><body><h1>Person :' + req.params.id  + '</h1></body></html>');
});