angular.module('APINotack.services',[])

.service('restClient',function($http){
	
	//url para la conexion al servidor
	//var direccion = 'http://192.168.1.43:3000';//debug
	//var direccion = 'http://localhost:3000';//debug
	var direccion = 'http://david-net.softether.net:80';//producción
	
	this.login=function(US_NAME,US_PASS)
	{
		var request=new Object();
		
		request.US_NAME=US_NAME;
		request.US_PASS=US_PASS;

		var promise=$http.post(direccion+'/login',request).success(function(validation){
			return(validation);
		});

		return(promise);
	}
	
	this.getNotes=function(US_NAME, US_PASS)
	{
		var request=new Object();
		
		request.US_NAME=US_NAME;
		request.US_PASS=US_PASS;//Ya hasheada

		var promise=$http.post(direccion+'/notes',request).success(function(notas){
			return(notas);
		});

		return(promise);
	}

	
	this.signup=function(US_NAME, US_PASS)
	{
		var request=new Object();
		
		request.US_NAME=US_NAME;
		request.US_PASS=US_PASS;

		var promise=$http.post(direccion+'/signup',request).success(function(validation){
			return(validation);
		});

		return(promise);
	}
	
	this.addNote=function(US_NAME, NO_TITLE, NO_TEXT)
	{
		var request=new Object();
		
		request.US_NAME=US_NAME;
		request.NO_TITLE=NO_TITLE;
		request.NO_TEXT=NO_TEXT;

		var promise=$http.post(direccion+'/notes/add',request).success(function(validation){
			return(validation);
		});

		return(promise);
	}
	
	this.updateNote=function(NO_ID, NO_TITLE, NO_TEXT)
	{
		var request=new Object();
		
		request.NO_ID=NO_ID;
		request.NO_TITLE=NO_TITLE;
		request.NO_TEXT=NO_TEXT;

		var promise=$http.post(direccion+'/notes/update',request).success(function(validation){
			return(validation);
		});

		return(promise);
	}
	
	this.deleteNote=function(NO_ID)
	{
		var request=new Object();
		
		request.NO_ID=NO_ID;

		var promise=$http.post(direccion+'/notes/delete',request).success(function(validation){
			return(validation);
		});

		return(promise);
	}
	
	this.lock=function(NO_ID)
	{
		var request=new Object();
		
		request.NO_ID=NO_ID;

		var promise=$http.post(direccion+'/lock',request).success(function(validation){
			return(validation);
		});

		return(promise);
	}
	
	this.renewLock=function(NO_ID)
	{
		var promise=$http.get(direccion+'/lock/'+No_ID).success(function(validation){
			return(validation);
		});

		return(promise);
	}
	
	this.changePass=function(US_NAME,VIEJA,NUEVA)
	{
		var request=new Object();
		
		request.US_NAME=US_NAME;
		request.VIEJA=VIEJA;
		request.NUEVA=NUEVA;

		var promise=$http.post(direccion+'/user',request).success(function(validation){
			return(validation);
		});

		return(promise);
	}
	
	this.shareNote=function(US_NAME,NO_ID,TIPO)
	{
		var request=new Object();
		
		request.US_NAME;
		request.NO_ID=NO_ID;
		request.TIPO=TIPO;

		var promise=$http.post(direccion+'/notes/share',request).success(function(validation){
			return(validation);
		});

		return(promise);
	}
	
	this.unShareNote=function(US_NAME,NO_ID)
	{
		var request=new Object();
		
		request.US_NAME;
		request.NO_ID=NO_ID;

		var promise=$http.post(direccion+'/notes/unshare',request).success(function(validation){
			return(validation);
		});

		return(promise);
	}
})

.service('notesListService',function(){
	this.noteList=[];
	this.getNoteIndex=function(index)
	{
		if(this.noteList.length>index)
			return this.noteList[index];
		else return null;
	}
	this.getNoteList=function()
	{
		return this.noteList;
	}
	
	this.setNoteList=function(notes){
		this.noteList=notes;
	}
	
})
