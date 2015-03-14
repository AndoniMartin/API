//Lista de locks
function lockList(){
	this.lockList=[];
	
	this.addLock=function(noteId){
		if(!this.existsNote(noteId))
		{
			this.lockList.push(new Lock(noteId));
			return true;
		}else return false;
		
	}
	
	this.removeExpiredLocks=function()
	{
		for(var i = lockList.length-1; i >= 0; i--) {
		    if (lockList[i].isExpired())
		        lockList.splice(i, 1);
		}
	}
	
	this.existsNote=function(noteId){
		var found=false;
		for(var i=0;i<this.lockList.length && !found;i++)
			if(this.lockList[i].noteId===noteId)
				found=true;
		
		return found;
	}
	
	this.findNoteId=function(noteId){
		var found=false;
		for(var i=0;i<this.lockList.length && !found; i++)
			if(this.lockList[i].noteId===noteId)
				found=this.lockList[i];
		
		return found;
	}
	
	this.renewLock=function(noteId){
		var note=this.findNoteId(noteId);
		if(note)
			note.renew();
		
		return note?true:false;
		
	}
}



////////////MAE de gestión

var lockListManager = (function () {
    var instance;
 
    function createInstance() {
        var lista=new lockList();
        return lista;
    }
 
    return {
    getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
    
})();


//Hilo para revisar que los candados sean vigentes
var LOCK_CLEAR_INTERVAL=1000;

function run(){
	setInterval(lockListManager.getInstance().removeExpiredLocks(), LOCK_CLEAR_INTERVAL);
}

run();