var express = require("express");
var app = express();
var db = require('db');
var fs = require('fs');
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(3000);
var obj = {
    table: []
 };
 obj.table.push({id: 1, name:'mg'});
 var json = JSON.stringify(obj);
fs.writeFile('jsonfile.json', json, 'utf8', callback);

app.get("/url", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

app.get('/api/get/:id', function(req, res){
    //get from db
    res.send(data[id]);
        //'<html><head></head><body><h1>Hello World!</h1></body></html>');
});

app.post('/api/person', jsonParser, function(req, res){
    //save to db
    res.send("TonyFood");
});