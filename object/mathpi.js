const descripter=Object.getOwnPropertyDescriptor(Math,"PI")

//console.log(descripter);
/*{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}*/

// console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI);

// we can modfiy their property
const chai={
    name:"ginger chai",
    price:250,
    isAvailable:true,

    orderChai: function(){

        console.log("chai nhi bni");
        

    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,"name",{
//Writable:false,
enumerable: false,


})

console.log(Object.getOwnPropertyDescriptor);


// for (let [key, value] of chai) {
//     console.log(`${key} : ${value}`);
//     //chai is not iterable
    
// }

for (let [key, value] of Object.entries(chai)) {

    if(typeof value !=='function ')
    {
        console.log(`${key} : ${value}`);

    }
}








