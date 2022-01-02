document.addEventListener("DOMContentLoaded", 
    function (event){
        function greetings(event){
            this.textContent = "Hi!";
            var name = document.getElementById("name").value;
            var print = "<h2>Hello " + name + " !</h2>";
            document.getElementById("getOutput").innerHTML = print; 
            
        }
        document.querySelector("button").addEventListener("click", greetings);
        function student(){
            var temp = "<h3> Please check out our latest Javascript courses which has special offers!</h3>";
            document.getElementById("specialCase").innerHTML = temp;
        }
        function notstudent() {
            var regular = "<h3> Please check out the pricing details for our Javascript courses!</h3>";
            document.getElementById("specialCase").innerHTML = regular;
        } 
        function coop(event){
            if(event.shiftKey === true) {
            console.log("X" + event.clientX);
            console.log("Y" + event.clientY);
            }
        }
        document.querySelector("body").addEventListener("mousemove", coop);
    }
);
