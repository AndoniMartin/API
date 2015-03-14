var mongoose=require('mongoose'),
	Note=mongoose.model('Note'),
	User=mongoose.model('User'),

exports.addNote=function(request,response)
{
	var b=request.body;
	console.log(request);
	
	//Añadir la nota
	var nota = new Nota({ NO_Title: b.NO_Title, NO_Text: b.NO_Text });
	//nota._id, id de la nota
	
	//El propietario tiene TY_ID de la nota = 1
	var entrada = {
			NO_ID: nota._id,
			TY_ID: 1
	}
	
	//Asociar la nota al usuario
	User.findOneAndUpdate(
		    {US_Name: b.US_Name},
		    {$push: {Notes: entrada}},
		    {safe: true, upsert: true},
		    function(err, model) {
		        console.log(err);
		    }
		);
};