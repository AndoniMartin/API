var lockList = (function () {
    this.lockList;
 
    function createInstance() {
        this.lockList=new lockList();
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
    
})();