var express = require("express"),
app = express(),
bodyParser = require("body-parser"),
methodOverride = require("method-override"),
mongoose = require('mongoose');


// Connection to DB
mongoose.connect('mongodb://localhost/NOMBREBASEDATOS', function(err, res) {
if(err) throw err;
console.log('Connected to Database');
});

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

//Import models and controllers
var userModel=require("./models/user.js")(app,mongoose);
var noteModel=require("./models/note.js")(app,mongoose);
var loginController=require("./controllers/loginController.js");
var notesController=require("./controllers/notesController.js");
var lockController = require("./controllers/lockController.js");

//Router options
var router=express.Router();
app.use(router);

router.route('/login')
.post(loginController.login);

router.route('/notes/:id')
.post(notesController.getNotes);

router.route('/notes')
.post(notes.addNote);



//Start server
app.listen(3000, function() {
console.log("Node server running on http://localhost:3000");
});