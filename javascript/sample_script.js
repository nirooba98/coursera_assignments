var x = "5";
console.log("the value is - "+x);
var a = function()
{
    var x="6"
    console.log("the value of a is - " +x);
    function b()
{
    console.log("the value of external fnc b is - "+x);
}

    b();
}
a();
