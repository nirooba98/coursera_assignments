(function(window){
        
    var thanks = {};
    var speakbye = "Good Bye";
    thanks.wordbye = function (name){
     console.log(speakbye + " " + name);

    }
   
    window.thanks = thanks;
})(window);