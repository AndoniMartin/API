angular.module('APINotack.services',[])

.service('restClient',function($http){
	this.login=function(US_NAME,US_PASS)
	{
		var request=new Object();
		
		request.US_NAME=US_NAME;
		request.US_PASS=hash(US_PASS);

		var promise=$http.post('http://localhost:3000/login',request).success(function(validation){
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