var mongoose=require('mongoose'),
	Modelo=mongoose.model('Modelo'),

exports.nombre de función=function(request,response)
{
	//Esto es relativo, lo hablamos
	var b=request.body;
	console.log(request);
	Modelo.find(cosas que buscar, parámetros que mostrar, función cuando se completa function(error,nearestStores){
		if(error){
			response.status(500).send();
		}else{
			response.status(200).jsonp(nearestStores);
		}
	});
};