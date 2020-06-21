var friends=[
    {
        name:"nasir",
        age:22,
        email:"nasir@gmail.com"
    },
    {
        name:"mofiz",
        age:18,
        email:"mofiz@gmail.com"
    }
];
var next;


function myfunc(person,callback){
    console.log("Hello, "+person.name+ "("+person.age+")");
    if(person.age>17){
        callback(person.email);
    }
}

for (var a=0;a<friends.length;a++){
    next=friends[a];
    myfunc(next,function(email){
        console.log("Is it your email: "+email);
    });
   
}
