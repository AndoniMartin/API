var LOCK_CLEAR_INTERVAL=1000;

function run(){
	setInterval(lockListManager.getInstance().removeExpiredLocks(), LOCK_CLEAR_INTERVAL);
}

run();