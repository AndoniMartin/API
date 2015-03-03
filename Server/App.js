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
var messagesController=require("./controllers/messages.js");

//Router options
var router=express.Router();
app.use(router);

router.route('/stores')
.post(storesController.getNearestStores);



//Start server
app.listen(3000, function() {
console.log("Node server running on http://localhost:3000");
});