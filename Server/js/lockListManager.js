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