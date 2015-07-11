var parent={
    get: function fn(){
        return this.val;
    },
    val:42
};

var child=Object.create(parent);
child.val=3.14;

var grandchild=Object.create(child);

console.log(parent.get());
console.log(child.get());
console.log(grandchild.get());
