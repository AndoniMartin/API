var mongoose=require('mongoose'),
	Modelo=mongoose.model('Modelo'),

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