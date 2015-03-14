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
		    function(error, model) {
		        console.log(error);
		      //Si se actualiza
		        if(error==null)
		        	response.status(200).send(true);
		        else
		        	response.status(500).send(false);
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
			{
				//recorrer las notas del usuario y devolver el contenido de todas
				
				var notas = [];
			
				for nota in user.NOTES{
					notas.push(Note.find({NO_ID:nota.NO_ID}));
				}
				
				//Devolver el array de notas en JSON
				response.status(200).send(notas);
			}
			else
			{
				response.status(200).send(false);
			}
		}
	});
};

exports.updateNote=function(request,response)
{
	var b=request.body;
	console.log(request);
	
	Note.findByIdAndDelete(
		    b.NO_ID,
		    {safe: true, upsert: true},
		    function(error, model) {
		        console.log(error);
		      //Si se borra
		        if(error==null)
		        	response.status(200).send(true);
		        else
		        	response.status(500).send(false);
		    }
		);
};

exports.deleteNote=function(request,response)
{
	var b=request.body;
	console.log(request);
	
	Note.findByI(
		    b.NO_ID,
		    $set: {NO_TITLE: b.NO_TITLE},
		    $set: {NO_TEXT: b.NO_TEXT},
		    {safe: true, upsert: true},
		    function(error, model) {
		        console.log(error);
		      //Si se actualiza
		        if(error==null)
		        	response.status(200).send(true);
		        else
		        	response.status(500).send(false);
		    }
		);
};

exports.lock=function(request,response)
{
	var b=request.body;
	console.log(request);
	
	response.status(200).send(lockList.addLock(b.noteId));
};


exports.renewLock=function(request,response)
{
	var b=request.body;
	console.log(request);
	
	response.status(200).send(lockList.renewLock(b.noteId));
};

exports.shareNote=function(request,response)
{
	var b=request.body;
	console.log(request);
	
	//Se comparte la nota según el tipo especificado (lectura/escritura)
	var entrada = {
			NO_ID: b.NO_ID,
			TY_ID: b.TIPO
	}
	//Asociar la nota al usuario
	User.findOneAndUpdate(
		    {US_Name: b.US_Name},
		    {$push: {Notes: entrada}},
		    {safe: true, upsert: true},
		    function(error, model) {
		        console.log(error);
		      //Si se actualiza
		        if(error==null)
		        	response.status(200).send(true);
		        else
		        	response.status(500).send(false);
		    }
		);
};


exports.unshareNote=function(request,response)
{
	var b=request.body;
	console.log(request);
	
	//Desasociar la nota al usuario
	User.update(
		    {US_Name: b.US_Name},
		    {$pull: {NOTES: {NO_ID: b.NO_ID}}},
		    {safe: true, upsert: true},
		    function(error, model) {
		        console.log(error);
		      //Si se actualiza
		        if(error==null)
		        	response.status(200).send(true);
		        else
		        	response.status(500).send(false);
		    }
		);
};