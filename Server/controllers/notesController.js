var mongoose=require('mongoose'),
	Note=mongoose.model('Note'),
	User=mongoose.model('User');

exports.addNote=function(request,response)
{
	var b=request.body;
	console.log(b);
	
	//Añadir la nota
	Note.create({ NO_TITLE: b.NO_TITLE, NO_TEXT: b.NO_TEXT, USER: b.US_NAME}, function(err, nota){
		if(err==null)
		{
			//nota._id, id de la nota
			
			//console.log(nota);
			
			//El propietario tiene TY_ID de la nota = 1
			var entrada = {
					NO_ID: nota._id,
					TY_ID: 1
			};
			//console.log(entrada);
			//Asociar la nota al usuario
			User.update(
				    {US_NAME: b.US_NAME},
				    {$push: {NOTES: entrada}},
				    function(error, model) {
				    	console.log("tras actualizar "+model);
				      //Si se actualiza
				        if(error==null)
				        	response.status(200).send(true);
				        else
				        	response.status(500).send();
				    }
				);
		}
		else
			response.status(500).send();
	});
	//nota.save().then(function(note,error){console.log(note); console.log(error);})
};


exports.getNotes=function(request,response)
{
	var b=request.body;
	console.log(b);
	
	User.findOne({US_NAME:b.US_NAME}).populate('NOTES.NO_ID').exec(function(error, user){
		if(error){
			response.status(500).send();
		}else{
			//Comprobar que el usuario existe
			if(user == null)
			{
				response.status(500).send();
			}
			else
			{
				if(user.US_PASS==b.US_PASS)
				{
					//recorrer las notas del usuario y devolver el contenido de todas
					
					response.status(200).send(user.NOTES);
					
					//Devolver el array de notas en JSON
					//response.status(200).send(notas);
				}
				else
				{
					response.status(200).send(false);
				}
			}
		}
	});
	
	/*User.findOne({US_NAME:b.US_NAME},function(error,user){
		if(error){
			response.status(500).send();
		}else{
			//Comprobar que el usuario existe
			if(user == null)
			{
				response.status(500).send();
			}
			else
			{
				if(user.US_PASS==b.US_PASS)
				{
					//recorrer las notas del usuario y devolver el contenido de todas
					
					var notas = [];
				
					for(nota in user.NOTES){
						notas.push(Note.findOne({NO_ID:nota.NO_ID}));
					}
					
					//Devolver el array de notas en JSON
					//response.status(200).send(notas);
				}
				else
				{
					response.status(200).send(false);
				}
			}
		}
	});*/
};

exports.updateNote=function(request,response)
{
	var b=request.body;
	console.log(b);
	
	Note.findById(
		    b.NO_ID,
		    {$set: {NO_TITLE: b.NO_TITLE},
		    $set: {NO_TEXT: b.NO_TEXT}},
		    {safe: true, upsert: true},
		    function(error, model) {
		        console.log(error);
		      //Si se actualiza
		        if(error==null)
		        	response.status(200).send(true);
		        else
		        	response.status(500).send();
		    }
		);
};

exports.deleteNote=function(request,response)
{
	//TODO hay que recibir el usuario para borrarle la nota
	var b=request.body;
	console.log(b);
	
	Note.remove(
		    b.NO_ID,
		    function(error) {
		        console.log(error);
		      //Si se borra
		        if(error==null)
		        	response.status(200).send(true);
		        else
		        	response.status(500).send();
		    }
		);
};

exports.lock=function(request,response)
{
	var b=request.body;
	console.log(b);
	
	response.status(200).send(lockListManager.getInstance().addLock(b.NO_ID));//(lockList.addLock(b.noteId));
};


exports.renewLock=function(request,response)
{
	var b=request.body;
	console.log(b);
	
	response.status(200).send(lockListManager.getInstance().renewLock(b.NO_ID));//(lockList.renewLock(b.noteId));
};

exports.shareNote=function(request,response)
{
	var b=request.body;
	console.log(b);
	
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
		        	response.status(500).send();
		    }
		);
};


exports.unshareNote=function(request,response)
{
	var b=request.body;
	console.log(b);
	
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
		        	response.status(500).send();
		    }
		);
};