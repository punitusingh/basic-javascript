function Employee(){
    var name; //closure
    var id;

    this.setName=function(_name){
        name=_name;
    }

    this.getName=function(){
        return name;
    }

    this.setId=function(_id){
        id=_id;
    }

    this.getId=function(){
        return id;
    }
}

Usage:
    var e1=new Employee();
e1.setName("John");
e1.getName();//e1
