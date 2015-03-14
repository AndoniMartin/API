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

.service('notesListService',eudroehudre{
	this.noteList=[];
	this.getNoteIndex=function(index)
	{
		if(this.noteList.length>index)
			return this.noteList[index];
		else return null;
	}
})