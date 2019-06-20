var express = require('express');
var app = express();
var mongoose = require('mongoose');
var User = require('./app/models/user.js')

mongoose.connect('mongodb+srv://medhavigupta6:mongodb@cluster0-h3jmt.mongodb.net/test?retryWrites=true&w=majority');

var Schema = mongoose.Schema;

var personSchema = new Schema({
    name : String,
    number : String
});

var Person = mongoose.model('Person','personSchema');

var medh = Person({
   name : 'medhavi',
   number : '123456'
});

medh.save(function(err){
    if (err) throw err;
    console.log("Person saved!");
});

//get all the users
 Person.find({}, function(err, users){
    if(err) throw err;

    console.log(users);
 });