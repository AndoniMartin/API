var mongoose=require('mongoose'),
	Note=mongoose.model('Note'),
	User=mongoose.model('User'),

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
				response.status(200).send(???);
		}
	});
};