var point = { x:1, y:1 }; // Define an object
"x" in point // => true: object has property named "x"
"z" in point // => false: object has no "z" property.
"toString" in point // => true: object inherits toString method


var data = [7,8,9]; // An array with elements 0, 1, and 2
"0" in data // => true: array has an element "0"
1 in data // => true: numbers are converted to strings
3 in data



if (a == b) stop(); // Invoke stop() only if a == b
(a == b) && stop();


// If max_width is defined, use that. Otherwise look for a value in
// the preferences object. If that is not defined use a hard-coded constant.
var max = max_width || preferences.max_width || 500;



function a(){
    var myVar=2;
    b();
}

function b(){
    console.log(myVar);
}

var myVar=1;a();
