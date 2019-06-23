var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://medhavigupta6:mongodb@cluster0-h3jmt.mongodb.net/inventory?retryWrites=true&w=majority');

var port = process.env.PORT || 2000;
app.listen(port);

const PersonModel = mongoose.model("person", {
    name: String,
    number: String
});

//post request to add person
app.post("/add", async (request, response, next) => {
    try {
        var person = new PersonModel(request.body);
        var result = await person.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

//get request to show data of requested id
 app.get("/show/:id", async (request, response, next) => {
    try {
        var person = await PersonModel.findById(request.params.id).exec();
        response.send(person);
    } catch (error) {
        response.status(500).send(error);
    }
});

//get request to show all the data
app.get("/show", async (request, response) => {
    try {
        var result = await PersonModel.find().exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});