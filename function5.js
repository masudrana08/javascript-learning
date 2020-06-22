
// var arr=[3,4,67,8,9,0,2,34,6];
// var a=arr.forEach(function(a,b,c){
//     console.log("number : "+a+" index; "+b+" array: "+c);
// });

// function myfunc(array,calc){
//     for(var i=0; i<array.length; i++){
//         calc(array[i],i,array);
//     }
// }
// myfunc(arr,function(a,b,c){
//     console.log("element is :"+a+" Index: "+b+" arr: "+c);
// })



var arr=[3,4,67,8,9,0,2,34,6];
var evenArray=[];
var oddArray=[];
function even(array,callback,total){
    for(var i=0; i<array.length;  i++){
        callback(array[i]);
        
    }total(array);
}

even(arr,function(each){
   if(each==0) {
        console.log(each+ " is not even or odd number ")
    }else if (each%2==0){
        evenArray.push(each);
    }else if(each%2==1){
        oddArray.push(each);
    }
},function (each){
   var x= each.length;
   console.log("total number is : "+x);
});

console.log("even array: "+evenArray);
console.log("odd array: "+oddArray);


// var arr=[0,1,2,3,4,5,6,7,8];
// var x=arr.filter(function(value){
//     return value%2==0;
    
    
// })
// console.log(x)