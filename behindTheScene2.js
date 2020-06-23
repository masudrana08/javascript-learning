//// CREATION PHASE -- function referenced and then var a store without value.

//// EXECUTION PHASE -- go to first execution function  caller() and then try to do print value of variable. but variable value not store in execution part.. because it is below of caller() function.

function caller(){
    console.log(a);
}
caller()
var a=5;
//execution time - variable value stored now
console.log(a+"--> below function")