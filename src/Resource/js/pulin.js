
(function(globel, factory){
    "use strict"

    //window for now
    factory(globel);
    
})(typeof window !== 'undefined' ? window : this, function(){
    "use strict"
    var version = '1.0.0';
        
    $.extend({
        
    })

    $.fn.extend({
        addnum: function(a,b){
            return a+b;
        }
    })

})

