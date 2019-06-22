var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://medhavigupta6:mongodb@cluster0-h3jmt.mongodb.net/inventory?retryWrites=true&w=majority');

app.listen(2000);

const PersonModel = mongoose.model("person", {
    name: String,
    number: String
});

app.post("/person", async (request, response, next) => {
    try {
        var person = new PersonModel(request.body);
        //response.send(person.save());
        var result = await person.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});
