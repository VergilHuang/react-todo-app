
(function(globel, factory){
    "use strict"

    //window for now
    factory(globel);
    
})(typeof window !== 'undefined' ? window : this, function(){
    "use strict"
    var version = '1.0.0',
        _pulin,
        init;

    _pulin = function (selector){
        return new _pulin.fn.initialize(selector);
    };

    //類的靜態方法 同時擴充 jQuery
    $.heihei = _pulin.heihei = function(){
        console.log('heihei')
    }

    //加instance的功能
    _pulin.fn = _pulin.prototype = {
        addhei: function(a,b){return a+b;}
    }


    //新的instance的物件屬性
    init = _pulin.fn.initialize = function(selector) {
        $.fn.init(selector);
    }

    init.prototype = _pulin.fn;
    $.fn.extend(init.prototype);

    window.$$ = window.Pulin = _pulin;

    window.$$.version = window.Pulin = version;

    return _pulin;

})

