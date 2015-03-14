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
	
	
	//Asociar la nota al usuario
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
				response.status(200).send(???);
			else
				response.status(200).send(false);
				
		}
	});
};