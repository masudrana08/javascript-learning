var arr=[3,5,6,87,90,23];
// var newArr=[];
// for (var i=0; i<arr.length; i++){
//     newArr.push(arr[i]*2);
// }
// console.log(newArr);

// var x= arr.map(function(value){
//     return value*2;
// })
// console.log(x);


function myfunc(array,callback){
    for(var i=0; i<array.length; i++){
        callback(array[i]*2,array[i]);
        var x=array[i];
    }
   
}
myfunc(arr,function(a,b){
    console.log(a + " is 2X of: "+b)
})