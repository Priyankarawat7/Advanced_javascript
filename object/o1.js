// two ways to define an object 
// literal 
const mysum=Symbol("key1")


const Jsuser={
    name:"priyana",
    "full name":"priyanka rawat",
   [mysum]:"mykey1", //symbol delcare like this
    class:"BCA",
    rollno:"200",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]

}
//console.log(Jsuser.class);  //this is not right way
//console.log(Jsuser["class"]);
// console.log(Jsuser.full name]);  //will not declare like this
//console.log(Jsuser["full name"]);  
//console.log(typeof Jsuser.mysum);  //it gives string datatype
//console.log(typeof Jsuser[mysum]);  //undefined


Jsuser.class="BBA";  //we can change the  value 
//Object.freeze(Jsuser) // if wanna the value of class it will freeze the next values
Jsuser.class="Ba";
console.log(Jsuser);

Jsuser.greeting= function(){
    console.log("namaste");
    
}
//console.log(Jsuser.greeting);  // it show function refrence

Jsuser.greetingTwo= function(){
    console.log(`namaste JS user", ${this.name}`);
    
}

console.log(Jsuser.greeting()); // naamaste
console.log(Jsuser.greetingTwo()); // naamaste , with this.name oject value "priyanka" 




 


//**** */ contstructor *******
// singleton

// eg: object.create