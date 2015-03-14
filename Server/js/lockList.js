function lockList(){
	this.lockList=[];
	
	this.addLock=function(noteId){
		this.lockList.push(new Lock(noteId));
	};
	
	this.removeExpiredLocks=function()
	{
		for(var i = lockList.length-1; i >= 0; i--) {
		    if (lockList[i].isExpired())
		        lockList.splice(i, 1);
		}
	}
	
	this.findNoteId=function(noteId){
		var found=false;
		for(var i=0;i<this.lockList.length && !found)
			if(this.lockList[i].noteId===noteId)
				found=true;
		
		return found;
	}
}