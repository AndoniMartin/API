var mongoose=require('mongoose'),
	User=mongoose.model('User');

exports.login=function(request,response)
{
	var b=request.body;
	console.log(b);
	
	User.find({US_NAME:b.US_NAME},function(error,user){
		if(error){
			response.status(500).send();
		}else{
			if(user.US_PASS==b.US_PASS)
				response.status(200).send(true);
			else
				response.status(200).send(false);
				
		}
	});
};

exports.changePass=function(request,response)
{
	var b=request.body;
	console.log(b);
	
	//Comprobar que la contraseña vieja del usuario es correcta
	User.find({US_NAME:b.US_NAME},function(error,user){
		if(error){
			response.status(500).send(false);
		}else{
			if(user.US_PASS==b.VIEJA)
			{
				//Actualizar la contraseña
				user.findByIdAndUpdate(
						user._id,
					    {$set: {US_PASS: b.NUEVA}},
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
			}
			else
			{
				//Contraseña errónea, no se actualiza
				response.status(200).send(false);
			}
				
		}
	});
};

exports.signup=function(request,response)
{
	var b=request.body;
	console.log(b);
	
	//Comprobar que no exista el usuario
	User.find({US_NAME:b.US_NAME},function(error,user){
		if(error){
			response.status(500).send();
		}else{
			if(user)
			{
				//Añadir el usuario a la BD
				var user = new User({ US_NAME: b.US_NAME, US_PASS: b.US_PASS, NOTES: [] });
				
				response.status(200).send(true);
			}
			else
				response.status(200).send(false);
				
		}
	});
};