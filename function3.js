// function host(){
//     console.log("I am host");
//     return function child(){
//         console.log("i am child");
//         return function supchild(){
//             console.log("i am super child")
//         }
//     }
// }

// host()
function greeting(greet){
        return function(name){
            console.log(greet+", "+name)
        };
   
    }

var time=new Date().getHours();
if (time<=11 && time>=1 ){
    greeting("good morning")("masud");
}else if(time>=12 && time<=18){
    greeting("good evening")("masud") ;
}else{
    greeting("good night")("masud") ;
}