var express = require("express"),
app = express(),
bodyParser = require("body-parser"),
methodOverride = require("method-override"),
mongoose = require('mongoose');


// Connection to DB
mongoose.connect('mongodb://localhost/APINOTACK', function(err, res) {
if(err) throw err;
console.log('Connected to Database');
});

app.all('*', function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  next();
	 });

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

//Importación archivos extras
require("./js/lock.js");
//require("./js/lockList.js");
require("./js/lockListManager.js");
//require("./js/lockKiller.js");

//Import models and controllers
var userModel=require("./models/user.js")(app,mongoose);
var noteModel=require("./models/note.js")(app,mongoose);
var userController=require("./controllers/userController.js");
var notesController=require("./controllers/notesController.js");

//Router options
var router=express.Router();
app.use(router);

router.route('/login')
.post(userController.login);

router.route('/signup')
.post(userController.signup);

router.route('/user')
.post(userController.changePass);

router.route('/notes')
.post(notesController.getNotes);

router.route('/notes/add')
.post(notesController.addNote);

router.route('/notes/update')
.post(notesController.updateNote);

router.route('/notes/delete')
.post(notesController.deleteNote);

router.route('/lock')
.post(notesController.lock);

router.route('/lock/:id')
.get(notesController.renewLock);

router.route('/notes/share/:id')
.post(notesController.shareNote);

router.route('/notes/unshare/:id')
.get(notesController.unshareNote);

//Start server
app.listen(3000, function() {
console.log("Node server running on http://localhost:3000");
});
