function print(data,mata,up,low){
    console.log("Main Data: "+data);
    up(data,mata);
    low(data,mata);
   
}

print("Masud rana is very good boy",100,function(a,b){
    console.log(b+" " +a.toUpperCase());
},function(a,b){
    console.log(b+" "+ a.toLowerCase());
}
);
