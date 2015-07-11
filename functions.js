function print(a,b,c){
    console.log("length::",print.length);
    console.log("name::",print.name);
    console.log("prototype::",print.prototype);
    console.log("__proto__::",print.__proto__);
    console.log("length::",print instanceof Function);

    console.log("arguments::",print.arguments);
}

print(1,2,3);



//
var f = new Function("x", "y", "return x*y;");

function f1(x, y) { return x*y; }


//Functions are objects
f.i = 3;


//Function properties simulate static variables
function count(){
    alert("you have called me "+ count.counter +" times");
    count.counter++;
}

count.counter=0;


//Lexical scoping and closure
var scope = "global scope"; // A global variable
function checkScope() {
    var scope = "local scope"; // A local variable
    function f() { return scope; } // Return the value in scope here
    return f();
}
checkScope();


scope = "global scope";
function checkScope1() {
    var scope = "local scope"; // A local variable
    function f() { return scope; } // Return the value in scope here
    return f;
}
checkScope1()();

var scope = "global";
function constructFunction() {
    var scope = "local";
    return new Function("return scope"); // Does not capture the local scope!
}
// This line returns "global" because the function returned by the
// Function() constructor does not use the local scope.
constructFunction()();




var uniqueInteger = (function() { // Define and invoke
    var counter = 0; // Private state of function below
    return function() { return counter++; };
}());


function counter() {
    var n = 0;
    return {
        count: function() { return n++; },
        reset: function() { n = 0; }
    };
}




function constfuncs() {
    var funcs = [];
    for(var i = 0; i < 10; i++)
        funcs[i] = function() { return i; };
    return funcs;
}
var funcs = constfuncs();
funcs[5]();



function constfunc(v) { return function() { return v; }; }
// Create an array of constant functions:
var funcss = [];
for(var i = 0; i < 10; i++) funcss[i] = constfunc(i);
// The function at array element 5 returns the value 5.
funcss[5]();


//bind
function f(y) { return this.x + y; } // This function needs to be bound
var o = { x : 1 }; // An object we'll bind to
var g = f.bind(o); // Calling g(x) invokes o.f(x)
g(2);




var sum = function(x,y) { return x + y }; // Return the sum of 2 args
// Create a new function like sum, but with the this value bound to null
// and the 1st argument bound to 1. This new function expects just one arg.
var succ = sum.bind(null, 1);
succ(2);



function f(y,z) { return this.x + y + z }; // Another function that adds
var g = f.bind({x:1}, 2); // Bind this and y
g(3);
