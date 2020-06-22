// var obj={
//     name:"masud",
//     email:"masdu@gmail",
//     print:function(){
//         console.log(this.name);
//     }
// 


// function myfunc(name){
//     console.log(this)
// }

// new myfunc()


// var obj={
//     name:"mew",
//     print:function(){
        
//         console.log(this.name);
//     }
// }

// var fObj=obj.print.bind(obj);
// fObj()


// function add(num){
//     console.log(this.value+num);
// }
// var obj={
//     value:20
// }
// var x=add.bind(obj);
// var res=x(1000)


var person={
    name:"masud",
    print:function(){
        setTimeout(x,2000);
    }
}
var x=function callback(){
    console.log(this.name)
}.bind(person)
