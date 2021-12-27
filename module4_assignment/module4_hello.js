(function(window){
        
        var welcome = {};
        var speakhello = "Hello";
       welcome.wordHello = function (name){
        console.log(speakhello + " " + name);

       }
        window.welcome = welcome;
})(window);