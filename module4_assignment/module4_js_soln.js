(function () {

    var names = ["Annabelle", "Carolyn", "Judy", "Janice", "Peggy", "Lorraine", "janet", "Edward", "Linda", "julia"];
    
    
    for (var i = 0; i < names.length; i++) {
    
      
      var initial = names[i].charAt(0).toLowerCase();
    
      
      if (initial === 'j') {
        console.log(thanks.wordbye  + " " + names[i]);
      } else {
        console.log(welcome.wordHello + " " + names[i]);
      }
    }
    
    })();