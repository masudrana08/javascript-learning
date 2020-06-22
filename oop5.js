// function sum(a,b){
//     return (a+b)*this.c;
// }

// obj1={
//     c:3
// }

// obj2={
//     c:5
// }
// //  var res=sum.apply(obj1,[3,4])
// //  var res=sum.call(obj1,3,4)
// var x=sum.bind(obj1)(3,4)
// console.log(x)

// function person(name,roll){
//     this.name=name;
//     this.roll=roll;
// }

// function teacher(a,b,c){
    
//     person.call(this,a,b);
//     this.c=c;
    
// }
// person.prototype.hello=function(){
//         console.log(this.name+" hello")
//     }
// teacher.prototype=Object.create(person.prototype)

// var teacher1=new teacher("momin",12,23444)


// function Library(author){
//     this.author=author;
    
    
// }
// Book.prototype.hello=function (){
//     console.log("thank you, "+this.author);
// };
// // Book.prototype=Object.create(Library.prototype);

// function Book(name,author){
    
//     this.name=name;
//     Library.call(this,author);
// }


// var book1=new Book("habluder adda","jhankar mahbub");



function School(sname,address){
    this.sname=sname;
    this.address=address;
}

function Student(sname,address,name,roll){
    School.call(this,sname,address);
    this.name=name;
    this.roll=roll;
}
School.prototype.hello=function(){
    console.log("hello, "+this.name)
};

Student.prototype=Object.create(School.prototype);

var std=new Student("Gobindaganj High School","Gobindaganj","Masud",10);
var std1=new Student("vagdoria school","vagdoria","abdullah",2);

var arr=[std1,std];

var res=arr.forEach(function(a){
    console.log("hey, "+a.name);
})