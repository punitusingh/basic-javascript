var scope = "global";
function f() {
    console.log(scope);
    var scope = "local";
    console.log(scope); //
}

f();

var v2= 2, v1=1;
var v3=v2 &&  v1;