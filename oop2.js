function person(name,email){
    this.name=name;
    this.email=email;
}

var p1=new person("masud","rana@gmail.com");
var p2=new person("rana","poa@gmail.com");
var p3=new person("shawon","shawon@gmail.com");

var people=[p1,p2,p3];
var mails=[]
people.forEach(function(hey){
   return mails.push(hey.email);
})
console.log(mails)
mails.forEach(function(a){
    console.log("don't share your email: "+a)
})