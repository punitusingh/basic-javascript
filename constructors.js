var F = function() {}; // This is a function object.
var p = F.prototype; // This is the prototype object associated with it.
var c = p.constructor; // This is the function associated with the prototype.
c === F // => true: F.prototype.constructor==F for any function






function Employee(fname, lname){
    this.firstName=fname;
    this.lastName=lname;
}

Employee.prototype.getName=function(){
    return this.firstName+" "+this.lastName;
};

var e1=new Employee("John", "Smith");
var e2=new Employee("John", "Walker");
var e3=new Employee("John", "Something");
