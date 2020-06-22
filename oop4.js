function myfunc(name,email){
    this.name=name;
    this.email=email;

    
}

// myfunc.prototype.hello=function(){
//     console.log("hello, "+this.name);
// }

// myfunc.prototype.good=function(){
//     console.log("Good Day, "+this.name);
// }
// myfunc.prototype.email="test@gmail.com";

myfunc.prototype={
    hello:function(){
        console.log("hello, "+this.name);
    },
    good:function(){
        console.log('good day, '+this.name);
    },
    name:"masud",
    email:"masud@gmail.com"
}


var p1=new myfunc("masud","masud@gmail.com");
var p2=new myfunc("rana","rana@gmail.com");
var p3=new myfunc("shawon","shawon@gmail.com");

var people=[p1,p2,p3];
for (var i=0; i<people.length; i++){
        console.log(people[i].good())
}
