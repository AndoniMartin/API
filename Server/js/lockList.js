function lockList(){
	this.lockList=[];
	
	this.addLock=function(noteId){
		this.lockList.push(new lock(noteId));
	};
	
	this.removeExpiredLocks=function()
	{
		for(var i = lockList.length-1; i >= 0; i--) {
		    if (lockList[i].isExpired())
		        lockList.splice(i, 1);
		}
	}
}