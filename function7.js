var arr=[3,4,5,6,7,8,8];
// var sum=0;
// for (var i=0; i<arr.length; i++){
//     sum+=arr[i];
// }
// console.log(sum);


// var a=arr.reduce(function(a,b){
//     return a+b;
// });
// console.log(a);

var sum=0;
function myfunc(array){
    for(var i=0; i<array.length; i++){
        sum+=array[i];
    }
}
myfunc(arr);
console.log(sum);