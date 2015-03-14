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


exports.getNotes=function(request,response)
{
	var b=request.body;
	console.log(request);
	
	User.find({US_NAME:b.US_NAME},function(error,user){
		if(error){
			response.status(500).send();
		}else{
			if(user.US_PASS==b.US_PASS)
				//recorrer las notas del usuario y devolver el contenido de todas
				
				var notas = [];
			
				for nota in user.NOTES{
					notas.push(Note.find({NO_ID:nota.NO_ID}));
				}
				
				//Devolver el array de notas en JSON
				//TODO terminar el envio de objetos
				response.status(200).send(notas);
		}
	});
};

exports.updateNote=function(request,response)
{
	var b=request.body;
	console.log(request);
	
	user.findByIdAndUpdate(
		    b.NO_ID,
		    $set: {NO_TITLE: b.NO_TITLE},
		    $set: {NO_TEXT: b.NO_TEXT},
		    {safe: true, upsert: true},
		    function(err, model) {
		        console.log(err);
		        //Si se actualiza
		        response.status(200).send(true);
		    }
		);
};

exports.lock=function(request,response)
{
	//TODO implementar
};


exports.renewLock=function(request,response)
{
	//TODO implementar
};

exports.shareNote=function(request,response)
{
	//TODO implementar
};


exports.unshareNote=function(request,response)
{
	//TODO implementar
};