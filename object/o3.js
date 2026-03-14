// function greet(num){

//     return num*5

// }

// console.log(greet(3));

// console.log(greet.power);
// console.log(greet.prototype);
// 15 
// undefined
// {}


function createUser(username,score)
{
   this.username=username
   this.score=score
}

createUser.prototype.increment=function(){
   this.score++

}
createUser.prototype.printMe=function(){
    console.log(`price is ${this.score}`);
    
}

const chai= new createUser("chai",25)
const tea= new createUser("tea",250)


chai.printMe()
tea.printMe()




// A new object is ccreated: the new keyword initiate the creation of a new javascript object.

// A prototype is linked: the newly created object gets linked to the prototype StylePropertyMapof the constructor
//  function. this means that it has access to properties and method defined on the constructor's prototype
//javascript new keyword ke through constructor initate krti h



// the constructor is called: the constructor function is called