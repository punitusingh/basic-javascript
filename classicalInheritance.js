function Employee(name, dept){
    this.name=name;
    this.dept=dept;
}
Employee.prototype.method1=function(){};
Employee.prototype.method2=function(){};




function WorkerBee(name, dept, projs){
    Employee.call(this,name,dept);
    this.projects=projs;
}
WorkerBee.prototype=new Employee;
WorkerBee.prototype.method3=function(){};
var w1 = new WorkerBee("w1", "training",["javascript"]);

console.log(w1);