var mongoose=require('mongoose'),
	User=mongoose.model('User'),

exports.login=function(request,response)
{
	var b=request.body;
	console.log(request);
	
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
	console.log(request);
	
	//Comprobar que la contraseña vieja del usuario es correcta
	User.find({US_NAME:b.US_NAME},function(error,user){
		if(error){
			response.status(500).send();
		}else{
			if(user.US_PASS==b.VIEJA)
			{
				//Actualizar la contraseña
				collection.findByIdAndUpdate(
					    user._id,
					    $set: {US_PASS: b.NUEVA},
					    {safe: true, upsert: true},
					    function(err, model) {
					        console.log(err);
					    }
					);
			}
				
		}
	});
};