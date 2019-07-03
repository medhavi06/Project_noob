const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Configuring the database
const db_url = 'mongodb+srv://medhavigupta6:mongodb@cluster0-h3jmt.mongodb.net/inventory?retryWrites=true&w=majority';

// Connecting to the database
mongoose.connect(db_url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Connected to the DB");    
}).catch(err => {
    console.log("Couldn't connect to the DB...", err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "It's working"});
});

require('./app/routes/note.routes.js')(app);

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});