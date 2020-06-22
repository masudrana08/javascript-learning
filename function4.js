// var name="masud";
// function  myfunc(){
//     console.log(name);
// }
// myfunc();

// var sorts=[654,63,78,93,6645,3334,5234,679,47847,538];
// var a=sorts.sort(function(a,b){
//     return b-a;
// });
// console.log(a)

var peoples=[
    {name:"aasud",age:22},
    {name:"zubel",age:23},
    {name:"bahid",age:12},
    {name:"yitu",age:16},
    {name:"cetu",age:28},
    {name:"xitu",age:11},
];
var b=peoples.sort(function(a,b){
    return a.age-b.age;
});
console.log(b);

var c=peoples.sort(function(a,b){
    if(a.name>b.name){
        return 1;
    }else if(a.name<b.name){
        return -1;
    }else{
        return 0;
    }
});
console.log(c);

// var nums=["z","a","y","b","x","c"];
// var k=nums.sort();
// console.log(k)