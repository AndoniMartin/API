/*
	Clase lock
	Tiene que tener una función que renueve la fecha. 
	La constructora almacena la hora de creación.
	Tiene que tener una función que compruebe si está pasada la fecha.
	
*/

function Lock(idNota){
	this.noteID = idNota;
	this.expireDate = new Date();
	
	this.isExpired = function()
	{
		var actual = new Date();
		
		if(actual >= this.noteID)
			return true;
		else
			return false;
	};
	
	this.getNoteID=function()
	{
		return this.noteID;
	};
}