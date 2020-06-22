//  var obj={};
//  var obj1=new Object;
//  console.log(obj);
//  console.log(obj1);

var book={
    name:"habluder adda",
    author:"Jhankar Mahbub",
    page:120,
    print:function(){
        return(this.name+"=>"+this.page+' '+this.year);
    }
};
book.year=2018;

console.log(book.print());

for(var props in book){
    console.log(props+": "+book[props]);
}