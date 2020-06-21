function print(data,up,low){
    console.log("Main Data: "+data);
    up(data);
    low(data);
   
}

print("Masud rana is very good boy",function(a){
    console.log(a.toUpperCase());
},function(b){
    console.log(b.toLowerCase());
}
);
