//GLOBAL CONTEXT (CREATION PHASE) -- store variable a (without value) and then store function f (only reference)
//GLOBAL CONTEXT (Execution PHASE) -- after calling f() , CREATE A NEW CONTEXT(A) and go into function f()

var a=1;

function f(){

    //CONTEXT A (CREATION PHASE) --  store variable a (without value)
    //CONTEXT A (EXECUTION PHASE) -- execute console function at first and print undefined , because var a is stored without value. And after execution console function go to next line and store variable a with value var a=2 and then print console log value of variable a
    //at last execute inner1() and go to inner function and     CREATE CONTEXT B 
    console.log(a)
    var a=2;
    console.log(a)

    //CONTEXT B (CREATION PHASE) -- don't found any variable and simple function
    //CONTEXT B (EXECUTION PHASE) -- execute console function and get variable a in this child and so go to parent context and find variable a=2 
    function inner1(){
        console.log(a);
    }
    console.log(a)
    inner1()
}
f()
console.log(a)